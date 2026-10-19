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

ACPRO is built around two connected ideas.

**1. Structured information makes installation opportunities easier to assess.**

A homeowner's initial requirement is often simple: they want air-conditioning in one or more rooms. Installers need more information about the property, rooms and installation requirements to assess the job and determine what further investigation is needed.

ACPRO aims to bridge this gap by collecting structured information and providing estimated cooling loads, giving installers a more useful starting point than an unstructured customer enquiry.

**2. A marketplace allows installers to compete for those opportunities.**

Rather than relying solely on individual enquiries and separate quoting processes, homeowners can receive and compare offers from installers interested in their job.

The homeowner can consider price, proposed solution, availability, reputation and other relevant factors when deciding which installer to proceed with.

**The central product hypothesis is that combining structured installation information with marketplace competition can create a better experience for homeowners and a more useful source of work for installers.**

This hypothesis must be validated through homeowner and installer research and, ultimately, through marketplace performance.

The intended distinction from a traditional lead-generation model is:

**Traditional lead generation**

Customer enquiry → Lead supplied → Installer qualifies the opportunity → Installer quotes

**ACPRO's proposed model**

Structured customer requirement → Installation opportunity → Installers assess and compete → Homeowner compares offers

The exact bidding, selection and transaction workflows will be defined in the relevant product specifications.

---

# 5. Customer Value Proposition

## 5.1 Homeowner Proposition

ACPRO aims to make buying residential air conditioning easier by helping homeowners understand their requirements, compare suitable installation offers and choose an installer with confidence.

The homeowner should be able to:

- Describe what they want to achieve without needing technical knowledge.
- Provide structured information about their property and rooms.
- Receive offers from installers interested in their job.
- Compare offers based on price, proposed solution, availability, reputation and other relevant factors.
- Understand what each offer includes and how the options differ.
- Choose an installer based on their own priorities, rather than price alone.

The intended value is twofold: **make it easier to understand the available options and make it easier to compare competitive offers.**

ACPRO should simplify the buying process without requiring homeowners to become technical experts.

## 5.2 Installer Proposition

ACPRO aims to help residential AC installers access suitable installation opportunities and assess those opportunities more efficiently.

The installer should receive structured information about the homeowner's requirements, property and rooms, including estimated cooling loads where available.

The intended benefits are to:

- Access residential AC jobs through the marketplace.
- Spend less time collecting basic customer and property information.
- Assess whether an opportunity is suitable before committing significant quoting effort.
- Start with better information when preparing an offer.
- Reduce avoidable qualification and quoting effort over time.

The installer remains responsible for verifying the property, determining the final technical solution and confirming the final price.

The intended value is twofold: **access to relevant residential work and better-structured opportunities that are easier to assess.**

These benefits are hypotheses to validate through homeowner and installer research and the marketplace pilot.

---

# 6. Who ACPRO Serves

## 6.1 Homeowners

Homeowners are the customers who use ACPRO to define their residential air-conditioning requirements, receive installation offers and choose an installer.

ACPRO should be designed for homeowners who may have little or no technical knowledge of air-conditioning. The platform should make it straightforward for them to describe their requirements and make an informed decision.

## 6.2 Verified Residential AC Installers

Residential AC installers are the service providers who use ACPRO to discover installation opportunities, assess jobs and submit offers to homeowners.

ACPRO is intended to operate as a marketplace for verified installers, rather than an unrestricted directory of individuals or businesses offering AC installation services.

Installers must meet ACPRO's onboarding requirements before they can accept installation work through the platform.

At a minimum, these requirements are intended to cover:

- **F-Gas compliance:** Appropriate individual qualifications for the work undertaken and the required company certification where applicable.
- **Insurance:** Valid insurance appropriate to the installation business and the work being offered.
- **Technical competence:** Evidence of the skills and competence needed to install residential AC systems safely and to the applicable standards.
- **Electrical competence:** Appropriate qualifications or competent personnel to undertake any electrical work involved in an installation.
- **Legal and regulatory compliance:** Compliance with applicable building regulations, health and safety obligations, refrigerant-handling requirements and other relevant legal requirements.
- **Business verification:** Verification of the installer or business's identity and relevant business details.

