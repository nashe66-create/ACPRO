# PRD-004 — Admin / Operations Journey

**Product:** ACPRO  
**Document:** PRD-004 — Admin / Operations Journey  
**Version:** 0.1  
**Status:** Approved content; awaiting repository review  
**Stage:** Stage 03 — Product Specification  
**Gate status:** Gate 1 was closed by founder decision with risk accepted; commercial validation remains unproven. This draft does not change formal gate status or authorise implementation.

---

## 1. Purpose

Define the operational journey for running ACPRO's initial residential AC installation marketplace: request checks, installer eligibility, opportunity distribution, no-bid recovery, exception handling, record corrections and outcome monitoring.

The MVP may rely on manual operations. This document defines intended responsibilities and records; it does not require an admin dashboard, automated matching engine or automated case-management system in the MVP.

This document complements PRD-002 — Homeowner Journey, PRD-003 — Installer Journey and PRD-005 — Bid & Quote Journey. Where PRD-005 contains proposed rules or unresolved questions, this document references them without independently approving them.

## 2. Operating principles

1. Operations supports a neutral marketplace and must not favour an installer without a documented, product-consistent reason.
2. Homeowners retain control over selection, revised-quote acceptance, pausing, stopping and reopening a request.
3. Installers remain responsible for technical assessment, site verification, final design, final scope, price and compliant installation.
4. Preliminary cooling-load estimates and homeowner-provided information must not be presented as verified engineering facts.
5. Manual interventions must be traceable, proportionate and explainable.
6. Do not silently alter a request, offer, deadline, eligibility decision or job status.
7. Preserve job history when correcting records or reopening bidding.
8. Distinguish missing information from a confirmed negative answer, and unverified claims from verified facts.
9. Do not automatically penalise no-bid outcomes, withdrawals, price changes or incomplete information where the cause is not established.
10. Collect and disclose only the personal information needed for the operational task.
11. Escalate safety, compliance, privacy, fraud or serious conduct concerns rather than improvising a policy.
12. The operational process must work even if the MVP uses a spreadsheet, email or direct contact rather than dedicated software.

## 3. Actors and responsibilities

- **Homeowner:** provides job information, responds to clarification, makes decisions and confirms outcomes.
- **Installer:** maintains accurate business details, decides whether to bid, provides offers, verifies site conditions and performs the work.
- **ACPRO operations:** checks request completeness, supports onboarding and matching, monitors deadlines, handles exceptions, records interventions and communicates status.
- **Authorised decision-maker / product owner:** approves policy exceptions and changes to marketplace rules.
- **External specialist or authority:** may be needed for legal, privacy, safety, technical or regulatory matters. Operations must not claim specialist approval that has not been obtained.

The MVP may combine operational roles in one person. Where practical, use a second-person review for consequential decisions such as credential approval, complaint handling or material manual corrections.

## 4. Operational journey overview

1. Receive and log a homeowner request.
2. Check completeness, clarity and basic suitability for marketplace processing.
3. Request missing information or return the request for correction.
4. Accept, pause or decline the request under an agreed policy.
5. Confirm eligible installers and distribute the opportunity.
6. Monitor installer activity, clarifications and the bidding deadline.
7. Recover no-bid or low-bid situations without making the homeowner's decision for them.
8. Support offer comparison and selection without unfairly influencing the result.
9. Support survey, revised quote and final-agreement exceptions.
10. Monitor scheduling, installation progress, stalled jobs and completion.
11. Handle cancellations, complaints, disputes and safety/compliance concerns through defined escalation.
12. Correct operational records with an audit trail.
13. Review marketplace performance and recurring failure points.

## 5. Step-by-step workflow

### Step 1 — Receive and log a homeowner request

**Trigger:** A homeowner submits an installation request.

**Operations actions**
- Confirm the request has a unique reference and is visible in the operational queue.
- Record submission time and current status.
- Check for possible duplicates before creating a second active opportunity.

Submission is not proof that the property is suitable. A preliminary load estimate is not a final design. Personal contact information must not be distributed beyond the approved process.

**Success criterion:** The request is traceable and ready for completeness review.

### Step 2 — Check completeness and basic suitability

Review the information required by PRD-002: property and room details, available dimensions and photos, homeowner requirements, practical constraints, timing and any known budget/preferences. The purpose is to decide whether the request can be presented meaningfully, not to perform an installer's technical survey.

