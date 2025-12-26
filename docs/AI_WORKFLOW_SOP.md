# AI_WORKFLOW_SOP (Kairos Lux Works)
Version: v0.2

## 1) Scope and references
- Use this SOP for any AI/agent work on the Kairos Lux Works site and SSOT docs.
- Binding docs: `docs/KLW_MASTER_CONTROL_SPEC_v02.md`, `docs/KLW_WEBSITE_COPY_v02_CANONICAL.md`, `docs/KLW_ALIGNMENT_QUEUE.md`, and `docs/KLW_REVISION_HISTORY_v02.md`.
- Project workflow details: see `PROJECT_LLM_WORKFLOW.md` for repo hygiene, verification, and response format rules.

## 2) Standard loop
- 2.1 Intake: clarify acceptance criteria, tasks, tests, and linked SSOT sections before editing.
- 2.2 Inspect: open current files instead of relying on cached context; note uncommitted changes.
- 2.3 Implement + verify: make scoped changes, run requested commands, and note file/line deltas.

### 2.4 Alignment loop (prevents SSOT drift)
- Any new decision that changes copy/IA/UX must be captured in `KLW_ALIGNMENT_QUEUE.md`.
- After implementing a decision, update the relevant SSOT doc(s) in the same PR when feasible.
- When SSOT is updated AND the change is verified in code/UI, remove the queue item.

## 3) Bolt-specific SOP
- 3.1 Planning: use the plan tool for multi-step tasks; skip it for trivial edits.
- 3.2 Task blocks: respond with CODEX/BOLT task blocks that include acceptance criteria, commands, and file paths.
- 3.3 Evidence: cite files/lines touched and note screenshot expectations for UI changes.

### 3.4 Non-negotiable prompting rule (Bolt/Codex)
- ALL required instructions must appear inside the BOLT TASK / CODEX TASK block.
- Do not place critical requirements "above" or "below" the task block.
- Include: file paths, exact replacements, acceptance criteria, and verification anchors INSIDE the block.
