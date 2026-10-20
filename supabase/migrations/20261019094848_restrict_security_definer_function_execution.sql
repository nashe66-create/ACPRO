revoke execute on function public.current_app_role() from public, anon;
revoke execute on function public.is_verified_installer() from public, anon;
revoke execute on function public.handle_new_user() from public, anon, authenticated;
grant execute on function public.current_app_role() to authenticated;
grant execute on function public.is_verified_installer() to authenticated;
