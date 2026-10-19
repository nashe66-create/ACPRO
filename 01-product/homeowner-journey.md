# PRD-002 — Homeowner Journey

**Product:** ACPRO  
**Document:** PRD-002 — Homeowner Journey  
**Version:** 0.1  
**Status:** Approved content; awaiting repository review  
**Stage:** Stage 03 — Product Specification  
**Gate status:** Gate 1 was closed by founder decision with risk accepted; commercial validation remains unproven. This document does not change the formal gate status or authorise a build.

---

## 1. Purpose

Define the end-to-end homeowner journey for requesting residential air-conditioning installation through ACPRO, from first visit to installation outcome and review.

This document describes intended workflows, decisions, exceptions and information captured. It does not specify screens, database schemas, APIs, technical architecture or final cooling-load calculation rules.

## 2. Product principles

1. Homeowners describe the outcome they want; they are not expected to act as AC engineers.
2. Collect enough information to help installers assess an opportunity without making the request unnecessarily difficult to complete.
3. Distinguish preliminary estimates and indicative offers from a confirmed technical design and final price.
4. Installers remain responsible for verifying site conditions, final technical design, installation scope and compliance.
5. Homeowners retain control over selecting an installer, accepting a revised price, pausing or stopping.
6. Manual operations are acceptable in the MVP where they help validate the marketplace.
7. Do not imply a property is suitable or permissions are secured before relevant checks are complete.
8. Do not present an illustrative estimate as an engineering guarantee.

## 3. Actors

- **Homeowner:** describes the property and requirements, reviews offers, makes decisions and confirms the outcome.
- **ACPRO:** guides request capture, validates required information, creates and distributes the opportunity, presents offers and records workflow status.
- **Installer:** decides whether to pursue the opportunity, submits an offer, surveys where needed, confirms the technical solution and final price, and completes the installation.
- **ACPRO operations:** supports exceptions, checks information where appropriate, helps recover no-bid or stalled journeys and records manual actions.

## 4. Journey overview

1. Understand ACPRO and decide whether to start.
2. Start an installation request.
3. Describe the property and installation location.
4. Add rooms, cooling requirements, dimensions and relevant photos.
5. Answer practical installation-constraint questions.
6. Add budget, timing and preferences where known.
7. Review the request and any preliminary assessment.
8. Submit the request.
9. Receive status updates while ACPRO checks and matches the opportunity.
10. Review available offers.
11. Select an installer, decline offers, revise the request, reopen bidding, pause or stop.
12. Coordinate a survey where required.
13. Review and accept or reject the final quote.
14. Track scheduling and installation progress.
15. Confirm completion and provide a review.

This is a proposed workflow. Exact deadlines and offer rules must remain aligned with PRD-005 and other approved specifications.

## 5. Step-by-step workflow

### Step 1 — Understand ACPRO

**Trigger:** Homeowner visits ACPRO.

The homeowner should understand that ACPRO structures a residential AC request and connects it with installers; ACPRO does not itself perform the installation; early cooling or price indications are preliminary; and a survey may be needed before the installer confirms the solution and final price.

**System actions**
- Explain the service and broad process in plain language.
- Make clear that submitting a request does not oblige the homeowner to accept an offer.
- Do not promise a specific number of offers or a guaranteed installation price.

**Success criterion:** The homeowner understands the service well enough to decide whether to start a request.

**Open question:** What minimum information about ACPRO is needed before a user starts? This requires usability evidence.

### Step 2 — Start a request

**Inputs**
- Contact details needed to manage the request.
- Property location sufficient to assess service coverage.
- Confirmation that the request concerns residential AC installation.

**Validation and actions**
- Validate required contact and location fields.
- Explain how information will be used and shared with relevant installers.
- Create a draft request and, if technically feasible within the MVP, allow the homeowner to continue later.
- Do not distribute an incomplete draft.

**Exceptions**
- Invalid contact details: explain what needs correcting.
- Outside the service area: explain the limitation without implying installer availability.
- Suspected duplicate: avoid silently creating a second active job.

**Success criterion:** A valid draft request is created.

### Step 3 — Describe the property

Collect where applicable:
- Property type, such as house, flat or maisonette.
- Tenure where relevant to permissions.
- Floor/level and access information.
- Known landlord, freeholder or management-company restrictions.
- Listed-building or conservation-area status, if known.
- Potential outdoor-unit location, if the homeowner can answer.
- Obvious access constraints.

“Not sure” must be acceptable for details a homeowner may not know. Record unknowns separately from negative answers. Flag possible permission or access checks, but do not automatically decide whether planning permission or other consent is required.

