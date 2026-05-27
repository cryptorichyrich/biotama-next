# Kanban Task: Fix Blog Article Page — Light Mode Readability

## The Problem

The blog uses "Vault Terminal" design system globally — dark mode looks incredible (amber/gold on black), but **light mode** applies the same gold/amber text colors which become unreadable on light backgrounds.

## Files to Fix

**Blog listing page:** `src/app/blog/page.tsx`
- Card titles: `text-[var(--color-amber-text)]` → need light mode override
- Card descriptions: `text-[var(--color-text-white)]` and amber-dim dates — review
- Tags: amber/green badges — keep but soften in light mode
- Back link, section label — review amber/green references

**Blog article page:** `src/app/blog/[slug]/page.tsx`
- renderMarkdown(): h1-h3 all use `color-amber-text` for headings
- Paragraphs use `color-amber-text` for body text (worst offender)
- Code blocks: `color-amber-dim` background text, `color-amber-text` code text
- List items: `color-amber-dim` text, green `>` markers
- Back link, meta bar dates — all amber
- Related posts cards: amber titles

**CSS variables:** `src/app/globals.css`
- `[data-theme="light"]` section lines 86-143
- Light mode `--color-amber-text: #c9a84c` is pure gold — needs to be muted warm brown
- Light mode `--color-amber-dim: #777777` is ok but review
- Light mode `--color-amber-bright: #d4b85a` → too bright for light bg

## What "FinancialTimes-like" Means

- **Headings** (h1-h3): dark slate `#1a1a1a` in light mode, not gold
- **Body text**: readable charcoal `#333-444` in light mode, not amber
- **Accent gold**: used sparingly — a thin divider line, a subtle badge, a hover state
- **Article typography**: Spectral for headings (keep), crisp body in light mode
- **No amber glow/CRT effects** in light mode (mostly handled, but text colors leak)
- **Glass cards** in light mode: white bg, subtle border, no gold glow

## CSS Variable Strategy

The cleanest fix is adjusting the `[data-theme="light"]` variables so they cascade automatically into every component:

Change light mode `--color-amber-text` from `#c9a84c` (gold) to something like:
- `#6b5c3d` (muted warm brown) — readable on white but still warm
- OR use the existing `--color-text-secondary: #555` for body text

Change light mode `--color-amber-bright` from `#d4b85a` to `#8a7a50`
Change light mode `--color-amber-dim` from `#777` to `#666` (slightly darker for readability)

Green terminal accents in light mode (`--color-green-term: #2e7d32`):
- This is already a muted dark green — ok for tags and `$` prompts
- Consider `--color-green-term: #3d7a3d` if it looks too bright

Gold glow/gradient on glass cards in light mode:
- `.glass-card` in light mode already uses white bg (line 272-279) — good
- `.glass-card::before` gradient border in light mode (line 303-310) — change gold gradient to subtle gray
- Section divider gradient in light mode — change gold gradient to subtle gray

## What NOT to Change

Do NOT touch any `[data-theme="dark"]` or unthemed (default) CSS. The vault terminal dark mode must remain identical.

## Steps

1. Edit `src/app/globals.css`:
   - Adjust `[data-theme="light"]` amber/gold variables
   - Fix `.glass-card::before` light mode border gradient
   - Fix `.section-divider` light mode (it uses gold gradient)
   - Fix `.gradient-text` light mode (line 407-412) — currently full gold gradient

2. Edit `src/app/blog/page.tsx`:
   - Remove hardcoded `text-[var(--color-amber-text)]` from card titles (line 78) — let CSS cascade work
   - Remove hardcoded `text-[var(--color-text-white)]` from descriptions (line 83) — use body color
   - Fix date color references
   - Ensure hover doesn't produce unreadable gold-on-white

3. Edit `src/app/blog/[slug]/page.tsx`:
   - Replace `color-amber-text` with `color-text-heading` for all h1-h3
   - Replace `color-amber-text` with `color-text-body` for paragraphs (line 211)
   - Replace `color-amber-dim` with `color-text-tertiary` for less important text
   - Adjust code block colors
   - Adjust list item colors
   - Adjust meta bar and back link

4. Run `npm run build` to verify compilation

## Verification

- `npm run build` must succeed
- Dark mode: blog looks identical to before (vault terminal amber/gold)
- Light mode: blog listing has dark headings, readable body, warm but not gold accents
- Light mode article page: body text is crisp charcoal, code has subtle borders
- No amber-on-cream unreadable text anywhere
- Gold is still present as accent (thin dividers, hover underlines, tag border) but not as text color
