# Go Highload Checklist

- Avoid unbounded goroutines, queues, retries, request body reads, and result sets.
- Propagate `context.Context` through I/O and cancellation boundaries.
- Set timeouts for network, database, lock, and external-service operations.
- Check hot paths for avoidable allocations, reflection, JSON churn, and global locks.
- Keep shared maps and slices race-safe.
- Bound concurrency and apply backpressure where work can pile up.
- Make background jobs idempotent and restart-safe.
- Emit metrics/logs at useful boundaries without leaking secrets or flooding logs.
