---
title: PromisesTestLibrary
sidebar_position: 14
---

# PromisesTestLibrary

## Promise To

Wraps a Browser library keyword and executes it as a background promise. Test execution continues immediately without waiting for kw to finish. Use Wait For to collect the result when needed.

**Parameters:**
- `kw` (String, required) — Name of the Browser keyword to run asynchronously.
- `args` — Arguments to pass to the keyword, in the same form as normal keyword usage (positional or name=value pairs).

**Returns:** Future — A reference to the running promise. Pass this to Wait For to retrieve the result.

**Error Handling:** Raises `ValueError` if `kw` is not a known Browser keyword. Raises `Exception` if starting the promise fails.

---

## Promise To Wait For Download

Returns a promise that resolves when the next file download event occurs on the page. The context must have `accept_downloads=True`.

**Parameters:**
- `save_as` (String, optional, default empty string) — If empty, a temporary GUID path is used and deleted when the context closes.
- `wait_for_finished` (Boolean, optional, default `True`)
- `download_timeout` (Timedelta or None, optional)

**Returns:** Future — A promise that resolves to a DownloadInfo dictionary with keys `saveAs` and `suggestedFilename`.

**Error Handling:** Raises `Exception` if creating the download promise fails.

---

## Promise To Upload File

Returns a promise that resolves when the specified file has been uploaded via the next file chooser dialog on the page.

**Parameters:**
- `path` (String or PathLike, required) — Path to the file to upload; must exist.

**Returns:** Future — A promise that resolves when the upload completes.

**Error Handling:** Raises `ValueError` if `kw` is not a known Browser keyword. Raises `Exception` if starting the promise fails.

---

## Wait For

Waits for one or more promises to finish and returns their results.

**Parameters:**
- `promises` (Future, required) — One or more promise references returned by Promise To, Promise To Wait For Download, or Promise To Upload File.

**Returns:** Any — The result of the promise if one is given, or a list of results if multiple are given.

**Error Handling:** Raises `Exception` if any promise raised an error during execution.

---

## Wait For All Promises

Waits for all outstanding promises to finish. Collects every promise that has been created but not yet waited on.

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if any outstanding promise raised an error.