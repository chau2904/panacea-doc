---
title: RunOnFailureTestLibrary
sidebar_position: 12
---

# RunOnFailureTestLibrary

## register_keyword_to_run_on_failure

Registers a keyword to be executed automatically when a test keyword fails. This keyword pushes a new failure-handling configuration by setting the specified keyword to run on failure. It is part of a "pull then push" workflow where you can pull the effect of the failure keyword (e.g., verify a screenshot file or log output) after triggering a failure. The keyword must not take arguments. Use `'NOTHING'`, `'NONE'` (case-insensitive), or Python `None` to disable the run-on-failure mechanism.

**Parameters:**
- `keyword` (Optional[String], optional) — The name of the keyword to run on failure (e.g., 'Capture Page Screenshot', 'Log Source'). Use `'NONE'`, `'NOTHING'`, or `None` to disable.

**Returns:** String — The name of the keyword that was previously set, or `None` if nothing was set before.

**Error Handling:** Raises `Exception` if setting the keyword fails, with a message indicating the reason.