# Agents

Role prompts for separate AI agents. Keep role prompts short and link to shared workflows, checklists, knowledge, and skills instead of duplicating them.

- **[orchestrator](./orchestrator/AGENT.md)** - chooses the workflow, delegates to agents, and controls context.
- **[architect](./architect/AGENT.md)** - plans architecture for Go highload backend work; does not write code.
- **[developer](./developer/AGENT.md)** - implements approved plans and escalates contradictions.
- **[security-reviewer](./security-reviewer/AGENT.md)** - reviews Go backend diffs for security risks; does not fix code.
- **[instruction-maintainer](./instruction-maintainer/AGENT.md)** - proposes improvements to agents, skills, workflows, and checklists after process failures.
