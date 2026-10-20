"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function createJob(formData: FormData) {
  let supabase;
  try {
    supabase = await createClient();
  } catch {
    redirect("/jobs/new?error=not-configured");
  }

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const title = String(formData.get("title") ?? "").trim();
  const postcode = String(formData.get("postcode") ?? "").trim().toUpperCase();
  const addressLine1 = String(formData.get("address_line_1") ?? "").trim();
  const addressLine2 = String(formData.get("address_line_2") ?? "").trim();
  const townCity = String(formData.get("town_city") ?? "").trim();
  const propertyType = String(formData.get("property_type") ?? "");
  const roomsCount = Number(formData.get("rooms_count") ?? 1);
  const requirements = String(formData.get("requirements") ?? "").trim();

  if (
    title.length < 3 || title.length > 120 ||
    postcode.length < 3 || postcode.length > 10 ||
    addressLine1.length < 1 || addressLine1.length > 160 ||
    addressLine2.length > 160 ||
    townCity.length < 1 || townCity.length > 100 ||
    !["flat", "terraced", "semi_detached", "detached", "other"].includes(propertyType) ||
    !Number.isInteger(roomsCount) || roomsCount < 1 || roomsCount > 12 ||
    requirements.length > 3000
  ) redirect("/jobs/new?error=validation");

  const { data, error } = await supabase.from("jobs").insert({
    homeowner_id: user.id,
    title,
    postcode,
    address_line_1: addressLine1,
    address_line_2: addressLine2,
    town_city: townCity,
    property_type: propertyType,
    rooms_count: roomsCount,
    requirements,
    status: "submitted",
  }).select("id").single();

  if (error || !data) redirect("/jobs/new?error=save-failed");

  await supabase.from("activity_history").insert({
    job_id: data.id,
    actor_id: user.id,
    action: "job_submitted",
    details: { source: "homeowner_form" },
  });

  redirect("/dashboard?created=1");
}
