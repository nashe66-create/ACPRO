# PRD-007 — Completion & Review Journey

**Product:** ACPRO  
**Document:** PRD-007 — Completion & Review Journey  
**Version:** 0.4  
**Status:** Product-owner approved; awaiting repository review  
**Stage:** Stage 03 — Product Specification  
**Gate status:** Gate 1 was closed by founder decision with risk accepted; commercial validation remains unproven. This document does not change formal gate status or authorise implementation.

---

## 1. Purpose

Define how ACPRO coordinates the transition from an agreed final quote and installation planning through installation, completion confirmation, issue reporting and post-installation review.

This document complements PRD-002 — Homeowner Journey, PRD-003 — Installer Journey, PRD-004 — Admin / Operations Journey, PRD-005 — Bid & Quote Journey and PRD-006 — Survey & Final Quote Journey. It does not define detailed UI, database schemas, APIs, legal contract terms, technical installation methods or a full dispute-resolution service.

## 2. Principles

1. The installer remains responsible for carrying out the installation safely, competently and in accordance with applicable requirements and the agreed scope.
2. ACPRO coordinates workflow and records information; it does not certify technical quality or act as the installer.
3. Installation planning should not begin until the final scope and quote have been explicitly confirmed as required by PRD-006.
4. Completion must be recorded separately from the installer's assertion that work is complete and the homeowner's acknowledgement.
5. A homeowner acknowledgement is not a waiver of legal rights, acceptance of hidden defects or proof that all obligations have been discharged.
6. Changes to agreed scope or price must follow the variation and reconfirmation rules in PRD-006.
7. Issues should be captured and routed for human follow-up; the MVP does not automatically adjudicate fault or technical quality.
8. Reviews should reflect genuine experiences, use proportionate moderation and avoid exposing private information.
9. Manual operations are acceptable during the MVP.
10. Preserve a clear, proportionate audit trail.

## 3. Actors

- **Homeowner:** coordinates access, receives installation updates, reports concerns, confirms whether the installation visit occurred and may submit a review.
- **Installer:** plans and performs the installation, communicates delays or changes, records completion information and responds to reported issues.
- **ACPRO:** records status, facilitates communication, collects completion evidence and review feedback, and presents the relevant next steps.
- **ACPRO operations:** monitors stalled jobs, handles exceptions, reviews complaints and moderates reviews where necessary.

## 4. Entry conditions

The journey begins when:
- the final scope and quote have been confirmed by the homeowner and installer under PRD-006;
- required dependencies, permissions and homeowner actions are identified;
- installation planning can begin.

If the parties have not confirmed the same quote version, the job must not enter the agreed-installation stage.

## 5. Journey overview

1. Installer proposes or confirms an installation date/window.
2. Homeowner confirms access and relevant preparations.
3. Installer records schedule changes, delays or cancellation.
4. Installation takes place, or an exception is recorded.
5. Installer submits completion details and supporting evidence appropriate to the job.
6. Homeowner is notified and can acknowledge completion, raise an issue or indicate the visit did not occur.
7. Any reported issue is routed to the installer and, where needed, ACPRO operations.
8. The job reaches an appropriate closed/completed state only under an agreed rule.
9. Homeowner is invited to leave a review after a suitable point in the journey.
10. Review and outcome metrics are recorded.

## 6. Step-by-step workflow

### Step 1 — Schedule installation

The installer proposes an installation date or window and records known prerequisites. The homeowner confirms access and any required preparation. ACPRO may record the agreed date, communications and dependencies; full calendar integration is not required for the MVP.

The installer must not treat an unconfirmed date as agreed. Scheduling does not change the confirmed scope or quote.

### Step 2 — Manage schedule changes

If either party needs to reschedule, the change and reason (where provided) are recorded, relevant parties are notified, and a replacement date/window is agreed. The MVP does not automatically apply cancellation fees or penalties. Repeated delays, inability to contact a party or material disruption can be referred to operations.

If site conditions or requested work imply a material change to the agreed scope or price, use PRD-006 variation and reconfirmation rules rather than handling it as a simple scheduling update.

### Step 3 — Record installation progress

The installer may update the job as scheduled, in progress, delayed, paused or unable to proceed. These are proposed status labels for later state-machine design, not final technical identifiers.

If work cannot proceed, record the reason and next action, notify the homeowner and use manual operations support where required. ACPRO does not make technical judgements about whether work should continue.

### Step 4 — Installer submits completion

When the installer considers the agreed work complete, they submit a completion record containing at least:
- completion date;
- summary of work completed against the agreed scope;
- any agreed variations and the version/record of the homeowner's confirmation;
- outstanding items, exclusions or follow-up work, if any;
- relevant handover information or documents that the installer is expected to provide;
- confirmation that the installer has completed its own required checks and handover steps, without ACPRO certifying their adequacy.

