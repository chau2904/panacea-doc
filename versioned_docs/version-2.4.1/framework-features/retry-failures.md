---
title: Retry Failures
sidebar_position: 6
---

# Retry Failures

When tests fail due to environment issues — network blips, slow emulators, or resource contention — Retry Failures automatically re-runs those tests once after the main run completes.

It targets only tests that ended with `FAIL` or `CRASH`, retries them on the same browser or device, and if they pass the second time, treats the environment as flaky rather than the application as broken.

One retry per test, no manual intervention needed.

## How to Enable It

Add the following to the config dictionary in `runner.py`:

```python
"RETRY_FAILURES": True
```

No changes to test files or YAML needed.

![Platform Overview diagram](/img/retryconfig.png)

## How It Appears

- The terminal prints `DLQ: retrying N failed test(s)` before the retry begins.
- The final summary shows a **Retried** count alongside Passed and Failed.
- Retry results are saved in a `_retry` subfolder next to the original run folder.

![Platform Overview diagram](/img/retrylogs.png)

![Platform Overview diagram](/img/retryresultfolder.png)