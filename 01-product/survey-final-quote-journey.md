# PRD-006 — Survey & Final Quote Journey

**Product:** ACPRO  
**Document:** PRD-006 — Survey & Final Quote Journey  
**Version:** 0.2  
**Status:** Content approved; awaiting repository review  
**Stage:** Stage 03 — Product Specification  
**Gate status:** Gate 1 was closed by founder decision with risk accepted; commercial validation remains unproven. This document does not change formal gate status or authorise implementation.

---

## 1. Purpose

Define how a selected installer and homeowner move from selection through any required survey, technical verification, final quote and explicit agreement on final scope and price.

This document complements PRD-002 — Homeowner Journey, PRD-003 — Installer Journey, PRD-004 — Admin / Operations Journey and PRD-005 — Bid & Quote Journey. PRD-005 remains the primary reference for bidding, selection, withdrawal and recovery. Reminder timings and other rules must be reconciled with PRD-005 before implementation.

This document does not define detailed UI, database schemas, APIs, technical design calculations, legal contract terms or installation state machines.

## 2. Principles

1. Initial offers may be firm or indicative; status and assumptions must be clear.
2. Installer selection does not mean the final technical solution, scope or price is agreed.
3. The installer is responsible for site verification, final technical design, equipment suitability, installation method, compliance and final quote.
4. ACPRO's preliminary cooling-load estimate is informational, not a final design, guarantee of suitability or equipment specification.
5. Material differences between the initial offer and revised quote must be understandable.
6. No material scope or price change may be silently substituted for the prior offer.
7. Neither party is treated as accepting a revised scope or price without explicit confirmation.
8. The homeowner can accept, reject, ask questions, pause or stop.
9. A remote assessment must not be mislabelled as a completed site survey.
10. Manual coordination is acceptable for the MVP.
11. The workflow preserves an audit trail of quotes, changes, explanations and confirmations.

## 3. Actors

- **Homeowner:** coordinates access, provides relevant property information, reviews survey outcomes and quote changes, and decides whether to proceed.
- **Installer:** determines what verification is required, conducts or arranges it, confirms technical details, and provides the final scope and quote.
- **ACPRO:** records status, facilitates communication, presents offers clearly and preserves decisions and history.
- **ACPRO operations:** coordinates appointments and resolves process exceptions without making the installer's technical decision or the homeowner's commercial decision.

## 4. Entry conditions

The journey begins when the homeowner has selected an installer under the PRD-005 process, any required selection acknowledgement is complete, and the selected offer and assumptions can be identified. The parties should know whether the offer is firm or indicative and what remains subject to confirmation.

If the installer declines, fails to acknowledge or withdraws before final agreement, use PRD-005 recovery rather than treating the survey journey as started.

## 5. Journey overview

1. Establish whether a survey or further verification is required.
2. Explain its purpose and expected scope.
3. Arrange an appointment and confirm access.
4. Conduct the survey or record why it could not take place.
5. Record findings and differences from initial information.
6. Determine whether the original offer remains valid or a revised quote is needed.
7. Submit the final scope and price, explaining material changes.
8. Allow the homeowner to ask questions, accept, reject, pause or stop.
9. Record homeowner acceptance and installer reconfirmation.
10. Proceed to installation planning only after required confirmations.

## 6. Step-by-step workflow

### Step 1 — Determine whether a survey is needed

The installer decides whether available information is sufficient to responsibly confirm the technical solution and price without an on-site survey. Verification may cover dimensions, physical conditions, access, indoor/outdoor unit locations, pipework, cable routes, drainage, electrical supply, permissions or other factors affecting scope, cost or feasibility. This is illustrative, not a complete technical checklist.

Record whether a survey is required, not required or awaiting clarification. The installer must record a structured reason, with an optional short note, in both the required and not-required cases. A preliminary load estimate is not proof that the technical solution is verified.

### Step 2 — Explain the survey

Where required, the installer explains what the survey is expected to confirm, that the initial offer may change if actual conditions or requirements differ, and that the survey does not itself commit the homeowner to the final quote.

Any different fee or commercial condition must be disclosed and agreed in advance. Proposed default pending commercial approval and external/legal review: ACPRO does not charge a separate survey fee in the MVP. Any installer survey-cost arrangement must be disclosed and agreed in advance. Whether the installer absorbs the cost if the homeowner does not proceed is not final policy. ACPRO does not automatically charge the homeowner or collect survey-cost recovery.

### Step 3 — Arrange and confirm the appointment

The installer coordinates appointment options with the homeowner. ACPRO may record proposed times and status; automated scheduling is not required for the MVP.

Candidate statuses: survey required; appointment proposed; appointment confirmed; rescheduling requested; survey cancelled; survey completed; survey could not be completed. Final state names belong in the later state-machine specification.

Record cancellations, access issues and incomplete visits without automatically assigning blame or applying a penalty. Missed appointments may be rescheduled; no automatic ACPRO charge or penalty applies in the MVP. Repeated issues can be reviewed manually by operations.

### Step 4 — Conduct the survey and record findings

The installer verifies relevant conditions and uses professional judgement. ACPRO needs a concise summary, not a full technical survey application.