Possible outcomes:
- **Ready for review:** required information is present.
- **More information required:** a specific omission or ambiguity needs homeowner input.
- **Paused:** a dependency or concern needs resolution.
- **Declined / unable to process:** only where an approved rule or clear reason supports the decision.

Ask focused questions, explain why information is needed and record the reason for pausing or declining. Do not ask the homeowner to make technical decisions that should be made by a competent installer.

**Open question:** Minimum completeness checklist and grounds for declining need approval before launch.

### Step 3 — Resolve missing or conflicting information

When the homeowner supplies more detail, update the job record while retaining a history of material changes. If a change materially affects scope or an opportunity already distributed:
- identify what changed;
- decide whether current bidders must be notified;
- assess whether existing offers remain comparable or need reconfirmation;
- apply the approved deadline-change policy;
- do not silently replace prior job information.

If the conflict cannot be resolved, return it to the homeowner or escalate it.

### Step 4 — Accept the request into the marketplace

Before distribution, confirm the request meets agreed minimum operational requirements and that known blockers are disclosed. Operations may check administrative completeness, but must not certify technical suitability, planning permission, landlord consent, building compliance or electrical readiness unless a defined check established it.

Record the decision, timestamp, responsible role, conditions and reason if paused or declined.

**Open question:** Define acceptance criteria, geographic coverage and excluded job types.

### Step 5 — Confirm installer eligibility

Use the approved onboarding and matching policy. Check that the installer profile is active for the relevant activity, required evidence is not known to be expired or restricted, service area/capability is relevant, and any collected capacity information is current enough to use.

Do not infer competence solely from location, profile completeness or a marketing claim. Do not label an installer verified unless the defined checks have been completed.

**Open questions:** Credentials, re-check frequency, matching rules, capacity handling and restrictions remain undecided.

### Step 6 — Distribute the opportunity

Record which eligible installers were invited or given access and when. Use the approved distribution approach consistently; ensure the current job version is shown; state the response deadline and clarification process; disclose only homeowner information authorised for this stage; and do not promise a number of offers.

PRD-005 proposes that the 48-hour bidding window begins when ACPRO makes the opportunity available to eligible installers. This remains subject to PRD-005's approval state and must not be changed informally.

**Success criterion:** Distribution is traceable, consistent and based on approved eligibility rules.

### Step 7 — Monitor clarifications and offer activity

Record installer questions and responses. Route questions to the homeowner or appropriate source; apply the approved policy for sharing answers with other bidders; notify relevant installers of material information changes; record any deadline change and reason.

Do not provide one installer with material information other eligible bidders need to price fairly unless the policy permits it and the reason is recorded.

### Step 8 — Handle no-bid and low-bid situations

No offers or few offers are marketplace conditions, not automatically installer or homeowner failures.

Proposed recovery sequence:
1. Confirm distribution worked correctly and eligible installers could access the opportunity.
2. Check for delivery issues or unresolved information questions.
3. Record any voluntary decline reasons.
4. Explain the situation to the homeowner without promising that more offers will arrive.
5. Present choices such as waiting longer, clarifying/changing the request, reopening distribution or stopping.
6. Follow the homeowner's decision and record it.
7. If scope changes, version the request and decide which installers should receive it.

PRD-005 says recovery should not automatically restart bidding or select an installer without homeowner direction. The precise low-bid threshold and any extension policy remain open.

### Step 9 — Support comparison and selection

Operations may explain process, status and differences between firm and indicative offers, but must not steer the homeowner to an installer for undisclosed commercial reasons. Explain observable differences—scope, exclusions, assumptions, price basis, validity and survey dependencies—without offering unsupported technical endorsement.

PRD-005 proposes broad competition indicators (low/moderate/high or “Not enough activity yet”) rather than competitor identities or exact prices; thresholds remain unresolved.

Record the homeowner's explicit decision and timestamp. Do not treat an enquiry or request for more information as final selection unless the agreed workflow says so.

### Step 10 — Monitor selection acknowledgement

PRD-005 proposes a 24-hour acknowledgement period for the selected installer and a reminder after 12 hours. These timings remain proposals to be kept aligned with PRD-005.

If the installer declines or does not respond, inform the homeowner, record timestamps and status, explain available options, and let the homeowner decide whether to wait, revisit another valid offer or reopen bidding. Do not automatically select the next installer.

### Step 11 — Support survey and final-quote exceptions

