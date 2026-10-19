# PRD-003 — Installer Journey

**Product:** ACPRO  
**Document:** PRD-003 — Installer Journey  
**Version:** 0.1  
**Status:** Draft for discussion  
**Stage:** Stage 03 — Product Specification  
**Gate status:** Gate 1 was closed by founder decision with risk accepted; commercial validation remains unproven. This draft does not change gate status or authorise implementation.

---

## 1. Purpose

Define the installer-facing journey from onboarding and eligibility checks through opportunity review, offer submission, selection, survey, final quote, installation progress and outcome recording.

This document complements PRD-002 — Homeowner Journey and PRD-005 — Bid & Quote Journey. PRD-005 contains the more detailed bidding, offer, withdrawal, recovery and final-price rules. Where this draft refers to PRD-005, its timings and policies remain subject to that document's review status and unresolved questions; they are not newly approved here.

This document does not define screens, database schemas, APIs, final verification policy, legal terms or the technical load-estimation method.

## 2. Installer journey principles

1. Installers decide which opportunities to assess and whether they can submit a firm or indicative offer.
2. ACPRO should provide structured job information while clearly identifying unknowns and unverified details.
3. An installer is responsible for site verification, technical design, final scope, compliance and installation.
4. An offer must make clear whether it is firm or indicative, what it includes and what remains subject to survey or further checks.
5. An installer must not treat a preliminary cooling-load estimate as a final design or equipment specification.
6. Installer competition should not require disclosure of competitors' identities, exact prices or detailed offer contents.
7. A homeowner's selection is not the same as the installer's acknowledgement, final technical agreement or final price confirmation.
8. The homeowner retains the choice to accept, decline, pause, stop or reopen the process.
9. Recovery must preserve job and bidding history and must not automatically attribute fault or impose penalties.
10. Manual operations are acceptable in the MVP when automation is not necessary to validate the marketplace.
11. Unknown information must be distinguished from a confirmed negative answer.
12. Credential claims must not be presented as verified until the required checks have actually been completed.

## 3. Actors

- **Installer / installer business:** manages its profile, reviews opportunities, submits and manages offers, confirms selection, performs surveys and installation work, and updates progress.
- **ACPRO:** provides job information, applies eligibility and distribution rules, records offers and decisions, notifies relevant parties and maintains job history.
- **ACPRO operations:** performs manual onboarding checks, supports matching and exception handling, and records operational decisions.
- **Homeowner:** chooses whether to proceed, selects an installer, accepts or rejects the final quote and confirms the outcome.

## 4. Journey overview

1. Installer discovers ACPRO and reviews the service model.
2. Installer registers interest and supplies business details.
3. ACPRO checks eligibility information and any required credentials.
4. Installer profile is activated for permitted marketplace activities.
5. Installer receives or discovers a suitable opportunity.
6. Installer reviews the job information and decides whether to pursue it.
7. Installer asks for clarification if needed, or declines without submitting an offer.
8. Installer submits a firm or indicative offer with scope, price, assumptions and exclusions.
9. Installer manages the offer until the bidding deadline, including permitted revision or withdrawal.
10. Installer responds if selected and acknowledges whether it intends to proceed.
11. Installer arranges and conducts a survey where required.
12. Installer submits a final scope and price, explaining material revisions.
13. Installer and homeowner explicitly confirm the final agreement.
14. Installer coordinates scheduling and updates installation progress.
15. Installer reports completion and responds to any outstanding issue or homeowner concern.

This is the proposed end-to-end journey. Detailed bidding rules below are derived from PRD-005 and should be kept consistent with it.

## 5. Step-by-step workflow

### Step 1 — Understand ACPRO and register interest

**Trigger:** An installer visits ACPRO or is invited to join.

The installer should understand that ACPRO is a marketplace and workflow platform for residential AC installation; installers can assess opportunities and submit offers for jobs they choose to pursue; homeowners may compare offers and are not obliged to select an installer; selection does not necessarily settle the final technical solution, scope or price; and manual processes may be used during the MVP.

**System actions**
- Explain the service and proposed process.
- Collect initial business and contact information.
- Do not imply registration guarantees access to jobs or a minimum volume of work.
- Present the commercial model, fees and legal terms clearly before an installer is expected to commit to them.

