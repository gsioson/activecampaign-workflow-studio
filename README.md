# ActiveCampaign Workflow Studio — Vercel edition

A self-contained static web app based on the supplied ActiveCampaign prompt builder, with a layout inspired by the supplied MindCloud screen recording.

## Included

- Centered gradient hero with a custom workflow idea box.
- Nine app cards, searchable by app and workflow; category filters.
- All 17 workflow templates and original prompt-generation rules.
- Modal builder with editable goals, timing, recurrence, and relevant list settings.
- Copy and launch links for ChatGPT, Claude, and Gemini.
- Session-only saved prompt collection and plain-text download.
- Responsive desktop and mobile styles; keyboard-accessible native dialogs.

No dependencies, API keys, or build step are required. HTML, CSS, and JavaScript are separated for editing.

## Deploy to a new Vercel project

Extract this folder and open a terminal inside it. Run:

```sh
npx vercel
```

Sign in when prompted. Set up a **new** project to keep the current prompt builder separate. Use the current folder as the project root. The included `vercel.json` selects no framework and serves the root directory without a build step.

The first deployment of a new Vercel project is a production deployment. For later production updates, run:

```sh
npx vercel --prod
```

Alternatively, commit these files to a Git repository and import the repository into Vercel with Framework Preset **Other**, no build command, and Output Directory `.`.

## Local preview

```sh
python3 -m http.server 8000
```

Open http://localhost:8000.

## Email delivery

This edition uses saved prompt downloads instead of email capture. The supplied public site exposed a frontend call to `/api/email-prompt`, but its server implementation and credentials were not supplied. This package does not claim to send email or create ActiveCampaign contacts. To restore that flow, provide the original server route and configure its required environment variables in the new Vercel project. Keep credentials server-side.

## Validation

JavaScript syntax and template-generation checks are performed during preparation. Visual browser verification could not be completed because the browser preview stalled.

Reference sources:
- https://activecampaign-prompt-builder.vercel.app/
- https://screen.ac/01a18391-56bb-76fa-bd37-c3989a996b83
- https://vercel.com/docs/project-configuration/vercel-json
- https://vercel.com/docs/cli/deploy
