---
title: FramesTestLibrary
sidebar_position: 10
---

# FramesTestLibrary

## select_frame

Pushes a context change by switching to the specified frame, enabling interactions within it, typically after pulling frame presence or content in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator for the frame or iframe (e.g., 'id=frame1', '//iframe[@name="xxx"]').

**Returns:** None

**Error Handling:** Raises `Exception` if the frame cannot be found or selected, with a message indicating the failure reason.

---

## unselect_frame

Pushes a context change by switching back to the top-level frame, typically after pulling content from a frame in a "pull then push" workflow.

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if unselecting the frame fails, with a message indicating the failure reason.

---

## current_frame_should_contain

Pulls the content of the current frame for verification, ensuring the expected text is present before pushing actions within the frame in a "pull then push" workflow.

**Parameters:**
- `text` (String, required) — The text expected in the current frame (e.g., 'Welcome').
- `loglevel` (String, optional, default `"TRACE"`) — Log level for page source if verification fails.

**Returns:** None

**Error Handling:** Raises `Exception` if verification fails, with a message indicating the failure reason.

---

## current_frame_should_not_contain

Pulls the absence of text in the current frame for verification, ensuring the frame is in the expected state before pushing actions in a "pull then push" workflow.

**Parameters:**
- `text` (String, required) — The text expected to be absent in the current frame (e.g., 'Error').
- `loglevel` (String, optional, default `"TRACE"`) — Log level for page source if verification fails.

**Returns:** None

**Error Handling:** Raises `Exception` if verification fails, with a message indicating the failure reason.

---

## frame_should_contain

Pulls the content of a specified frame for verification without switching context, ensuring the expected text is present before pushing a context change in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator for the frame (e.g., 'id=frame1').
- `text` (String, required) — The text expected inside the frame (e.g., 'Welcome').
- `loglevel` (String, optional, default `"TRACE"`) — Log level for page source if verification fails.

**Returns:** None

**Error Handling:** Raises `Exception` if the frame cannot be found or verification fails, with a message indicating the failure reason.