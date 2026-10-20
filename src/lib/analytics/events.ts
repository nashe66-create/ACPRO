/**
 * Privacy-conscious first-party homeowner funnel event contract.
 * Never add address, postcode, name, email, phone, free text, photos, tokens,
 * raw form values or detailed floorplan geometry to this schema.
 */
export type HomeownerStep = "property" | "rooms" | "preferences" | "contact-review" | "confirmation";

export type HomeownerEvent =
  | { name: "homeowner_landing_viewed"; properties?: { referrer_category?: "direct" | "search" | "social" | "referral" | "other" } }
  | { name: "homeowner_flow_started"; properties?: { entry_point?: "hero" | "navigation" | "other" } }
  | { name: "homeowner_step_viewed"; properties: { step_id: HomeownerStep } }
  | { name: "homeowner_step_completed"; properties: { step_id: HomeownerStep; duration_bucket?: "under_15s" | "15_60s" | "over_60s"; optional_fields_completed_count?: number } }
  | { name: "homeowner_step_back"; properties: { from_step: HomeownerStep; to_step: HomeownerStep } }
  | { name: "homeowner_lookup_started"; properties?: { lookup_provider?: "configured_provider" | "manual_fallback" } }
  | { name: "homeowner_lookup_succeeded"; properties?: { suggestion_count_bucket?: "one" | "two_to_five" | "more_than_five" } }
  | { name: "homeowner_lookup_failed"; properties: { error_category: "network" | "no_results" | "provider" | "unknown" } }
  | { name: "homeowner_planner_opened"; properties?: { entry_step?: HomeownerStep } }
  | { name: "homeowner_planner_completed"; properties?: { room_count_bucket?: "one" | "two_to_three" | "four_or_more" } }
  | { name: "homeowner_planner_skipped"; properties?: { step_id?: HomeownerStep } }
  | { name: "homeowner_unit_preference_selected"; properties: { preference_category: "wall_mounted" | "floor_standing" | "ceiling_cassette" | "concealed_ducted" } }
  | { name: "homeowner_unit_preference_unsure"; properties?: Record<string, never> }
  | { name: "homeowner_validation_failed"; properties: { step_id: HomeownerStep; field_category: "address" | "property_type" | "rooms" | "preference" | "contact" | "consent" | "other"; error_category: "required" | "format" | "lookup" | "unknown" } }
  | { name: "homeowner_contact_step_viewed"; properties?: { prior_steps_completed_count?: number } }
  | { name: "homeowner_submit_attempted"; properties?: { flow_version?: string } }
  | { name: "homeowner_submit_succeeded"; properties?: { flow_version?: string; request_reference?: string } }
  | { name: "homeowner_submit_failed"; properties: { error_category: "validation" | "network" | "server" | "rate_limited" | "unknown"; retryable: boolean } }
  | { name: "homeowner_confirmation_viewed"; properties?: { request_reference?: string } };

/** No-op until event endpoint, consent, and retention are agreed. */
export function trackHomeownerEvent(_event: HomeownerEvent): void {
  // Wire to reviewed first-party collection later; do not log payloads.
  // Analytics failures must never interrupt the homeowner journey.
}