Help coordinate communication where a survey is needed or the final price differs from the initial offer. Ensure survey scheduling/outcome is recorded, revised prices are clearly identified, material differences are explained, the homeowner has an accept/reject choice, and no final agreement is assumed until the required parties explicitly confirm it.

PRD-005 currently proposes no separate survey fee and that the installer absorbs survey cost if the homeowner does not proceed, with expected cost included in the offer. This material commercial policy remains subject to PRD-005 review and must not be treated as final until approved. Follow the agreed recovery rules if a revised quote is rejected; do not independently decide fault or impose a penalty.

### Step 12 — Monitor scheduling, installation and completion

Monitor jobs that are scheduled, delayed, rescheduled, in progress, reported complete or awaiting follow-up. If a job appears stalled, check the last confirmed status, contact the relevant party through the approved process, record the response and next step, ask the homeowner how to proceed where required, and escalate safety concerns or serious allegations.

Distinguish installer-reported completion from homeowner-confirmed completion, incomplete work/follow-up required, and disputed outcomes. Do not mark a job complete merely because a date passed or the installer stopped responding.

### Step 13 — Handle cancellations and withdrawals

Apply the stage-specific rules in PRD-005. Record who initiated the withdrawal, when it occurred, any reason provided, what the homeowner was told and what options were offered. Preserve prior offers and job history. Do not apply automatic penalties unless a separately approved and communicated policy expressly provides for them.

### Step 14 — Complaints, disputes and escalation

The MVP needs a way to record and route complaints even if it does not offer formal dispute resolution.

Proposed categories:
- Request information or process complaint.
- Installer conduct or communication concern.
- Scope or price disagreement.
- Scheduling, incomplete work or workmanship concern.
- Credential, compliance or safety concern.
- Privacy or personal-data concern.
- Suspected fraud, impersonation or misleading claim.

Proposed response:
1. Acknowledge receipt and record the concern.
2. Capture relevant facts and documents without making unsupported findings.
3. Identify immediate safety, privacy or compliance risks.
4. Escalate to the authorised owner or appropriate specialist.
5. Explain what ACPRO can and cannot resolve.
6. Record action taken and closure reason.

ACPRO must not imply it guarantees installation quality, adjudicates technical disputes or makes legal/regulatory determinations unless those responsibilities are explicitly established.

**Open question:** Response targets, escalation owners, evidence retention and the boundary between marketplace support and formal dispute resolution.

### Step 15 — Correct records and manage exceptions

For material corrections, record the previous value/status, corrected value/status, who changed it and when, the reason/evidence, and whether affected parties were notified. Prefer adding to history rather than overwriting it.

Do not silently change a deadline, offer, final price, installer eligibility or completion status. Consequential exceptions require approval from the designated decision-maker. If policy is unclear, pause the affected step and escalate rather than inventing a rule.

### Step 16 — Review operations and marketplace performance

Candidate measures:
- Requests received, complete, paused and declined.
- Time from submission to operational acceptance.
- Time to first installer access and first offer.
- Opportunities receiving zero, one or multiple offers.
- Clarification frequency and response time.
- Manual interventions and operations time per job.
- Selection acknowledgement and no-response rates.
- Survey completion and revised-quote rates.
- Withdrawals, cancellations, stalled jobs and completion outcomes.
- Complaint categories, handling time and recurring causes.
- Installer onboarding completion and re-check workload.

Metrics are diagnostic, not automatic evidence of fault. Interpret by geography, job type, information quality and marketplace stage; do not use small early samples to imply stable market-wide performance.

## 6. Operational queue and case record

The MVP needs a reliable way to see each active request and its next action, whether implemented in software or managed manually.

Proposed minimum record:
- Unique request/job reference, current status and status timestamp.
- Homeowner contact and communication preferences, access-limited to those who need them.
- Current job-information version and material changes.
- Eligible installers and distribution history.
- Bidding deadline and any authorised changes.
- Offer, selection, survey and final-quote milestones.
- Next action, responsible person/role and due date where applicable.
- Exception, complaint or escalation status.
- Manual interventions and reasons.
- Outcome and closure reason.

This is an operational information requirement, not a database schema or decision to build an admin dashboard in the MVP.

## 7. Proposed operational status categories