Record:
- date and assessment type (on-site or other);
- completed, partially completed or unable to proceed;
- key verified conditions relevant to the quote;
- differences from homeowner-provided information or initial assumptions;
- constraints, dependencies or further checks;
- whether the initial offer remains valid or a revised quote is needed;
- homeowner actions required.

Detailed calculations and supporting technical files may remain in installer records unless needed to explain a disputed change. Collect only information needed for the marketplace workflow.

### Step 5 — Identify scope or price changes

Possible outcomes: no material change; scope clarification without commercial change; revised quote required; unable to proceed; or further information required.

For a material change, record what changed, why, relevant findings, whether price/scope/timing is affected and what the homeowner needs to decide. ACPRO records and explains changes; it does not determine the correct equipment or installation design.

If the job is technically infeasible, stop progression, record and explain the reason, notify the homeowner and follow the agreed recovery path. ACPRO does not overrule technical judgement or automatically penalise a legitimate finding.

### Step 6 — Submit the final scope and quote

The final quote must include:
- total price and VAT position, including any separately stated charges;
- scope of work and equipment/materials at an appropriate level;
- inclusions and exclusions;
- assumptions and dependencies;
- expected timing or scheduling constraints where known;
- warranty commitments actually offered by the installer;
- quote expiry date;
- payment terms;
- material differences from the earlier offer and reasons.

The installer is responsible for the accuracy of its quote, warranties and terms. ACPRO must not invent warranties, payment terms or legal guarantees. Preserve the initial offer and every revised version, timestamp submissions, and display changes rather than silently overwriting prior content.

### Step 7 — Homeowner reviews the final quote

The homeowner may accept, ask a question, reject, request clarification/correction, pause or stop. ACPRO facilitates communication but does not provide unsupported technical endorsement.

Every final quote must specify an expiry date set by the installer. An expired quote requires installer reconfirmation before it is treated as valid. If price or scope changes during reconfirmation, the homeowner reviews the revised quote.

### Step 8 — Handle rejection or non-acceptance

If the homeowner rejects the revised price, follow PRD-005 recovery. Possible outcomes include explanation, an agreed alternative scope, declining the job, reconfirming a still-valid prior offer, reopening bidding under PRD-005 or closing without installation. Whether an installer may bid again depends on approved PRD-005 rules.

**Proposed non-response timing:** notify the homeowner when the final quote is issued; remind after 48 hours; send a final reminder after five calendar days; after seven calendar days without response, mark the job response overdue for manual follow-up. Reconcile these timings with PRD-005 before implementation. Silence is never acceptance and does not authorise automatic installer selection.

### Step 9 — Confirm the final agreement

Proposed sequence:
1. Installer submits final scope and price.
2. Homeowner explicitly accepts the displayed version.
3. Installer reconfirms the agreed scope and price.
4. ACPRO records both confirmations, timestamps and exact quote version.
5. The job becomes eligible for installation planning.

Material changes to price, core scope/equipment, exclusions, responsibilities, material timing, payment terms or warranty commitments require an explanation and renewed explicit confirmation. Never silently edit an accepted quote. Material corrections require a new version and renewed confirmation; administrative corrections must retain an audit entry.

A material post-confirmation variation requires a new quote version or documented variation and explicit agreement before the changed work proceeds. Complex disputes are handled manually.

### Step 10 — Handover to installation planning

Make the agreed quote version, scope, relevant survey summary, outstanding dependencies and homeowner actions, assumptions/exclusions, scheduling preferences and both parties' confirmations available. Installation progress, completion and reviews are covered by PRD-003, PRD-004 and PRD-007.

## 7. Agreed MVP policies and matters requiring external review

The product owner has approved these working defaults:

1. **Survey fees — provisional:** no separate ACPRO survey fee by default. Installer survey-cost treatment, including who bears the cost if the homeowner does not proceed, requires explicit commercial approval and external/legal review.
2. **Appointments:** record cancellations and missed appointments; allow rescheduling; no automatic ACPRO penalty or charge. Manual operations review is available.
3. **Quote validity:** every final quote has an expiry date set by the installer; expired quotes require reconfirmation.
4. **Non-response:** 48-hour reminder, five-day final reminder and manual follow-up after seven calendar days, subject to reconciliation with PRD-005.
5. **Material changes:** explain changes that could affect the homeowner's decision and require renewed explicit confirmation.
6. **Corrections:** preserve versions; never silently change an accepted quote.
7. **Final quote minimum:** price/VAT, scope, equipment/materials, inclusions/exclusions, assumptions/dependencies, timing where known, actual warranty commitments, expiry, payment terms and explanation of material differences.
8. **Survey record:** retain date/type, completion status, relevant verified conditions, differences from initial information, constraints/dependencies, quote impact and homeowner actions.
9. **Technical infeasibility:** stop, explain, record and use controlled recovery; do not automatically penalise legitimate findings.
10. **Post-confirmation variations:** new version or documented variation plus explicit agreement before changed work proceeds.
11. **Contracts and payments:** installer is accountable for its terms. ACPRO's workflow does not claim to replace required contracts or consumer documentation. Homeowner pays installer directly in the MVP; ACPRO does not collect installation payments or hold funds.
12. **Records and retention:** preserve quote versions, explanations, confirmations, relevant survey summaries and operations interventions. Exact retention periods, deletion rules and access controls require separate legal/privacy review; this PRD does not invent a period.
13. **Pilot metrics:** track journey speed, survey completion/rescheduling, initial-to-final changes, quote corrections, acceptance/conversion, expiry/non-response/withdrawal, two-party confirmation and operations time. Metrics are diagnostic, not automatic grounds for installer penalties.

