---
title: RunOnFailureTestLibrary (Mobile)
sidebar_position: 11
---

# RunOnFailureTestLibrary (Mobile)

## register_keyword_to_run_on_failure

Registers a keyword to execute automatically upon failure of any library keyword. Use `'Nothing'` to disable.

**Parameters:**
- `keyword` (str, required) — Keyword to run on failure (e.g., `'Capture Page Screenshot'`).

**Returns:** str — Previously registered failure keyword (or `'Nothing'` if none was set).

**Error Handling:** Raises `Exception` if registration fails.