The precise qualifications, insurance types and minimum cover levels, verification documents, renewal periods and onboarding checks will be defined in a separate installer requirements specification.

Installers remain responsible for ensuring that the work they undertake is within their competence and complies with the requirements applicable to that work.

## 6.3 ACPRO Operations and Administration

ACPRO's operations function will be responsible for administering the marketplace and maintaining its standards.

This is expected to include managing installer applications, checking required evidence, maintaining installer records, monitoring compliance with onboarding requirements and managing installer access where requirements are no longer met.

The scope of these responsibilities, including the level of ongoing verification and the process for suspending or removing installers, will be defined in later product and operational specifications.
---

# 7. Product Model

ACPRO is designed to evolve through three interconnected product layers. Each layer builds on the capabilities established by the previous one.

## 7.1 Layer 1 — Marketplace

The marketplace connects homeowners who need residential air-conditioning with verified installers who can assess their requirements and submit offers.

Its core capabilities are intended to include:

- Homeowner job creation.
- Structured collection of property and room information.
- Distribution of installation opportunities to suitable installers.
- Installer assessment of opportunities.
- Submission and comparison of offers.
- Homeowner selection of an installer.

The marketplace is the starting point for ACPRO. Its purpose is to turn a homeowner's requirement into a structured installation opportunity and help the homeowner find a suitable installer.

## 7.2 Layer 2 — Transaction Workflow

The transaction workflow tracks an installation opportunity from the initial request through to completion.

The intended high-level journey is:

**Installation Request → Installer Offers → Installer Selection → Survey → Final Quote → Scheduling → Installation → Completion → Review**

In the initial MVP, ACPRO will focus on enabling the homeowner to submit a request, receive and compare offers, and select an installer.

The subsequent stages will also be tracked through to completion, but may initially rely on manual processes and status updates rather than automated workflows.

This approach allows ACPRO to understand whether marketplace opportunities progress into completed installations without requiring the entire installation process to be automated from the outset.

The precise workflow, responsibilities of each participant and the point at which a transaction is considered complete will be defined in later product specifications.

## 7.3 Layer 3 — AC Operating Infrastructure

The long-term ambition is to build tools and infrastructure that support more of the residential AC installation process.

Potential future capabilities include:

- Technical assessment and design support.
- System configuration and equipment selection.
- Bill of materials generation.
- Costing and procurement support.
- Merchant integration.
- Payments and finance through appropriate arrangements.
- Warranty and servicing workflows.
- Installer operating tools.

These capabilities represent the longer-term direction of ACPRO, not a commitment to deliver every capability.

Each capability should be assessed against evidence of customer and installer needs, commercial value, technical feasibility and the results of earlier product stages.

The initial MVP should remain focused on validating the marketplace and tracking installation outcomes, rather than attempting to build the complete AC operating infrastructure.
---

# 8. Product Evolution

ACPRO will evolve in stages, beginning with a residential AC marketplace and progressively adding capabilities that support more of the installation process.

Each stage should build on the previous stage and be informed by evidence from customer research, installer feedback and marketplace performance.

## 8.1 Stage 1 — Structured Request and Preliminary Cooling-Load Assessment

**Purpose:** Turn a homeowner's requirements into a structured installation opportunity with an initial assessment of potential system configurations.

The platform collects information about the property, rooms and the homeowner's cooling requirements.

It estimates cooling loads for the relevant rooms. The MVP does not generate system-configuration recommendations; technical design and equipment selection remain installer responsibilities.

These outputs help homeowners understand their options and give installers a more informative starting point when assessing an opportunity.

The cooling-load estimate is preliminary, not a technically validated design. The installer remains responsible for assessing the property and confirming the appropriate solution.

## 8.2 Stage 2 — Advanced Configuration Recommendations

**Purpose:** Develop more sophisticated recommendations that compare potential system configurations against technical requirements, equipment data and installation constraints.

This stage could introduce more detailed configuration logic, manufacturer and equipment compatibility data, and comparisons between suitable alternatives.

The aim is to improve the quality and usefulness of recommendations beyond the preliminary configuration logic introduced in Stage 1.

