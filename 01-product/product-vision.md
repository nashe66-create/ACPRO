# PRD-001 — Product Vision

**Product:** ACPRO  
**Document:** PRD-001 — Product Vision  
**Version:** 1.0  
**Status:** Draft for review  
**Gate:** Gate 0 — Product Definition

---

# 1. Document Purpose

This document is the definitive high-level product definition for ACPRO.

It defines:

- what ACPRO is;
- the problem it exists to solve;
- who it serves;
- the value it is intended to create;
- the high-level product model;
- the high-level MVP scope;
- the principles that govern product development; and
- the key boundaries of the product.

This document establishes the product direction that subsequent product, technical and build documents should follow.

It does **not** define detailed screens, database schemas, APIs, system architecture or implementation specifications. Those decisions belong to the relevant later-stage documents and should be developed from the product decisions established here.

---

# 2. Product Vision

> **ACPRO is a marketplace and workflow platform for residential air-conditioning.**

The initial product connects homeowners looking for residential AC with installers who can respond to those requirements.

ACPRO is designed to structure the process of defining an AC requirement, creating a suitable installation opportunity and connecting that opportunity with installers.

The marketplace is the starting point. Over time, ACPRO is intended to evolve from a marketplace into a **transaction marketplace**, facilitating more of the journey from homeowner requirement through to completed installation.

The long-term ambition is for ACPRO to become the **operating layer for residential air-conditioning**, connecting the key participants and processes involved in delivering an AC installation.

This could eventually connect:

**Homeowner ↔ Installer ↔ Technical Design ↔ Equipment ↔ Merchant ↔ Transaction ↔ Ongoing Service**

The product should therefore be developed in stages, with each stage validated before the next layer is built.

---

# 3. The Problem

## 3.1 Homeowner Problem

Homeowners who want residential air-conditioning face a gap between knowing what they want to achieve and understanding how to get the right system installed.

A homeowner may know that they want a bedroom, living room or entire home to be cooler, but may not know:

- What type or capacity of system they need.
- Which installation options are available.
- Which installers are suitable for their property.
- Whether different quotes offer comparable solutions.
- Whether the price they have been quoted represents good value.

To make an informed decision, homeowners may need to contact multiple installers, explain their requirements repeatedly, arrange surveys and interpret different technical proposals.

The problem is not simply finding an installer. It is being able to move from a relatively simple requirement — wanting air-conditioning — to an informed decision about the solution, installer and price.

**Core homeowner problem:** Homeowners lack a straightforward way to define their requirements, understand their options and compare suitable installation offers.

## 3.2 Installer Problem

Residential AC installers need to acquire suitable work and establish whether each opportunity is worth pursuing.

Before pricing a job, an installer may need to gather property information, understand the customer's requirements, assess the rooms, estimate cooling loads, consider installation constraints and determine what further assessment is required.

Where enquiries contain incomplete or unstructured information, installers may spend time qualifying jobs before they can determine whether to proceed or prepare a meaningful quote.

**Core installer problem:** Installers need a more effective way to receive, assess and price suitable residential AC opportunities without unnecessary qualification and quoting effort.

The extent of this problem, and installers' willingness to use and pay for a different approach, remain hypotheses to validate through market research.

## 3.3 The Underlying Marketplace Problem

The homeowner's requirement is often expressed in terms of an outcome: they want their home to be cooler.

Turning that requirement into an installation opportunity requires additional information about the property, rooms, expected cooling requirements and installation circumstances.

The installer needs sufficient information to assess the opportunity, decide whether to pursue it and determine what further work is required before confirming a technical solution and final price.

This creates a gap between the homeowner's initial requirement and the information an installer needs to evaluate the job.

**Core marketplace problem:** How can a homeowner's relatively simple air-conditioning requirement be translated into a structured installation opportunity that installers can meaningfully assess and respond to?

ACPRO is being developed to address this gap through a marketplace and workflow platform. Whether this approach creates sufficient value for both homeowners and installers must be validated before the product is expanded.

---

# 4. Core Product Insight

The central product hypothesis is:

> **If ACPRO converts a homeowner's AC requirement into a structured installation job containing useful property, room and estimated-load information, qualified installers may be willing to compete for that job.**

This creates a different proposition from traditional lead generation.

### Traditional lead model

**Customer enquiry → Lead sold → Installer qualifies → Installer quotes**

### ACPRO model

**Customer requirement → Structured AC job → Qualified installers bid → Homeowner compares → Installer selected → Survey → Final quote → Installation**

