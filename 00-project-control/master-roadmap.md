# ACPRO Master Development Roadmap

## Purpose

This document is the master development roadmap for ACPRO.

It is the controlling sequence for turning the residential AC marketplace concept into a validated, specified, built and piloted product.

The roadmap is intentionally gate-based. Completion of a document does not automatically mean a gate is passed. A gate is passed only when its question has been answered sufficiently to justify moving to the next stage.

---

# 00 — Project Control

Project control exists across the entire programme.

### Controlled documents

- Master Roadmap
- Decision Log
- Assumptions Register
- Product Backlog
- Risk Register
- Gate Status

### Working rule

> **What is the next unfinished deliverable?**

New ideas are captured in the backlog and classified as NOW / NEXT / LATER / REJECTED. They do not derail the current deliverable unless a formal decision changes the roadmap.

---

# 01 — Product Definition

## Gate 0 — Product Definition

### Gate question

> **What exactly are we building?**

### Purpose

Convert the concept into a precise product definition before detailed development.

### Required outputs

- PRD-001 — Product Vision
- Problem Definition
- Actors
- Value Propositions
- Product Principles
- Business Model Hypothesis
- MVP Philosophy
- Decision Log
- Assumptions Register

### Known product position

ACPRO is a **transaction marketplace with workflow infrastructure for residential air-conditioning installation**.

The initial marketplace connects homeowners with qualified AC installers.

The long-term product can evolve from:

**Marketplace → Technical Intelligence → Procurement → Transaction Infrastructure → AC Operating Layer**

---

# 02 — Market & Customer Validation

## Gate 1 — Marketplace Validation

### Gate question

> **Do homeowners want this, will installers participate, and can the marketplace work economically?**

This gate is deliberately before major software investment.

### Required workstreams

### Homeowner validation

Determine:

- Is the problem real?
- Do homeowners want multiple AC installation offers?
- Do they understand and value comparison?
- What information will they provide?
- What makes them trust an installer?
- What makes them choose one offer over another?
- How important are price, rating, availability, brand, warranty and finance?

### Installer validation

Determine:

- Will installers join?
- Will they bid?
- What information do they need?
- Does a structured AC job save them time?
- What makes a job worth bidding on?
- What do they currently pay for leads?
- What is their current quoting/design workflow?
- What would make them reject the platform?
- Would they accept a success-based fee?

### Marketplace validation

Determine:

- How many installers are required for useful liquidity?
- How many bids should a job receive?
- How quickly should the first bid arrive?
- What geographic density is required?
- What happens when there are no bids?
- What happens when there is only one installer?
- What level of demand is required to sustain supply?

### Economics validation

Determine:

- Customer acquisition cost
- Installer acquisition cost
- Average job value
- Platform revenue per completed job
- Installer contribution after platform fee
- Contribution margin
- Operational cost per job
- Required marketplace conversion
- Required bid-to-job conversion

### Gate 1 deliverables

- VAL-001 — Homeowner Research
- VAL-002 — Installer Research
- VAL-003 — Marketplace Hypothesis
- VAL-004 — Marketplace Economics
- Market Evidence
- Validation Findings

### Gate 1 decision

**Current status: CLOSED BY FOUNDER DECISION — PROCEED WITH ACCEPTED RISK.**

The founder has approved proceeding with the residential AC marketplace direction into Stage 03 — Product Specification. This is a strategic go-forward decision, not a claim that the market has been empirically validated. Homeowner conversion, installer willingness to bid, achievable liquidity and unit economics remain unvalidated and must be measured in a constrained pilot before substantial scale-up or major investment.

**Continue:** proceed to detailed product specification while preserving these assumptions and risks in the Assumptions Register and Risk Register.

**Reassess:** use pilot evidence to continue, revise or pivot the model.

---

# 03 — Product Specification

## Gate 2 — Product Specification

### Gate question

> **Can we describe exactly how the product works from beginning to end?**

This gate turns the validated concept into executable product workflows.

### Required workflows

- PRD-002 — Homeowner Journey
- PRD-003 — Installer Journey
- PRD-004 — Admin / Operations Journey
- PRD-005 — Bid & Quote Journey
- PRD-006 — Survey & Final Quote
- PRD-007 — Completion & Review

### Workflow standard

Every workflow must define:

1. Actor
2. Trigger
3. Preconditions
4. Inputs
5. Actions
6. Decisions
7. Validation
8. System actions
9. Exceptions
10. State changes
11. Notifications
12. Data captured
13. Success criteria