The scope of these capabilities will be determined by validated needs, available technical data and the results of the initial marketplace.

## 8.3 Stage 3 — Select Equipment

**Purpose:** Connect a proposed system configuration with suitable equipment options.

ACPRO could eventually use manufacturer and product information to help identify equipment that meets the relevant technical requirements.

The availability and quality of product data, as well as manufacturer compatibility requirements, will influence the feasibility of this stage.

## 8.4 Stage 4 — Technical Validation

**Purpose:** Support more detailed checks of a proposed system.

Future capabilities could help assess matters such as indoor and outdoor unit compatibility, connected capacity, pipe runs, elevation limits, electrical requirements, drainage and other manufacturer-specific constraints.

These checks would need appropriate technical data and validation. They would not remove the installer's responsibility for confirming the final design.

## 8.5 Stage 5 — Materials and Costing

**Purpose:** Translate a technically validated system into equipment, materials and estimated costs.

ACPRO could eventually generate a bill of materials and support installers in estimating the equipment and materials required for a job.

The accuracy of these outputs would depend on the completeness of the technical design, installation information and product data.

## 8.6 Stage 6 — Procurement

**Purpose:** Help installers obtain the equipment and materials required for an installation.

The initial approach to procurement may rely on manual processes. Future development could introduce structured merchant requests, pricing and availability information, order creation and integrations with merchant systems.

Live merchant integrations are not a prerequisite for validating the initial marketplace.

## 8.7 Stage 7 — Transactions and Commercial Services

**Purpose:** Facilitate more of the commercial relationship between homeowners and installers.

Future capabilities could include contracts, customer payments, finance through appropriate partners and more integrated scheduling.

These capabilities would require separate commercial, operational and regulatory assessment. They are not commitments for the initial MVP.

## 8.8 Stage 8 — Ongoing Service

**Purpose:** Extend ACPRO's usefulness beyond the initial installation.

Potential capabilities include warranty records, maintenance and servicing workflows, repeat work and tools that help installers manage their operations.

These capabilities would be considered once there is sufficient evidence that the earlier stages create value.

## 8.9 Evolution Principle

The stages above describe ACPRO's potential direction, not a fixed delivery schedule.

Each stage should be assessed against validated customer needs, installer demand, commercial value, technical feasibility and the evidence generated by the existing product.

**ACPRO should earn the right to expand by proving that the current stage works.**
---

# 9. MVP Definition

The MVP exists to validate ACPRO's residential AC marketplace and establish whether structured installation opportunities can generate competitive offers and progress to completed installations.

The homeowner experience should be visual, intuitive and fast. The initial installation request should target completion in **less than 90 seconds**, using guided questions, visual choices and simple explanations rather than requiring technical AC knowledge.

The MVP should support the journey from homeowner request through installer selection and onward to a recorded installation outcome, without attempting to automate the entire installation process.

## 9.1 Homeowner Capabilities

The MVP must allow homeowners to:

- Complete the initial installation request in less than 90 seconds.
- Follow a visually guided process with clear explanations and minimal technical terminology.
- Provide essential property, room and installation requirement information.
- Describe their requirements and intended outcomes.
- Explore visual examples of indoor-unit styles and select their preferred appearance.
- Provide structured room information and relevant photos; AR/indoor-unit visualisation is deferred beyond MVP.
- Provide relevant property or room photos and additional information where needed.
- Receive estimated cooling loads for the relevant rooms.
- Receive a preliminary cooling-load estimate, labelled indicative rather than a verified technical design.
- Indicate potential interest in finance without starting a finance application.
- Submit an installation request to the marketplace.
- Receive and compare installer offers.
- Select an installer.
- Review a revised price following a survey and accept or reject it.
- Confirm the final scope and price before the job progresses to installation planning.
- Follow installation progress through ACPRO.
- Confirm or provide feedback on the recorded installation outcome and leave a review.

The initial request should prioritise speed and simplicity. Detailed information required for technical assessment can be collected later where necessary, rather than making the homeowner complete a lengthy technical questionnaire upfront.

Indoor-unit preferences and visualisations communicate the homeowner's preferences. They do not determine the final technical solution, which remains subject to installer assessment.

