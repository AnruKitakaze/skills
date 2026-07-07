# Security Knowledge

Security review should focus on reachable production risks first. Style concerns matter only when they create ambiguity that can become a vulnerability.

Backend defaults:

- Deny by default at authorization boundaries.
- Keep secrets out of logs and generated artifacts.
- Bound untrusted input before parsing or fan-out.
- Use standard crypto and database APIs.
- Make external side effects idempotent where retries are possible.
- Prefer explicit allowlists over blocklists for paths, commands, hosts, and dynamic identifiers.
