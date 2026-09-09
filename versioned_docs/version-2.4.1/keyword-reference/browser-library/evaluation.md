---
title: EvaluationTestLibrary
sidebar_position: 2
---

# EvaluationTestLibrary

## Evaluate JavaScript

Executes the given JavaScript function on the element matched by selector, or on the page if no selector is given.

**Parameters:**
- `selector` (String, optional) — CSS/XPath selector to resolve and pass to the JavaScript function. Use `${None}` to run on the page.
- `function` (String, required) — A valid JavaScript function or function body.
- `arg` (Any, optional) — An additional JSON-serializable argument passed to the function.
- `all_elements` (Bool, optional, default `False`) — If True, all matched elements are passed as an array.

**Returns:** Any — Return value of the JavaScript function.

**Error Handling:** Raises `Exception` if the JavaScript fails to execute.

---

## Highlight Elements

Highlights elements matched by selector with a visible border overlay for debugging or demonstration purposes.

**Parameters:**
- `selector` (String, required)
- `duration` (Timedelta, optional, default `5s`) — Pass `0s` to keep it indefinitely.
- `width` (String, optional, default `2px`)
- `style` (String, optional, default `dotted`)
- `color` (String, optional, default `blue`)

**Returns:** None

**Error Handling:** Raises `Exception` if highlighting fails.

---

## Add Style Tag

Injects a `<style type="text/css">` tag with the given CSS content into the current page.

**Parameters:**
- `content` (String, required) — Raw CSS content to inject into the page.

**Returns:** None

**Error Handling:** Raises `Exception` if the style tag cannot be injected.

---

## Download

Downloads the content from the given URL directly using the current page's session state.

**Parameters:**
- `url` (String, required)
- `saveAs` (String, optional, default empty string)
- `wait_for_finished` (Bool, optional, default `True`)
- `download_timeout` (Timedelta, optional)

**Returns:** Dictionary — DownloadInfo containing `saveAs`, `suggestedFilename`, `state`, and `downloadID`.

**Error Handling:** Raises `Exception` if the download fails or if the timeout is exceeded.