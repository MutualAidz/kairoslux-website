# PROJECT_LLM_WORKFLOW.md

## Non-negotiables
- Codex verifies repo state directly: no assumptions about branches, files, or deployments.
- Do not act on stale context; re-open files and re-run commands before claiming results.
- Keep changes atomic and reversible; avoid touching unrelated files.
- Follow acceptance criteria per request; if unclear, ask for them before editing.

## How we verify implementation
- Codex outputs must cite the exact files/lines touched and commands run.
- Visual changes must be confirmed with fresh screenshots (or equivalent rendered proof) before considering them “done.”
- When hashes/anchors change, note the updated IDs and how to reach them.

## How we ship
- Default branch: `main`. Beta (`beta.kairoslux.ai`) is assumed to deploy from `main` unless the hosting dashboard states otherwise.
- Working tree must be clean before commit. Commit messages: concise, scoped to the change.
- Push to `origin/main` (or the active feature branch) after lint/build/test pass.
- If a rebase is needed, resolve conflicts with source-of-truth code (not cached context), then rerun lint/build.

## Documentation alignment rule
- If code or copy diverges from KLW canonical docs, update the corresponding `KLW_*` source-of-truth files and revision history in the same change.
- Any suggestion that changes requirements must be reflected in SSOT docs before closing the task.

## Response format rule
- Each ChatGPT/Codex response proposing work must include a copy/paste-ready `CODEX TASK` block with explicit steps, acceptance criteria, and required tests/commands.
- Keep batch sizes small; prefer multiple focused tasks over one large vague task.