### Principle

The customer should describe the **problem/outcome**, not be forced to behave like an AC engineer.

The installer remains the technical decision-maker during MVP.

---

# 04 — Domain Model

## Gate 3 — Domain Model

### Gate question

> **What are the core business objects, and how do they relate?**

### Initial domain objects

- User
- Homeowner
- Installer
- Property
- Room
- Job
- Requirement
- Photo
- Assessment
- Load Estimate
- Configuration
- Opportunity
- Bid
- Survey
- Quote
- Installation
- Review

### Future domain objects

- Manufacturer
- Product
- Compatibility Rule
- Installation Constraint
- BOM
- Merchant
- Procurement Order
- Payment
- Finance Application
- Warranty
- Service Case

### Deliverable

**DOM-001 — Domain Model**

Do not prematurely turn this into a database schema. First establish the business model and relationships.

---

# 05 — State Machines

## Gate 4 — State Machines

### Gate question

> **Can every important business process move predictably from one state to another?**

### Initial state machines

#### Job

DRAFT  
→ SUBMITTED  
→ VALIDATING  
→ OPEN_FOR_BIDS  
→ BIDS_RECEIVED  
→ BID_SELECTED  
→ SURVEY_REQUIRED  
→ SURVEY_COMPLETED  
→ FINAL_PRICE_PENDING  
→ FINAL_PRICE_ACCEPTED  
→ INSTALLATION_SCHEDULED  
→ INSTALLATION_IN_PROGRESS  
→ INSTALLATION_COMPLETED  
→ CUSTOMER_SIGNED_OFF  
→ COMPLETED  
→ REVIEW_REQUESTED  
→ REVIEWED

### Exception states

- CANCELLED
- EXPIRED
- NO_INSTALLERS
- NO_BIDS
- BID_DECLINED
- SURVEY_FAILED
- PRICE_REJECTED
- INSTALLER_CANCELLED
- INSTALLATION_FAILED
- DISPUTED

### Other state machines

- Bid
- Survey
- Quote
- Installation
- Later: Payment
- Later: Finance
- Later: Warranty
- Later: Service

### Deliverables

- STM-001 — Job State Machine
- STM-002 — Bid State Machine
- STM-003 — Survey State Machine
- Additional state-machine documents as required

---

# 06 — MVP Technical Engine

## Gate 5 — MVP Technical Engine

### Gate question

> **What technical intelligence must exist for the MVP to produce a genuinely better AC job than a generic lead?**

The MVP includes **estimated cooling loads**.

It does not attempt full automated AC design.

### Technical engine evolution

#### Engine 1 — Assessment Engine

Captures:

- property
- rooms
- dimensions
- ceiling height
- glazing
- orientation
- occupancy
- property characteristics
- photos
- installation constraints
- customer requirements

#### Engine 2 — Load Estimation Engine

Produces estimated cooling requirements, preferably as ranges with assumptions and confidence.

Example:

Living room: **2.8–3.4 kW**

The result is an estimate and must not falsely represent itself as final engineering design.

#### Engine 3 — Configuration Engine

Future recommendation of:

- single split
- multi-split
- twin
- mixed configuration

Installer can accept, edit or replace the recommendation.

#### Engine 4 — Equipment Selection Engine

Future manufacturer/model selection.

#### Engine 5 — Validation / Installation Geometry Engine

Future validation of:

- indoor/outdoor compatibility
- connected capacity
- pipe runs
- elevation
- branch requirements
- electrical requirements
- drainage
- access
- manufacturer restrictions

#### Engine 6 — BOM Engine

Future generation of:

- equipment
- controllers
- branch components
- copper
- insulation
- drains
- pumps
- cables
- isolators
- brackets
- anti-vibration mounts
- trunking
- fittings
- fixings
- consumables

#### Engine 7 — Cost Engine

Future calculation of:

- equipment cost
- material cost
- labour
- travel
- contingency/risk
- installer cost
- bid price

### Gate 5 deliverable

**TEC-001 — Load Estimation Engine**

The rules must be defined before building a large manufacturer catalogue.

---

# 07 — MVP Boundary

## Gate 6 — MVP Boundary

### Gate question

> **What is the smallest product that can test the core marketplace hypothesis?**

## MVP includes

- Property capture
- Room capture
- Dimensions
- Photos
- Customer requirements
- Timing
- Budget information
- Finance-interest capture
- Estimated cooling loads
- Installer matching
- Installer bidding
- Quote comparison
- Installer selection
- Technical survey
- Final quote
- Installation workflow
- Completion
- Reviews

