# Go Highload Knowledge

Highload Go services fail through queue growth, lock contention, retry amplification, allocation pressure, slow dependencies, and unclear ownership of cancellation.

Design defaults:

- Bound work at every ingress.
- Carry `context.Context` through calls that can block.
- Prefer explicit ownership of goroutines and shutdown.
- Make retries budgeted and observable.
- Treat cache invalidation and idempotency as part of the contract.
- Measure hot paths before broad optimization.
- Use simple data structures unless profiling shows the need for complexity.