## 9.2 Installer Capabilities

The MVP must allow installers to:

- Register and establish an installer profile.
- Complete ACPRO's installer onboarding and verification requirements before accepting installation work.
- Receive and review suitable installation opportunities.
- Review structured property and room information, relevant photos and preliminary cooling-load estimates.
- Review homeowner requirements and preferences captured in structured text and photos; visualisation outputs are not part of MVP.
- Submit offers in response to installation opportunities.
- Revise or withdraw their own offers within the defined bidding rules.
- Acknowledge a homeowner's selection and confirm their intention to proceed.
- Conduct a technical survey and confirm the final technical solution.
- Submit a revised price where a genuine unforeseen issue or change in scope justifies it, with an explanation.
- Confirm the final scope and price with the homeowner before the job progresses to installation planning.
- Record relevant scheduling and installation progress.
- Record installation completion and the required completion information.

Installers remain responsible for verifying the property, confirming the final design and price, and carrying out the installation appropriately.

## 9.3 ACPRO Operations Capabilities

The MVP must allow ACPRO operations to:

- Manage homeowner and installer accounts.
- Review and manage installer onboarding status.
- Monitor installation requests, offers and job progress.
- Manage bidding rounds and homeowner decision periods.
- Record homeowner decisions and recovery choices.
- Update or record job statuses where manual intervention is required.
- Check with homeowners to establish whether installations are complete or still in progress.
- Manage exceptions and provide customer or installer support.
- Intervene in marketplace workflows where necessary.
- Monitor core marketplace, bidding and installation outcome metrics.

The initial MVP may rely on manual operational processes where automation is not necessary to validate the marketplace.

## 9.4 Marketplace and Recovery Capabilities

The MVP must support a defined bidding window, offer comparison, homeowner selection and recovery when a job does not progress.

The marketplace should allow homeowners to decline all offers without being forced to select an installer. Where no offers are received, or an installation cannot proceed, ACPRO should provide recovery options and allow the homeowner to choose the next step.

The MVP must support reopening bidding while preserving the original job and its history. The homeowner should remain in control of whether to reopen a job, revise the requirements, pause or stop the request.

Detailed bidding windows, offer rules, decision periods, withdrawal handling and recovery workflows are defined in PRD-005 — Bid & Quote Journey.

## 9.5 MVP Delivery Principle

The MVP must support a fast, visually guided homeowner request, useful preliminary assessment, installer offers and selection, and tracking through to a recorded installation outcome.

It does not need to automate every step of the installation journey. The initial priority is to establish a functioning marketplace, provide useful structured information, support installer competition and measure whether opportunities progress to completed installations.

The proposed request-completion target (under 90 seconds) is a hypothesis to test, not a validated requirement. AR and indoor-unit visualisation are deferred beyond MVP.

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

Gate 1 was closed by founder decision with risk accepted. Commercial assumptions remain unvalidated and must be tested in a constrained pilot before scale-up or major investment.

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


## Stage 03 reconciliation amendment — authoritative MVP boundary

This section supersedes conflicting MVP capability wording earlier in this draft. The MVP includes structured homeowner/property/room information, dimensions and relevant photos, requirements capture, preliminary cooling-load estimates, installer matching/distribution under separately approved rules, offers, homeowner comparison and selection, survey/final quote, explicit mutual confirmation of the same final quote and scope/version, and outcome tracking through completion and aftercare. Manual Operations is acceptable for pilot validation.

**Not in MVP:** preliminary system-configuration recommendations, automated equipment/manufacturer selection or compatibility checks, indoor-unit visualisation, AR, automatic pipe/cable sizing or routing, full automated BOM, merchant APIs/live stock/pricing, integrated finance applications/credit decisions, customer payment processing or escrow. The under-90-second request target is a hypothesis to test, not a validated requirement.

Preliminary cooling-load estimates are not a verified technical design. The installer owns site verification, final technical design, equipment selection, final scope/price and installation. Gate 1 is closed by founder decision with risk accepted; commercial validation remains unproven. The constrained pilot must measure demand, bids/job, time to first bid, conversion, cancellations, Operations cost and contribution before scale-up or major investment.