The distinction is fundamental to the product.

---

# 5. Customer Value Proposition

## 5.1 Homeowner proposition

The intended proposition is:

> **Don't get one AC quote. Get the market price.**

The homeowner should be able to:

- describe what they want without needing technical knowledge;
- provide structured information about their property;
- receive suitable installer offers;
- compare installers on more than price;
- understand what each offer includes;
- select the installer they trust;
- proceed through survey, final pricing and installation.

The product should make comparison easier without turning the experience into a technical procurement exercise.

---

## 5.2 Installer proposition

The intended proposition is:

> **Don't buy AC leads. Bid on real AC installation jobs.**

The installer should receive a job with useful information already collected.

Over time, the platform should reduce wasted effort associated with:

- poor-quality enquiries;
- incomplete customer information;
- unsuitable jobs;
- repetitive qualification;
- quoting preparation;
- technical assessment;
- material planning;
- procurement administration.

The installer remains responsible for the final technical design and installation decision during MVP.

---

# 6. Who ACPRO Serves

## Primary users

### Homeowners

People seeking domestic air-conditioning installation.

Typical requirements may include:

- cooling a single room;
- cooling multiple rooms;
- improving comfort in bedrooms;
- cooling living spaces;
- home office cooling;
- whole-home or multi-room solutions.

The homeowner does not need to know the correct AC terminology before starting.

---

### Residential AC installers

Qualified businesses or individuals who install domestic air-conditioning systems.

The initial platform is intended for installers who:

- undertake residential work;
- can assess and install AC systems competently;
- can provide appropriate technical and installation documentation;
- are willing to compete for marketplace opportunities.

Specific qualification requirements are to be defined during product and operational specification.

---

## Secondary user

### ACPRO Operations / Administration

The platform will require an operational layer to:

- manage users;
- support customers;
- manage installers;
- monitor jobs;
- intervene in exceptions;
- handle disputes;
- monitor marketplace health;
- maintain platform data;
- support the pilot.

The extent of automation should be determined by actual operational requirements.

---

# 7. Product Model

ACPRO consists of three interconnected layers.

## Layer 1 — Marketplace

Connects:

**Homeowners ↔ Installers**

Core capabilities:

- job creation;
- matching;
- opportunity distribution;
- installer bidding;
- offer comparison;
- installer selection.

---

## Layer 2 — Transaction Workflow

Moves a selected job towards completion.

Core workflow:

**Job → Bid → Selection → Survey → Final Quote → Schedule → Installation → Completion → Review**

This layer creates the transaction rather than simply generating an enquiry.

---

## Layer 3 — AC Operating Infrastructure

The long-term opportunity is to build infrastructure around the transaction.

Potential capabilities include:

- technical assessment;
- configuration;
- equipment selection;
- BOM generation;
- costing;
- procurement;
- payments;
- finance;
- warranties;
- servicing;
- repeat work;
- installer operating tools.

These capabilities are not all part of MVP.

---

# 8. Product Evolution

ACPRO should evolve in controlled stages.

## V1 — Assess

**Property + rooms + requirements**

↓

**Estimated cooling loads**

The purpose is to create a better-quality installation opportunity than a generic lead.

---

## V2 — Recommend

**Load estimates + property constraints**

↓

**Suggested system architecture**

Possible outputs may include:

- single split;
- multi-split;
- twin;
- mixed configuration.

The installer must be able to accept, edit or replace the recommendation.

---

## V3 — Select

**Configuration**

↓

**Equipment options**

The platform can eventually use manufacturer and product data to recommend suitable equipment.

---

## V4 — Validate

**Equipment + installation geometry**

↓

**Technically validated system**

Potential checks include:

- indoor/outdoor compatibility;
- connected capacity;
- pipe runs;
- elevation;
- branch requirements;
- electrical requirements;
- drainage;
- access;
- manufacturer constraints.

---

## V5 — Generate

**Validated system**

↓

**BOM + installer cost**

The platform can eventually generate equipment and material requirements.

---

## V6 — Procure

**BOM**

↓

**Merchant pricing / availability / ordering**

Initial merchant strategy is intentionally manual.

Future integrations may include:

- merchant email workflows;
- stock and pricing;
- order creation;
- procurement tracking.

---

## V7 — Transact

**Customer + installer**

↓

**Payments / finance / contracts / scheduling**

These capabilities require appropriate commercial, regulatory and partner arrangements.

They are not part of the initial MVP.

---

## V8 — Operate

**Completed installation**

↓

