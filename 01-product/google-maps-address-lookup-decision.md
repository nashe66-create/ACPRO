# Address Lookup Decision — Google Maps Platform

Status: Proposed for the ACPRO homeowner journey; API key and billing setup still required.

## Decision
Use Google Maps Platform Places API (New) for UK address autocomplete and selected-address details in the homeowner property step. Keep manual address entry available whenever lookup is unavailable, returns no suitable result, or the user prefers manual entry.

Official documentation:
- Places Autocomplete (New): https://developers.google.com/maps/documentation/places/web-service/place-autocomplete
- Usage and billing: https://developers.google.com/maps/documentation/places/web-service/usage-and-billing

## UX behaviour
1. Ask for a postcode or start typing the address.
2. Show accessible, keyboard-operable address suggestions restricted to the United Kingdom where appropriate.
3. The user explicitly selects a suggestion and confirms the full address.
4. If no result appears, provide a manual-entry path (address line 1, address line 2 optional, town/city, postcode). Do not trap the user in the lookup.
5. Preserve the chosen address when navigating back and forward.
6. If an address cannot be matched confidently, let the homeowner correct it; do not silently substitute a different property.

## Technical requirements
- Use Places API (New), not the legacy API for a new integration.
- Use autocomplete session tokens correctly; complete a session with a selected-place details request, then start a new token for the next session.
- Request only the fields needed to build/confirm a postal address and place identifier. Use field masks where required to limit unnecessary data and cost.
- Restrict the API key by allowed website referrers and the specific APIs required. Use separate keys for browser and server use if both are required; do not put an unrestricted key in source control.
- Enable billing and set quota/budget alerts before public rollout. Google Maps Platform is pay-as-you-go and usage can incur charges.
- Preserve required Google attribution and comply with the current Maps Platform terms and content-storage rules. Verify whether and how address components may be stored before persisting them.
- Analytics may record lookup started/succeeded/failed and coarse failure categories, but never send the typed query, full address, postcode or returned address components to analytics.
- If the Google service fails, the manual address path remains usable and analytics failure must not block the request.

## Data model
Persist the confirmed address as structured address fields needed for the operational purpose, plus a Google Place ID if useful and permitted by current terms. Do not persist latitude/longitude unless a documented product need exists. Store the confirmed address in the protected request record; never in analytics events.

## Cost and launch controls
- Confirm the Google Cloud project and billing owner before enabling the API.
- Set quota limits and budget alerts; alerts may not stop spend automatically.
- Use session tokens and minimal requested fields.
- Review usage and actual cost after the pilot begins.

## Dependencies before wiring
- User supplies/configures a Google Maps Platform API key; never commit it.
- Confirm Google Cloud billing is enabled and Places API (New) is enabled.
- Confirm production and preview domains for HTTP referrer restrictions.
- Review address data retention and privacy notice.
- Design and test manual fallback, keyboard access, mobile layout and provider outage handling.

## Scope note
Google Maps is being selected for address autocomplete and address details only. A map display is not required for the initial homeowner flow. Do not use geocoding results to make technical suitability or installer eligibility decisions without separate validated rules.