**External review and reconciliation required:** review survey-cost policy and consumer terms before binding them; confirm retention/privacy rules with appropriate advice; reconcile reminder timings with PRD-005; validate commercial assumptions during the pilot. These are implementation dependencies, not unresolved product questions about the default workflow.

## 8. Exceptions and recovery

- **Survey incomplete:** record why, notify relevant parties and agree next steps; do not treat it as verified.
- **Technically infeasible:** record reason and follow PRD-005 recovery; do not automatically penalise a legitimate finding.
- **Material difference from request:** version the scope and determine under PRD-005 whether offers remain valid or bidding must reopen.
- **Homeowner disputes revision:** record concern and follow the agreed recovery process; ACPRO does not adjudicate technical/commercial merits.
- **Installer withdraws after survey:** record stage and reason where provided, notify homeowner and follow PRD-005.
- **Homeowner pauses or stops:** record the decision and previously disclosed conditions; silence is not consent.
- **Quote expires:** ask installer to reconfirm or revise; do not treat it as valid without confirmation.

## 9. Records and audit trail

Preserve survey requirement and reason; appointment proposals, confirmations, changes and cancellations; survey completion status and summary findings; relevant differences from initial assumptions; original and revised quote versions; reasons for material changes; homeowner questions and decisions with timestamps; installer reconfirmation and exact quote version; reasons for non-acceptance, withdrawal or closure where provided; and manual interventions/corrections.

This is a recordkeeping requirement, not a prescribed database schema.

## 10. Pilot success measures

Track the proportion of selected jobs requiring a survey; time from selection to appointment; completion and rescheduling rates; proportion of surveys producing material changes; initial-to-final quote changes; final quote acceptance; time from survey to final quote; expiry, withdrawal and no-response rates; two-party confirmation; common reasons for revisions/abandonment; and operations time spent coordinating surveys and resolving exceptions.

Metrics are diagnostic, not automatic grounds for installer penalties. Early pilot samples will be small and should be interpreted cautiously.

## 11. Open questions and closure status

The 13 product questions reviewed with the product owner are resolved for this draft using the defaults above. They are not all cleared for implementation until dependencies and external review tasks are complete.

| Topic | Status | Follow-up |
|---|---|---|
| Minimum final quote information | Resolved for MVP | Confirm field design during specification |
| Survey findings to retain | Resolved for MVP | Avoid unnecessary personal/property data |
| Reason for survey / no survey | Resolved for MVP | Structured reason plus optional note |
| Survey fees and appointment costs | Provisional commercial proposal | Explicit approval and external/legal review before binding policy |
| Homeowner reminders and timeout | Default agreed | Reconcile timings with PRD-005 |
| Material changes | Resolved for MVP | Explicit reconfirmation |
| Corrections after acceptance | Resolved for MVP | Preserve versions and audit history |
| Quote validity | Resolved for MVP | Installer sets expiry date |
| Contract, warranty and payment information | Resolved for MVP | Legal/consumer review; installer accountable for terms |
| Technical infeasibility | Resolved for MVP | Controlled recovery and manual escalation |
| Post-confirmation variations | Resolved for MVP | New version and explicit agreement |
| Records and retention | Product scope resolved | Retention schedule requires privacy/legal review |
| Pilot metrics | Resolved for pilot | Interpret small samples cautiously |

## 12. Dependencies and related documents

- PRD-001 — Product Vision
- PRD-002 — Homeowner Journey
- PRD-003 — Installer Journey
- PRD-004 — Admin / Operations Journey
- PRD-005 — Bid & Quote Journey
- PRD-007 — Completion & Review
- TEC-001 — Load Estimation Engine
- Proposed TEC-002 — Installer Matching & Opportunity Distribution Engine
- DOM-001 — Domain Model
- STM-001 onward — State-machine documents

## 13. Review status

**Content approved by the product owner.** This document captures the agreed MVP workflow and working defaults for survey coordination, survey records, final quotes, material changes, confirmation, exceptions and pilot measures. Survey-cost allocation remains provisional pending explicit commercial approval and external/legal review.

Approval is limited to product content and working defaults. The final-quote non-response proposal is reminder after 48 hours, final reminder after 5 calendar days, and Operations follow-up after 7 calendar days. These are operational proposals, not contractual/legal SLAs. Gate 1 was closed by founder decision with risk accepted; commercial validation remains unproven. Legal/privacy review is not complete and implementation is not authorised.

**Workflow:** Propose → Discuss → Revise → Approve → Commit. Repository commit is to a review branch with a draft pull request; no merge to `main` is authorised.