**Warranty / servicing / repeat work / installer tools**

The long-term opportunity is to remain useful after the initial installation.

---

# 9. MVP Definition

The MVP exists to validate the marketplace, not to build the complete AC operating system.

## MVP must allow

### Homeowner

- create an AC installation request;
- provide property information;
- provide room information;
- provide dimensions;
- provide relevant photos;
- describe requirements;
- provide timing/budget information;
- indicate finance interest;
- receive an estimated cooling assessment;
- submit the job;
- receive installer offers;
- compare offers;
- select an installer;
- proceed to survey;
- receive a final price;
- proceed to installation;
- confirm completion;
- leave a review.

### Installer

- create a profile;
- receive suitable job opportunities;
- review structured job information;
- review estimated loads;
- submit a bid/offer;
- communicate through the defined workflow;
- conduct a technical survey after selection;
- provide the final price;
- schedule and complete installation;
- complete required completion information.

### ACPRO operations

- manage homeowners and installers;
- monitor jobs;
- manage exceptions;
- support the marketplace;
- intervene when required;
- monitor marketplace metrics.

---

# 10. Explicit MVP Exclusions

The following are intentionally outside MVP unless a later decision changes the boundary:

- automatic manufacturer selection;
- automatic equipment selection;
- full manufacturer compatibility matrix;
- automatic pipe sizing;
- automatic cable sizing;
- automatic pipe routing;
- full automated consumables calculation;
- full automated BOM generation;
- live merchant stock;
- live merchant pricing;
- merchant APIs;
- automated procurement;
- integrated finance applications;
- credit decisioning;
- customer payment processing;
- escrow;
- full automated technical design.

These are potential future product capabilities, not MVP requirements.

---

# 11. Technical Responsibility

A fundamental product principle is:

> **ACPRO can assist technical decision-making, but the qualified installer remains responsible for the final technical design and installation.**

During MVP:

- ACPRO may produce estimated cooling loads;
- estimates should use assumptions and, where appropriate, ranges;
- the platform should communicate uncertainty;
- the installer must verify the property and technical requirements;
- the installer controls the final technical solution;
- the installer can reject, modify or replace an ACPRO recommendation.

The platform must not create false certainty.

---

# 12. Homeowner Experience Principles

## 12.1 Outcome before jargon

The homeowner should be able to say:

> "I want my bedroom cooler at night."

They should not need to understand:

> "I need a 2.0kW wall-mounted inverter split."

---

## 12.2 Simple technical explanation

Where technical choices are presented, they should be translated into understandable outcomes.

For example:

**Single split**

One outdoor unit serves one indoor unit.

**Multi-split**

One outdoor unit can serve multiple indoor units.

The exact technical recommendation remains subject to installer verification.

---

## 12.3 Do not expose unnecessary technical complexity

Homeowners should not need to see:

- pipe diameters;
- cable specifications;
- refrigerant calculations;
- detailed BOM quantities;
- manufacturer compatibility matrices.

Those belong to the installer/technical workflow.

---

## 12.4 "I'm not sure" must be valid

The homeowner should not be forced to provide technical information they cannot reasonably know.

The system should capture uncertainty rather than manufacture certainty.

---

# 13. Installer Experience Principles

## 13.1 Quality over volume

ACPRO should optimise for **qualified opportunities**, not the maximum number of leads.

---

## 13.2 The installer competes for real work

The core commercial relationship is based on completed marketplace transactions rather than simply selling contact details.

---

## 13.3 Installer remains technically responsible

The platform can provide useful intelligence and recommendations.

It does not remove the installer's professional responsibility.

---

## 13.4 Installer control

Where the platform recommends a solution, installers should be able to:

- accept;
- modify;
- replace;
- reject.

---

## 13.5 Reduce wasted effort

Future product development should focus on reducing the time between:

**Opportunity received → technically understood → confidently priced**

---

# 14. Marketplace Principles

## 14.1 Neutrality

ACPRO should not initially behave like an installer that happens to use a marketplace.

The homeowner should have genuine choice.

---

## 14.2 Competition

Installers should compete based on a combination of:

- price;
- reputation;
- availability;
- manufacturer/product proposal;
- warranty;
- scope;
- customer reviews;
- other relevant quality indicators.

The marketplace should not automatically become a race to the lowest price.

---

## 14.3 Transparency

The customer should understand what they are comparing.

---

## 14.4 Liquidity matters

The product only works if there is sufficient supply and demand.

Marketplace liquidity is therefore a first-order product metric, not merely a marketing concern.