Illustrative categories for process design, not an approved state machine:
- New request
- Completeness check
- Awaiting homeowner information
- Paused / under review
- Accepted for marketplace
- Installer distribution in progress
- Bidding open
- No offers / recovery needed
- Offers available for homeowner review
- Awaiting installer acknowledgement
- Survey / final quote in progress
- Final agreement confirmed
- Installation scheduled / in progress
- Completion reported
- Follow-up required
- Complaint / escalation open
- Completed / closed
- Declined / cancelled

Final status definitions, transitions, terminal states and permissions belong in later state-machine work. This list is not a definitive state model.

## 8. Proposed operating controls

Before live pilot activity, define:
- who may approve installer profiles and what evidence is required;
- who may accept, pause or decline a homeowner request;
- who may change bidding deadlines or distribution after material scope changes;
- who may correct offers, final prices, selection or completion statuses;
- how homeowner consent and contact disclosure are handled;
- approved communication channels/templates;
- escalation for complaints, safety concerns, privacy incidents and suspected fraud;
- record-retention rules;
- actions requiring second-person review.

These are decisions to make, not a claim that ACPRO already has a compliance framework or operations team in place.

## 9. Open questions

1. What minimum completeness criteria must a homeowner request meet before distribution?
2. Which job types, locations or circumstances should be excluded or manually reviewed?
3. What is the installer verification and eligibility policy, including credential expiry?
4. How are installers selected for distribution, and how are exceptions justified?
5. Which homeowner details can be shown at each stage?
6. What is the policy for sharing clarification answers with all bidders?
7. Which scope changes require a new job version, bidder reconfirmation or deadline change?
8. What constitutes a low-bid situation, and which recovery choices are offered?
9. What happens if a deadline passes during an operational incident?
10. Who may approve manual changes to deadlines, offer status, final price or completion?
11. What communication channels, response targets and record-retention rules apply?
12. What complaints can ACPRO handle directly, and what must be referred elsewhere?
13. What escalation path applies to safety, compliance, privacy or suspected fraud concerns?
14. What evidence distinguishes installer-reported from homeowner-confirmed completion?
15. What is the final commercial policy for surveys and survey costs?
16. Which operational metrics are reviewed during pilot, and who owns the review?
17. What minimum staffing or operations capacity is required per active job?

## 10. Dependencies and related documents

- PRD-001 — Product Vision
- PRD-002 — Homeowner Journey
- PRD-003 — Installer Journey
- PRD-005 — Bid & Quote Journey
- PRD-006 — Survey & Final Quote
- PRD-007 — Completion & Review
- VAL-001 — Homeowner Research
- VAL-002 — Installer Research
- DOM-001 — Domain Model
- STM-001 onward — State-machine documents
- Risk Register and Assumptions Register

## 11. Review status

This is a draft for discussion, aligned with PRD-002, PRD-003 and PRD-005.

PRD-005's 48-hour bidding window, three-day homeowner decision period, 24-hour installer acknowledgement deadline, 12-hour reminder, survey-cost treatment and stage-specific recovery rules are referenced for consistency. They remain subject to PRD-005's own approval status and open questions.

This document does not alter the founder decision to close Gate 1, settle unresolved marketplace policy, establish legal/compliance policy or authorise implementation.

**Review sequence:** Propose → Discuss → Revise → Approve → Commit.

## Stage 03 reconciliation amendment — authoritative Operations rules

- Gate 1 was closed by founder decision with risk accepted; commercial validation remains unproven.
- TEC-002 defines installer eligibility and distribution. Strategy, sequencing and prioritisation weights remain undecided; do not silently assume broadcast, batches or sequential invitations.
- Low/no-offer recovery preserves homeowner control. No automatic installer selection, rebid or distribution expansion; obtain homeowner direction before expanding distribution.
- Retained proposals: bidding 48 hours from distribution; offer selection 3 calendar days plus one 3-day extension; installer acknowledgement within 24 hours with reminder after 12 hours. Final-quote response proposal: reminders at 48 hours and 5 calendar days; Operations follow-up at 7 calendar days.
- Accepted completion default: reminder at 48 hours, final reminder at 5 calendar days, Operations review after 7 calendar days. Accepted issue acknowledgement target: 2 working days, operational target only and subject to external/legal review where relevant.
- Survey-fee treatment remains provisional pending commercial approval and external/legal review.
- Either party may report cancellation. Operations records reporter, reason if supplied, timestamp/stage and history without adjudicating fault. Operations reviews before administrative closure if an issue remains unresolved. Silence does not imply acceptance, satisfaction or resolution.