The product should support relevant attachments or links where practical, but the MVP need not create a full document-management system. Do not collect unnecessary sensitive data.

### Step 5 — Homeowner acknowledgement

Notify the homeowner that the installer has submitted completion. The homeowner should be able to indicate one of the following:
- installation appears complete and no issue is being reported at this time;
- an issue or outstanding item needs follow-up;
- the installation did not take place or the recorded completion is disputed;
- more time or clarification is needed.

The interface must explain that acknowledgement records the homeowner's current response; it is not a waiver of statutory rights or a guarantee that defects cannot emerge later.

### Step 6 — Handle no response

The homeowner may not respond to the completion notification. ACPRO should remind them and mark the case as awaiting homeowner response. No response must not be represented as positive homeowner confirmation.

Accepted default: send a reminder after 48 hours, a final reminder after 5 calendar days, and refer for Operations review after 7 calendar days without a homeowner response. Silence must not be treated as homeowner confirmation or satisfaction. Any administrative closure without acknowledgement must preserve that distinction and allow later issue reporting through an appropriate route.

### Step 7 — Report and resolve an issue

A homeowner may report incomplete work, damage, a discrepancy from the agreed scope, a defect/concern, missing handover information or another issue. Capture a category, description, date, optional evidence and requested next step. Avoid forcing the homeowner to make a technical diagnosis.

Notify the installer and record responses, proposed actions and resolution status. ACPRO operations may intervene where there is no response, a disagreement, safety concern, repeated delay or potential platform-policy breach. ACPRO records the process; it does not automatically decide legal liability, technical fault or compensation.

Any additional charge or scope variation must be separately explained and explicitly agreed under PRD-006. The installer must not use an issue report as implicit authorisation for paid extra work.

### Step 8 — Close the installation journey

A job may be recorded as complete when the installer has submitted completion information and the platform's approved closure conditions have been met. If an issue remains open, completion of the physical installation and resolution of the issue should be represented separately.

The physical installation may be recorded as complete while an issue remains open; installation status and issue status must be tracked separately. An open issue does not prevent the physical installation from being marked complete. The issue remains open and tracked separately. Operations review is required before the overall job is administratively closed while an issue remains unresolved. Do not erase the issue or imply that closure means the homeowner is satisfied.

### Step 9 — Invite a review

After completion, ACPRO may invite the homeowner to review their experience. Reviews should relate to a real ACPRO job and should distinguish the homeowner's experience from any technical certification by ACPRO. The homeowner should be able to skip the invitation.

The proposed review format is an overall rating, category ratings and an optional free-text comment. Suggested categories include communication, punctuality, quote clarity, professionalism and cleanliness. Ratings are to be displayed for information but must not determine installer ranking in the MVP. Review timing and the detailed publication/moderation policy remain open for discussion.

### Step 10 — Review moderation and response

Reviews are proposed to be moderated before publication under clear, published rules. ACPRO may hide or decline to publish content that violates those rules, exposes personal data, is abusive, irrelevant or appears fraudulent. Moderation must be proportionate and recorded. Disagreement or a negative rating alone is not sufficient reason to suppress a review.

The MVP should provide a manual reporting and moderation process. Ratings may be displayed, but they must not be used to rank installers during the MVP. Public ranking or automated ranking consequences would require a separate future policy decision.

## 7. Proposed completion record

The completion record should link to the agreed quote version and include completion date, work summary, outstanding items, relevant handover materials, agreed variations, installer submission timestamp and homeowner response/status. Keep a history of changes and any operations intervention.

A structured completion checklist is required for every job. Photos or documents should be collected when relevant to the job, an outstanding item, a handover requirement or an issue. Evidence is a record of what was submitted, not proof that ACPRO has certified regulatory compliance or workmanship.

## 8. Proposed issue handling

Suggested issue categories for discussion:
- installation not completed / attendance disputed;
- incomplete work or outstanding item;
- difference from agreed scope;
- damage or cleanliness concern;
- equipment or operation concern;
- missing handover information;
- scheduling or communication issue;
- other.

These categories are for routing and reporting only. Homeowners should be able to describe the issue in their own words. Urgent safety concerns should be signposted to appropriate immediate channels and escalated for manual review; ACPRO should not present itself as an emergency service.

## 9. Proposed review principles

- Reviews must be tied to a genuine job or clearly labelled as otherwise verified.
- Do not require a positive review to close a job or receive support.
- The homeowner can decline to review.
- Publish only after the homeowner has submitted and the review has passed any required moderation.
- Provide a way to report a review and a way for the installer to respond, subject to an approved policy.
- Protect personal information and do not publish property details, private contact information or sensitive attachments.
- Do not automatically equate star rating with technical quality or regulatory compliance.
- Reviews must be moderated before publication under clear rules. Review retention, editing, removal, response and appeal rules need a documented policy before launch. Ratings may be displayed but do not affect installer ranking during the MVP.

