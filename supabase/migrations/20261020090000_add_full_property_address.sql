-- Store the confirmed property address separately from the postcode.
-- Applied through a reviewed migration; do not rely on this file alone to change a live database.
alter table public.jobs
  add column if not exists address_line_1 text not null default '',
  add column if not exists address_line_2 text not null default '',
  add column if not exists town_city text not null default '';

alter table public.jobs
  add constraint jobs_address_line_1_length check (char_length(address_line_1) between 1 and 160),
  add constraint jobs_address_line_2_length check (char_length(address_line_2) <= 160),
  add constraint jobs_town_city_length check (char_length(town_city) between 1 and 100);
