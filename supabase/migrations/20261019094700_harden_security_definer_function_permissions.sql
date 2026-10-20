revoke execute on function public.current_app_role() from anon;
revoke execute on function public.is_verified_installer() from anon;
revoke execute on function public.handle_new_user() from anon, authenticated;
