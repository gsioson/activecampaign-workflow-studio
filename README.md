# ActiveCampaign Prompt Builder

A self-contained prompt-builder frontend with a small Vercel Node.js function for submission logging. Open index.html directly to review; all styles, brand fonts, logos, and frontend JavaScript are embedded. No dependencies, build step, API keys, or environment variables are required. Deploy the full package, including api/prompt-log.js, to enable the shared log.

## User flow

Choose a source app or describe an idea → choose a workflow → review its summary and why it matters → supply optional source details → copy or open the generated prompt in a connected assistant. The web app generates prompts; it does not call live account APIs itself.

## Selected Jotform workflows

1. **Form submission → create or update contact:** identify form and submission, match email, map compatible standard/custom fields, create approved missing individual custom fields with appropriate types/options, then create/update the contact and verify saved values. Preserve existing values when source answers are blank.
2. **Demo or quote request → sales opportunity:** explicitly confirm demo/quote intent from the form purpose and actual answers before creating resources; create/update the contact and fields; confirm pipeline, stage, owner, and deal details; create an approved missing pipeline first and an approved missing stage next; preview/approve the deal and create it once; verify the outcome.
3. **Recurring survey questions → educational campaign:** identify form and response set/date range, analyze every result chunk, confirm educational theme and audience, approve the verified content brief, complete the generator’s required image/brand or template selections, generate one unsent campaign, and verify its persisted result. “Recurring questions” means repeated themes, not a scheduled job.

Each selected workflow includes its natural-language importance summary. Optional **Jotform form name or URL** and **Which submission or responses?** fields flow into the prompt. If absent, the assistant asks for the form first, resolves its numeric ID, and then clarifies the submission/response scope. There is no default to “latest approved.” Clear details already present in the user’s idea are reused. Form and scope stay available when switching Jotform workflows and clear when starting over or switching source.

## All sources

There are 35 templates total: three for Jotform, four for Calendly, four for Canva, four for Shopify, and five each for Gmail, Wix, Clay, and Google Forms. WORKFLOWS.md lists them; workflow-catalog.json contains the plans, tool paths, evidence labels, and workflow-specific instructions.

Tool-backed source routes use connected Jotform, Google Drive/Sheets, Gmail, Wix, and Clay schemas. Calendly uses its official documented MCP tools, not a live test. Shopify merchant customer/order tool verification remains required; no unverified operation names are invented. Google Forms reads through a linked response Sheet. The declined Shopify and Calendly plugins were not installed or used.

## Execution rules

Live changes happen in the connected assistant after appropriate previews/approval. The prompts check actual permissions, source evidence, and IDs; avoid duplicate records; and verify outcomes. Contact custom-field groups are not created through MCP. Pipeline/stage creation uses verified IDs and approved settings; owners are ActiveCampaign users, not contact IDs.

Campaign generation can save a campaign as part of generating it, so the brief and required generation inputs are approved before that call. The generated campaign remains unsent and unscheduled. It is not possible to promise a saved-campaign preview before generation has created it. Generation is called once; progress/persistence is checked before any recovery action.

## Brand alignment

Official ActiveCampaign Midnight wordmark and Blue glyph, embedded Owners Medium and IBM Plex Sans Regular/Medium fonts, and the published palette: AC Blue #004CFF, Midnight #00002D, Cream #FEF9ED, with limited Caribbean, Moss, and Jewel accents. UI shades are palette tints or neutral white; partner marks retain their identity.

Public brand-kit references were reviewed at https://www.activecampaign.com/brand. The linked Figma deck was inaccessible; alignment is based on the available public kit, not formal brand approval.

## Deploy to Vercel

Import a repository with this folder’s contents at the root. Choose Framework Preset Other, no build command, and Output Directory `.`. The included vercel.json declares those settings. Create a new Vercel project if keeping the existing app separate.

Alternatively run `npx vercel` from the extracted folder. The first deployment of a new project is production; later production updates use `npx vercel --prod`.

## Validation

Automated checks cover the three Jotform workflows, importance summaries, optional form/scope behavior, field creation, demo/quote qualification, missing pipeline/stage creation, multi-response campaign analysis, generation prerequisites, reset and source isolation, and action mappings for the remaining templates. Desktop browser verification confirmed workflow switching, the why summary, form context, and pipeline-creation instructions. No live customer records or campaigns were created or changed. Mobile breakpoints are implemented but have not been visually verified.

