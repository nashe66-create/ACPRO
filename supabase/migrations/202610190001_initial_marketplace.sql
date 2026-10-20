-- ACPRO initial marketplace schema. Apply only to a dedicated ACPRO Supabase project.
create extension if not exists pgcrypto;

create type public.app_role as enum ('homeowner', 'installer', 'operations');
create type public.job_status as enum ('submitted', 'open_for_offers', 'offers_received', 'installer_selected', 'survey_pending', 'final_quote_pending', 'agreement_confirmed', 'installation_in_progress', 'physically_complete', 'closed', 'cancelled');
create type public.property_type as enum ('flat', 'terraced', 'semi_detached', 'detached', 'other');
create type public.offer_status as enum ('submitted', 'withdrawn', 'superseded');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  role public.app_role not null default 'homeowner',
  installer_verified boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.jobs (
  id uuid primary key default gen_random_uuid(),
  homeowner_id uuid not null references public.profiles(id),
  title text not null check (char_length(title) between 3 and 120),
  postcode text not null check (char_length(postcode) between 3 and 10),
  property_type public.property_type not null,
  rooms_count integer not null default 1 check (rooms_count between 1 and 12),
  requirements text not null default '' check (char_length(requirements) <= 3000),
  status public.job_status not null default 'submitted',
  selected_installer_id uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.offers (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null references public.jobs(id) on delete cascade,
  installer_id uuid not null references public.profiles(id),
  price_amount numeric(12,2) check (price_amount is null or price_amount >= 0),
  currency text not null default 'GBP' check (currency = 'GBP'),
  proposed_scope text not null check (char_length(proposed_scope) between 3 and 3000),
  assumptions text not null default '' check (char_length(assumptions) <= 3000),
  exclusions text not null default '' check (char_length(exclusions) <= 3000),
  status public.offer_status not null default 'submitted',
  submitted_at timestamptz not null default now()
);

create table public.activity_history (
  id bigint generated always as identity primary key,
  job_id uuid not null references public.jobs(id) on delete cascade,
  actor_id uuid references public.profiles(id),
  action text not null check (char_length(action) between 1 and 100),
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index jobs_homeowner_created_idx on public.jobs(homeowner_id, created_at desc);
create index jobs_status_created_idx on public.jobs(status, created_at desc);
create index offers_job_submitted_idx on public.offers(job_id, submitted_at desc);
create index offers_installer_idx on public.offers(installer_id, submitted_at desc);
create index activity_history_job_created_idx on public.activity_history(job_id, created_at desc);

alter table public.profiles enable row level security;
alter table public.jobs enable row level security;
alter table public.offers enable row level security;
alter table public.activity_history enable row level security;

create or replace function public.current_app_role()
returns public.app_role language sql stable security definer set search_path = ''
as $$ select role from public.profiles where id = (select auth.uid()) $$;

create or replace function public.is_verified_installer()
returns boolean language sql stable security definer set search_path = ''
as $$
  select exists (select 1 from public.profiles
    where id = (select auth.uid())
      and role = 'installer'::public.app_role
      and installer_verified = true)
$$;

create policy "Users can read own profile" on public.profiles
for select to authenticated using (id = (select auth.uid()) or public.current_app_role() = 'operations');
create policy "Users can create own homeowner profile" on public.profiles
for insert to authenticated with check (id = (select auth.uid()) and role = 'homeowner');
-- Role and verification changes are Operations-only; no client update policy is granted.

create policy "Homeowners read own jobs; verified installers read open jobs" on public.jobs
for select to authenticated using (
  homeowner_id = (select auth.uid())
  or (status in ('submitted','open_for_offers','offers_received') and public.is_verified_installer())
  or public.current_app_role() = 'operations'
);
create policy "Homeowners create own jobs" on public.jobs
for insert to authenticated with check (homeowner_id = (select auth.uid()) and public.current_app_role() = 'homeowner');
-- Job selection/status transitions will be implemented through validated server-side RPCs, not broad client updates.

create policy "Homeowners and relevant installers read offers" on public.offers
for select to authenticated using (
  installer_id = (select auth.uid())
  or exists (select 1 from public.jobs j where j.id = job_id and j.homeowner_id = (select auth.uid()))
  or public.current_app_role() = 'operations'
);
create policy "Verified installers submit offers for open jobs" on public.offers
for insert to authenticated with check (
  installer_id = (select auth.uid())
  and public.is_verified_installer()
  and status = 'submitted'
  and exists (select 1 from public.jobs j where j.id = job_id and j.status in ('submitted','open_for_offers','offers_received'))
);
create policy "Installers withdraw own offers" on public.offers
for update to authenticated using (installer_id = (select auth.uid()) and status = 'submitted')
with check (installer_id = (select auth.uid()) and status in ('submitted','withdrawn'));

create policy "Participants and operations can read job activity" on public.activity_history
for select to authenticated using (
  public.current_app_role() = 'operations'
  or actor_id = (select auth.uid())
  or exists (select 1 from public.jobs j where j.id = job_id and j.homeowner_id = (select auth.uid()))
  or exists (select 1 from public.offers o where o.job_id = job_id and o.installer_id = (select auth.uid()))
);
create policy "Participants can append activity for their jobs" on public.activity_history
for insert to authenticated with check (
  actor_id = (select auth.uid())
  and (
    exists (select 1 from public.jobs j where j.id = job_id and j.homeowner_id = (select auth.uid()))
    or exists (select 1 from public.offers o where o.job_id = job_id and o.installer_id = (select auth.uid()))
    or public.current_app_role() = 'operations'
  )
);

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, full_name, role)
  values (new.id, coalesce(new.raw_user_meta_data ->> 'full_name', ''), 'homeowner'::public.app_role)
  on conflict (id) do nothing;
  return new;
end;
$$;

create trigger on_auth_user_created after insert on auth.users
for each row execute procedure public.handle_new_user();

grant usage on schema public to authenticated;
grant select, insert on public.profiles to authenticated;
grant select, insert on public.jobs to authenticated;
grant select, insert, update on public.offers to authenticated;
grant select, insert on public.activity_history to authenticated;
grant usage, select on sequence public.activity_history_id_seq to authenticated;