---

# 15. Commercial Model Hypothesis

The initial commercial hypothesis is:

> **Installers can access ACPRO opportunities without paying upfront and pay a success-based fee when a marketplace job is successfully completed.**

Potential future revenue streams include:

- completed-job success fees;
- finance-related revenue through appropriate partners;
- merchant/procurement revenue;
- installer software subscriptions;
- additional workflow services.

The exact pricing model is **not yet a validated fact**.

Commercial assumptions must be validated during Gate 1.

---

# 16. Merchant Strategy

Merchant integration is deliberately not a core MVP dependency.

The initial workflow can be:

**Installer wins job**

↓

**ACPRO generates/organises required information**

↓

**Installer selects their preferred merchant**

↓

**ACPRO prepares a merchant order/request**

↓

**Installer reviews and sends**

↓

**Merchant responds**

↓

**Installer records actual equipment/material cost**

This can later evolve into:

**Manual email → structured email response → integration → live stock/pricing → automated procurement**

The platform should not depend on merchant APIs to prove the initial marketplace hypothesis.

---

# 17. Finance & Payments Strategy

Finance and customer payment processing are not core MVP infrastructure.

MVP may capture:

> **How do you expect to pay?**

Options may include:

- Pay in full;
- I may be interested in finance;
- I'm not sure yet.

Finance interest can be recorded without immediately initiating a finance application.

Customer payment is initially expected to occur directly between customer and installer.

Future finance and payment functionality must be designed with appropriate regulated partners and compliance requirements.

---

# 18. Long-Term Strategic Position

The marketplace is the entry point, not necessarily the final business.

The strategic opportunity is to become the infrastructure layer through which residential AC jobs move from:

**Demand**

→ **Assessment**

→ **Technical Design**

→ **Installer Competition**

→ **Equipment**

→ **Procurement**

→ **Installation**

→ **Payment**

→ **Warranty**

→ **Service**

→ **Repeat Work**

As the platform processes more jobs, it may accumulate valuable structured information about:

- properties;
- rooms;
- cooling requirements;
- configurations;
- equipment;
- installer decisions;
- installation constraints;
- material requirements;
- costs;
- prices;
- installation outcomes;
- customer preferences.

This information may improve future product functionality, subject to appropriate data governance and permissions.

---

# 19. Product Moat Hypothesis

The potential moat is not simply:

> "We have an AC marketplace."

The stronger long-term moat could be:

### 1. Workflow

The platform becomes embedded in the installer/customer process.

### 2. Technical intelligence

The platform understands the relationship between:

**Property → Load → Configuration → Equipment → Installation**

### 3. Data

The platform accumulates structured installation and marketplace data.

### 4. Procurement

The platform can eventually connect technical requirements to actual equipment and materials.

### 5. Reputation

Installer performance and customer outcomes create marketplace trust.

### 6. Network effects

More homeowners attract more installers.

More installers create more choice and competitive offers.

Better choice attracts more homeowners.

This network effect must be validated rather than assumed.

---

# 20. Product Success Definition

ACPRO should not initially define success as:

- number of app downloads;
- number of registered users;
- number of features shipped.

The first meaningful definition of success is:

> **Can ACPRO consistently turn homeowner AC requirements into completed installation transactions through a functioning installer marketplace?**

This can be broken into four core hypotheses.

### Hypothesis 1 — Demand

Homeowners will submit structured AC installation jobs.

### Hypothesis 2 — Supply

Qualified installers will join and bid for those jobs.

### Hypothesis 3 — Liquidity

A sufficient proportion of jobs will receive useful competitive offers.

### Hypothesis 4 — Conversion

Customers will select installers and proceed through survey and installation.

A fifth hypothesis concerns economics:

### Hypothesis 5 — Economics

The marketplace can generate enough revenue per completed transaction to support customer acquisition, installer acquisition and operational costs.

---

# 21. Initial Marketplace Metrics

The MVP and pilot should measure:

## Demand

- visitors;
- application starts;
- application completion rate;
- jobs submitted.

## Supply

- installers recruited;
- active installers;
- opportunities viewed;
- bids submitted.

## Liquidity

- bids per job;
- time to first bid;
- jobs with no bids;
- jobs with one bid;
- jobs with multiple bids.

## Conversion

- bid → selection;
- selection → survey;
- survey → final quote;
- final quote → installation;
- installation → completion;
- completion → review.

## Economics