Reference for documented Calendly tools: https://developer.calendly.com/docs/mcp/supported-tools


## Selected Calendly marketing workflows

The confirmed selection is #1, #3, #7, and #10 from the campaign/automation-focused list:

1. Recurring booking questions → educational campaign.
2. Common objections → objection-handling campaign.
3. Appointment type → nurture automation.
4. Repeated knowledge gaps → educational email series.

Each includes a natural-language importance summary, an optional Calendly event-type/link field, and an optional booking response scope/date-range field. Blank context prompts the assistant to clarify; there is no silent default to latest or all bookings. Context persists while switching between Calendly workflows and clears on source changes or reset.

The source is Calendly's documented event-type, event, and invitee read tools, including actual questionnaire answers. The declined plugin was not installed or used to access live bookings. The templates verify source access at execution time and never assume booking data includes transcripts, attendance, or marketing consent.

Campaign prompts require an evidence-backed topic, verified educational or objection-handling answers, approval of the content request, and the actual generator's image/brand or template choices. They call generate_campaign once for the approved request and check the persisted result. Campaigns remain unsent and unscheduled.

Automation prompts distinguish designing a workflow from saving, activating, or enrolling contacts. The catalog's generate-an-automation-schema tool drafts a proposal without saving; build-an-automation can persist an approved returned schema. The prompt verifies tool availability, permissions, valid blocks/assets, and the ability to preserve an inactive state before saving. If inactive status or support cannot be verified, it stops at the design and provides manual setup. A future Calendly-to-ActiveCampaign trigger or integration is verified separately; a one-time MCP read is not an ongoing booking trigger.

Series prompts distinguish text lesson drafts from persisted email assets and a saved delivery automation. Each asset and its link to send steps must be verified. Duplicate campaign generation, implicit activation, automatic enrollment, and sending are excluded.

Latest validation: automated checks passed for all 35 workflow selections, the four Calendly choices, evidence-based campaign instructions, automation draft/save/activation boundaries, series asset verification, optional context/reset behavior, and Jotform preservation. Browser checks confirmed all four Calendly cards, the importance summary, retained event context, and the correct automation tool path. No live bookings, campaigns, automations, or contacts were changed.


## Concise generated prompts

All 35 workflows now generate short numbered task lists instead of the long source/tool-path preamble and detailed implementation narrative. Prompts use concise numbered steps; user-supplied context may add length.

The concise output preserves source selection and access checks, the chosen outcome, relevant MCP action names, required custom-field/pipeline/stage creation, approvals, consent and side-effect checks where relevant, duplicate handling, and final outcome verification. Campaign/automation prompts preserve image/brand or template prerequisites, one-time generation, persistence verification, draft versus save distinctions, and separate activation/enrollment approval. Full source-tool references remain in the catalog and the collapsed tool-details section.

The UI title is now “Your prompt.” Automated checks passed for all 35 concise outputs and the critical Jotform and Calendly paths. Browser verification confirmed the simplified Jotform contact prompt and successful copying. No live account data was changed.


## Selected Canva workflows

1. **Canva email design → campaign draft:** import complete existing email HTML, preserving the approved copy and design rather than regenerating it.
2. **Ebook → resource delivery and nurture:** deliver an approved hosted ebook and build relevant follow-up emails.
3. **Presentation → educational email series:** repurpose the selected presentation content into readable lessons, requesting presenter notes separately when needed.
4. **Customer case study → targeted nurture:** create audience-relevant emails using approved customer quotes and verified results.

Each includes a workflow summary, why it matters, required assets, optional design/page context, and a concise prompt. Connected Canva tools can discover designs and read visible text/page information. Export tools are documented but not exposed in this environment; no direct ActiveCampaign asset-upload tool was verified. Prompts explicitly request export/manual transfer and durable recipient-accessible asset URLs when needed. Temporary export links and preview thumbnails are not treated as production email assets.

New emails require approved content and the generator's actual image/brand or template selections. Existing HTML imports use import_campaign_design and poll persisted results. Automation design and saving remain distinct; saving requires verified tool support, inactive state, and actual email links in the send steps. Activation, enrollment, scheduling, and sending require separate approval.

Latest validation: four Canva workflows, eight sources and 35 templates; import versus generation routing; asset requirements and transfer fallback; ebook delivery, presentation-note handling and verified customer proof; context retention/reset; search/category behavior; and prompt generation across all 35 workflows passed. Desktop browser verification confirmed the Canva choices, assets panel and concise output. No live Canva designs, customer records, campaigns or automations were modified.


