# Auralis Digital — Roadmap

Last updated: 2026-04-30

## Current State (Truth)

**You have:**

- Clear service offering
- Pricing structure ($250 refresh → $1,000+ custom)
- $250/month retainer model
- Full client lifecycle docs
- Hosting/domain policy
- Revision control
- Migration complete (GitHub Pages → Vite)
- Live upgraded website

**You do not have yet:**

- Real form backend (still mailto)
- Testimonials or proof
- Strong lead capture system
- Deployment maturity (GitHub Pages only)
- Repeatable client acquisition pipeline

---

## Priority Order (Do This First)

1. Fix branding metadata (browser tab, OG tags)
2. Restore working links and CTAs (tel:, mailto:, demo links)
3. Add retainer section to homepage
4. Add real form backend (Formspree)
5. Add example work section
6. Start outreach
7. Then consider hosting upgrade

---

## Phase 1 — Stabilize the Live Site

Target: immediately

Goal: make the current site fully credible and functional.

Tasks:

- [ ] Fix branding metadata (browser tab title, OG tags)
- [ ] Restore all working links: phone (tel:), email (mailto:), demo links
- [ ] Add $250/month retainer section to homepage
- [ ] Ensure all CTAs actually do something
- [ ] Verify mobile layout, images, spacing, and responsiveness
- [ ] Run full browser/mobile regression check

Success criteria: site feels complete instead of "almost done"

---

## Phase 2 — Real Lead Capture

Target: this week

Goal: stop relying on mailto as the primary conversion path.

Tasks:

- [ ] Choose form system — Formspree (fastest, use `docs/FORMSPREE_SETUP.md`)
- [ ] Replace mailto with a real submission form with success confirmation
- [ ] Route submissions to email (optionally Google Sheets)
- [ ] Add spam protection
- [ ] Verify form submissions end-to-end
- [ ] Add Google Analytics 4 (use `docs/ANALYTICS_SETUP.md`)
- [ ] Add Google Search Console

Success criteria: you have a real lead funnel with tracking active

---

## Phase 3 — Trust and Proof Layer

Target: next 30 days alongside outreach

Goal: make the site believable to strangers.

Tasks:

- [ ] Add named "Example Work" section with concept sites
- [ ] Add "Who this is for" section
- [ ] Add 1–2 real testimonials once available — do not fake proof
- [ ] Publish first case study (use `docs/CASE_STUDY_TEMPLATE.md`)
- [ ] Add before/after screenshots after first delivery
- [ ] Create or optimize Google Business Profile

Success criteria: visitors trust you faster; at least one real client result is public

---

## Phase 4 — Deployment Upgrade

Target: after first revenue

Goal: move from "working" to "clean long-term setup."

Current reality: GitHub Pages is working but not ideal long-term.

Tasks:

- [ ] Decide: Vercel (recommended) or Netlify
- [ ] Connect repo to chosen platform
- [ ] Deploy preview environment
- [ ] Test build before switching domain
- [ ] Migrate domain (optional but recommended)

Success criteria: better builds, easier updates, fewer edge issues

---

## Phase 5 — Client Acquisition System

Target: next 30 days

Goal: turn this into a real business pipeline.

Tasks:

- [ ] Identify local targets: barbershops, restaurants, lawn care, contractors
- [ ] Use `docs/CLIENT_INTAKE_TEMPLATE.md` and `docs/QUOTE_AND_SCOPE_TEMPLATE.md`
- [ ] Contact 20 qualified local prospects
- [ ] Track prospects in `docs/LEADS_ACTIVE_OUTREACH.csv`
- [ ] Use `docs/OUTREACH_PACKET.md` for prospect messages
- [ ] Use response scripts when leads reply (`docs/RESPONSE_SCRIPTS_WHEN_LEADS_REPLY_2026-04-24.md`)
- [ ] Use intake questionnaire when a lead is interested (`docs/CLIENT_INTAKE_QUESTIONNAIRE.md`)
- [ ] Send niche-relevant demo links
- [ ] Follow up consistently

Weekly targets: 25 researched / 10 contacted / 5 follow-ups / 2 conversations / 1 proposal

Success criteria: first repeatable clients

---

## Phase 6 — Delivery Efficiency

Target: after first client says yes

Goal: reduce time per client, deliver without chaos.

Use your docs:

