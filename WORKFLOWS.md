# Workflow catalog

35 workflows across 8 sources.

## Jotform

### 1. Form submission → create or update contact

Bring submitted contact details into ActiveCampaign without duplicates.

**Why this matters:** Someone has already shared useful information about themselves. This workflow puts those details into ActiveCampaign, creating missing custom fields so the information has a place to live. It keeps existing contacts current, avoids duplicates, and gives your team the context to make follow-up more relevant.

**Workflow:** Identify the form and selected submission first. Match email, preview the standard/custom-field mapping, create approved missing individual fields with the right types/options, and create or update the contact. Preserve stored values when source answers are blank.

### 2. Demo or quote request → sales opportunity

Turn a confirmed sales request into an owned opportunity.

**Why this matters:** A demo or quote request signals that someone wants to take the next step. This workflow turns that request into an opportunity with an owner and a clear place in your sales process. It helps the team see who needs a response and track the request through to an outcome.

**Workflow:** Confirm demo or quote intent using the form purpose and actual submitted answers before creating resources. Create or update the contact and approved missing fields. Resolve pipeline, stage, and owner; create an approved missing pipeline first and then an approved missing stage. Preview and approve the deal, create it once, and verify the outcome.

### 3. Recurring survey questions → educational campaign

Turn repeated customer questions into useful email content.

**Why this matters:** Repeated questions reveal where customers need more help. This workflow turns those patterns into useful email content, helping your team address common concerns at scale. It also gives marketers a concrete starting point for campaigns grounded in what customers are actually asking.

**Workflow:** Identify the form and response scope or date range, analyze all returned chunks for recurring questions, confirm the topic and intended audience, use verified source information and omit respondents’ identifying details, then generate one unsent campaign for review using the required approved images/template and brand-kit path. Verify the saved result; never send or schedule it.

## Shopify

### 1. First purchase → product education series

Help new customers get value from the product they actually bought.

**Why this matters:** The first purchase is the start of the customer relationship. Useful setup, care, and usage emails help customers get value from their purchase and give them a reason to keep engaging with your brand.

**Data needed:** Selected store, product, purchase cohort and history coverage, plus approved setup, care, or usage resources.

**Workflow:** Verify the first completed purchase across available prior history, not just the selected date window. If history is incomplete, label first-purchase status unknown and ask before proceeding. Confirm product-specific guidance and delivery timing. Design entry, duplicate-entry prevention and stop rules; verify a real future purchase trigger separately.

### 2. Products bought together → complete-your-setup campaign

Recommend a useful next product using real purchase patterns.

**Why this matters:** A relevant recommendation is more helpful than a generic promotion. Actual product combinations can reveal useful additions to a customer’s purchase, while excluding items they already bought keeps the message relevant.

**Data needed:** Completed-order line items in a chosen date range, product and variant IDs, customer purchase history, and approved current product details.

**Workflow:** Use actual completed-order line items to find product pairs. Report the analyzed window, distinct order counts and coverage; small samples are suggestions, not proven affinities. Confirm complementarity, variant compatibility and current availability with the merchant. Exclude prior buyers of the recommended item, canceled/refunded orders and unresolved histories.

### 3. Product launch → audience based on past purchases

Explain a new product’s value to the customers most likely to find it useful.

**Why this matters:** Past purchases give a launch message a useful starting point. Showing how the new product relates to something a customer already owns makes the announcement more specific and helps you avoid sending every launch to everyone.

**Data needed:** New product or variant, approved launch date and claims, related purchase criteria, and customer order history.

**Workflow:** Confirm the new product/variant, launch date, approved benefits and CTA. Ask the merchant to approve which prior products make a customer relevant; purchase affinity alone is not verified compatibility. Match actual prior purchases, exclude customers who already bought the new item, and verify current availability. Do not invent launch dates, offers or product claims.

### 4. Engaged nonbuyers → campaign that answers purchase barriers

Turn demonstrated product interest into useful answers before another sales pitch.

**Why this matters:** A product-link click shows interest, but it does not explain why someone has not purchased. This workflow helps you offer useful education to a relevant audience while checking for existing purchases and asking you to confirm the questions the campaign should answer.

**Data needed:** Selected ActiveCampaign campaign and product links, contact-level clicks with dates, matching product/variant IDs, purchase-history coverage, and approved answers.

**Workflow:** Confirm campaign IDs, product links and click/date scope. Require contact-level product-link click records; opens, aggregate click totals and product URLs alone cannot identify this audience. Join verified contact identities to purchase history, deduplicate and exclude purchasers. Treat missing/incomplete history as unknown, not nonbuyer. Ask for approved barrier themes or resources; a click does not prove an objection.

## Gmail

### 1. Customer email → new contact

