# Architecture Checklist

- What modules and seams are affected?
- Is the change local, cross-module, or cross-service?
- Does the task affect API, DB schema, events, queues, cache keys, or compatibility?
- Are invariants owned by one module, or spread across callers?
- Is a new interface justified by at least two real adapters or a real test seam?
- What can fail under load: contention, retries, backpressure, fan-out, ordering, or stale cache?
- What tests lock the behavior at the right interface?
- What migration, rollout, or rollback concerns exist?
