import { readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const adapterDir = dirname(fileURLToPath(import.meta.url));
const repo = join(adapterDir, "..", "..");
const agentsDir = join(repo, "agents");
const outPath = join(repo, ".opencode", "opencode.json");

const agentMeta = {
  orchestrator: {
    description: "Choose workflows, delegate to specialist agents, and control context.",
    mode: "primary",
    color: "primary",
    maxSteps: 20,
  },
  architect: {
    description: "Plan Go highload backend architecture. Does not write code.",
    mode: "subagent",
    color: "info",
    maxSteps: 16,
  },
  developer: {
    description: "Implement approved plans and surface contradictions.",
    mode: "subagent",
    color: "success",
    maxSteps: 30,
  },
  "security-reviewer": {
    description: "Review Go backend diffs for security risks. Does not fix code.",
    mode: "subagent",
    color: "warning",
    maxSteps: 18,
  },
  "instruction-maintainer": {
    description: "Propose narrow instruction improvements after process failures.",
    mode: "subagent",
    color: "accent",
    maxSteps: 12,
  },
};

const entries = await readdir(agentsDir, { withFileTypes: true });
const agents = {};

for (const entry of entries) {
  if (!entry.isDirectory()) continue;
  const name = entry.name;
  const prompt = await readFile(join(agentsDir, name, "AGENT.md"), "utf8");
  const meta = agentMeta[name] ?? {
    description: `Agent role from agents/${name}/AGENT.md.`,
    mode: "subagent",
    color: "secondary",
    maxSteps: 12,
  };

  agents[name] = {
    ...meta,
    prompt,
  };
}

const config = {
  $schema: "https://opencode.ai/config.json",
  plugin: ["list"],
  command: {
    taskforge: {
      template:
        "Use workflows/taskforge.md. Orchestrate this TaskForge task with the smallest safe set of agents: $ARGUMENTS",
      description: "Run the TaskForge workflow through the orchestrator.",
      agent: "orchestrator",
    },
    "architecture-plan": {
      template:
        "Act as architect using agents/architect/AGENT.md. Produce an implementation plan only; do not edit files: $ARGUMENTS",
      description: "Ask the architect agent for a Go highload backend plan.",
      agent: "architect",
      subtask: true,
    },
    "security-review": {
      template:
        "Act as security-reviewer using workflows/security-review.md. Review the provided diff or code and do not edit files: $ARGUMENTS",
      description: "Run a Go backend security review.",
      agent: "security-reviewer",
      subtask: true,
    },
    "instruction-retro": {
      template:
        "Use workflows/instruction-retro.md and the instruction-maintainer skill. Propose instruction changes only unless explicitly asked to apply them: $ARGUMENTS",
      description: "Propose improvements to the agent system after a process failure.",
      agent: "instruction-maintainer",
      subtask: true,
    },
  },
  skills: {
    paths: ["./skills"],
  },
  default_agent: "orchestrator",
  agent: agents,
};

await writeFile(outPath, `${JSON.stringify(config, null, 2)}\n`);
console.log(`wrote ${outPath}`);