Use the actual From address, not quoted senders.

**Workflow:** Show the selected message, sender name, and address before creating a contact. Exclude my own account and automated no-reply senders.

### 2. Signature → contact update

Use a current signature to refresh contact details.

**Workflow:** Verify the signature belongs to the external sender of the selected message, not a quoted participant. Preview fields and preserve values when missing.

### 3. Buying signal → interest tag

Use a quoted, relevant signal as the tagging evidence.

**Workflow:** Show the exact relevant sentence and the proposed mapping to a tag. Do not treat sentiment or a vague mention as a verified buying intent.

### 4. Conversation → contact note

Keep the important context with the contact.

**Workflow:** Read the relevant thread messages, include dated facts and message/thread provenance, omit private unrelated content, and distinguish customer statements from inference.

### 5. Explicit opt-in email → list subscriber

Keep a dated source for the subscription request.

**Workflow:** Identify the sender’s explicit request for the intended mailing list and retain its message ID/date. General correspondence or a signature does not establish consent.

## Wix

### 1. Website form → new contact

Map the email and name from a real submission.

**Workflow:** Resolve the site, form namespace, form ID, and submission. Map answer target keys through the form schema; do not assume the field key is simply email.

### 2. Profile form → contact update

Reuse existing fields for the submitted profile answers.

**Workflow:** Map approved profile answers into verified compatible ActiveCampaign field IDs. Preserve existing values when Wix answers are blank; request approval for any missing individual field creation.

### 3. Service interest → contact tag

Keep service interest as an approved tag.

**Workflow:** Read the actual answer via the form schema and ask which existing tag represents that service. Filter supported metadata on the API and match answer values locally.

### 4. Newsletter form → list subscriber

Verify newsletter permission from the submitted answer.

**Workflow:** Read the exact consent question and response. Do not infer consent from the form name or the mere existence of a submission.

### 5. Booking questions → contact note

Keep preparation context alongside the contact.

**Workflow:** Verify Wix Bookings is installed and use the namespace returned by the actual form (documented Bookings namespace wix.bookings.v2.bookings). Read the selected form and submission; do not assume the ordinary contact-form namespace.

## Calendly

### 1. Recurring booking questions → educational campaign

Answer the questions customers repeatedly ask before meetings.

**Why this matters:** The questions people ask when they book reveal what they need help understanding. Turning those patterns into useful email content helps your team answer common concerns and gives future conversations a more informed starting point.

**Workflow:** Confirm the event type and booking date range, read actual invitee questionnaire responses, identify repeated questions without inventing answers, confirm the educational topic and intended audience, then generate one unsent campaign after approving the content request and required image/brand or template inputs.

### 2. Common objections → objection-handling campaign

Address real concerns about price, implementation, or fit.

**Why this matters:** A concern about price, setup, or fit can keep someone from taking the next step. This workflow helps you respond with clear, useful information grounded in what people actually asked, rather than guessing what is holding them back.

**Workflow:** Use only objections explicitly expressed in returned booking answers, not inferred sentiment. Confirm the theme and audience, verify product, pricing, or implementation answers against approved resources, and generate one unsent campaign. Do not invent objections, offers, customer claims, or answers.

### 3. Appointment type → nurture automation

Continue the conversation with content suited to the appointment.

**Why this matters:** Someone who books a product demo needs different follow-up from someone booking onboarding or a consultation. Using the appointment type as context helps you design a relevant next step and keep the conversation useful beyond the booking.

**Workflow:** Confirm the event type and intended audience, inspect existing automations for overlap, then choose an existing suitable automation or design one new nurture workflow. Preview content, waits, branching, exits, and trigger mapping. Save only after approval and only if inactive status can be verified; activation, enrollment, and future booking capture each require separately verified support and explicit approval. A booking does not establish marketing consent.

### 4. Repeated knowledge gaps → educational email series

Teach a recurring topic through a useful sequence of lessons.

**Why this matters:** Some topics need more than a single email to explain well. A short series lets you break a recurring customer question into useful lessons, helping people learn at a manageable pace while giving your team reusable content.

**Workflow:** Read a chosen set of actual booking answers, confirm the knowledge gap and intended audience, propose a short sequence with distinct lesson objectives and verified answers, then draft one delivery automation for review. Verify email assets and saving separately. Do not claim the series is saved, activated, or scheduled when only a content plan or schema has been drafted.

## Clay

### 1. Named prospect → new contact

Search a named person and retrieve a real email.

**Workflow:** Use search_contacts_by_name with contactName and companyIdentifier, then get_task_context. If email enrichment is missing, ask before add_contact_data_points with Email and poll get_task_context. Transfer only the selected approved prospect.

### 2. Target role → contact record

