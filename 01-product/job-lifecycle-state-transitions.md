# ACPRO PRD-008 — Job Lifecycle & State Transitions

**Version:** 0.3  
**Status:** Approved content; awaiting repository review  
**Product:** ACPRO  
**Stage:** Stage 03 — Product Specification  
**Related documents:** PRD-002 Homeowner Journey; PRD-003 Installer Journey; PRD-004 Admin / Operations Journey; PRD-005 Bid & Quote Journey; PRD-006 Survey & Final Quote Journey; PRD-007 Completion & Review Journey.

> This document defines only the essential ACPRO job lifecycle, transition rules, permissions and safeguards. It does not make ACPRO responsible for managing an installation. The installer and homeowner manage delivery directly once they have agreed the final quote and scope. Gate 1 status is unchanged.

## 1. Purpose and boundary

ACPRO needs a reliable record of the marketplace job from installer selection through agreed quote, installation outcome and homeowner feedback. Once the homeowner and installer have confirmed the final price and scope, they manage scheduling and delivery directly.

ACPRO records key milestones, notifies the parties, preserves a history of important changes and provides a lightweight route for reporting cancellations or problems. Operations is not expected to coordinate routine installation work or approve ordinary milestones.

**Out of scope:** project scheduling/coordination, technical installation management, technical certification, automated dispute decisions, payment handling, compensation decisions and detailed UI/API/database design.

## 2. Essential lifecycle states

| State | Meaning | Key rule |
|---|---|---|
| `awaiting_installer_acknowledgement` | Homeowner has selected an installer; acknowledgement is pending. | Follow the agreed selection/acknowledgement rules in PRD-005. |
| `awaiting_final_quote_confirmation` | Survey or scope clarification and/or a final quote is still required, or the parties have not confirmed the same final quote version. | Scheduling is not permitted until both parties confirm the same final quote and scope. |
| `ready_to_schedule` | Both parties have confirmed the final quote and scope. | Installer and homeowner arrange the date directly. |
| `scheduled` | An installation date has been agreed and recorded. | Installer maintains the date and records changes. |
| `in_progress` | The installer has started physical work. | Installer records the start; a scheduled date alone does not mean work has started. |
| `completed` | Installer has submitted the required completion record and checklist. | Records reported completion; does not certify workmanship or mean the homeowner is satisfied. |
| `cancelled` | The job will not proceed or has stopped and is recorded as cancelled. | Record who reported it, reason, timing and job stage. Do not infer fault or commercial consequences. |

The state names are working labels, not approved database enum values. Quote confirmation, homeowner acknowledgement, issues and reviews are separate status dimensions; they must not be conflated with the job lifecycle.

## 3. Transition rules

1. **Installer selected → acknowledgement pending.** Create the job record when the homeowner selects an installer.
2. **Acknowledgement/scope/quote steps → ready to schedule.** The job can enter `ready_to_schedule` only when the homeowner and installer have confirmed the same final quote and scope version. If the quote changes materially, the revised version must be confirmed by both parties under PRD-006.
3. **Ready to schedule → scheduled.** The installer agrees the date directly with the homeowner and records it in ACPRO. No Operations approval is required.
4. **Scheduled → scheduled (date changed).** The installer agrees the new date with the homeowner, records the revised date and reason, and ACPRO notifies both parties. Keep the prior date/change history. Operations intervenes only if a problem is reported or an exception requires attention.
5. **Scheduled → in progress.** The installer marks work as started when physical installation begins. ACPRO records the timestamp. A scheduled date must not automatically trigger this transition.
6. **In progress → completed.** The installer submits the essential completion record and checklist. ACPRO checks that required fields are present; inconsistencies can be flagged for Operations, but there is no universal manual approval requirement.
7. **Any state → cancelled.** A homeowner or installer can report cancellation. Operations can update the job to `cancelled` based on that report without approving the cancellation itself. Record the reporter, reason, date/time and job stage. Preserve the quote, agreed variations, communications, work completed, issues and history as relevant.
8. **Completed → reopened (exception only).** Operations may reopen a completed or administratively closed job when appropriate, recording a reason and preserving the original completion/closure history. Reopening does not decide liability or fault.

