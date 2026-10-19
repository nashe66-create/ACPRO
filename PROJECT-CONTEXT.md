# ACPRO — Project Context

**Document:** PROJECT-CONTEXT.md  
**Purpose:** Persistent project context and working reference  
**Status:** Draft for review  
**Last reviewed:** 16 October 2026

---

## 1. Purpose of This Document

This document is the central reference for continuing ACPRO development across conversations.

It records:
- The project vision and agreed product boundaries.
- The current roadmap stage and immediate deliverable.
- Approved decisions and unresolved questions.
- Links to authoritative project documents and research.
- The rules governing collaboration, documentation and repository changes.

Detailed product requirements belong in their respective documents. This file should remain concise and link to those documents rather than duplicate them.

**GitHub is the persistent project source of truth. Chat is the workspace for discussion, analysis, drafting and approval.**

## 2. Product Overview

ACPRO is a UK residential air-conditioning marketplace and workflow platform.

The initial product aims to connect homeowners seeking residential AC with verified installers. Homeowners describe their property, rooms and requirements; installers assess opportunities and submit offers; homeowners compare offers and select an installer.

ACPRO is intended to evolve from a marketplace into a transaction marketplace and, potentially, an operating layer supporting more of the residential AC installation journey.

### Core product hypothesis

Combining structured installation information with competition between installers can create a better buying experience for homeowners and more useful installation opportunities for installers.

This remains a hypothesis requiring validation.

## 3. Product Boundaries

### Initial MVP direction

The MVP is intended to test whether ACPRO can turn homeowner requirements into installation opportunities that attract offers and progress to completed installations. This is a hypothesis, not a validated commercial outcome.

The intended journey includes:
- Homeowner property and room information.
- Relevant photographs and installation characteristics.
- Preliminary cooling-load estimates.
- Installer matching and offer submission.
- Offer comparison and installer selection.
- Survey, final quote and installation outcome tracking.
- Completion and review.

Manual processes are acceptable where they help validate the marketplace before automation is justified.

### Explicit boundaries

The MVP does not depend on:
- Fully automated technical design.
- Automatic equipment selection or manufacturer compatibility.
- Automatic pipe or cable sizing and routing.
- Full automated bill-of-materials generation.
- Live merchant stock, pricing or merchant API integration.
- Integrated finance applications, customer payment processing or escrow.

The qualified installer remains responsible for verifying the property, final technical design and installation.

Finance may be captured as an indication of interest without initiating a finance application.

SBS is not a dependency of the initial marketplace model.

## 4. Development Principles

1. Validate before building.
2. Follow the roadmap in sequence.
3. Build solutions to validated problems rather than adding features for their own sake.
4. Prefer manual processes when they can validate a hypothesis.
5. Keep homeowner experiences simple and avoid unnecessary technical jargon.
6. Communicate uncertainty in preliminary technical estimates.
7. Preserve homeowner choice and meaningful offer comparison.
8. Prioritise qualified installation opportunities over raw lead volume.
9. Keep unresolved questions explicit.
10. Do not treat a proposed commercial model, feature or research finding as an approved decision without agreement.

## 5. Roadmap

The working roadmap is defined in [00-project-control/master-roadmap.md](00-project-control/master-roadmap.md):

00. Project Control  
01. Product Definition  
02. Market & Customer Validation  
03. Product Specification  
04. Domain Model  
05. State Machines  
06. MVP Technical Engine  
07. MVP Boundary  
08. Build Specification  
09. MVP Build  
10. Pilot  
11. Post-MVP Automation

The project should continue with the next unfinished deliverable rather than skipping ahead because a later feature appears attractive.

## 6. Current Stage — Stage 03: Product Specification

**Current working focus:** Complete Stage 03 Product Specification reconciliation and obtain approval before proceeding to Stage 04 — Domain Model.

Gate 1 was closed by founder decision with risk accepted; this is not empirical proof of marketplace validation. The constrained pilot must measure demand, bids per job, time to first bid, conversion, cancellations, Operations cost and contribution before scale-up or major investment.

### Current status

PRD-001 to PRD-008 have been reconciled on their dedicated review branches. The PRDs remain draft pull requests; no merge to `main` is authorised. The next stage after product-owner approval is Stage 04 — Domain Model.

### Validation hypotheses

The commercial hypotheses remain unproven and should be tested during the constrained pilot.

- H1 — Homeowners will use ACPRO to describe requirements and obtain competing offers.
- H2 — Installers will participate and submit offers.
- H3 — A pilot geography can support enough suitable installers to provide meaningful choice.
- H4 — Structured property information and preliminary cooling estimates improve installation opportunities.
- H5 — Homeowners can understand and trust the offers they compare.
- H6 — Marketplace revenue can cover acquisition and operating costs.
- H7 — Homeowners can complete the proposed fast visual request while supplying enough useful information.

These hypotheses and their priority, research methods and pass criteria remain subject to review.

Suggested initial interview targets of 15 homeowners and 15 installers are proposals, not approved sample sizes or success thresholds.

### Current research status

An initial desk-research round has identified existing directories, quote-matching platforms, specialist AC services and guided installation-purchase journeys.