**Success criterion:** The installer understands the marketplace proposition and can decide whether to continue onboarding.

**Open question:** The final installer commercial model and fee structure remain unvalidated and must not be invented in this specification.

### Step 2 — Supply business and capability information

**Proposed inputs to consider**
- Trading/business name and primary contact.
- Contact details and business location.
- Areas served and travel radius.
- Domestic residential AC experience and types of work undertaken.
- Team capacity or availability information, if ACPRO decides to collect it.
- Relevant individual qualifications and company certifications.
- Insurance and other evidence required by the approved onboarding policy.
- Public website or portfolio, where available.
- Preferred contact and notification method.

These are proposed onboarding fields, not a final mandatory-field decision. Collect only information necessary for the agreed marketplace purpose.

**Validation**
- Check required fields for completeness.
- Mark claims as unverified until checked.
- Record what evidence was reviewed, when, by whom and any expiry/re-check date where relevant.
- Distinguish individual qualifications from company certification where applicable.
- Do not treat a public directory listing or website badge alone as independent verification.

**System / operations actions**
- Keep the profile pending until required checks are complete.
- Request missing evidence or clarification.
- Record approval, rejection or request-for-more-information status and a reason.

**Exceptions:** Evidence is missing or expired; business details conflict; service area or capability is unclear; or the installer does not provide required evidence.

**Success criterion:** ACPRO has enough reliable information to decide what marketplace activities, if any, the installer may access.

**Open question:** Exact credentials, insurance requirements, evidence sources and verification cadence require an approved policy before launch.

### Step 3 — Profile approval and access

**Preconditions:** Required onboarding information has been supplied and applicable checks completed.

**System actions**
- Activate the installer profile only for activities permitted by the onboarding policy.
- Record profile status and restrictions.
- Explain outstanding requirements where access is limited.
- Allow profile information to be updated and rechecked.

A profile being created is not equivalent to credentials being verified. Do not label an installer “verified” unless the defined verification process has been completed and remains valid.

**Success criterion:** The installer understands its status, permitted activities and any outstanding checks.

### Step 4 — Receive or discover an opportunity

**Trigger:** A homeowner job passes ACPRO's checks and is made available to eligible installers.

**Information presented for initial triage**
- General property location sufficient to assess serviceability.
- Property type and relevant access/context details.
- Rooms and homeowner requirements.
- Available dimensions and photographs.
- Preliminary cooling-load estimate, if available, with assumptions and limitations.
- Known constraints and explicit unknowns.
- Preferred timing and budget information where supplied.
- Request status, response deadline and information required to submit an offer.

The exact disclosure of homeowner contact details and address must follow an approved privacy and operational policy. Do not assume full contact information is disclosed to every installer before selection.

**System actions**
- Show only opportunities the installer is eligible to access.
- Record when the opportunity was made available.
- Show the applicable bidding deadline and relevant job version.
- Make clear that information is homeowner-provided and may require verification.

**Success criterion:** The installer can decide whether the opportunity is relevant without mistaking incomplete information for confirmed site facts.

### Step 5 — Assess the opportunity

The installer reviews the available information and decides whether it can reasonably price the job, what further information is needed and whether a survey is likely to be required.

The installer may:
- Proceed to submit a firm offer.
- Submit an indicative offer, clearly stating what remains subject to survey or confirmation.
- Ask for clarification through ACPRO.
- Decline the opportunity without submitting an offer.

An installer should not be pressured to bid where information is insufficient to price responsibly. The platform should record a decline reason where voluntarily provided, without treating it automatically as a performance failure.

**Success criterion:** The installer makes an informed decision to bid, ask a question or decline.

### Step 6 — Request and receive clarification

Clarification should be tied to the relevant opportunity and retained in the job history. The installer should be able to ask for missing or ambiguous information before submitting an offer.

**Proposals / open questions**
- Decide whether clarification questions and answers are shared with all eligible installers, while protecting personal data.
- Decide whether a clarification or scope change changes the bidding deadline.
- If information materially changes, make the relevant job version and timing clear to installers.
- Do not silently alter the homeowner's requirements or existing offers.

**Success criterion:** Material assumptions and answers are traceable and relevant bidders have a fair understanding of the job.

### Step 7 — Prepare and submit an offer

