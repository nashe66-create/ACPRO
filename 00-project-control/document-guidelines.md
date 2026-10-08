# ACPRO Document Guidelines

## Purpose
These guidelines define how ACPRO project documents are created, reviewed, approved, maintained and connected to one another.
They apply to every substantive ACPRO document and are intended to keep the project collaborative, traceable and aligned with the agreed development roadmap.

## 1. Collaborative Creation
Every substantive document is created collaboratively.
The working process is:
> Propose → Discuss → Revise → Approve → Commit
The assistant may suggest wording, structure, questions, alternatives and recommendations, but product decisions are made by the user.
No decision becomes an accepted project decision simply because the assistant has written it.

## 2. No Silent Assumptions
If something has not been decided, it must not be presented as decided.
Unresolved information should be clearly identified as one of: Decision, Assumption, Open question, Hypothesis, Research required, Recommendation.
These categories must not be blurred.

## 3. Review Before GitHub
GitHub is the source of truth for approved ACPRO project documentation.
However, content must first be reviewed and approved collaboratively in chat before it becomes an approved project record.
A document existing in GitHub does not, by itself, mean that its contents have been approved.

## 4. Work Section by Section
For major documents, work through the document in manageable sections rather than generating a complete document without review.
For each section:
1. Propose the purpose/content.
2. Discuss it.
3. Revise it based on the discussion.
4. Confirm the agreed wording.
5. Obtain approval.
6. Commit the approved content.
7. Move to the next section.

## 5. Every Document Has a Defined Purpose
Before creating a substantive document, establish: why the document exists; what question it answers; who it is for; what decisions it should enable; and what is outside its scope.
Documents should not be created merely because they might be useful.

## 6. Separate Facts From Decisions
Documents must distinguish between factual evidence, observations, hypotheses, recommendations and decisions.
**Fact** — A statement supported by evidence.
**Observation** — An interpretation of available evidence.
**Hypothesis** — Something we believe may be true but still need to validate.
**Recommendation** — A proposed course of action.
**Decision** — A choice explicitly agreed by the project owner.
These must never be treated as interchangeable.

## 7. Document Relationships
Documents should reference related documents and avoid unnecessary duplication.
The intended progression is generally:
> Product Vision → User Journeys → Domain Model → State Machines → Requirements → Technical Design → Build
A later document should build on approved decisions from earlier documents rather than independently redefining them.

## 8. Decision Traceability
Important product decisions should have a reference in the Decision Log, such as DEC-007.
Where appropriate, documents should reference the relevant decision IDs so that the reasoning behind a product choice can be traced.

## 9. Changes Require Review
If new evidence suggests that an existing decision should change:
1. Identify the existing decision.
2. Present the new evidence or reasoning.
3. Discuss the proposed change.
4. Explicitly agree whether the decision should change.
5. Update the relevant document.
6. Update the Decision Log where appropriate.
Existing decisions must not be silently rewritten.

## 10. Do Not Build Ahead of Product Definition
The general development sequence is:
> Problem → Product → Workflow → Rules → Domain → States → Requirements → Technical Design → Build
The project should not jump prematurely from an idea to screens, database structures or code before the relevant product decisions and workflows have been defined.

## 11. Project Continuity & Anti-Derailment Rule
ACPRO must progress according to the agreed roadmap.
New ideas, questions, opportunities or changes must not automatically change the current workstream.
The assistant must not silently change the project's direction, scope or sequence.

### When a new idea appears
The idea must first be classified:
- **Relevant to current deliverable** — incorporate it into the current work if appropriate.
- **Important but not current** — capture it in BACKLOG-001.
- **Requires a decision** — record it as an open decision/question.
- **Requires research** — record it as a research item.
- **Potentially changes the roadmap** — explicitly flag it for user approval.
If the idea does not affect the current deliverable, it should be parked rather than allowed to derail the current work.

### Roadmap Check
If the assistant believes a new idea may justify changing direction, it must explicitly identify this before making the change.
The assistant should state:
- Where the project currently is.
- What the current deliverable is.
- Why the new information may affect it.
- Whether the assistant recommends changing course.
- What would happen if the project stays on the current path.
The roadmap must not be changed implicitly.

### Next Unfinished Deliverable Rule
At the start of each piece of ACPRO work, the assistant should establish:
> Where are we? → What gate are we in? → What document/deliverable are we working on? → What is the next unfinished section?
The next unfinished deliverable is the default priority.

### No Scope Creep Disguised as Progress
A useful new idea does not automatically mean it needs to be developed now.
The assistant should distinguish between:
> “This is a useful idea.”
and:
> “This is work we need to do now.”
Unless the idea affects the current deliverable, it should be captured and parked.

## 12. Assistant Operating Rule
The assistant must optimise for completing the agreed work in the agreed sequence, not for producing more work.
The assistant must not:
- Generate extra documents without a clear need.
- Introduce new features simply because they are interesting.
- Start technical architecture prematurely.
- Introduce alternative business models without a defined reason.
- Start additional research without a defined purpose.
- Generate large documents when the agreed process is section-by-section review.
- Silently change an agreed product decision.
- Silently change the roadmap.
The assistant should continuously ask:
> What is the next thing we need to resolve?
Once it is resolved:
> Move to the next item.

## 13. Document Status
Major documents should have a clear status:
- 🔴 **Draft** — being developed.
- 🟡 **Under Review** — awaiting review or changes.
- 🟢 **Approved** — agreed and authoritative.
- ⚪ **Superseded** — replaced by a newer version.
- 🔵 **Reference** — supporting material, not a product decision.

## 14. Audit Trail
Major documents should contain, where appropriate:
- Document ID
- Title
- Purpose
- Status
- Owner
- Created date
- Last updated date
- Version
- Related decisions
- Related documents
The project should preserve enough history to understand why important decisions were made and how they changed.

## Core Principle
> **ACPRO is built through deliberate progression, not continuous ideation.**
The project moves forward by completing the agreed deliverable, reviewing it, approving it, recording it, and then moving to the next unfinished item.