Use a scoped role search and verified enrichment.

**Workflow:** Use search_contacts with companyIdentifiers and a valid people DSL. Ask me to select one result before enrichment or transfer. Read actual email values through get_task_context; do not import an entire prospecting result set.

### 3. Audience segment → contact tag

Use the user’s audience data, not a public prospect search.

**Workflow:** Use query_objects with the chosen audienceName and criteria. Confirm Audiences support for this workspace and use actual returned field values, especially email. Do not claim public search results belong to my saved audience.

### 4. Research → contact note

Turn approved research into useful contact context.

**Workflow:** Start from a returned search taskId and entityId. Check get_task_context; only with approval call add_contact_data_points using an appropriate Custom question. Wait for completed results and include source links if returned; distinguish unverified enrichment from fact.

### 5. Enrichment → contact fields

Map verified enrichment into compatible fields.

**Workflow:** Use an existing taskId and selected entityId, check get_task_context, and request approval before any new enrichment. Preview each value and its compatible existing ActiveCampaign custom field ID. Do not overwrite blanks or create field groups.

## Forms

### 1. Response → new contact

Use a verified response email through Google Sheets.

**Workflow:** Ask for the linked response Sheet, resolve the actual email question/column, and select one response by timestamp or row. Do not claim a direct Google Forms MCP read.

### 2. Profile response → contact update

Map useful response columns into existing fields.

**Workflow:** Read the relevant response row and headers. Preview compatible field mappings, resolve actual custom field IDs, and preserve stored values when answers are blank.

### 3. Interest response → contact tag

Use a returned interest answer and approved tag mapping.

**Workflow:** Identify the exact interest question/column and selected response. Ask me to approve the mapping to one existing tag.

### 4. Explicit opt-in → list subscriber

Check the exact consent question and answer.

**Workflow:** Read the consent question header, response, and timestamp; do not infer permission from an email field or a form title. Skip responses without valid consent.

### 5. Survey feedback → contact note

Keep relevant feedback beside the contact record.

**Workflow:** Read only the selected respondent’s feedback and email. Include question text, timestamp, and Sheet/tab/row provenance; omit unrelated survey answers.

## Canva

### 1. Canva email design → campaign draft

Move a finished email into ActiveCampaign without rewriting it.

**Why this matters:** Your team has already invested time in an email design. Bringing it into ActiveCampaign as a draft lets you use that work for a real campaign without starting again or unintentionally changing the message.

**Assets needed:** Complete exported email HTML, styles, and its image files.

**Workflow:** Verify that this is a Canva email with complete exportable HTML. Obtain the full HTML/styles and image files, verify durable hosted image URLs, preview the intended import, then use import_campaign_design with source_html. Poll the returned request to confirm a saved draft. Do not use generate_campaign to preserve an existing email because it may rewrite the copy.

### 2. Ebook → resource delivery and nurture

Help readers access the resource and put it into practice.

**Why this matters:** A resource is more valuable when people actually use it. A delivery email makes it easy to find, while useful follow-up helps readers apply its ideas and take a relevant next step.

**Assets needed:** Ebook PDF, cover image, selected graphics, and an approved hosted download link.

**Workflow:** Read the ebook text, obtain an exported PDF/cover/approved graphics through a verified export or explicit upload, and confirm a stable recipient-accessible download URL. Draft a delivery email and useful follow-ups; approve content and required generation inputs. Verify saved campaigns and, if requested, an inactive delivery automation. Do not assume that Canva exposes download or reading activity.

### 3. Presentation → educational email series

Turn useful lessons into emails your audience can follow over time.

**Why this matters:** A presentation often contains more useful material than one meeting can cover. Turning its main lessons into a short email series gives that content a longer life and makes it easier for your audience to learn at their own pace.

**Assets needed:** Selected slide text and exported visuals from approved pages.

**Workflow:** Read actual visible text from chosen pages; presenter notes are not returned by get_design_content, so ask for them separately if needed. Export or request approved slide visuals, host them durably, and adapt the content into readable email lessons rather than images of whole slides. Verify the email assets and proposed inactive automation separately.

### 4. Customer case study → targeted nurture

Help the right audience see credible customer proof.

**Why this matters:** A relevant customer story can make a product’s value easier to understand. This workflow turns approved customer proof into useful emails for people facing a similar problem, giving your team a credible way to build confidence.

**Assets needed:** Case-study copy, approved quotes, customer results graphics, and a relevant CTA link.

**Workflow:** Read the actual case study and selected visuals. Preserve approved quote wording and verify numbers, time periods, permission, and context. Confirm the intended audience and CTA; do not invent results or claim that all contacts match that audience. Generate an unsent campaign after approval, then optionally propose an inactive nurture journey.