The offer should identify whether it is **firm** or **indicative** and, at minimum, make clear the price basis, proposed scope, inclusions, exclusions, assumptions, dependencies, validity and what requires survey or confirmation. These are proposed content requirements; the minimum criteria for a firm offer remain an open question.

The installer remains responsible for technical judgement and must not treat ACPRO's preliminary load estimate as a final design.

**System actions**
- Validate required fields once the offer rules are approved.
- Timestamp and retain each submitted version.
- Make the offer's status and any conditions visible to the homeowner.
- Distinguish a saved draft from a submitted offer.

**Success criterion:** The homeowner can understand what is being offered and compare it without mistaking an indicative price for a confirmed final price.

### Step 8 — Manage offers before the deadline

PRD-005 proposes a 48-hour bidding window starting when an opportunity becomes available to eligible installers. This timing remains a proposal until resolved in PRD-005.

Before the deadline, the installer may be able to revise or withdraw an offer under the agreed rules. Each version and action should be retained. The exact rules for corrections after the offer window closes, and what it means for an offer to be locked, remain open.

**Success criterion:** Installers understand the deadline and the status of their offer; the audit trail preserves prior versions.

### Step 9 — Competition information and homeowner decision

PRD-005 proposes a broad competition indicator (low / moderate / high) rather than disclosure of competitor identities, exact prices or detailed offer contents. The thresholds and precise wording remain open.

PRD-005 also proposes a three-day homeowner decision period, extendable once by three days. These are not independently approved by this document.

The installer should receive clear status updates consistent with the approved privacy and notification rules, without access to confidential competing offers.

**Success criterion:** The homeowner can compare available offers while installer confidentiality is protected.

### Step 10 — Selection and installer acknowledgement

Homeowner selection is an intention to proceed with the selected installer, not final agreement on technical scope or final price.

PRD-005 proposes that the selected installer acknowledge within 24 hours, with a reminder after 12 hours. If the installer declines or does not respond, ACPRO should inform the homeowner and present recovery options. It should not automatically choose another installer or restart bidding without the homeowner's direction.

**Success criterion:** The homeowner knows whether the selected installer intends to proceed and retains control of the next step.

### Step 11 — Arrange and conduct a survey

Where needed, the installer coordinates a site survey to verify dimensions, access, electrical and installation constraints, proposed equipment location and other relevant site conditions.

**Installer responsibilities**
- Arrange the appointment with the homeowner.
- Explain the survey's purpose and what it can establish.
- Verify site facts and identify technical or scope changes.
- Record relevant findings and communicate any impact on scope, assumptions or price.

**Commercial policy carried over from PRD-005:** The current PRD-005 proposal says there is no separate survey fee and that the installer absorbs the survey cost if the homeowner does not proceed after the survey, with the expected cost included in the offer. This is a consequential commercial policy and remains subject to PRD-005 review; it is not independently approved here.

**Open questions:** Survey evidence, missed appointments, rescheduling, cancellation and cost treatment need explicit decisions.

**Success criterion:** Survey findings are documented and any changes are explained before final agreement.

### Step 12 — Submit a revised or final quote

After the survey or further checks, the installer submits a final scope and price or explains why the initial offer remains valid.

The installer should identify:
- What changed from the earlier offer.
- Why it changed and what survey/site evidence supports the change.
- The final scope, inclusions, exclusions and assumptions.
- Any material change to timing or dependencies.
- The period for which the revised offer remains valid.

A revised quote must not silently replace the earlier offer. The homeowner must be able to compare the change and accept or reject the revised terms.

**Success criterion:** The homeowner can understand the difference between the initial offer and the final quote and make an informed decision.

### Step 13 — Homeowner rejects the revised price

PRD-005 proposes that, when a homeowner rejects a revised price, ACPRO asks for a reason before showing recovery options. Possible reasons include exceeding budget, believing the revision is unjustified, changing requirements or other.

The reason informs recovery; it does not automatically determine fault or impose an installer penalty.

PRD-005 further proposes:
- The installer may provide a private explanation to ACPRO for internal advisory purposes.
- The MVP handles this primarily as a pricing/recovery matter, not a formal dispute-resolution or disciplinary process.
- If the homeowner reopens the same scope, the installer whose revised price was rejected is excluded by default, but the homeowner may permit it to bid again.
- If scope changes, the opportunity opens to all eligible installers, including the original installer.
- Previous offers may be revisited if still valid and the installer reconfirms availability.

