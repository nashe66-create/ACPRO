# PRD-005 — Bid & Quote Journey

**Product:** ACPRO  
**Document:** PRD-005 — Bid & Quote Journey  
**Status:** Approved content; awaiting repository review  
**Decision status:** Reflects the product decisions approved in discussion. Items explicitly identified as open questions remain unresolved.

---

## 1. Purpose

This document defines the bidding, offer comparison, installer selection and recovery journey for ACPRO's residential air-conditioning marketplace.

The objective is to give homeowners a fair and understandable way to compare installation offers while allowing installers to assess opportunities, submit offers and confirm the work they are prepared to undertake.

The workflow must accommodate situations where offers are unavailable, prices change after a survey, installers withdraw, or homeowners decide not to proceed.

## 2. Core Principles

- Homeowners are not obliged to select an installer simply because offers have been received.
- Installers remain responsible for deciding whether they can price an opportunity firmly and for verifying the final technical solution.
- ACPRO should make competition useful without unnecessarily exposing competitors' identities or exact prices.
- Homeowners retain control over recovery decisions.
- A job's history must be preserved when bidding is reopened.
- Recovery should not automatically penalise an installer for a legitimate technical or commercial issue.
- The MVP may use manual operational intervention where automation is unnecessary.

## 3. Offer Types

The marketplace is expected to support both firm and indicative offers.

ACPRO should establish minimum information and eligibility requirements for an offer to qualify as firm. The installer remains responsible for deciding whether the available information supports a firm commitment.

An indicative offer may require a survey or further assessment before the final price can be confirmed.

The distinction must be clear to homeowners so they understand what they are comparing and what remains subject to confirmation.

## 4. Bidding Window

The proposed initial bidding window is **48 hours**.

The window begins when ACPRO makes the opportunity available to eligible installers, not when the homeowner first submits the request.

Installers may revise or withdraw their own offers until the bidding deadline. When the deadline expires, the remaining offers are locked for homeowner comparison, subject to the rules applicable to firm and indicative offers.

If the homeowner selects an installer before the deadline, bidding ends immediately.

The initial duration is a working proposal and may be reviewed using marketplace evidence.

## 5. Competition Information

ACPRO should provide installers with limited information about competition for an opportunity.

The proposed approach is to show broad competition indicators, such as **low, moderate or high**, rather than competitors' exact prices, identities or detailed offer information.

The indicator should:

- Be based on active offers.
- Update when offers are submitted or withdrawn.
- Display “Not enough activity yet” when activity falls below a configurable minimum threshold.
- Avoid suggesting a particular price or predicting an installer's likelihood of winning.
- Make no guarantee about the outcome of bidding.

Thresholds and band boundaries should be configurable as the marketplace develops. Changes to those settings should apply to new opportunities; existing open jobs should retain the settings with which they started.

## 6. Homeowner Decision Period

After bidding closes, the homeowner receives the available offers and has a **three-day decision period**.

The homeowner may extend this period once, for an additional three days, giving a maximum decision period of six days.

ACPRO may send reminders during the decision period.

The homeowner may:

- Select an installer.
- Decline all offers.
- Revise the request.
- Reopen bidding.
- Pause the job.
- Stop the request.

If the decision period expires without a decision, ACPRO contacts the homeowner to establish their preferred next step. The platform must not automatically select an installer or reopen bidding solely because the deadline has expired.

Offers remain subject to their validity and the installer's continued availability.

## 7. Low or Zero Offer Volumes

### 7.1 No offers received

If the bidding window closes with no offers, ACPRO informs the homeowner and presents recovery options.

The proposed approach is advisory rather than prescriptive. ACPRO should use available information to suggest relevant next steps without assuming why no offers arrived.

Possible options include reviewing the request, expanding distribution to additional eligible installers, reopening bidding, pausing or stopping the job.

ACPRO must obtain the homeowner's confirmation before expanding distribution. It must not automatically restart bidding.

If ACPRO lacks sufficient evidence to make a useful recommendation, it should present the options without guessing at the cause.

### 7.2 One or a small number of offers

ACPRO should not automatically reopen bidding simply because only one or two offers were received.

The homeowner may review the offers and decide whether to proceed, reopen bidding, revise the request, pause or stop.

### 7.3 Declining all offers

The homeowner may decline every offer without being forced to select an installer.

ACPRO should then present the available recovery options.

An explicit rejection of all offers should be distinguished from a homeowner who simply has not made a decision before the decision period expires.

## 8. Installer Selection and Confirmation

When the homeowner selects an installer, the bidding round closes immediately and the installer is notified.

The proposed acknowledgement deadline is **24 hours**, with a reminder after 12 hours.

The installer must acknowledge the selection and confirm their intention to proceed.

If the installer explicitly declines, ACPRO immediately notifies the homeowner and presents recovery options rather than waiting for the deadline to expire.

If the installer does not respond by the deadline, ACPRO informs the homeowner and presents recovery options.

Acknowledging selection is not the same as confirming the final technical solution, scope or price. Those are addressed after the survey where necessary.

## 9. Survey and Revised Pricing

Installers may revise pricing after a survey where a genuine unforeseen issue or change in scope justifies the revision.

The installer must explain the revision to the homeowner.

The homeowner may accept the revision, seek clarification or negotiate, or reject it.

The homeowner must be able to reject a revised price and exit the process under the applicable recovery rules.

