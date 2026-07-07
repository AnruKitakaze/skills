# Architecture Knowledge

Prefer deep modules: small interfaces with meaningful behavior behind them. Avoid pass-through layers that make callers learn as much as the implementation.

Use seams when behavior varies, tests need a real substitution point, or ownership becomes clearer. A single production implementation is usually not enough to justify a new interface unless the test adapter is real and valuable.

Keep invariants close to the module that owns the data. If every caller must remember the same rule, the interface is too shallow.

For existing projects, local style is a constraint. Improve structure in the direction the codebase already supports unless the task explicitly calls for a larger migration.