For flats or leasehold properties, flag that additional permissions may be needed. If the outdoor-unit location is unknown, allow progress but flag it for installer review.

**Success criterion:** Installers receive useful property context without the homeowner being forced to make technical or legal determinations.

### Step 4 — Describe rooms and requirements

For each room, collect where available:
- Room name or purpose.
- Approximate length and width.
- Ceiling height, if known.
- Room location/floor.
- Number and approximate type of windows or glazing.
- Sun exposure/orientation, if known.
- Relevant occupancy or heat-generating use, where appropriate.
- Photos of the room and relevant external areas.
- Desired outcome, comfort concerns and preferred timing.

Explain measurement units; permit “unknown”; check numeric dimensions for plausibility; and explain when missing information may reduce estimate confidence or require a survey. Support one or more rooms and associate photos with the relevant room where possible.

**Open question:** Minimum required fields, photo requirements and acceptable completion time have not been validated with homeowners or installers.

**Success criterion:** The request contains enough structured room information for preliminary assessment and installer triage.

### Step 5 — Capture budget, timing and preferences

Where applicable, collect:
- Budget range or “not sure”.
- Preferred installation timing.
- Finance interest, recorded only as an indication of interest.
- Preferences such as quiet operation, room priorities, appearance or brand preference, if known.

Finance interest must not initiate a finance application or credit decision. Brand preference does not promise that a product will be available or suitable. Budget is contextual information, not a guarantee of final price.

### Step 6 — Review the preliminary assessment

Summarise the property, rooms, requirements, known constraints and missing information. If a cooling-load estimate is available, present it as preliminary with assumptions and confidence limitations where supported by the calculation method. Let the homeowner correct inputs before submission.

The estimate is not a final system design, equipment selection, installation specification or guaranteed performance outcome. An installer must verify the property and determine the final technical solution.

If the system cannot produce a meaningful estimate, do not invent one; explain that installer assessment is needed. If key information is missing, request it or show the limitation clearly.

**Success criterion:** The homeowner can review and correct the request and understands the preliminary nature of any estimate.

### Step 7 — Review and submit

**Preconditions**
- Required contact and location information is valid.
- The homeowner has reviewed the summary.
- Relevant privacy information and acknowledgements are presented.

**System actions**
- Create the submitted job.
- Record submission time and the submitted information version.
- Confirm receipt and explain the next step.
- Make the job available for eligibility checks and installer matching.

On submission failure, preserve entered information where possible and provide a retry path. For missing mandatory information or a request outside service coverage, explain the reason and next action.

**Success criterion:** The homeowner receives clear confirmation and can access the job status.

### Step 8 — Validation and installer matching

ACPRO or operations checks that the request is sufficiently complete, identifies possible eligibility or property-constraint issues, matches the opportunity to installers by relevant service area and declared capabilities, and records which installers were invited or given access. Manual review and distribution are acceptable in the MVP.

If more information is needed, request clarification. If no eligible installers are found, tell the homeowner and present next-step options. Flag possible permissions or technical issues for assessment rather than making unsupported conclusions.

**Success criterion:** The job reaches eligible installers, or the homeowner is clearly told why it cannot proceed as expected.

### Step 9 — Wait for and review offers

When offers are ready, notify the homeowner and present them in a comparable structure, distinguishing firm and indicative offers. Show relevant scope, price, assumptions, availability, survey requirements, exclusions and installer credentials. Identify missing or non-comparable information and support clarification where available.

The homeowner may select an installer, decline all offers, revise the request, reopen bidding, pause or stop. ACPRO must not automatically select an installer or assume the lowest price is best.

The current PRD-005 draft proposes a 48-hour bidding window and a three-day homeowner decision period, extendable once by three days. These timings remain subject to PRD-005 review and are not independently approved by this document.

**Success criterion:** The homeowner can make an informed choice or deliberately decide not to proceed.

### Step 10 — Confirm installer selection

Record the homeowner’s selection, close the current bidding round in accordance with PRD-005, notify the selected installer and homeowner, and track acknowledgement, decline or timeout. If the installer cannot proceed, present recovery options.

Selection does not confirm that the final technical solution or price is settled.

**Success criterion:** The homeowner knows whether the installer has acknowledged selection and what happens next.

### Step 11 — Survey and final quote

The installer arranges and performs a survey where required, verifies property and installation conditions, confirms the technical solution, equipment, scope, exclusions and compliance requirements, and explains material differences from the initial offer.