### 9.1 Survey fees

Installers must not charge homeowners a separate survey fee.

Installers are encouraged to account for expected survey costs within their overall installation offer. If a homeowner declines to proceed after the survey, the installer absorbs the survey cost; no separate survey recovery or cancellation charge is proposed for the survey.

## 10. Rejection of a Revised Price

When a homeowner rejects a revised price, ACPRO asks the homeowner to select a reason before presenting tailored recovery options.

Possible reasons include:

- The revised price exceeds the homeowner's budget.
- The price revision is considered unjustified.
- The homeowner wants to change the requirements.
- Other.

The reason informs the recovery journey but does not automatically determine fault or impose an installer penalty.

Where relevant, the installer may provide a private explanation to ACPRO. This response is for internal advisory purposes, not a direct customer-facing exchange.

For the MVP, the disagreement is treated primarily as a pricing and recovery matter. The internal review should help ACPRO manage the job's next steps, not create a formal dispute-resolution or disciplinary process.

## 11. Reopening Bidding

When bidding is reopened, the proposed window is a fresh 48 hours.

The existing job and previous bidding rounds must remain linked, preserving offer and selection history.

Previous bidders and the previously selected installer should be notified when a job reopens. Other eligible installers may also discover and compete for the opportunity through the normal marketplace. Previous participation does not confer priority.

The job should be made ready with relevant, updated information before the new round begins.

### 11.1 Same scope after a rejected revised price

If the homeowner reopens the same job without changing its scope, the installer whose revised price was rejected is excluded by default.

The homeowner may choose to allow that installer to bid again.

### 11.2 Changed scope

If the homeowner changes the scope, the opportunity opens to all eligible installers, including the original installer.

The revised scope must be available for installers to assess and price.

### 11.3 Revisiting previous offers

Where another installer submitted an offer in the previous round, ACPRO may allow the homeowner to revisit it if it remains valid and the installer confirms continued availability.

If no suitable previous offers remain, the homeowner may reopen bidding.

## 12. Installer Withdrawal

### 12.1 Withdrawal during the homeowner decision period

If an installer withdraws an offer before selection, ACPRO notifies the homeowner.

The homeowner may continue considering the remaining offers within the existing decision period. The withdrawal does not automatically reset the deadline or reopen bidding.

### 12.2 Withdrawal after selection but before final agreement

If a selected installer withdraws before the final scope and price have been confirmed by both parties, ACPRO notifies the homeowner and allows them to continue considering other available offers.

The withdrawal does not automatically trigger a new bidding round.

### 12.3 Withdrawal after final agreement

If the installer withdraws after both parties have confirmed the final scope and price, ACPRO checks the circumstances and asks the homeowner how they wish to proceed.

The homeowner may revisit previous valid offers or choose to reopen bidding.

## 13. Final Scope and Price Confirmation

Where a survey or price revision is required, both parties must explicitly confirm the final scope and price before the job progresses to installation planning.

The proposed sequence is:

1. The installer submits the final scope and price.
2. The homeowner reviews and accepts them.
3. The installer reconfirms the agreed scope and price.
4. ACPRO records both confirmations and the time of confirmation.
5. The job may progress to installation planning.

If either party has not confirmed, the job must not progress on the assumption that agreement exists.

Confirmation of the commercial agreement does not mean that an installation date has already been scheduled.

## 14. Installation Progress and Completion

After the final agreement, ACPRO checks in with the homeowner to establish whether the installation is complete or still in progress.

The homeowner's response informs the recorded job status and next steps.

If the job remains in progress, ACPRO records the update without automatically treating missing information as failure.

If the installer is no longer proceeding or the job has stalled, ACPRO asks the homeowner how they wish to proceed, including whether they want to reopen bidding.

Routine check-ins gather information; they do not automatically trigger penalties, mark a job as failed or reopen bidding.

If bidding is reopened for remaining or replacement work, the scope should be reviewed or updated as necessary.

## 15. Operational and History Requirements

The MVP should retain sufficient history to understand how a job progressed through bidding and selection.

This is expected to include:

- Bidding rounds and their deadlines.
- Offers submitted, revised, withdrawn or locked.
- Installer selection and acknowledgement.
- Homeowner decisions and recovery choices.
- Survey-related price revisions and recorded reasons.
- Final scope and price confirmations.
- Job status updates and completion outcomes.

Operational review of a price disagreement is advisory in the MVP. A pricing disagreement alone does not automatically affect an installer's eligibility for other opportunities.

## 16. Open Questions

The following remain unresolved and must not be silently converted into requirements:

- Exact minimum requirements for firm offers.
- Which jobs qualify for firm versus indicative offers.
- Exact eligibility and distribution rules for installers.
- Exact minimum activity threshold and competition band boundaries.
- Exceptional correction or withdrawal rules after the bidding deadline.
- The validity period for offers and the precise process for reconfirming availability.
- The duration of any additional time offered when an installer has acknowledged selection but cannot proceed.
- Detailed rules for rescheduling, missed appointments and incomplete installations.
- The precise operational process for confirming completion.
- Legal and commercial terms governing offers, price revisions and final agreements.

These questions should be resolved in the appropriate product, operational or legal specifications before implementation.

---

**Document status:** Approved content; awaiting repository review.  
**Note:** Items explicitly identified as open questions remain unresolved.
