# Bugfix Workflow

Use for incorrect behavior, failing tests, production defects, and performance regressions.

1. Prefer the `diagnose` skill to build a feedback loop.
2. Reproduce or document why reproduction is blocked.
3. Developer fixes the narrow cause.
4. Architect joins if the bug exposes missing seams, tangled ownership, or a wrong design assumption.
5. Security Reviewer joins if the bug has security impact or touches security-sensitive code.

Do not start from a speculative rewrite. Let the repro drive the fix.