The homeowner may accept the final quote, ask questions, negotiate where appropriate, or reject it and use available recovery options.

ACPRO records survey status, the final quote and its relationship to the initial offer, reasons for material price/scope changes where supplied, and the homeowner’s explicit decision. ACPRO does not certify the technical design or decide automatically whether a price revision is justified.

**Success criterion:** There is a clear record of final scope, price and the homeowner’s decision.

### Step 12 — Schedule and track installation

Record the agreed installation date or scheduling status, communicate changes and cancellations, and track installation as scheduled, in progress, completed or subject to an exception. Manual status updates are acceptable in the MVP.

Exceptions include installer cancellation/delay, homeowner postponement, changed site conditions, incomplete installation, dispute or complaint.

**Success criterion:** Both parties can understand the current status and next action.

### Step 13 — Completion, sign-off and review

Record installer-reported completion and request homeowner confirmation/sign-off. Distinguish installer-reported completion from homeowner-confirmed completion. Record incomplete work, concerns or disputes rather than forcing a successful-completion status. Invite a review after an appropriate completion point.

**Success criterion:** ACPRO captures actual outcomes, including unsuccessful or disputed outcomes, rather than measuring only the number of jobs started.

## 6. Cross-journey requirements

- Material changes to a request, offer, final quote or job status should be traceable.
- Unknown information must not be treated as a confirmed “no”.
- Homeowners must be able to leave the journey without being forced to select an installer.
- Distinguish indicative information from confirmed commitments.
- Notifications should state the event, required action and applicable deadline.
- The MVP should support manual exception handling and record who performed the action.
- Do not claim installer credentials are verified unless the relevant verification has actually occurred.
- Property permission and compliance prompts must not be presented as legal or technical determinations.

## 7. Proposed homeowner-facing status sequence

These are user-facing labels, not the final technical state machine:

1. Draft
2. Request submitted
3. Request being checked
4. Finding installers
5. Offers in progress
6. Offers ready to review
7. Installer selected — awaiting confirmation
8. Survey to be arranged
9. Final quote to review
10. Installation scheduled
11. Installation in progress
12. Completion to confirm
13. Completed
14. Review requested

Possible exception labels include More information needed, No offers received, Installer unavailable, Request paused, Request cancelled, Final quote declined and Issue reported. Exact mapping to system states belongs in the state-machine stage.

## 8. Proposed success measures

Thresholds are not set. Instrument:
- Request-start to request-submission completion rate.
- Time taken to complete a request.
- Percentage of requests with sufficient information for installer review.
- Percentage of submitted requests accepted for distribution.
- Percentage receiving at least one offer and percentage receiving multiple offers.
- Time to first offer and first meaningful response.
- Offer-view to installer-selection rate.
- Survey completion and final quote acceptance rates.
- Installation completion rate.
- Cancellation, no-bid, installer-decline and price-rejection rates.
- Homeowner satisfaction and review completion.
- Manual operations time per job.

Interpret metrics together; a high submission rate alone does not prove marketplace value.

## 9. Open questions

1. Which homeowner fields are mandatory versus optional?
2. What minimum information does an installer need before bidding?
3. Which photos are required, and at what point?
4. Should homeowners save and resume drafts in the MVP?
5. What minimum offer comparability is required?
6. Which installer identity, credential, insurance and review details are shown, and what verification is required?
7. What status notifications are needed, and which can be handled manually?
8. What is the recovery process for no offers, one offer, installer decline or rejected final quote?
9. What evidence and disclaimers must accompany preliminary cooling-load estimates?
10. Which property constraints should block submission versus trigger a warning or follow-up?
11. What data-retention, privacy and consent requirements apply to photos, contact details and sharing job details with installers?
12. Which operational timings should be configurable during the pilot, and what evidence will trigger changes?

## 10. Dependencies and related documents

- PRD-001 — Product Vision
- PRD-003 — Installer Journey
- PRD-004 — Admin / Operations Journey
- PRD-005 — Bid & Quote Journey
- PRD-006 — Survey & Final Quote
- PRD-007 — Completion & Review
- VAL-001 to VAL-004 — Stage 02 validation deliverables
- DOM-001 — Domain Model
- STM-001 onward — State-machine documents
- TEC-001 — Load Estimation Engine

## 11. Review status

The content has been approved for repository review. Gate 1 was closed by founder decision with risk accepted; commercial validation remains unproven. This does not approve unresolved PRD-005 proposals, define the final technical state machine or authorise implementation.

**Collaboration sequence:** Propose → Discuss → Revise → Approve → Commit.
