# TaskForge Workflow

Use for tasks that include problem statement, proposed solution, DoD, and testing requirements.

1. Orchestrator reads the task and classifies risk.
2. Architect is required when the task touches API, DB schema, concurrency, queues, caches, performance-critical paths, compatibility, or cross-module contracts.
3. Developer implements only after contradictions are resolved.
4. Security Reviewer runs when the diff touches auth, secrets, SQL, files, network, crypto, jobs, queues, idempotency, or untrusted input.
5. If the implementation reveals the proposed solution is wrong, stop and ask for plan revision instead of forcing the original design.

Context to pass:

- Task body and DoD.
- Relevant project instructions.
- Architect plan, if produced.
- Focused file list or diff, not the whole repository.
