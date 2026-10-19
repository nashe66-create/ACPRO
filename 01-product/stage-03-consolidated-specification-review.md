# ACPRO Stage 03 — Consolidated Product Specification Review Package

**Document:** STG03-001  
**Version:** 0.1  
**Status:** Approved by product owner for repository review  
**Stage:** 03 — Product Specification  
**Review state:** Draft pull request; not merged  
**Scope:** Product decisions, cross-document reconciliation and technical-specification boundaries. This document does not itself authorise implementation.

## 1. Purpose

This package consolidates the Stage 03 decisions approved by the product owner and identifies how the existing product requirements documents (PRD-001 to PRD-008) must remain consistent. It is a review baseline, not a silent replacement of the existing PRDs. Detailed edits to those PRDs should be made against this baseline and reviewed transparently.

Working sequence: **Propose → Discuss → Revise → Approve → Commit**.

## 2. Product direction

ACPRO is a marketplace and workflow platform for residential air-conditioning. The MVP should test whether structured homeowner requirements and installer competition can improve the homeowner buying journey and provide installers with useful opportunities.

The initial marketplace may use manual operations. The MVP should track outcomes through installation and aftercare without requiring the entire transaction or installation process to be automated.

The commercial hypothesis remains unvalidated. Product specification approval is not evidence of market validation and does not itself authorise scaling or major investment.

## 3. Approved MVP boundary

### Included

- Homeowner request creation.
- Structured property, room, dimension, photo and requirement capture.
- Preliminary cooling-load estimates, clearly labelled as estimates and dependent on the information supplied.
- Installer eligibility and opportunity matching/distribution, once its rules are separately specified and approved.
- Installer offers, homeowner comparison and homeowner-controlled selection.
- Survey and final-quote workflow.
- Explicit confirmation by both homeowner and installer of the same final quote and scope.
- Tracking of scheduling, installation, completion, issues, reviews and outcomes.
- Manual Operations handling where automated tooling is not required to validate the marketplace.
- Pilot measures for demand, offers per job, time to first offer, conversion, cancellations, operational effort and contribution.

### Deferred from MVP

- Advanced or automated configuration recommendations.
- Automated equipment/manufacturer selection or compatibility validation.
- AR, room visualisation or indoor-unit visualisation.
- Automated pipe/cable sizing or routing.
- Full automated bill of materials.
- Merchant APIs, live stock/pricing and procurement automation.
- Integrated finance applications or credit decisions.
- Customer payment processing and escrow.

Finance may be captured as an expression of interest only. These exclusions do not prevent later consideration if evidence supports the investment.

### Technical accountability

The installer is responsible for verifying site conditions, assessing installation constraints, determining the final technical design, selecting suitable equipment, confirming the final scope and price, and carrying out compliant work. ACPRO's preliminary estimates and homeowner-provided information must not be represented as a verified engineering design.

## 4. Reconciled end-to-end journey

1. **Homeowner request:** capture property, rooms, photos, requirements and known constraints.
2. **Completeness review:** identify missing or conflicting information; do not treat administrative completeness as technical approval.
3. **Installer eligibility and distribution:** apply approved eligibility criteria and the separately approved distribution policy; record who received the opportunity and when.
4. **Offers and selection:** installers decide whether to respond and submit offers; the homeowner compares offers and retains selection control.
5. **Survey and final quote:** the installer verifies the site and confirms the technical solution, scope, price, exclusions and relevant commercial details.
6. **Mutual final agreement:** homeowner and installer explicitly confirm the same final quote and scope.
7. **Scheduling and installation:** only after mutual confirmation, the homeowner and installer coordinate scheduling and delivery directly. ACPRO tracks milestones and handles exceptions rather than managing routine delivery details.
8. **Completion and aftercare:** record reported completion, homeowner acknowledgement, open issues, aftercare details and review/outcome information.

## 5. Reconciled timing rules

The following are separate event-specific timers. One timer must not silently reset or replace another.

| Event | Rule | Status |
|---|---|---|
| Installer bidding | 48 hours from opportunity distribution | Existing proposal retained for reconciliation in PRD-005 |
| Homeowner offer selection | 3 calendar days after bidding closes; one extension of 3 calendar days | Existing proposal retained for reconciliation in PRD-005 |
| Selected installer acknowledgement | Within 24 hours; reminder after 12 hours | Existing proposal retained for reconciliation in PRD-005 |
| Homeowner response to final quote | Reminder after 48 hours; final reminder after 5 calendar days; Operations follow-up after 7 calendar days | Existing proposal retained for reconciliation in PRD-006 |
| Homeowner response to completion notification | Reminder after 48 hours; final reminder after 5 calendar days; Operations review after 7 calendar days | Accepted operational default |
| Installer acknowledgement of an issue | Target acknowledgement within 2 working days | Accepted operational target; not a contractual SLA and pending external/legal review where relevant |

The specification must define the start event for each timer, the applicable calendar/working-day basis, the responsible party, what message or action occurs at expiry, and how exceptions are recorded. These defaults must not be described as legal requirements.

Expiry may trigger a reminder or manual Operations follow-up. It must not automatically imply acceptance, satisfaction, cancellation, fault, issue resolution, installer selection or administrative closure.

## 6. Lifecycle and exception rules

