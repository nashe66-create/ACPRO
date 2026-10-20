# Homeowner Conversion Journey & Instrumentation Plan

Status: Proposed implementation brief for review. Conversion targets remain unvalidated until ACPRO has baseline data.

## Objective
Increase valid homeowner requests while preserving request quality and trust. Optimise qualified completed requests and downstream outcomes, not clicks alone.

## Audience
The homeowner may only know a room is uncomfortable and want to understand the price. Do not require technical knowledge, room dimensions, cooling-load calculations, unit selection or a drawn floor plan to begin.

## Journey principles
1. Explain the value before asking for effort.
2. One primary action per screen, clear progress, back navigation and preserved answers.
3. Use plain English, visual choices, useful defaults and “Not sure — help me choose”.
4. Make advanced details optional unless an installer need has been demonstrated.
5. Explain why address/contact details are needed, how they are used and which installers may receive the request.
6. Never promise a guaranteed instant or fixed price before installer assessment.
7. Do not require account creation before the first request. Design safe request submission and confirmation; provide optional secure return access later if needed.
8. Preserve entered data after validation/server errors and give a recovery path.
9. Ensure keyboard support, visible focus, screen-reader labels, clear text errors, good contrast, reduced motion and mobile responsiveness.
10. No false urgency, fake scarcity, preselected marketing consent or deceptive progress indicators.

## Proposed journey

### Landing
- Headline about getting residential AC installation offers.
- One primary CTA and concise explanation of the process.
- Explain that installers confirm site suitability, scope and final price.
- No unsupported testimonials, guarantees, savings or installer-count claims.

### 1. Property and address
- Ask for the postcode first.
- Use Postcodes.io as the initial free service to validate the UK postcode and retrieve postcode/location information. It does not return a complete list of individual house/flat addresses.
- After postcode validation, ask the homeowner to enter and confirm their house number/name, street and town/city. Keep the postcode in the address form so the homeowner can review the complete address before continuing.
- Manual address entry is the normal MVP path, not an error-only workaround. Do not imply that an address has been found automatically.
- If postcode validation is unavailable or fails, explain this in plain language and allow manual entry, with a clear check that the postcode looks correct.
- Property type using clear UK terms: house, flat/maisonette, bungalow, other.
- Explain why the full address is needed. Do not send full address or postcode to analytics.
- Do not block the request solely because a postcode API is temporarily unavailable; preserve what the homeowner has entered.

### 2. Rooms and needs
- Visual room cards: living room, bedroom, multiple rooms/whole home, home office, kitchen, not sure.
- “Not sure” still allows progress.
- Planner, photos and rough dimensions are optional enhancements after the core intent is captured.
- Planner must not gate quote requests. MVP planner is not CAD or technical design.

### 3. Preferences
- Illustrative choices: wall-mounted, floor-standing, ceiling cassette, concealed ducted, or not sure/recommend one.
- Explain these are preferences, not confirmed compatibility or professional recommendations.
- Cooling only / cooling and heating / not sure.
- Optional timing/preferences only if helpful to matching.

### 4. Contact and review
- Collect minimum contact details needed for the operational process.
- Explain what ACPRO will do, which matched installers may receive the request, and whether submitting commits the user to anything.
- Separate necessary service messages from optional marketing consent.
- Show editable summary and explicit submit action.

### Confirmation
- Show success only after the server confirms durable request creation.
- Explain next steps without inventing response-time guarantees.
- Provide recovery/help route.
- Never collect details then force the homeowner into a sign-in wall.

## Address provider decision — MVP
**Chosen for now:** Postcodes.io for postcode validation/location data, with manual entry and confirmation of the exact property address.

- No API key or paid lookup balance is intended for this initial approach.
- Postcodes.io is not an individual-property address autocomplete database. Do not build the UI as though it can suggest house/flat addresses.
- Keep address lookup behind a small provider boundary so ACPRO can later replace or supplement it with a dedicated address service if exact-address autocomplete proves worthwhile.
- If postcode lookup fails, allow the homeowner to continue with manual address entry and a clear validation message.
- Never place the full address, postcode or lookup query in analytics, application logs or error-reporting payloads.
- Revisit a paid address autocomplete provider only after measuring manual-entry errors, abandonment and cost/benefit.

## Instrumentation and privacy
- Use session-level funnel events by default. Link them to a person/job only after submission and appropriate disclosure.
- Never send full address, postcode, name, email, phone, free text, photos, access tokens or detailed floorplan data to analytics.
- Use pseudonymous event/session identifiers, short retention and access controls.
- Avoid third-party analytics until provider, consent/cookie requirements and privacy notice are reviewed.
- No session replay or keystroke capture.
- Analytics must not block submission or cause form failure.
- Do not log raw form payloads.