## MVP excludes

- Automatic manufacturer selection
- Automatic equipment selection
- Full compatibility engine
- Pipe sizing
- Cable sizing
- Automatic pipe routing
- Full consumables calculation
- Full BOM automation
- Merchant APIs
- Live merchant stock/pricing
- Procurement automation
- Integrated finance application
- Credit decisioning
- Customer payment processing
- Escrow
- Full automated technical design

### MVP principle

> **Manual operations behind the scenes are acceptable if they allow us to validate the marketplace.**

---

# 08 — Build Specification

## Gate 7 — Build Specification

### Gate question

> **Do we now know enough to specify the software without guessing?**

Only after the product workflows, domain model, state machines, technical boundaries and MVP scope are sufficiently stable do we define:

- Screens
- Navigation
- Forms
- Buttons/actions
- Permissions
- Database schema
- APIs
- Authentication
- Notifications
- Background jobs
- Admin tooling
- Infrastructure
- Analytics
- QA/test plan

### Principle

Do not design implementation details simply because they are technically possible.

Every implementation decision must trace back to a product requirement or validated operational need.

---

# 09 — MVP Build

## Gate 8 — MVP Build

### Core vertical slice

**Homeowner job**
→ **Load estimate**
→ **Job created**
→ **Installer matching**
→ **Installer opportunity**
→ **Bid**
→ **Customer comparison**
→ **Installer selection**
→ **Survey**
→ **Final quote**
→ **Installation**
→ **Completion**
→ **Review**

### Build philosophy

Build the smallest working vertical slice.

Use manual operations where automation is not necessary to test the hypothesis.

Avoid speculative infrastructure.

---

# 10 — Pilot

## Gate 9 — Pilot

### Gate question

> **Does the marketplace work in the real world?**

Start with a constrained geography and controlled installer supply.

### Core metrics

#### Demand

- Visitors
- Started applications
- Completed applications
- Submitted jobs

#### Supply

- Installers recruited
- Active installers
- Opportunities viewed
- Bids submitted

#### Marketplace liquidity

- Bids per job
- Time to first bid
- Jobs with zero bids
- Jobs with one bid
- Jobs with multiple bids

#### Conversion

- Bid → selection
- Selection → survey
- Survey → final quote
- Final quote → installation
- Installation → sign-off
- Sign-off → review

#### Economics

- Average job value
- Platform revenue
- Success fee
- Customer acquisition cost
- Installer acquisition cost
- Operational cost per job
- Contribution per job

#### Quality

- Survey changes
- Cancellations
- Installer cancellations
- Installation failures
- Disputes
- Reviews
- Customer satisfaction

---

# 11 — Post-MVP Product Evolution

## Gate 10 — Post-MVP Automation

### Gate question

> **What should we automate based on actual marketplace evidence?**

Do not automatically build every future engine.

Use pilot data.

Examples:

If installers repeatedly converge on the same system configurations:

→ prioritise **Configuration Engine**.

If installers spend significant time creating material lists:

→ prioritise **BOM Engine**.

If activity concentrates around a small number of manufacturers:

→ populate those manufacturers first.

If procurement is repeatedly painful:

→ prioritise **Merchant / Procurement Integration**.

If payment or finance becomes a meaningful conversion constraint:

→ prioritise appropriate **payment/finance infrastructure** with the required partners and compliance structure.

---

# Long-Term Product Evolution

The intended product evolution is:

**V1 — Assess**

Property + rooms + requirements  
→ estimated loads

**V2 — Recommend**

Loads + property constraints  
→ suggested configuration

**V3 — Select**

Configuration  
→ equipment options

**V4 — Validate**

Equipment + installation geometry  
→ technically validated system

**V5 — Generate**

Validated system  
→ BOM + installer cost

**V6 — Procure**

BOM  
→ merchant pricing / availability / order

**V7 — Transact**

Customer + installer  
→ payments / finance / contracts / scheduling

**V8 — Operate**

Installation history  
→ warranty / servicing / repeat work / installer tools

---

# Development Principle

ACPRO is not being built by continuously adding features.

It is being built by reducing uncertainty in a controlled sequence:

**Problem**
→ **Validation**
→ **Workflow**
→ **Domain**
→ **State**
→ **Technical intelligence**
→ **MVP boundary**
→ **Build**
→ **Pilot**
→ **Evidence**
→ **Automation**

The next unfinished deliverable determines the next piece of work.