## 10. Proposed success measures

Track:
- scheduled installations that proceed on the planned date;
- rescheduling, delay and no-show rates;
- time from final quote agreement to installation;
- completion records submitted with required fields;
- homeowner response rate to completion;
- reported issue rate and issue categories;
- time to first installer response and time to resolution;
- unresolved issues at administrative closure;
- review invitation and submission rates;
- review moderation and dispute rates;
- homeowner satisfaction signals and operations time per job.

Metrics should be interpreted cautiously in a small pilot. They are diagnostic and should not automatically penalise installers without a fair, contextual review process.

## 11. Proposed decisions and remaining open questions

The following decisions and proposals are recorded with their current approval status. The product owner has approved this PRD as a whole. Items explicitly marked as proposals or open questions remain unresolved and are not silently converted into final product rules.

### 11.1 Decisions and proposals incorporated in v0.4

1. **Completion evidence:** A structured checklist is required for every job; photos or documents are collected when relevant.
2. **Homeowner non-response — proposed:** ACPRO operations must review the case before any administrative closure decision. Silence is not confirmation or satisfaction.
3. **Open issue — approved:** The physical installation can be marked complete while an issue remains open, provided installation and issue statuses are tracked separately. Operations review is required before the overall job is administratively closed while an issue remains unresolved. Closure must not imply that the issue is resolved or that the homeowner is satisfied.
4. **Review format:** Overall rating, category ratings and an optional comment.
5. **Review publication:** Reviews are moderated before publication under clear rules.
6. **Review effect on ranking:** Ratings may be displayed, but do not determine installer ranking during the MVP.
7. **Aftercare:** Record installer-provided warranty and aftercare contact details; handle issues manually during the MVP.

### 11.2 Remaining open questions

1. **Homeowner acknowledgement window and reminders — accepted default:** reminder after 48 hours, final reminder after 5 calendar days, and Operations review after 7 calendar days without response. This is a completion-specific timer, separate from bidding and final-quote timers.
2. **Issue acknowledgement — accepted operational target:** installer acknowledgement within 2 working days. This is not a contractual SLA and remains subject to external/legal review where relevant. Operations follows up if the target is missed.
3. **Safety concerns:** What minimum signposting and manual escalation procedure should be provided for a reported urgent safety concern, without ACPRO acting as an emergency service? Proposed principle: tell users not to use the platform for emergencies and to contact appropriate emergency or qualified professional services directly; route the report to operations for follow-up, without delaying the user's immediate action.
4. **Review timing:** Should the review invitation be sent immediately after homeowner acknowledgement, after a short delay, or after an issue is resolved where one is open? Proposed default: invite after acknowledgement or after operations has reviewed a no-response case; if an issue is open, allow a review of the experience without requiring issue closure, while clearly keeping issue handling separate.
5. **Installer review responses:** Should installers be allowed a public response to a published review, and should the response be moderated? Proposed default: one factual response, subject to the same published rules and moderation; no public disclosure of private customer/job information.
6. **Disputes and reopening:** Who can reopen a completed job or issue, and for how long? Proposed default: homeowners can report a later issue through an accessible support route; operations can reopen the platform record when appropriate. Any time limit should not be presented as limiting statutory rights or warranty rights and needs legal review.
7. **Data retention:** What retention schedule applies to completion evidence, issue reports and reviews? This requires a separate privacy/legal decision; no fixed period is proposed here.

Whole-document approval accepts this as the current product specification while preserving the distinctions above. Completion-response timing and the issue acknowledgement target are accepted operational defaults/targets. Other policy questions remain open. Expiry triggers reminders or follow-up only; it never creates implicit acceptance, satisfaction, issue resolution or closure.

## 12. Dependencies and related documents

- PRD-001 — Product Vision
- PRD-002 — Homeowner Journey
- PRD-003 — Installer Journey
- PRD-004 — Admin / Operations Journey
- PRD-005 — Bid & Quote Journey
- PRD-006 — Survey & Final Quote Journey
- Proposed state-machine specifications for installation, issue handling and review moderation
- Privacy, retention and review policy decisions

## 13. Review status

Product owner has approved this document as a whole for repository review. Completion-response timing and the issue acknowledgement target are accepted operational defaults/targets as stated in Section 11. Other policy questions remain open. Gate 1 was closed by founder decision with risk accepted; commercial validation remains unproven. This document does not authorise implementation.

**Workflow:** Propose → Discuss → Revise → Approve → Commit. After explicit approval, commit to a dedicated review branch and open a draft pull request. Do not merge into `main` without explicit permission.
