---
title: AlertTestLibrary
sidebar_position: 1
---

# AlertTestLibrary

## input_text_into_alert

Enters the specified text into the input field of a JavaScript prompt and handles the alert based on the provided action. Useful for automating interactions with prompt dialogs.

**Parameters:**
- `text` (String, required) — The text to type into the alert's input field.
- `action` (String, optional, default `"ACCEPT"`) — How to handle the alert after typing text. Options: `"ACCEPT"`, `"DISMISS"`, `"LEAVE"`.
- `timeout` (Timedelta, optional) — How long to wait for the alert to appear. Defaults to library's global timeout.

**Returns:** None

**Error Handling:** Raises `Exception` for any unexpected alert handling errors, with a message indicating the failure reason.

---

## alert_should_be_present

Checks if a JavaScript alert is present and optionally verifies that its message matches the expected text. The alert is handled based on the provided action.

**Parameters:**
- `text` (String, optional) — Expected alert message text. If provided, the actual message must match.
- `action` (String, optional, default `"ACCEPT"`) — How to handle the alert after verification. Options: `"ACCEPT"`, `"DISMISS"`, `"LEAVE"`.
- `timeout` (Timedelta, optional) — How long to wait for the alert. Defaults to library's global timeout.

**Returns:** None

**Error Handling:** Raises `AssertionError` if the alert is not present or the text does not match. Raises `ValueError` if an invalid action is specified. Raises `Exception` for unexpected errors, with a failure reason.

---

## alert_should_not_be_present

Checks that no JavaScript alert is present in the current context. If an alert is unexpectedly found, it is handled based on the provided action.

**Parameters:**
- `action` (String, optional, default `"ACCEPT"`) — How to handle the alert if unexpectedly present. Options: `"ACCEPT"`, `"DISMISS"`, `"LEAVE"`.
- `timeout` (Timedelta, optional, default no wait) — How long to wait to check for the alert.

**Returns:** None

**Error Handling:** Raises `Exception` for any unexpected errors, with a message indicating the failure reason.

---

## handle_alert

Interacts with a JavaScript alert by accepting, dismissing, or leaving it open, and returns the alert's message text. Useful for both handling and retrieving information from alerts.

**Parameters:**
- `action` (String, optional, default `"ACCEPT"`) — How to handle the alert. Options: `"ACCEPT"` (press Ok), `"DISMISS"` (press Cancel), `"LEAVE"` (do not close).
- `timeout` (Timedelta, optional) — How long to wait for the alert. Defaults to library's global timeout.

**Returns:** String — The message text from the alert.

**Error Handling:** Raises `Exception` for any unexpected errors during alert handling, with a message indicating the failure reason.