Google Sheets has been removed as a selectable source, including its five workflows. Google Forms remains available and may read its linked response Sheet.


## Selected Shopify marketing workflows

Replaces the five contact-operation templates with the selected four proposals (#1, #2, #6, #9):

1. First purchase → product education series.
2. Products bought together → complete-your-setup campaign.
3. Product launch → audience based on past purchases.
4. Engaged nonbuyers → campaign that answers purchase barriers.

Each includes a summary, why it matters, required data, optional store/product/scope fields, and a concise prompt. Source context persists across Shopify workflow selections and clears on source changes or reset.

Shopify merchant tools are not connected in this environment. Prompts verify authorized merchant reads or the actual coverage/freshness of synced ActiveCampaign ecommerce data, otherwise asking before using an export. Available ActiveCampaign order read schemas do not establish a working sync or complete purchase history. Buyer-scoped Shopify Order MCP does not provide store-wide history. No declined plugin was installed.

First-purchase status requires prior-history coverage, not merely one order in a date window. Product-pair analysis uses real line items and discloses sample size/coverage, with merchant confirmation of compatibility and availability. Launch targeting uses approved product criteria and claims. Click-based targeting requires actual contact-level product-link clicks joined to purchase history; aggregate clicks and opens cannot identify nonbuyers, and missing history is unknown rather than proof of no purchase. A click alone does not prove an objection.

Campaigns require the approved brief and actual generator prerequisites before a single generation call, then saved-result verification. The education journey separates proposal from approved inactive save, verifies its saved email links and real purchase trigger, and reports manual setup. Audience rules remain a proposal unless actual configuration is verified. No sending, scheduling, enrollment, activation or subscription changes happen implicitly.

Latest validation: four selected Shopify workflows, eight sources and 35 workflows total; context retention/reset; campaign/series routing; purchase and click evidence checks; short numbered prompts; preserved Canva/Jotform/Calendly behavior and Google Sheets removal. No live Shopify or ActiveCampaign account data was read or changed.

Desktop browser verification confirmed the four Shopify choices, first-purchase summary, required-data panel and generated prompt. Hero shortcuts now match available sources, including the Canva email import and Shopify education series.


CSV file has been removed as a selectable source, along with its five workflows and the now-empty Spreadsheets & files category. The app has 35 workflows across eight sources. Other workflows can still request approved exports when source access is unavailable.


## Prompt submission log

The express chips below the hero input are removed. Submitting a nonempty idea records its original text, client timestamp, unique submission ID, detected source and inferred action. Typing, editing builder fields, choosing templates, copying and opening an assistant do not create extra log entries.

Visitors can open **My prompt history** in the footer to review and export their own submissions as JSON or clear this browser’s history. Local storage keeps at most 200 entries from the last 30 days; when storage is blocked, history survives only for the page session. Browser history is separate from the owner’s shared log.

On Vercel, POST /api/prompt-log validates the entry and writes one structured prompt_submitted event to private project runtime logs. Open the Vercel project → Logs and filter for /api/prompt-log or prompt_submitted. The server adds its receivedAt timestamp. It does not expose a public log-reading endpoint or explicitly record IP addresses, browser fingerprints, cookies or other form fields in the application event. Vercel separately collects its platform request metadata.

Shared logging starts only after deploying the full ZIP, including the api folder. Static-only previews and the standalone HTML retain browser history but cannot write shared deployment logs. Failed deliveries remain locally queued and retry on the next submission, page load or online event, while retained in browser storage. Delivery is best effort, not exactly once: use the stable entry ID to deduplicate retries after an uncertain response. Clearing browser history also removes its pending queue.

Vercel runtime-log retention depends on the project plan. These logs are not a permanent database or an unlimited archive; configure a log drain or persistent database if long-term retention is needed. Never place submitted prompt logs in the public static folder.

Validation passed for all 35 workflow prompts plus submission-only capture, history persistence/retention/cap, blocked storage, offline fallback, concurrent submissions, successful delivery acknowledgement, clear behavior, API method/origin/body validation and safe text rendering. No live Vercel deployment was performed.

References: https://vercel.com/docs/functions/runtimes/node-js and https://vercel.com/docs/functions/logs

Desktop browser verification confirmed the chip-free hero and captured submission in My prompt history; the downloaded JSON was read back and matched the submitted text and detected Shopify source. The static preview cannot exercise live Vercel runtime logging; the handler was tested locally.
