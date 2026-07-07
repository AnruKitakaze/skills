# OpenCode Adapter

OpenCode is the first-class target for this repository. It can use explicit agents without forcing every role prompt into the primary context.

Generate the project config from the repository root:

```sh
node adapters/opencode/generate-config.mjs
```

The generator reads `agents/*/AGENT.md` and writes `.opencode/opencode.json`.

## Agent Policy

- `orchestrator` is the default agent.
- Specialist agents are available as subagents.
- Prompts stay in `agents/`; generated JSON is an adapter artifact.
- Skills are loaded from `skills/`.

Do not manually edit generated agent prompts in `.opencode/opencode.json`; edit the source `AGENT.md` files and regenerate.