These are PRD-005 rules/proposals and must remain consistent with that document's approval state.

**Success criterion:** The homeowner controls recovery, the reason is recorded without automatically assigning blame, and the next bidding round follows recorded scope and eligibility rules.

### Step 14 — Withdrawal and inability to proceed

PRD-005 distinguishes withdrawal at different points:

- **Before selection:** notify the homeowner; remaining offers can continue within the existing decision period. Withdrawal does not automatically reset the deadline or reopen bidding.
- **After selection but before final agreement:** notify the homeowner and allow them to consider other available offers; do not automatically start a new round.
- **After final scope and price confirmation:** ACPRO checks circumstances and asks the homeowner how to proceed; the homeowner may revisit previous valid offers or reopen bidding.

The installer should communicate inability to proceed promptly and provide a reason where appropriate. The reason is recorded for context, not automatically treated as proof of fault.

**Success criterion:** Withdrawal is handled transparently and does not erase job history or remove homeowner choice.

### Step 15 — Confirm final scope and price

Where a survey or price revision is required, PRD-005 proposes this sequence:

1. Installer submits the final scope and price.
2. Homeowner reviews and accepts them.
3. Installer reconfirms the agreed scope and price.
4. ACPRO records both confirmations and timestamps.
5. The job may progress to installation planning.

If either party has not confirmed, the job must not progress on the assumption that agreement exists. Commercial confirmation does not itself mean an installation date has been scheduled.

**Success criterion:** The final commercial agreement is explicit and traceable.

### Step 16 — Schedule and carry out the installation

After final agreement, the installer coordinates the installation date and keeps the homeowner informed of changes.

**Proposed installer updates**
- Scheduling proposed / awaiting confirmation.
- Scheduled.
- Rescheduled.
- In progress.
- Completed.
- Unable to complete / requires follow-up.

These are proposed user-facing milestones; final state definitions belong in the state-machine stage.

**Exceptions:** Installer delay or cancellation; homeowner postponement or no access; site conditions differ from survey; additional work is required; installation is incomplete or fails; or a concern/dispute is raised.

The installer must not mark a job complete merely because it was scheduled or because the system requested an update.

### Step 17 — Completion and post-installation outcome

The installer reports whether the installation is complete and supplies the agreed completion information. ACPRO may check in with the homeowner to confirm whether the job is complete or still in progress.

PRD-005 proposes that routine check-ins gather information without automatically triggering penalties, marking a job failed or reopening bidding. If the job is stalled or the installer is no longer proceeding, ACPRO asks the homeowner how to proceed.

**System actions**
- Distinguish installer-reported completion from homeowner-confirmed completion.
- Record incomplete work, follow-up required or disputed outcomes.
- Preserve job history.
- Trigger the review journey only at the appropriate point.

**Success criterion:** The recorded outcome reflects what happened, not simply the installer's last status update.

## 6. Operational records and audit trail

The MVP should retain sufficient history to understand each installer's participation and each job's progression, including:
- Installer profile status and evidence checks performed.
- Opportunity availability and installer access/invitation.
- Clarification requests and responses.
- Offers submitted, revised, withdrawn or locked.
- Relevant bidding deadlines and round identifiers.
- Selection acknowledgement, decline or timeout.
- Survey status and survey-related scope/price revisions.
- Final scope and price confirmations.
- Installation status updates, cancellations and completion outcomes.
- Manual operational interventions and reasons.

A pricing disagreement alone should not automatically affect an installer's eligibility for other opportunities. Any broader performance or enforcement policy needs separate explicit approval.

## 7. Proposed installer-facing status sequence

These are proposed display labels, not the final technical state machine:

1. Profile incomplete
2. Verification pending
3. More information required
4. Profile approved / access enabled
5. New opportunity
6. Opportunity under review
7. Clarification requested
8. Offer draft
9. Offer submitted
10. Offer revised
11. Offer withdrawn
12. Offer locked for homeowner review
13. Selected — acknowledgement required
14. Selection acknowledged
15. Selection declined
16. Survey to arrange
17. Survey completed
18. Final quote submitted
19. Final quote accepted by homeowner — installer confirmation pending
20. Final agreement confirmed
21. Installation scheduled
22. Installation in progress
23. Completion reported
24. Follow-up required
25. Completed