The initial findings suggest that installer discovery, quote matching and guided purchasing already exist. ACPRO's potential differentiation through structured job information, preliminary cooling estimates, comparable offers and outcome tracking remains unproven.

The Southampton installer list is a research shortlist, not a list of approved partners.

Search-derived quote volumes are indicators of interest, not verified enquiries or completed installations.

Primary research and further evidence review are still required.

### Formal gate status

Gates 0 and 1 were closed by founder decision. Gate 1 was closed with risk accepted; commercial validation remains unproven. Current work is Stage 03 Product Specification. PRD-001 to PRD-008 have been consolidated on their dedicated review branches against the approved Stage 03 baseline (STG03-001 / PR #11).

Gate closure reflects a founder decision, not empirical proof of marketplace validation. The constrained pilot must test commercial assumptions before scale-up or major investment.

## 7. Repository Reference Points

Repository: https://github.com/nashe66-create/ACPRO

### Existing reference documents

- [Repository README](README.md) — high-level product overview, MVP boundary and working rule.
- [Master Development Roadmap](00-project-control/master-roadmap.md) — controlling roadmap and gate sequence.
- [Gate Status](00-project-control/gate-status.md) — formal gate record; Gates 0 and 1 were closed by founder decision, with Gate 1 risk accepted and commercial validation unproven.
- [Document Guidelines](00-project-control/document-guidelines.md) — collaborative approval and change-control rules.
- [PRD-001 — Product Vision](01-product/product-vision.md) — product vision, problem, value proposition, product model, principles and MVP direction.
- [PR #1 — PRD-005: Bid & Quote Journey](https://github.com/nashe66-create/ACPRO/pull/1) — draft pull request for the bid and quote journey.
- [PR #2 — Update PRD-001 MVP Definition](https://github.com/nashe66-create/ACPRO/pull/2) — draft pull request for the MVP definition update; this review branch is also being used to propose this context document.

Pull-request status must be checked before any action is taken. A document on a review branch is not considered merged or part of `main`.

### Document status distinction

- PRD-001 on `main` is labelled **Draft for review**.
- PR #2 contains the proposed MVP-definition update and is awaiting repository review; it has not been merged to `main`.
- PRD-005 on its review branch is labelled **Approved content; awaiting repository review**.

These labels describe repository/document status. They do not override approvals or open questions recorded in project discussions and documents.

## 8. Decisions and Open Questions

### Established direction

- ACPRO begins as a residential AC marketplace and workflow platform.
- The initial product focuses on validating marketplace transactions.
- The installer remains responsible for the final technical solution.
- Merchant integration, payments and finance implementation are not initial MVP dependencies.
- Development should follow the staged roadmap.
- Market validation must precede premature expansion into later technical capabilities.

### Unresolved

- Final pilot geography and service radius.
- Homeowner acquisition strategy.
- Minimum installer onboarding and verification requirements.
- Number of installers needed for meaningful local liquidity.
- Bid windows and offer rules.
- Final success-fee model and commercial terms.
- Quote comparison and ranking criteria.
- Cooling-load estimation methodology.
- Operational staffing and exception handling.
- Legal and commercial responsibilities between ACPRO, homeowners and installers.
- Warranty, complaints and dispute responsibilities.
- Validation sample sizes, thresholds and stage-exit criteria.

Do not silently resolve these questions. Record proposed answers for discussion and obtain approval where a decision is required.

## 9. Collaboration and Repository Rules

ACPRO follows this working sequence:

**Propose → Discuss → Revise → Approve → Commit**

1. Discuss and refine ideas in chat before changing authoritative project documents.
2. Clearly label drafts, hypotheses, proposals and approved decisions.
3. Obtain explicit approval of document content before implementing it in GitHub.
4. Group related changes into meaningful review batches to avoid unnecessary branches and pull requests.
5. Prefer updating an existing suitable review branch or consolidating related work rather than creating a new branch for every document.
6. Use draft pull requests when review is required; do not merge to `main` without explicit permission.
7. Approval to implement a document permits the agreed content to be committed on an appropriate review branch. It does not, by itself, authorise merging to `main`.
8. Do not silently modify previously approved documents or reinterpret open questions as decisions.
9. After meaningful changes, update this context document so future sessions can resume from GitHub.
10. Before continuing work, check the repository and relevant pull requests rather than relying solely on remembered chat status.

Ideas outside the current deliverable may be recorded in the backlog, but should not derail the active roadmap stage.

## 10. How to Resume Work

At the beginning of a future ACPRO session:

1. Read this document.
2. Check the current repository state and outstanding pull requests.
3. Read the relevant authoritative document or research artefact.
4. Identify the current stage and next unfinished deliverable.
5. Continue from the latest approved state.
6. Keep proposed changes separate from approved decisions until explicitly agreed.

**Immediate next deliverable:** After explicit product-owner approval of the consolidated PRDs, proceed to Stage 04 — Domain Model. Do not merge draft PRs or begin implementation without relevant explicit approval.

No product decision or repository change is authorised merely by recording it in this context document.

---

**Document status:** Draft for review  
**Approval required:** Yes
