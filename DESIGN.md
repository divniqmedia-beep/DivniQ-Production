# Lyniq Studio — Design System

Implementation-ready, token-driven UI guidance for the Lyniq Studio marketing site. Optimized for consistency, accessibility (WCAG 2.2 AA), and fast delivery.

**Reference:** [https://lyniq.framer.website/](https://lyniq.framer.website/)  
**Surface:** Marketing site  
**Audience:** Buyers, teams, and decision-makers  
**Extraction note:** Audience and product-surface inference confidence is low; verify brand context against live site before shipping visual changes.

---

## 1. Context and goals

**Design intent (one sentence):** Deliver a clean, functional, Inter-based marketing UI where semantic tokens, explicit component states, and testable accessibility rules produce consistent, keyboard-first experiences without one-off visual exceptions.

### Goals

- Ship UI that is consistent across pages via semantic tokens (not raw hex in components).
- Meet WCAG 2.2 AA with visible focus, keyboard operability, and contrast-safe text.
- Enable fast implementation in Next.js + Tailwind by mapping tokens → CSS variables → utility classes.
- Prefer system consistency over local visual exceptions.

### Non-negotiables

- Every interactive component **must** define: default, hover, focus-visible, active, disabled, loading, and error.
- Components **must** document keyboard, pointer, and touch behavior.
- Accessibility criteria **must** be testable (pass/fail) in implementation.
- Teams **must not** ship low-contrast text or hidden focus indicators.
- Teams **must not** introduce one-off spacing or typography exceptions outside approved tokens.

---

## 2. Design tokens and foundations

Use semantic token names in component guidance and code. Map primitives once in theme/`globals.css`; consume only semantic aliases in components.

### 2.1 Color — primitives (extracted)

| Token | Value | Notes |
| --- | --- | --- |
| `color.text.primary` | `#0c0c0c` | Primary body / heading on light surfaces |
| `color.text.secondary` | `#ffffff` | Text on dark / inverse surfaces |
| `color.text.tertiary` | `#0b0b0c` | Near-black alternate; treat as primary-adjacent |
| `color.text.inverse` | `#0000ee` | Extracted link blue — verify; prefer semantic `color.action.link` |
| `color.surface.base` | `#000000` | Dark surface / cinematic plates |

> Extraction diagnostics: palette is incomplete for a full light marketing system (missing muted text, borders, accent brand). Teams **must** define the semantic layer below before implementing new components.

### 2.2 Color — semantic (required)

Define and use these semantic tokens. Values listed are the Lyniq-aligned baseline; adjust only via token update, never in components.

| Semantic token | Maps to / value | Usage |
| --- | --- | --- |
| `color.fg.default` | `color.text.primary` (`#0c0c0c`) | Default text on light surfaces |
| `color.fg.muted` | `#6b6b6b` (team-defined) | Supporting / secondary copy; **must** meet 4.5:1 on surface |
| `color.fg.on-dark` | `color.text.secondary` (`#ffffff`) | Text on dark surfaces |
| `color.fg.link` | Verify vs `#0000ee` | Inline / nav links; **must** meet contrast + non-color cue |
| `color.fg.danger` | Team-defined red ≥ 4.5:1 | Error text |
| `color.bg.page` | `#ffffff` (team-defined) | Default marketing page background |
| `color.bg.dark` | `color.surface.base` (`#000000`) | Dark sections / heroes |
| `color.bg.subtle` | Team-defined light gray | Cards, chips, input fills |
| `color.border.default` | Team-defined (e.g. black @ 10%) | Dividers, inputs, chips |
| `color.border.focus` | High-contrast focus ring | Focus-visible outline |
| `color.action.primary.bg` | Brand accent (verify on live site) | Primary CTA fill |
| `color.action.primary.fg` | `#ffffff` or dark meeting contrast | Primary CTA label |
| `color.action.primary.bg-hover` | Darken/lighten of primary | Hover |
| `color.action.disabled.bg` | Muted fill | Disabled controls |
| `color.action.disabled.fg` | Muted text ≥ 3:1 for UI, prefer 4.5:1 for text | Disabled labels |

**Contrast constraints**

- Body and UI text **must** meet **4.5:1** against adjacent background (WCAG 2.2 AA).
- Large text (≥ 18.66px bold or ≥ 24px) **must** meet **3:1**.
- Non-text UI (icons, borders that convey state) **must** meet **3:1**.
- Focus indicators **must** be visible at **3:1** against adjacent colors and **must not** rely on color alone.

### 2.3 Typography

| Token | Value |
| --- | --- |
| `font.family.primary` | `Inter` |
| `font.family.stack` | `Inter, "Inter Placeholder", sans-serif` |
| `font.size.base` | `16px` |
| `font.weight.base` | `500` |
| `font.lineHeight.base` | `20.8px` (1.3) |

**Type scale**

| Token | Size |
| --- | --- |
| `font.size.xs` | `11px` |
| `font.size.sm` | `12px` |
| `font.size.md` | `13px` |
| `font.size.lg` | `14px` |
| `font.size.xl` | `15px` |
| `font.size.2xl` | `16px` |
| `font.size.3xl` | `18px` |
| `font.size.4xl` | `19px` |

**Semantic type roles (use these in components)**

| Role | Size token | Weight | Line height | Use |
| --- | --- | --- | --- | --- |
| `type.caption` | `xs`–`sm` | 500–600 | ≥ 1.3 | Eyebrows, meta, chip labels |
| `type.body` | `2xl` (`16px`) | 500 | `20.8px` | Default paragraphs |
| `type.body-sm` | `lg`–`xl` | 500 | ≥ 1.3 | Dense supporting copy |
| `type.label` | `md`–`lg` | 600 | ≥ 1.2 | Form labels, nav items |
| `type.heading-sm` | ≥ `4xl` or display scale | 600–700 | tight | Section subheads |
| `type.display` | Project display scale (e.g. clamp / `90px` stats) | 600–700 | ~1.0–1.15 | Heroes, stats, big idea |

> Display sizes beyond `font.size.4xl` are allowed for marketing heroes/stats **only** when registered as `type.display.*` tokens. Do not invent one-off `text-[Npx]` in components without a token.

**Implementation (Next.js)**

- Load Inter via `next/font/google` with weights **400, 500, 600, 700**.
- Set `font.family.stack` on `body`; use `font-display` / Inter for marketing headlines and counters.

### 2.4 Spacing

No reliable extraction from source. Teams **must** define an explicit spacing scale and semantic aliases:

**Primitive scale (recommended baseline)**

`space.0=0` · `space.1=4px` · `space.2=8px` · `space.3=12px` · `space.4=16px` · `space.5=24px` · `space.6=32px` · `space.7=48px` · `space.8=64px` · `space.9=96px`

**Semantic aliases (required)**

| Token | Suggested | Use |
| --- | --- | --- |
| `space.inset.xs` | `space.2` | Chip / dense control padding |
| `space.inset.sm` | `space.3` | Buttons, inputs |
| `space.inset.md` | `space.4` | Cards, nav items |
| `space.stack.sm` | `space.3` | Label → field |
| `space.stack.md` | `space.5` | Heading → body |
| `space.stack.lg` | `space.7` | Section blocks |
| `space.section-y` | `space.8`–`space.9` | Section vertical rhythm |
| `space.gutter` | `space.4`–`space.6` | Page horizontal padding |

Components **must** consume semantic spacing tokens, not arbitrary pixel values.

### 2.5 Radius, shadow, motion

| Token | Value | Use |
| --- | --- | --- |
| `motion.duration.instant` | `400ms` | Default interactive transitions (hover, focus ring fade, menu) |
| `motion.easing.standard` | Team-defined (e.g. `cubic-bezier(0.22, 1, 0.36, 1)`) | UI transitions |
| `motion.easing.entrance` | Same or slightly decelerated | Section enter / parallax settle |
| `radius.sm` / `radius.md` / `radius.pill` | Team-defined | Chips, inputs, CTAs — define once |
| `shadow.card` / `shadow.overlay` | Team-defined | Cards, dropdowns |

**Motion rules**

- Interactive state changes **should** use `motion.duration.instant` (`400ms`) unless scroll-linked (parallax), which **must** be transform/opacity only and respect `prefers-reduced-motion`.
- When `prefers-reduced-motion: reduce` is set, scroll-linked scale/y **must** resolve to resting values (`scale: 1`, `y: 0`); decorative motion **must** be disabled or minimized.

### 2.6 Token → CSS mapping (implementation pattern)

```css
:root {
  --font-family-primary: Inter, "Inter Placeholder", sans-serif;
  --font-size-base: 16px;
  --font-weight-base: 500;
  --font-line-height-base: 20.8px;

  --color-fg-default: #0c0c0c;
  --color-fg-on-dark: #ffffff;
  --color-bg-page: #ffffff;
  --color-bg-dark: #000000;
  --color-border-focus: /* high-contrast ring */;

  --motion-duration-instant: 400ms;
}
```

Components **must** reference `var(--…)` / Tailwind theme keys, not hardcoded hex, except inside the single token source file.

---

## 3. Component-level rules

Known marketing-page density (from extraction): **links (45)**, **inputs (26)**, **buttons (15)**, **navigation (3)**, **lists (1)**. Prioritize link, input, button, and nav quality.

### 3.1 Shared interactive state matrix

Every interactive control **must** implement:

| State | Behavior |
| --- | --- |
| **Default** | Resting styles from semantic tokens |
| **Hover** | Pointer devices only; clear affordance (color/underline/bg); transition ≤ `motion.duration.instant` |
| **Focus-visible** | Visible ring using `color.border.focus`; **must not** remove outline without replacement; keyboard-only preferred via `:focus-visible` |
| **Active** | Pressed feedback (slightly darker fill or translate) |
| **Disabled** | `aria-disabled` or native `disabled`; not in tab order if truly inert; contrast muted; no hover affordance |
| **Loading** | In-progress: `aria-busy="true"`; preserve layout width; disable duplicate submits |
| **Error** | `aria-invalid="true"` + described by error id; error text uses `color.fg.danger` |

### 3.2 Link

**Anatomy:** label text · optional icon · optional external indicator  

**Variants:** inline body · nav · footer · CTA-as-link (visually button-like but `<a>`)

| State | Rule |
| --- | --- |
| Default | `color.fg.link` or nav fg token; underline optional if contrast + weight clear |
| Hover | Darken/lighten + underline if not already; cursor pointer |
| Focus-visible | Focus ring; **must** remain visible on dark and light surfaces |
| Active | Pressed color |
| Disabled | `aria-disabled="true"` + `tabIndex={-1}` or omit href pattern; muted |
| Loading | Rare; show busy text if navigation pending |
| Error | N/A unless form-associated |

**Keyboard:** Enter/Space activate (for role=link button hybrids, Space **must** activate).  
**Pointer:** Click/tap full hit target ≥ 44×44px where standalone.  
**Touch:** No hover-only information.  

**Responsive / overflow:** Long URLs/labels **must** wrap or truncate with accessible name intact (`title` alone is insufficient).  
**Empty:** Do not render empty `<a>` without accessible name.

**A11y acceptance**

- [ ] Pass: Every link has discernable accessible name.
- [ ] Pass: Focus ring visible on light and dark backgrounds.
- [ ] Fail: Color-only distinction from surrounding text without underline/weight on body links.

### 3.3 Button

**Anatomy:** container · label · optional leading/trailing icon · optional loading indicator  

**Variants:** primary · secondary · tertiary/ghost · destructive  

| State | Rule |
| --- | --- |
| Default | Tokenized bg/fg/border per variant |
| Hover | `color.action.*.bg-hover`; transition `motion.duration.instant` |
| Focus-visible | Ring outside control; 2px+ offset preferred |
| Active | Pressed treatment |
| Disabled | Disabled tokens; `disabled` or `aria-disabled` |
| Loading | Spinner + `aria-busy`; label **should** stay or become “Loading…” with live region if status changes |
| Error | Optional for submit failures — show adjacent error text, do not rely on button color alone |

**Keyboard:** Enter and Space activate.  
**Pointer / touch:** Min hit target **44×44px**; spacing between adjacent buttons ≥ `space.2`.  

**Long content:** Labels **must not** overflow clipped without tooltip/`aria-label` that matches visible intent. Prefer wrapping to two lines over ellipsis for primary CTAs.  
**Empty:** Icon-only buttons **must** have `aria-label`.

**A11y acceptance**

- [ ] Pass: Name from contents or `aria-label`.
- [ ] Pass: Disabled buttons not operable via keyboard.
- [ ] Fail: Loading state with no accessible busy indication.

### 3.4 Input (text, email, textarea)

**Anatomy:** label · field · helper · error · optional prefix/suffix  

**Variants:** default · search · textarea · with-addon  

| State | Rule |
| --- | --- |
| Default | Border `color.border.default`; text `color.fg.default` |
| Hover | Border emphasis (if not disabled) |
| Focus-visible | Strong border + ring; caret visible |
| Active | Same as focus while typing |
| Disabled | Non-editable; muted |
| Loading | Optional skeleton / read-only while hydrating |
| Error | `aria-invalid="true"`; `aria-describedby` → error id; error in `color.fg.danger` |

**Keyboard:** Tab moves focus; standard editing keys.  
**Touch:** Font size on fields **must** be ≥ 16px on mobile to avoid iOS zoom (use `font.size.2xl` / base).  

**Overflow:** Long values scroll inside field; labels truncate with full text available to AT.  
**Empty:** Placeholder is not a label — visible `<label>` **must** exist.

**A11y acceptance**

- [ ] Pass: Programmatic label association (`htmlFor` / `aria-labelledby`).
- [ ] Pass: Error announced via describedby when invalid.
- [ ] Fail: Placeholder-only labeling.

### 3.5 Navigation

**Anatomy:** landmark `nav` · list of links · optional mobile disclosure · optional niche/dropdown  

**Variants:** primary header · footer · sidebar overlay  

| State | Rule |
| --- | --- |
| Default | Clear current/resting styles |
| Hover | Link hover tokens |
| Focus-visible | Per-item ring; focus order matches visual order |
| Active | Current page: `aria-current="page"` |
| Disabled | Hidden or disabled items labeled |
| Loading | Route pending: optional busy on trigger |
| Error | N/A |

**Keyboard**

- Tab through items; Enter activates.
- Dropdowns: Escape closes; Arrow keys **should** move within menu; focus trap **must** apply for modal mobile nav.
- Mobile menu: focus moves into panel on open; restores to trigger on close.

**Pointer / touch:** Full-width mobile rows; chevron hit area ≥ 44px.  

**Responsive:** Desktop horizontal; mobile collapsed control with accessible name (“Open menu” / “Close menu”).  
**Overflow:** Prefer wrap or scroll region with visible focus; do not clip focus rings.

**A11y acceptance**

- [ ] Pass: Single `nav` landmark (or labeled multiples).
- [ ] Pass: Esc closes overlay; focus return.
- [ ] Fail: Menu only reachable by hover.

### 3.6 List

**Anatomy:** list container · items · optional icons/meta  

**Variants:** plain content · feature · FAQ · stats row  

| State | Rule |
| --- | --- |
| Default | Semantic `<ul>`/`<ol>` when enumerating |
| Hover / focus | Only if items are interactive (then follow Link/Button) |
| Disabled / loading / error | Per interactive child |

**Overflow:** Long text wraps; do not use fixed height that clips without scroll + keyboard access.  
**Empty:** Provide empty-state copy (“No items yet”) — never a blank region with no explanation.

### 3.7 Marketing sections (page patterns)

Apply the same token and a11y rules to composed sections:

| Pattern | Rules |
| --- | --- |
| **Hero** | Display type tokens; CTA group uses Button rules; media decorative → empty `alt` |
| **Stats / counters** | Numbers use `type.display`; announce final value to SR; motion respects reduced motion |
| **Big idea / parallax** | Transform-only scroll effects; sticky track outside overflow-hidden ancestors; reduced motion → static scale 1 |
| **Cards / chips** | Spacing via `space.inset.*`; interactive chips follow Button/Link state matrix |
| **Forms / contact** | Input + Button rules; one error summary **should** exist for multi-field forms |

---

## 4. Accessibility requirements and acceptance criteria

**Target:** WCAG 2.2 AA.

### Global requirements

| ID | Requirement | Pass | Fail |
| --- | --- | --- | --- |
| A1 | Keyboard access to all interactive controls | All operable via Tab/Enter/Space/Esc as documented | Mouse-only controls |
| A2 | Focus-visible always visible | Ring meets 3:1; not `outline: none` without replacement | Focus removed or invisible on bg |
| A3 | Text contrast | 4.5:1 normal / 3:1 large | Primary copy below threshold |
| A4 | Name, role, value | Accname present; roles correct | Icon button with no name |
| A5 | Reduced motion | Parallax/scale disabled or static | Large motion ignores preference |
| A6 | Hit targets | ≥ 44×44px for primary controls | Tiny tap targets |
| A7 | Forms | Labels + error association | Placeholder-only / unlinked errors |
| A8 | Landmarks | `main`, `nav`, content order logical | Skip-to-content missing on long pages (should have skip link) |

### Skip link (recommended → treat as required for marketing)

- First focusable element **should** be “Skip to content” moving focus to `#main`.

---

## 5. Content and tone standards

**Tone:** Concise, confident, implementation-focused.

### Do

- Use clear action verbs: “Start a project”, “View work”, “Contact us”.
- Keep labels specific: “Open menu”, not “Click here”.
- Prefer short sentences for body (`type.body`).

### Don’t

- Ambiguous CTAs: “Learn more” without context in accessible name (ok if preceding heading provides name via `aria-labelledby`).
- All-caps walls of body text (eyebrows/captions OK).
- Joke microcopy that obscures errors.

### Examples

| Context | Good | Bad |
| --- | --- | --- |
| Primary CTA | Start a project | Submit |
| Nav disclosure | Open menu | ☰ (unlabeled) |
| Error | Enter a valid email address | Invalid |
| Empty list | No case studies yet | (blank) |

---

## 6. Anti-patterns and prohibited implementations

**Must not**

- Hardcode hex/rgb in component JSX/CSS modules (except token source).
- Use typography or spacing values outside the token scales.
- Hide focus outlines without a visible `:focus-visible` replacement.
- Ship low-contrast gray-on-gray body text.
- Rely on hover-only menus or tooltips for essential actions.
- Clip sticky/parallax sections inside `overflow: hidden` ancestors that break `position: sticky`.
- Animate layout properties (width/top) for parallax when transform suffices.
- Use non-descriptive link text (“click here”, “read more”) without accessible contextual name.
- Omit disabled/loading/error states for interactive components.
- Place critical text in images without accessible alternative.

**Migration notes (this repo)**

- Prefer Inter (`font.family.primary`) for Lyniq-aligned marketing type; map `color.fg.default` → `#0c0c0c` (closer than legacy `#0a0a0a` ink if aligning to Lyniq).
- Replace one-off `text-[Npx]` with registered `type.*` / `font.size.*` tokens.
- Centralize purple/accent as `color.action.primary.*` rather than scattered `text-accent` exceptions without token docs.
- Big Idea parallax **must** remain outside overflow-clipping wrappers; keep `prefers-reduced-motion` branch.

---

## 7. Edge cases

| Scenario | Required handling |
| --- | --- |
| Long headings | Wrap; do not truncate mid-word; keep line-height from type role |
| Long nav labels | Wrap on mobile; dropdown scrollable with keyboard |
| Empty capabilities / lists | Empty-state string + optional CTA |
| Slow network | Button loading state; don’t double-post |
| Zoom 200% | No loss of content/function; reflow to single column |
| Dark section on light page | Switch to `color.fg.on-dark`; recompute focus ring for dark bg |
| Touch + hover | Assume sticky hover on some devices; don’t leave “stuck” hover styles critical |

---

## 8. QA checklist

### Tokens & foundations

- [ ] No raw hex in components (only in token source)
- [ ] Inter loaded with 500/600/700 as needed
- [ ] Base body uses `font.size.base` + `font.weight.base` + `font.lineHeight.base`
- [ ] Spacing uses semantic `space.*` aliases

### Components

- [ ] Links, inputs, buttons, nav each implement full state matrix
- [ ] Hit targets ≥ 44×44px for primary actions
- [ ] Mobile inputs ≥ 16px font size
- [ ] Loading and error states present where data/actions exist
- [ ] Long content wraps or scrolls accessibly; empty states defined

### Accessibility

- [ ] Keyboard-only pass of header → CTA → footer
- [ ] Focus-visible visible on light and dark bands
- [ ] Contrast checked for primary/muted text
- [ ] `prefers-reduced-motion` disables parallax scale/y
- [ ] Forms: labels + `aria-invalid` + describedby errors
- [ ] Nav: Esc closes; focus restore; `aria-current` on active

### Motion & layout

- [ ] Transitions use `motion.duration.instant` (400ms) unless scroll-linked
- [ ] Sticky/parallax sections not trapped in overflow-hidden ancestors
- [ ] QA at 320 / 768 / 1280 widths and 200% zoom

### Content

- [ ] CTA and control labels are descriptive
- [ ] No placeholder-only form fields
- [ ] Tone matches concise / confident standard

---

## Document control

| Field | Value |
| --- | --- |
| Brand | Lyniq Studio |
| Surface | Marketing site |
| A11y target | WCAG 2.2 AA |
| Motion default | `motion.duration.instant` = 400ms |
| Primary type | Inter / stack as specified |
| Status | Implementation baseline — verify incomplete color extraction before production lock |

*End of DESIGN.md*