## Event contract
Common fields: event_id, event_name, occurred_at, pseudonymous session_id, flow_version, device_class (mobile/tablet/desktop/unknown), step_id if relevant, and coarse error category.

| Event | When | Safe properties |
|---|---|---|
| homeowner_landing_viewed | Landing rendered | allowlisted referrer category, device class, flow version |
| homeowner_flow_started | User starts | allowlisted entry point |
| homeowner_step_viewed | Step becomes visible | step_id |
| homeowner_step_completed | Valid step passes and user advances | step_id, duration bucket, count of optional fields completed |
| homeowner_step_back | Previous step selected | from_step, to_step |
| homeowner_lookup_started | Address lookup requested | provider category only; no query/address |
| homeowner_lookup_succeeded | Postcodes.io confirms a postcode | provider category only; no postcode or address |
| homeowner_lookup_failed | Lookup fails | error category only |
| homeowner_planner_opened | Optional planner opened | entry step |
| homeowner_planner_completed | Room arrangement confirmed | room-count bucket only; no geometry |
| homeowner_planner_skipped | Planner skipped | step_id |
| homeowner_unit_preference_selected | Unit style selected | enum category only |
| homeowner_unit_preference_unsure | Not-sure preference selected | none |
| homeowner_validation_failed | Validation blocks progression | step_id, field category, error category; never field value |
| homeowner_contact_step_viewed | Contact step shown | count of earlier steps completed |
| homeowner_submit_attempted | User submits | flow version |
| homeowner_submit_succeeded | Server confirms request saved | opaque reference only in restricted first-party analytics |
| homeowner_submit_failed | Submission fails | error category, retryable |
| homeowner_confirmation_viewed | Confirmation rendered for saved request | opaque request reference |
| homeowner_resume_started | User resumes draft, if supported | allowlisted resume method |

Fire step_completed only after validation succeeds and navigation actually occurs. Submission success must be server-confirmed. Business event storage for marketplace workflow is separate from analytics.

## Canonical funnel
1. Landing viewed.
2. Flow started.
3. Property step completed.
4. Rooms step completed.
5. Preferences completed or intentionally skipped.
6. Contact step viewed.
7. Submit attempted.
8. Submit succeeded.
9. Request qualified for installer distribution (server-side status).
10. First offer received.
11. Homeowner selects installer.
12. Final agreement confirmed.

Report landing-to-start, completion/drop-off per step, start-to-valid-submission, errors/lookup failures, median and 75th-percentile completion time, valid-request rate and rejection reasons, offer coverage, time to first offer, selection and eventual completion/cancellation, and cost per valid request when trustworthy acquisition spend is available. Use correct stage denominators. Distinguish abandoned, unknown outcome, technical failure and ineligible; missing events do not reveal why a user left.

## Experiments
Establish a baseline and validate tracking first. Run moderated usability sessions before A/B tests. Candidate tests: address lookup/manual fallback presentation; order/wording of room and preference steps; contact-step timing; planner placement; honest CTA wording. Pre-register one primary metric and guardrails per experiment. Assess sample size and uncertainty; track lead quality and installer outcomes as guardrails.

## Acceptance criteria
- A homeowner can submit without creating a password or choosing a technical system.
- Full address is confirmed; manual entry works without depending on exact-address autocomplete.
- Postcode validation uses Postcodes.io when available and degrades gracefully if unavailable.
- Planner and specific unit preference can be skipped.
- Answers persist through back/forward navigation and recoverable errors.
- Success is shown only after durable server confirmation.
- Analytics contains no personal form values or exact address.
- Analytics failure never interrupts completion; events are deduplicated or have unique IDs.
- Mobile and keyboard-only journeys tested.
- Privacy notice, lawful basis, retention and contact-sharing language reviewed before public launch.
- Database/RLS, abuse prevention, rate limiting and spam handling reviewed before public launch.

## Dependencies
- Implement Postcodes.io postcode validation and manual exact-address capture; confirm API behaviour and error handling during implementation.
- Confirm minimum contact fields and whether phone is required for the pilot.
- Design secure unauthenticated submission/resumable drafts; never expose service-role credentials to the browser.
- Choose first-party event storage or consent-compliant analytics provider.
- Confirm privacy notice, lawful basis, retention and marketing-consent language.
- Add server-side qualification/outcome events with the associated workflow.

## Decision record
This brief defines a proposed flow and event scheme. It does not validate demand or conversion performance. Baseline data and user research are required before setting targets or claiming uplift.