If work has started before a cancellation, record the cancellation as an exception with the work performed and relevant history preserved. Do not automatically decide compensation, refunds, liability or blame.

## 4. Completion and homeowner response

The installer’s essential completion record includes:
- completion date;
- confirmation that the agreed scope was completed;
- completion checklist results;
- any outstanding issues;
- homeowner handover and aftercare information;
- any agreed scope variations.

Photos or supporting documents are required where relevant, not universally.

The homeowner is notified when completion is submitted and can acknowledge completion, leave a review or report a problem. Homeowner acknowledgement is separate from the installation state. The job can be recorded as `completed` without waiting for the homeowner to respond.

If the homeowner does not respond, use the reminder proposals already recorded in PRD-007 (48 hours, 5 calendar days, then Operations review after 7 calendar days), subject to reconciliation with PRD-005/006. Silence is not satisfaction, acceptance of disputed work or issue resolution. If an issue remains open, Operations reviews it before administrative closure. Administrative closure is a recordkeeping outcome, not proof of satisfaction or defect-free work.

## 5. Permissions and Operations boundary

- **Installer:** acknowledges selection; confirms quote/scope with the homeowner; records the agreed schedule and changes; marks physical work started; submits completion information; records action taken on an issue.
- **Homeowner:** selects an installer; confirms or declines quote/scope; agrees scheduling directly with the installer; acknowledges completion, reviews the experience or reports a problem.
- **Operations:** handles reported exceptions and disputes; may update a job to `cancelled` based on either party’s report; may correct an erroneous status or reopen a job when appropriate. Operations does not approve routine scheduling, start or completion milestones.

Operations status overrides must have a recorded reason and an audit entry. Overrides must not bypass essential safeguards, including mutual final quote confirmation before scheduling.

## 6. Issues and reviews — separate from job status

A reported issue or review must not automatically change the installation state. The installer records the action taken and the homeowner is notified. Operations reviews disputes or cases requiring intervention. Installer action or homeowner silence alone does not mean an issue is resolved or that the homeowner is satisfied.

A completed installation may have an open issue. If an issue remains unresolved, Operations must review it before administrative closure. A new issue after closure does not automatically reopen the job; Operations may reopen the job with a recorded reason where appropriate. This is an exception path, not a routine project-management workflow.

## 7. Audit and safeguards

ACPRO must retain an auditable history of important state changes and corrections, including:
- previous and new state;
- who initiated the change and when;
- reason where applicable;
- the relevant confirmed quote version;
- cancellation, completion and issue records where relevant.

Authorised users may correct information they are permitted to maintain, but important historical records must not be silently overwritten. Preserve the original value/event and record the correction, who made it and when; capture a reason for significant changes.

A lifecycle status records workflow information only. It does not certify technical quality or compliance, determine legal responsibility, waive rights or establish homeowner satisfaction.

## 8. Timing dependencies and open policy items

This PRD does not introduce new timers. Existing timing proposals in PRD-005, PRD-006 and PRD-007 must be reconciled before implementation. In particular, selection acknowledgement, homeowner completion reminders and issue-response timings must remain proposals until reviewed consistently across those documents.

Exact user-facing labels, technical state identifiers, detailed permissions, privacy/retention requirements and implementation mechanics belong in later specification work. They do not block this lean lifecycle definition unless a conflict is identified during review.

## 9. Approval and repository status

**Content approved by the user.** This version incorporates the decisions made during discussion and removes the detailed project-management workflow from v0.2. The document is committed to a dedicated review branch and submitted as a draft pull request. Formal gate status is unchanged.

Workflow: **Propose → Discuss → Revise → Approve → Commit.** This approval authorises a commit to the dedicated review branch and a draft PR only. Do not merge into `main` without explicit permission.
