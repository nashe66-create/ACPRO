# DOMAIN-001 — Core Domain Model & Minimum Architecture

**Status:** Draft for review  
**Version:** 0.1  
**Stage:** 04 — Domain Model  
**Purpose:** Define only the core concepts and technical boundaries needed to build the first end-to-end ACPRO workflow.

## 1. Scope and working rule

Stage 03 is frozen. The existing PRDs are the product reference; this document does not reopen their decisions or create another specification series. If implementation exposes a genuine conflict, record the specific conflict and resolve it before changing the reference.

Build the smallest useful workflow first:

1. A homeowner submits an installation request.
2. An eligible installer can access that opportunity.
3. The installer submits an offer.
4. The homeowner reviews offers and selects an installer.
5. In later increments, the parties complete the survey, confirm the same final quote and scope, record installation and completion, and handle reviews or issues.

Manual Operations support is acceptable for the pilot. Automated design, equipment selection, payments, finance, merchant integrations and sophisticated matching are outside this first build.

## 2. Core records

These are conceptual responsibilities, not a requirement to create exactly five database tables.

### User and profile
A person using ACPRO, with a role and profile information. The same identity model may support a homeowner or installer role. Installer verification and eligibility must be checked before access to relevant opportunities; a profile alone does not establish eligibility.

### Job
One installation opportunity owned by one homeowner. It contains the submitted property and room information, photos/documents, requirements, preliminary estimate (where available) and current workflow status. A job can describe multiple rooms for one installation opportunity.

### Offer
A proposal submitted by one installer against one job. It captures the proposed price, scope, assumptions, exclusions and relevant conditions. A job may have multiple offers; each offer belongs to one job and one installer. Once submitted, an offer must not be silently overwritten.

### Agreement and installation
The job's selected installer and the later survey, final quote/scope, mutual confirmation, installation progress and completion. Keep the current stage easy to query, while retaining issued quote versions and identifying exactly which version each party confirmed. This can be split into separate tables or records if the implementation requires it; do not pre-design the split now.

### Activity history
A lightweight, append-oriented record of significant actions: who did what and when, including offer submission, selection, quote issuance/revision, agreement confirmation, status changes, cancellation reports and issue reports. It supports accountability and troubleshooting, not a complex event-sourcing architecture.

## 3. Relationships

- One homeowner can create many jobs.
- One job can contain multiple rooms and multiple offers.
- Each offer belongs to one job and one installer.
- A job has at most one currently selected installer.
- A selected installer may produce survey findings and one or more identifiable final-quote versions for that job.
- One final quote/scope version is the version confirmed by both parties before installation planning.
- Activity history entries relate to the relevant job and, where applicable, the user and offer.

## 4. Essential rules

1. **Permissions:** Homeowners can access their own jobs and offers for those jobs. Installers can access only opportunities they are eligible and authorised to see, and their own offers. Server-side checks enforce these rules.
2. **Selection is not agreement:** selecting an installer does not accept the final installation price or scope.
3. **Mutual final confirmation:** installation planning must not start until homeowner and installer have explicitly confirmed the same final quote and scope version.
4. **Preserve history:** retain submitted offers and issued final quotes sufficiently to show what was presented and agreed. A revision creates a new identifiable version; it does not erase the prior version.
5. **Separate completion and issues:** physical installation may be marked complete while an issue remains open. Preserve the distinct issue status and require Operations review before administrative closure while an issue is unresolved, as defined in the existing product reference.
6. **No inferred consent:** a timer, reminder, lack of response or status expiry never constitutes acceptance, installer selection, issue resolution, homeowner satisfaction or agreement to a revised quote.
7. **Traceability:** record the actor and timestamp for significant changes. Cancellation can be reported by either party and recorded with source/reason; Operations need not approve that report before recording it.
8. **Keep matching simple:** use explicit eligibility checks and a simple, inspectable distribution rule for the pilot. Do not introduce AI or complex ranking. Do not silently broaden distribution after too few offers; preserve the homeowner's control over whether to proceed or expand.

## 5. Minimum technical architecture

Use the repository's existing application stack if one exists and is suitable. Before selecting or adding a framework, inspect the current code and deployment setup. This document intentionally does not prescribe an unverified stack.

The minimum logical components are:

- **Web/application interface:** homeowner request and offer review; installer opportunity and offer workflow.
- **Server-side application/API:** authenticate users, enforce role and ownership checks, validate state transitions, and perform writes. Do not rely on client-side checks alone.
- **Relational data store:** persist users/profiles, jobs, offers, agreement/quote versions, workflow status and activity history with explicit relationships and integrity constraints.
- **Private file storage:** store property photos and job documents with access controlled through the application. Do not make private uploads publicly readable by default.
- **Notifications:** notify the relevant party of meaningful actions. Initial notifications can be simple; timers must trigger reminders/follow-up only, never consent or automatic agreement.
- **Operations access:** provide a limited, auditable way to inspect exceptions and record operational interventions.

Avoid microservices, queues, real-time infrastructure, a sophisticated rules engine or extra paid services unless the actual implementation demonstrates a need. Keep the first workflow deployable and testable as one coherent application.

## 6. Build increments and acceptance checks

### Increment 1 — request to selection
- A homeowner can submit and later view a job they own.
- Required fields are validated; photos/documents are stored privately.
- An eligible installer can see an authorised opportunity.
- An installer can submit an offer and subsequently view their own offer.
- The homeowner can compare offers for their job and select one installer.
- Other installers cannot alter the homeowner's job or another installer's offer.
- Selection is recorded with actor and timestamp and does not imply final quote acceptance.

### Increment 2 — survey and final agreement
- The selected installer can record survey findings and issue a final quote/scope.
- Revisions remain identifiable; both parties can see which version is current.
- Installation planning remains blocked until both parties confirm the same version.
- Non-response triggers the agreed reminder/Operations follow-up rules, not automatic acceptance.

### Increment 3 — installation, completion and issues
- The installer can record scheduling/progress and physical completion.
- The homeowner can acknowledge completion or report an issue.
- Installation status and issue status remain separate.
- An unresolved issue triggers the required Operations review before administrative closure.
- Completion response and issue acknowledgement follow the existing agreed operational targets.

## 7. Explicitly deferred

No exhaustive field catalogue, elaborate schema, separate event-sourcing system, advanced installer ranking, automatic cooling-load/design engine, manufacturer selection, BOM generation, finance application, customer payment processing, escrow, merchant integrations or automated scheduling in this baseline.

## 8. Decision boundary

This document establishes the lean conceptual model and minimum safeguards. Exact database columns, framework choices, distribution mechanics and UI details should be decided from repository inspection and the first implementation slice—not by expanding this document in advance.

The existing PRDs remain the reference for detailed journey behaviour and agreed operational timings. This document does not authorise merging to `main`; implementation changes remain reviewable through dedicated branches and draft pull requests.
