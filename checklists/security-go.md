# Go Security Checklist

- Authn/authz checks happen on the server side and cannot be bypassed by alternate routes.
- Secrets never appear in code, logs, errors, tests, snapshots, or generated artifacts.
- SQL uses parameters or safe builders; dynamic identifiers are validated.
- File paths are normalized and constrained to allowed roots.
- Shell commands and network destinations are not built from untrusted input without strict validation.
- Request sizes, parsing depth, concurrency, and retries are bounded.
- Crypto uses standard libraries and modern modes; tokens are compared and stored safely.
- Errors preserve auditability without leaking sensitive data.
- Goroutines, response bodies, rows, transactions, locks, and timers are released.
- Idempotency is explicit for handlers, jobs, queues, and external side effects.