- No installation planning before both parties explicitly confirm the same final quote and scope.
- Following that confirmation, homeowner and installer coordinate scheduling directly; ACPRO tracks milestones and supports exceptions.
- Either party may report a cancellation. Operations records who reported it, the reason if provided, timestamps, communications and history. Recording a report is not adjudicating fault or requiring Operations to approve the party's decision.
- Installation status and issue status are separate. Physical installation may be recorded as complete while an issue remains open.
- If an issue remains unresolved, Operations must review the case before administrative closure. Closure must not imply that the issue was resolved or that the homeowner is satisfied.
- Silence is not acceptance, satisfaction, resolution or agreement.
- Reopening a job or correcting a material record requires a reason and preserved history.
- Completion checklists are required. Inconsistencies are flagged to Operations; a universal manual approval of every completion is not required.
- Operations focuses on exceptions, disputes and escalations rather than routinely managing each installation milestone.
- Do not automatically restart bidding, expand distribution, select the next installer, or otherwise decide for the homeowner when there are too few offers or an installer does not respond. Explain the situation and offer the homeowner clear choices under the approved policy.

## 7. Installer matching and opportunity distribution

Matching and distribution must be specified separately as a rules-based MVP technical specification (TEC-002). AI is not a prerequisite.

### Required areas

- **Hard eligibility filters:** service area, verified credentials, relevant capability, active status, and availability where that information is collected and sufficiently current.
- **Distribution strategy:** define whether opportunities are broadcast, distributed in controlled batches, or offered sequentially. No strategy is approved by this package.
- **Fairness and prioritisation:** define how job fit, capacity, responsiveness and installer exposure may be considered; document reasons for exceptions and avoid unexplained or commercially undisclosed preference.
- **No-bid/low-bid recovery:** verify distribution and information quality, record voluntary decline reasons where available, explain the outcome to the homeowner, and present options.
- **Homeowner control:** do not automatically expand distribution, restart bidding or select an installer without the agreed policy and appropriate homeowner direction.
- **Operations oversight:** provide an auditable record of eligibility decisions, invitations, delivery, deadline changes, recovery actions and manual overrides.
- **Performance measurement:** measure eligible installers reached, response rates, offers per opportunity, time to first offer, no-bid rate, distribution concentration, homeowner selection and Operations effort.

Hard eligibility rules, the distribution policy, prioritisation weights, thresholds and exception paths remain to be specified and approved. This package does not select an algorithm or weights.

## 8. Policies that remain proposals or require review

Do not silently promote the following to final policy:

- Commercial treatment of survey fees and survey costs where a homeowner does not proceed.
- Installer verification evidence, renewal and re-check frequency.
- Review moderation, publication and data-retention rules.
- Competition-indicator thresholds.
- Privacy disclosures, record-retention periods, complaint handling and escalation obligations.
- Legal, safety, insurance, regulatory and contractual terms requiring competent external review.

Existing proposals may be carried forward for discussion, but must remain labelled as proposals until their designated approval is recorded.

## 9. Cross-document consistency checklist

| Document | Required alignment |
|---|---|
| PRD-001 — Product Vision | Retain longer-term ambition, but make the MVP boundary explicit: no advanced configuration, equipment selection or AR/visualisation in MVP. Keep preliminary cooling-load estimates distinct from verified design. |
| PRD-002 — Homeowner Journey | Ensure request capture and estimates match the MVP boundary; align selection, mutual final agreement, completion reminders and open-issue handling. |
| PRD-003 — Installer Journey | Preserve installer responsibility for site verification, final design, equipment selection, quote and installation; align acknowledgement and issue-response targets. |
| PRD-004 — Admin / Operations Journey | Align distribution controls, manual recovery, completion reminders, seven-day Operations review, issue escalation and audit history. |
| PRD-005 — Bid & Quote Journey | Reconcile bidding, homeowner decision and installer acknowledgement timers; retain homeowner control in low/no-bid recovery; do not imply unresolved proposals are approved. |
| PRD-006 — Survey & Final Quote Journey | Keep final-quote reminders distinct from offer-selection timers; enforce versioned scope/price and explicit mutual confirmation before scheduling. |
| PRD-007 — Completion & Review Journey | Apply accepted 48-hour, 5-calendar-day and 7-calendar-day completion defaults; distinguish completion, acknowledgement, issue resolution and administrative closure. |
| PRD-008 — Job Lifecycle & State Transitions | Reflect the same final-agreement gate, direct scheduling coordination, separate issue status, cancellation recording, reopening history and event-specific timers without expanding the lean state model unnecessarily. |
| TEC-002 — Installer Matching & Opportunity Distribution | Specify eligibility, distribution, fairness, no-bid recovery, homeowner control, Operations oversight and measurable outcomes; keep strategy choices open until explicitly decided. |

## 10. Pilot measures and evidence discipline

The constrained pilot should measure, at minimum:

- Requests received and complete enough to distribute.
- Eligible installers reached per opportunity.
- Opportunities with zero, one or multiple offers.
- Time to first offer and total bidding time.
- Offer-to-selection and selection-to-final-agreement conversion.
- Survey, final-quote change, cancellation and completion outcomes.
- Homeowner non-response and installer acknowledgement rates.
- Issues, complaints, reopening and aftercare outcomes.
- Operations interventions and effort per job.
- Indicative contribution per completed job.

These measures are diagnostic, not proof of market-wide demand. Distinguish observed pilot results from assumptions, hypotheses and forecasts. The commercial hypothesis remains unvalidated until appropriate evidence is gathered.

## 11. Governance and approval boundary

This package records the product owner's approval of the consolidated Stage 03 review baseline. It does not claim that every existing PRD has already been edited to match it, that every unresolved policy is settled, or that external legal/commercial review has been completed.

Repository work should be delivered in a dedicated review branch and draft pull request. No merge to `main` is authorised by this package. Detailed changes to existing PRDs should be proposed against this baseline with visible diffs, preserving unresolved questions and the existing decision history.

**Next step after this package:** reconcile the individual PRDs against the checklist, review the actual diffs, and obtain any required approval before committing those document revisions.
