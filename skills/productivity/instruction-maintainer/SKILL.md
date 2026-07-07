---
name: instruction-maintainer
description: Reflect on agent or skill process failures and propose narrow instruction changes. Use when the user asks to improve agent instructions, when an agent made a repeated process mistake, or when an orchestrator suggests an instruction retro.
---

# Instruction Maintainer

Use this skill to improve the agent system after a process failure. The goal is to prevent recurrence without bloating prompts or overfitting to one incident.

## Process

1. Reconstruct the failure:
   - What did the agent do?
   - What did the user correct?
   - Which instruction failed to prevent it?
2. Locate the narrowest fix:
   - Role prompt for role-specific behavior.
   - Workflow for sequencing and delegation.
   - Checklist for missed review steps.
   - Knowledge file for reusable engineering guidance.
   - Adapter docs only for tool-specific behavior.
3. Draft the smallest change that would have changed the agent's behavior.
4. Explain why the change is general enough to keep.
5. Ask for approval before editing files, unless the user already asked you to apply the change.

## Guardrails

- Do not turn one-off preferences into global rules.
- Do not duplicate the same rule across many files.
- Prefer workflow/checklist changes over long role prompts.
- Keep Codex context costs in mind; avoid making Codex auto-load more material.
- Keep OpenCode adapters thin; source instructions belong in `agents/`, `workflows/`, `checklists/`, `knowledge/`, or `skills/`.

## Output

Return:

1. Failure summary.
2. Root instruction gap.
3. Proposed files to change.
4. Minimal patch proposal.
5. Overfitting risk.
