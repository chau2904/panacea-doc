---
title: KeyEventTestLibrary
sidebar_position: 9
---

# KeyEventTestLibrary

## press_keycode

Sends a press of the specified keycode to the Android device.

**Parameters:**
- `keycode` (int, required) — The keycode to send.
- `metastate` (int, optional, default `None`) — Meta state for key modifiers like Shift, Alt.

**Returns:** None

**Error Handling:** Raises `Exception` if sending keycode fails.

---

## long_press_keycode

Sends a long press of the specified keycode to the Android device.

**Parameters:**
- `keycode` (int, required)
- `metastate` (int, optional, default `None`)

**Returns:** None

**Error Handling:** Raises `Exception` if sending long press fails.

---

## set_given_text_clipBoard

Sets the given text to the device clipboard.

**Parameters:**
- `text` (str, required)

**Returns:** None

**Error Handling:** Raises `Exception` if setting clipboard text fails.

---

## get_text_from_clipboard

Retrieves text from the device clipboard.

**Parameters:** None

**Returns:** Optional[str] — Clipboard text or None if failed.

**Error Handling:** Raises `Exception` if retrieving clipboard text fails.