Exact mapping, terminal states and exceptions must be defined in STM documents. These labels are not approved state-machine decisions.

## 8. Proposed success measures

Thresholds are not set. Candidate measures include:
- Installer registration-to-approval rate.
- Time and operations effort required to onboard an installer.
- Percentage of eligible opportunities opened by installers.
- Opportunity view-to-bid rate.
- Time to first offer.
- Share of opportunities receiving zero, one or multiple offers.
- Offer completion and clarification rates.
- Installer acknowledgement rate and response time after selection.
- Survey completion rate.
- Rate and size of revisions between initial and final quotes.
- Final quote acceptance rate.
- Installer withdrawal, cancellation and no-response rates.
- Installation completion and follow-up rates.
- Installer-reported job suitability and operations time per opportunity.

These measures should be interpreted together and should not automatically become installer penalties.

## 9. Open questions

1. Which onboarding fields are mandatory?
2. What qualifications, company certification, insurance and other evidence must be checked before access is enabled?
3. How often must credentials be rechecked, and how are expired credentials handled?
4. What are the final commercial terms and any platform fee? This remains unvalidated.
5. Which homeowner details are visible before selection, and when are contact details shared?
6. What is the exact eligibility and distribution logic for opportunities?
7. What minimum information is required for firm versus indicative offers?
8. Can installers submit questions visible to other bidders, and how are answers shared?
9. Do clarifications or scope changes affect the bidding deadline?
10. What exact correction/withdrawal rules apply after offers lock?
11. What is the validity period for an offer?
12. Which PRD-005 timing proposals should be retained or adjusted for the pilot?
13. What is the operational process for survey scheduling, missed appointments and rescheduling?
14. How should incomplete installations and post-installation concerns be handled?
15. What evidence is required before a job can be recorded as completed?
16. What privacy, record-retention and audit requirements apply to installer and homeowner information?
17. What installer performance information, if any, should affect future matching, and what due process would be needed before any restriction?

## 10. Dependencies and related documents

- PRD-001 — Product Vision
- PRD-002 — Homeowner Journey
- PRD-004 — Admin / Operations Journey
- PRD-005 — Bid & Quote Journey
- PRD-006 — Survey & Final Quote
- PRD-007 — Completion & Review
- VAL-002 — Installer Research
- DOM-001 — Domain Model
- STM-001 onward — State-machine documents
- TEC-001 — Load Estimation Engine

## 11. Review status

This is a draft for discussion, developed with reference to the current product vision, PRD-002 and the PRD-005 draft in PR #1.

**Important:** PRD-005's 48-hour bidding window, three-day homeowner decision period, 24-hour installer acknowledgement deadline, 12-hour reminder, survey-fee treatment and recovery rules are referenced for consistency. Where PRD-005 remains a draft PR, these must not be treated as independently approved or silently changed by PRD-003.

This document does not pass Gate 1, settle unresolved PRD-005 questions, approve onboarding/legal policies or authorise implementation.

**Review sequence:** Propose → Discuss → Revise → Approve → Commit.


## Stage 03 reconciliation amendment — authoritative installer rules

- Gate 1 was closed by founder decision with risk accepted; commercial validation remains unproven.
- Installer receives structured homeowner/property/room information and preliminary cooling-load estimates only. Installer owns site verification, final technical design, equipment selection, final scope/price and installation; MVP does not include AR or automated configuration output.
- Retained timing proposals: 48-hour bidding; homeowner selection within 3 calendar days plus one 3-day extension; installer acknowledgement within 24 hours with reminder after 12 hours. These are proposals, not contractual/legal SLAs.
- Final-quote non-response proposal: reminder at 48 hours, final reminder at 5 calendar days, Operations follow-up at 7 calendar days. Silence is not acceptance.
- Accepted operational target: acknowledge a reported issue within 2 working days. This is not a contractual SLA and is subject to external/legal review where relevant.
- Mutual confirmation of the same final quote and scope/version is required before installation planning. Thereafter homeowner and installer coordinate scheduling/delivery directly; ACPRO records milestones and handles exceptions.
- Survey-fee treatment remains provisional pending commercial approval and external/legal review.
