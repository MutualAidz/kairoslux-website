# KLW_SITE_V3_SNAPSHOT_v01

Snapshot notes for **v3** at https://kairos-lux-works-con-z818.bolt.host/  
Captured: 2025-12-05 (UTC)

---

## 1. Access status

- The Bolt host responds, but like v2, the scraper sees **no readable HTML text lines** from this environment.
- I therefore **cannot dump the raw text** of v3 directly.

However, we *do* have a clear record (from your previous critique and my own analysis) of how v3 **drifted** from your intentions. That drift summary is preserved here so we don’t lose the lessons.

---

## 2. Known divergences in v3 vs your approved direction

These are the specific issues we identified in the z818 version:

1. **Newsletter naming + “working title” leak**
   - Used: **“Kairos Brief (working title)”**.
   - Required: **“Kairos Circuit”**, no “working title” language.

2. **Hallucinated “Talks, panels, and retreats” offering**
   - v3 created a separate card for “Talks, panels, and retreats” as if it were a standing product.
   - You never requested this; formation was meant to be **woven through** the work, with specific offerings like:
     - **CST & AI Foundations Seminar**, and  
     - a **Mini-Lab** / cohort format.

3. **“Mission Pilots” label**
   - The H2 was updated to something like “Mission Impact Enhancement,” but internal steps still spoke of **“Mission pilots”** in a way that narrowed perception.
   - You wanted to **avoid locking the work into “pilots only”**, keeping it broader as **Mission Impact Work / Enhancements**.

4. **“Small consultancy” framing**
   - v3 described Kairos Lux Works as a **“small consultancy”**, which you explicitly rejected.
   - Preferred language: **“Boutique strategy partner,” “studio,” “practice,” or “guild-adjacent”**—never shrinking the work to “small consultancy.”

5. **Labs / Guild / Compass confusion**
   - v3 blurred:
     - *Kairos Lux Works* (for-profit strategy practice),  
     - *Kairos Labs* (emerging non-profit, research + reskilling), and  
     - *Kairos Guild* (long-term ecosystem / AI Mondragón vision).
   - Some sections called Labs “guild-like” or positioned the newsletter as a Labs product, which **contradicted** your desired boundaries.

6. **Over-claiming formats and capacity**
   - Copy implied you already run **panels, retreats, and large events** as standard offerings.
   - You wanted to avoid over-claiming and keep the positioning **boutique, high-leverage, and honest** about what currently exists.

7. **Narrative tone hiccups**
   - Some sections ended on language of **pressure and risk** without swinging back to **mission, hope, and moral clarity**.
   - You want the emotional arc to be: **pressure → discernment → mission-aligned possibility and hope.**

These divergences are exactly what the `KLW_MASTER_CONTROL_SPEC_v01.md` is designed to prevent going forward.

---

## 3. How v3 relates to the canonical copy

- The canonical copy in `KLW_WEBSITE_COPY_v01_CANONICAL.md` should be treated as **the corrected version of what v3 was *trying* to do.**
- Any future site build (Bolt, Next.js, static HTML, etc.) should:
  - Pull text from the canonical file, and  
  - Be checked against the **Non-Negotiables (NN)** and **Requirements (REQ)** in `KLW_MASTER_CONTROL_SPEC_v01.md`.

If you later upload an exported v3 build, I can generate `KLW_SITE_V3_SNAPSHOT_v02.md` with the exact text for archival / diffing, without you touching the copy manually.
