# KLW_ALIGNMENT_QUEUE
Version: v0.1
Purpose: Rolling queue of decisions and conflicts that must be (1) adjudicated, (2) implemented, and/or (3) incorporated into SSOT docs. Items are removed once they are reflected in SSOT and verified in code.

Status codes:
- DECIDED (needs SSOT + implementation)
- NEEDS-ADJUDICATION (founder must choose)
- IMPLEMENTED (in code/copy, but not yet verified)
- VERIFIED (confirmed via repo search + UI check)
- LOGGED (captured in revision history + relevant SSOT docs)
- DONE (remove from queue)

Queue items:

Q-001 — Enforce “no instructions outside task blocks”
Status: DECIDED
Why: Prevents dropped requirements when using Bolt/Codex.
Needs:
- Patch AI_WORKFLOW_SOP.md + KLW_LLM_COLLAB_PROMPT_v02.md + ChatGPT Project Instructions.
Evidence:
- UI/UX checklist already encodes this; must be enforced everywhere.

Q-002 — Rolling tally method (add/remove)
Status: DECIDED
Why: Prevent decision drift across chats.
Needs:
- Define workflow: decision → add queue item → update SSOT → remove queue item.
- Add to AI_WORKFLOW_SOP + KLW_LLM_COLLAB_PROMPT + Project Instructions.

Q-003 — “Seminar” vs “Briefing” naming
Status: DECIDED (Briefing preferred) — but requires SSOT version bump
Why: Current spec REQ-06 uses “Seminar”; founder prefers “Briefing”.
Needs:
- Update KLW_MASTER_CONTROL_SPEC_v02.md (bump to v0.3 and log).
- Update KLW_WEBSITE_COPY_v02_CANONICAL.md accordingly.
- Verify site copy matches.

Q-004 — Remove visible “Path X — …” lines in Steps UI
Status: DECIDED
Why: Path framing was superseded by steps/phase language.
Needs:
- Update DiscernmentSteps UI to hide path line visually (sr-only OK to satisfy spec).
- Update canonical UI label examples if needed.

Q-005 — Verify “Two ways to engage” redesign status
Status: NEEDS-VERIFICATION
Why: Might already be implemented; must verify before rework.
Needs:
- Agent/UI review with checklist evidence.

Q-006 — AI-in-wordmark subtle highlight (top + footer)
Status: NEEDS-ADJUDICATION (implement + evaluate)
Why: Founder wants to test and then judge what fits best.
Needs:
- Implement subtle gold border/outline on the “AI” letters only.
- Review against overall typography and later logo/photo decisions.

Q-007 — Mission work domains layout Option B (parallel to Compass)
Status: NEEDS-ADJUDICATION
Why: Founder wants to try Option B first.
Needs:
- Implement alternative layout experiment with titles-only domains.
- Decide if domains expand on click (Option C) or remain titles only.

Housekeeping:
- Keep this file under ~2 pages. When an item becomes DONE, delete it from the queue.
- Every code/copy change should reference which queue items it resolves.
