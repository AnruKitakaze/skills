# Feature Workflow

Use for new behavior or changes to existing behavior.

1. Orchestrator classifies blast radius.
2. Architect plans if the change crosses module seams or affects non-functional requirements.
3. Developer implements a vertical slice and focused tests.
4. Security Reviewer checks only when security triggers are present.
5. Orchestrator summarizes completion against DoD.

Skip Architect only when the change is local, reversible, and has an obvious test surface.
