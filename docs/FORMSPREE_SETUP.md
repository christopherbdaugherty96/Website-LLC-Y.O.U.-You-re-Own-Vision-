# Formspree Setup Guide

Last updated: 2026-04-26

## Purpose

Replace the current mailto inquiry flow with a real submission form without building a custom backend yet.

## Why This Is The Right Next Move

- Captures leads reliably
- Works even if a visitor has no mail app configured
- Faster path to first customers than building custom infrastructure
- Matches the current roadmap

## Steps

1. Create a Formspree account.
2. Create a new form.
3. Copy the generated endpoint (example: `/f/xxxxabcd`).
4. Update the website form `action` attribute with your real endpoint.
5. Submit a live test inquiry.
6. Confirm the message reaches your business email.
7. Keep phone/email fallback visible.

## Recommended Fields

- Name
n- Business Name
- Email
- Phone
- Website URL (optional)
- What do you need help with?
- Budget range (optional)

## Safety Rule

Do not remove the working mailto fallback until the new form is tested end-to-end.

## After Setup

Update `docs/ROADMAP.md` and check off the lead capture task.