- average job value;
- platform revenue;
- success fee;
- customer acquisition cost;
- installer acquisition cost;
- operational cost per job;
- contribution per job.

## Quality

- survey changes;
- cancellations;
- failed installations;
- disputes;
- customer reviews;
- customer satisfaction.

---

# 22. Product Principles

The following principles govern product decisions.

### Principle 1 — Validate before building

Do not build major infrastructure around an unvalidated assumption.

### Principle 2 — Marketplace first

The initial product exists to prove the marketplace transaction.

### Principle 3 — Structured jobs, not generic leads

The product should progressively improve the quality of the opportunity delivered to installers.

### Principle 4 — Customer choice

ACPRO facilitates comparison rather than becoming the installer.

### Principle 5 — Installer remains technically responsible

The platform supports technical decisions but does not replace qualified installer judgement.

### Principle 6 — Simplicity for homeowners

Hide unnecessary technical complexity.

### Principle 7 — Useful intelligence over false precision

Where technical estimates are uncertain, show assumptions, ranges and confidence.

### Principle 8 — Manual before automated

If a manual process can validate the hypothesis, do not build complex automation prematurely.

### Principle 9 — Evidence drives the roadmap

Post-MVP investment should follow actual marketplace behaviour and operational evidence.

### Principle 10 — Documentation before implementation

Product decisions should be defined before detailed UI, database and API decisions.

---

# 23. What ACPRO Is Not

ACPRO is not initially:

- an AC installer;
- a traditional lead-selling website;
- a generic trades marketplace;
- an equipment retailer;
- a finance company;
- a merchant;
- a manufacturer;
- an automated replacement for qualified AC installers.

The product may integrate with or work alongside these participants in the future.

---

# 24. Product Boundaries

The product currently has four major boundaries.

### Boundary 1 — Customer

ACPRO helps the homeowner define the requirement but does not require them to perform technical design.

### Boundary 2 — Technical

ACPRO can estimate and recommend, but the qualified installer validates the final technical solution.

### Boundary 3 — Commercial

ACPRO facilitates the transaction but initially does not process customer payments or provide finance.

### Boundary 4 — Procurement

ACPRO can organise procurement information but initially does not depend on live merchant integrations.

---

# 25. Development Philosophy

ACPRO will be developed as a controlled product-development programme.

The sequence is:

**Problem**

↓

**Validation**

↓

**Workflow**

↓

**Domain**

↓

**State**

↓

**Technical Intelligence**

↓

**MVP Boundary**

↓

**Build Specification**

↓

**MVP**

↓

**Pilot**

↓

**Evidence**

↓

**Automation**

The project should not skip stages simply because a later feature appears attractive.

---

# 26. Gate 0 Exit Criteria

Gate 0 is complete when the project team can clearly answer:

1. What is ACPRO?
2. What problem does it solve?
3. Who are the primary users?
4. Why is the marketplace model different?
5. What value does the homeowner receive?
6. What value does the installer receive?
7. What is the initial commercial hypothesis?
8. What is the MVP philosophy?
9. What is explicitly outside MVP?
10. What are the key assumptions that must be validated?
11. What principles govern product decisions?
12. What is the next validation gate?

Gate 0 does **not** require the product to be technically specified or built.

---

# 27. Related Documents

This document is followed by:

- PRD-002 — Homeowner Journey
- PRD-003 — Installer Journey
- PRD-004 — Admin / Operations Journey
- PRD-005 — Bid & Quote Journey
- PRD-006 — Survey & Final Quote
- PRD-007 — Completion & Review
- DOM-001 — Domain Model
- STM-001 — Job State Machine
- TEC-001 — Load Estimation Engine
- MVP-001 — MVP Definition

---

# 28. Open Questions

The following are intentionally unresolved and should not be silently converted into requirements:

1. Exact homeowner acquisition channel.
2. Initial pilot geography.
3. Minimum installer qualification criteria.
4. Exact number of installers required for initial liquidity.
5. Exact bid window.
6. Exact installer success-fee structure.
7. Whether bids are binding or indicative before survey.
8. Exact customer comparison criteria and ranking logic.
9. Exact load-estimation methodology.
10. Exact operational staffing model.
11. Exact legal/commercial structure of the installer relationship.
12. Exact warranty/dispute responsibilities.
13. Exact technical data requirements for future automation.

These questions belong in the relevant validation, product specification or technical documents rather than being prematurely resolved here.

---

# Document Status

**Status:** Draft for review

**Next document:** PRD-002 — Homeowner Journey

**Gate:** Gate 0 — Product Definition
