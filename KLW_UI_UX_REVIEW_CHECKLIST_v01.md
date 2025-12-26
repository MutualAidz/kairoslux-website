# KLW_UI_UX_REVIEW_CHECKLIST_v01

Version: v0.1  
Owner: Kairos Lux Works (Felix)  
Purpose: Enforce aesthetic coherence + usability quality for kairoslux.ai, and provide a repeatable “Agent review” protocol.

## 0) How this checklist is used

This checklist is a quality gate for:

- UI/UX audits (human or LLM)
- “Agent” browsing reviews
- Design polish passes
- Pre-release acceptance checks

**Output format for reviews**
For each section below, reviewers must report:

- Status: PASS / PARTIAL / FAIL
- Evidence: what was seen (component/section name + short description)
- Fix: 1–3 concrete actions (CSS/class changes, layout shifts, copy tweaks)
- Priority: P0 (blocking) / P1 (important) / P2 (nice)

## 1) Design system coherence

### 1.1 Brand vibe check (Spec alignment)

- Overall feel matches: “Warm, Futuristic, Neo‑Gothic.”
- Gold accents are present but restrained: not “Vegas,” not absent.
- Deep navy backgrounds feel rich (not flat black).
  Reference: KLW_MASTER_CONTROL_SPEC REQ‑15/16.

PASS criteria:

- Gold appears in CTAs, key highlights, and selected states consistently.
- Page reads as designed, not as default Tailwind.

### 1.2 Typography consistency

- Headings use the intended display font consistently across all sections.
- Buttons and option labels use consistent typography (no random font fallbacks).
- Line-length is controlled (avoid overly wide paragraphs on desktop).

PASS criteria:

- H1/H2/H3 scale feels intentional, not arbitrary.
- Buttons match the typographic system.

### 1.3 Color rhythm + section separation

- Background rhythm alternates per spec (dark → light → dark …).
- “Chapter breaks” are obvious (especially Compass → Mission Domains → Steps).
  Reference: Master Spec REQ‑17.

PASS criteria:

- No two light sections back-to-back.
- Transitions feel calm but clear.

### 1.4 Spacing + density

- No section feels vertically bloated without reason.
- Key sections (Compass, Steps) have “scan-first” layouts.
- Vertical padding is consistent (top/bottom).

PASS criteria:

- Users can understand the page without excessive scrolling.
- Dense information is behind progressive disclosure.

## 2) Navigation + global UX

### 2.1 Header/navigation usability

- Dropdown items are one line each and readable.
- Hover/focus states are visible.
- Active/selected states are clear.
- Mobile nav works without trapping scroll or breaking layout.

PASS criteria:

- Keyboard can reach nav and dropdown items.
- Dropdown doesn’t jitter or overlap awkwardly.

### 2.2 Anchor navigation

- Clicking each nav item scrolls to the correct section.
- Anchor targets align nicely (not hidden under sticky header).

PASS criteria:

- Anchors land with section heading visible.

### 2.3 “AI” emphasis in wordmark (if adopted)

- “AI” is subtly highlighted (gold border/outline or similar).
- Not gaudy; readable; consistent top + footer.

PASS criteria:

- Visible but restrained.
- Does not break typography or spacing.

## 3) Hero section

- Primary message is legible and compelling.
- Primary CTA is clear and visually prominent.
- Data sovereignty / privacy micro-line is present and readable.
- Tagline “Catholic Social Teaching, engineered for AI.” appears near logo/footer as specified.

PASS criteria:

- Clear hierarchy: H1 > sub-headline > explainer > CTAs.

## 4) “Two ways to engage” section (if present)

- Both options are styled as intentional “containers” (cards).
- Gold accents are used to guide the eye (selected state, border, or icon).
- Option titles + buttons use the correct font system.
- The section reads as a designed choice-point, not a plain list.

PASS criteria:

- A user immediately understands “these are two paths of engagement” without confusion.
- The section is visually inviting, not dim/flat.

## 5) Kairos Compass section

Spec-driven requirements (must hold):

- No large “What we mean by redesigning work” callout box.
- Compass practices are a 2×2 grid on desktop, stacked on mobile.
- Illustration aligns with top of Compass header (not vertically centered).

Additional UX checks:

- Intro paragraph is short and strong.
- A single bridge line connects Compass → Mission work domains.

PASS criteria:

- The section feels compact and mission-integrated, not bloated.
- The 2×2 grid is balanced and aligned.

## 6) Mission work domains section

Spec-driven requirements:

- Must include exactly these 6 domains:
  1. Stakeholder & relationship operations
  2. Reporting & narrative throughput
  3. Operational visibility
  4. Tradition-aware decision support
  5. Data strategy & readiness
  6. Institutional memory

UX checks:

- Users can “recognize their work quickly” before reading Steps.
- If titles-only: it still scans as a coherent set.
- If expandable: affordances are obvious (cursor, icon, “Click to open”).

PASS criteria:

- The section helps visitors self-identify quickly.
- It doesn’t repeat later in Step 3.

## 7) Discernment steps module (journey)

Spec-driven requirements:

- Presented as Steps-only; no Path labels required in visible or accessible text.
- Progressive disclosure: guiding questions visible; modules/outputs behind toggles.
- Optional “Show all steps” for deep readers.
- Scroll behavior is calm; stepper/tabs make progression obvious.

UX checks:

- Step selection is obvious (selected styling + gold accent).
- Disclosure controls have clear affordance (icon or hint text).
- Content density is controlled; no “wall of cards” by default.
- The module communicates: “people arrive differently” without becoming a rigid product ladder.

PASS criteria:

- In default state, each step is scannable in <10 seconds.
- Users can expand details intentionally.

## 8) Accessibility + interaction

- Keyboard navigation works across the page.
- Focus states are visible (not removed).
- Accordion/details elements are accessible and labeled.
- Color contrast meets reasonable standards (especially gold on navy).
- Tap targets are large enough on mobile.

PASS criteria:

- No critical interaction requires a mouse.
- No critical meaning conveyed only by color.

## 9) Performance + polish

- Layout does not shift unexpectedly (CLS).
- Images are optimized and not stretched.
- Hover/transition effects are subtle and consistent.

PASS criteria:

- Page feels smooth and calm.

## 10) Agent review protocol (repeatable)

When using ChatGPT “Agent” to review the live site:

1. Open the home page.
2. Run checklist sections in order: Nav → Hero → Two ways → Compass → Mission domains → Steps → Footer.
3. For each section:
   - PASS/PARTIAL/FAIL
   - 1–3 actionable fixes
   - Provide exact target: component name/file (if known), or visible UI selector.
4. Output CODEX TASK blocks only after the checklist is complete, and each task must include:
   - Files to touch
   - Exact copy replacements
   - Acceptance criteria
   - No instructions outside the task block