- `docs/WEBSITE_BUILD_WORKFLOW.md`
- `docs/REVISION_POLICY.md`
- `docs/CLIENT_HANDOFF_CHECKLIST.md`
- `docs/HOSTING_AND_DOMAIN_CHECKLIST.md`
- `docs/FIRST_CLIENT_DELIVERY_CHECKLIST.md`

Tasks:

- [ ] Follow workflow strictly on first real project
- [ ] Enforce revision limits per policy
- [ ] Standardize build structure across projects
- [ ] Track time spent per project
- [ ] Identify which package is easiest to sell and deliver

Success criteria: a client can move from lead to launch without custom chaos

---

## Phase 7 — Retainer System

Target: at every handoff

Goal: turn one-time clients into recurring revenue.

Already defined: $250/month retainer

Tasks:

- [ ] Add retainer to homepage (if not already done in Phase 1)
- [ ] Offer retainer at every project handoff
- [ ] Define internal behavior: monthly check-in, updates, small improvements
- [ ] Document what is and is not included in retainer scope

Success criteria: predictable monthly income

---

## Phase 8 — Optional Expansion

Target: only after everything above works

Ideas (do not mix into core offer yet):

- Nova-powered lead summaries and auto-replies
- Simple CRM dashboard
- Custom lead backend
- Client portal
- Analytics reporting dashboard
- Booking/calendar flow

Rule: do not build advanced automation before there are real clients and real workflow problems.

---

## Status Tracker

| Area | Status | Next Action |
|---|---|---|
| Live website | Complete | Monitor for regressions |
| Branding metadata | **Complete** | title, OG, Twitter all updated |
| Working links / CTAs | **Complete** | tel:, mailto:, demo links all wired |
| Mobile navigation | **Complete** | Hamburger menu with full nav + CTAs |
| Retainer section on homepage | **Complete** | $250/mo Monthly Care Plan card added |
| "Who this is for" section | **Complete** | 5 industry concept cards added |
| Proof / results section | **Complete** | Honest section with CTA; ready for real testimonials |
| Static assets in deployment | **Complete** | assets/, HTML pages copied to dist in workflow |
| Lead capture backend | **Pending your action** | Create Formspree account, paste endpoint into `FORMSPREE_ENDPOINT` |
| Analytics / Search Console | Not Started | Set up per `ANALYTICS_SETUP.md` (requires account) |
| Outreach packet | Complete | Start using for prospects |
| Intake questionnaire | Complete | Use when lead is interested |
| Quick estimate guide | Complete | Use before quoting |
| Proposal template | Complete | Use for qualified leads |
| First-client delivery checklist | Complete | Use after close |
| Proof workflow / case study | Complete | Use after delivery |
| First real outreach | Not Started | Contact 20 qualified prospects |
| First paid client | Not Started | Follow up and send proposal |
| First testimonial / case study | Not Started | Capture after delivery — replace proof section placeholder |
| Hosting upgrade (Vercel/Netlify) | Not Started | Do after first revenue |

---

## Document Authority Model

Use documents in this order:

1. `README.md` — public repo and business overview
2. `docs/INDEX.md` — master document map
3. `docs/ROADMAP.md` — current execution order and priorities (this file)
4. `docs/CURRENT_STATE_CHECKPOINT_2026-04-25.md` — site checkpoint and known gaps
5. `docs/REGRESSION_CHECKLIST_2026-04-25.md` — safety checklist before and after edits
6. `docs/PUBLIC_LAUNCH_CHECKLIST.md` — prospect-readiness checklist
7. Sales docs — outreach, scripts, intake, estimate, proposal, onboarding
8. Delivery docs — first-client checklist and client onboarding
9. Proof docs — proof workflow and case study template
10. Background and audit docs — approved context and reasoning history

---

## What Not To Do Right Now

- Do not create more overlapping roadmap docs
- Do not redesign the homepage again
- Do not overbuild Nova integration yet
- Do not add complex backend systems before lead volume exists
- Do not call conceptual proof a case study
- Do not let older approved docs override the current execution order

---

## Operating Rule

Every new task should support at least one of these outcomes:

1. Lead capture
2. Outreach
3. Closing
4. Delivery
5. Proof
6. Retention

---

## Honest Assessment

You are not building a website anymore. You are building a small, structured web service business.

**What you have:** strong foundation, clear direction, real pricing, operational docs, live upgraded site.

**What separates you from making money now:** lead capture, proof, outreach, execution.

You don't need more features. You need to fix the small gaps, start getting clients, deliver well, and offer the retainer.
