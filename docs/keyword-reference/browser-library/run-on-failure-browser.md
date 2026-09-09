---
title: RunOnFailureTestLibrary
sidebar_position: 15
---

# RunOnFailureTestLibrary

## Register Keyword To Run On Failure

Sets the keyword to execute automatically when a Browser keyword fails. Returns the previously registered failure keyword so it can be restored later.

**Parameters:**
- `keyword` (String or None, required) — Use `NONE` or `None` to disable run-on-failure.
- `args` (String, optional) — Arguments to pass to the failure keyword.
- `scope` (String, optional, default `Global`) — `Global`, `Suite`, `Test`, `Task`.

**Returns:** DelayedKeyword — Object containing the previously registered failure keyword and its arguments. Can be passed back to restore the original behavior.

**Error Handling:** Raises `Exception` if registering the keyword fails.