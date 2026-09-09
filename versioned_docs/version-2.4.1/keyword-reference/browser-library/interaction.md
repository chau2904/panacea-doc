---
title: InteractionTestLibrary
sidebar_position: 4
---

# InteractionTestLibrary

## Click

Simulates a mouse click on the element found by selector. Waits for actionability checks before clicking, scrolling into view if needed.

**Parameters:**
- `selector` (String, required)
- `button` (String, optional, default `left`) — `left`, `right`, or `middle`.

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or clicking fails.

---

## Click With Options

Simulates a mouse click with advanced options on the element found by selector.

**Parameters:**
- `selector` (String, required)
- `button` (String, optional, default `left`)
- `clickCount` (Integer, optional, default `1`)
- `delay` (Timedelta, optional, default `0`)
- `force` (Bool, optional, default `False`)
- `position_x` (Float or None, optional)
- `position_y` (Float or None, optional)
- `trial` (Bool, optional, default `False`)

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or clicking fails.

---

## Double Click

Double-clicks the element found by selector.

**Parameters:**
- `selector` (String, required)

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or double-clicking fails.

---

## Fill Text

Clears and fills the given text into the input field found by selector. Works on `<input>`, `<textarea>`, and `[contenteditable]` elements.

**Parameters:**
- `selector` (String, required)
- `txt` (String, required)
- `force` (Bool, optional, default `False`)

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or filling fails.

---

## Type Text

Types the given text character by character into the field found by selector.

**Parameters:**
- `selector` (String, required)
- `txt` (String, required)
- `delay` (Timedelta, optional, default `0ms`)
- `clear` (Bool, optional, default `True`)

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or typing fails.

---

## Clear Text

Clears the text from the input field found by selector.

**Parameters:**
- `selector` (String, required)

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or clearing fails.

---

## Type Secret

Types a secret value into the field found by selector without logging it.

**Parameters:**
- `selector` (String, required)
- `secret` (String, required) — Use `$variable`, `%ENV_VAR`, or a Secret type variable.
- `delay` (Timedelta, optional, default `0ms`)
- `clear` (Bool, optional, default `True`)

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or typing fails. The secret value is masked in the error message.

---

## Fill Secret

Fills a secret value into the field found by selector without logging it.

**Parameters:**
- `selector` (String, required)
- `secret` (String, required)
- `force` (Bool, optional, default `False`)

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or filling fails. The secret value is masked in the error message.

---

## Press Keys

Types the given key combination into the element found by selector.

**Parameters:**
- `selector` (String, required)
- `keys` (String, required) — One or more keys or key combinations.
- `press_duration` (Timedelta, optional, default `0ms`)
- `key_delay` (Timedelta, optional, default `0ms`)

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or key press fails.

---

## Keyboard Key

Presses, holds down, or releases a keyboard key on the virtual keyboard.

**Parameters:**
- `action` (String, required) — `press`, `down`, or `up`.
- `key` (String, required) — e.g. `Enter`, `Shift`, `ArrowLeft`, `F5`, `KeyA`, `Backspace`.

**Returns:** None

**Error Handling:** Raises `Exception` if the keyboard key action fails.

---

## Keyboard Input

Inputs text into the page using the virtual keyboard without targeting a specific element.

**Parameters:**
- `action` (String, required) — `insertText` or `type`.
- `input` (String, required)
- `delay` (Timedelta, optional, default `0`)

**Returns:** None

**Error Handling:** Raises `Exception` if the keyboard input fails.

---

## Hover

Moves the virtual mouse over the element found by selector.

**Parameters:**
- `selector` (String, required)
- `position_x` (Float or None, optional)
- `position_y` (Float or None, optional)
- `force` (Bool, optional, default `False`)

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or hovering fails.

---

## Mouse Button

Clicks, presses, or releases a mouse button, optionally at specific coordinates.

**Parameters:**
- `action` (String, required) — `click`, `down`, or `up`.
- `x` (Float or None, optional)
- `y` (Float or None, optional)
- `button` (String, optional, default `left`)
- `clickCount` (Integer, optional, default `1`)
- `delay` (Timedelta, optional, default `0`)

**Returns:** None

**Error Handling:** Raises `Exception` if the mouse button action fails.

---

## Mouse Move

Moves the virtual mouse to absolute page coordinates relative to the top-left corner of the viewport.

**Parameters:**
- `x` (Float, required)
- `y` (Float, required)
- `steps` (Integer, optional, default `1`)

**Returns:** None

**Error Handling:** Raises `Exception` if the mouse move fails.

---

## Mouse Move Relative To

Moves the virtual mouse relative to the center of the element found by selector.

**Parameters:**
- `selector` (String, required)
- `x` (Float, optional, default `0`)
- `y` (Float, optional, default `0`)
- `steps` (Integer, optional, default `1`)

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or mouse move fails.

---

## Mouse Wheel

Simulates a mouse wheel scroll event at the current mouse position.

**Parameters:**
- `deltaX` (Integer, required)
- `deltaY` (Integer, required)

**Returns:** None

**Error Handling:** Raises `Exception` if the mouse wheel event fails.

---

## Focus

Moves focus to the element found by selector.

**Parameters:**
- `selector` (String, required)

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or focusing fails.

---

## Scroll To

Scrolls an element or the page to an absolute position.

**Parameters:**
- `selector` (String or None, optional)
- `vertical` (String, optional, default `top`)
- `horizontal` (String, optional, default `left`)
- `behavior` (String, optional, default `auto`)

**Returns:** None

**Error Handling:** Raises `Exception` if scrolling fails.

---

## Scroll By

Scrolls an element or the page by a relative offset from the current position.

**Parameters:**
- `selector` (String or None, optional)
- `vertical` (String, optional, default `height`)
- `horizontal` (String, optional, default `0`)
- `behavior` (String, optional, default `auto`)

**Returns:** None

**Error Handling:** Raises `Exception` if scrolling fails.

---

## Scroll To Element

Scrolls the element found by selector into the visible viewport.

**Parameters:**
- `selector` (String, required)

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or scrolling fails.

---

## Check Checkbox

Checks the checkbox or selects the radio button found by selector.

**Parameters:**
- `selector` (String, required)
- `force` (Bool, optional, default `False`)

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or checking fails.

---

## Uncheck Checkbox

Unchecks the checkbox found by selector.

**Parameters:**
- `selector` (String, required)
- `force` (Bool, optional, default `False`)

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or unchecking fails.

---

## Select Options By

Selects options from the `<select>` element found by selector.

**Parameters:**
- `selector` (String, required)
- `attribute` (String, required) — `value`, `label` (or `text`), or `index`.
- `values` (String, optional)

**Returns:** List — List of selected option values, labels, or indexes.

**Error Handling:** Raises `Exception` if the element cannot be found or selection fails.

---

## Deselect Options

Deselects all options from the `<select>` element found by selector.

**Parameters:**
- `selector` (String, required)

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or deselection fails.

---

## Drag And Drop

Executes a drag-and-drop operation from the element matching `selector_from` to the element matching `selector_to`.

**Parameters:**
- `selector_from` (String, required)
- `selector_to` (String, required)
- `steps` (Integer, optional, default `1`)

**Returns:** None

**Error Handling:** Raises `Exception` if the source or target element cannot be found or drag-and-drop fails.

---

## Drag And Drop By Coordinates

Executes a drag-and-drop operation from one absolute viewport coordinate to another.

**Parameters:**
- `from_x` (Float, required)
- `from_y` (Float, required)
- `to_x` (Float, required)
- `to_y` (Float, required)
- `steps` (Integer, optional, default `1`)

**Returns:** None

**Error Handling:** Raises `Exception` if the drag operation fails.

---

## Drag And Drop Relative To

Executes a drag-and-drop operation from the center of the element matching `selector_from` to a position relative to that center.

**Parameters:**
- `selector_from` (String, required)
- `x` (Float, optional, default `0`)
- `y` (Float, optional, default `0`)
- `steps` (Integer, optional, default `1`)

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or drag fails.

---

## Handle Future Dialogs

Configures how the next dialog (alert, confirm, prompt, beforeunload) will be handled. Must be called before the action that triggers the dialog.

**Parameters:**
- `action` (String, required) — `accept` or `dismiss`.
- `prompt_input` (String, optional, default empty string)

**Returns:** None

**Error Handling:** Raises `Exception` if setting the dialog handler fails.

---

## Wait For Alert

Waits for the next dialog on the page, handles it with action, and optionally verifies the dialog's text.

**Parameters:**
- `action` (String, required)
- `prompt_input` (String, optional, default empty string)
- `text` (String or None, optional)
- `timeout` (Timedelta or None, optional)

**Returns:** String — The text of the dialog that appeared.

**Error Handling:** Raises `Exception` if the dialog does not appear or handling fails.

---

## Wait For Alerts

Waits for multiple sequential dialogs on the page and handles each one.

**Parameters:**
- `actions` (List, required)
- `prompt_inputs` (List, required)
- `texts` (List, required)
- `timeout` (Timedelta or None, optional)

**Returns:** List — The text of each dialog that appeared.

**Error Handling:** Raises `ValueError` if the three lists are not equal in length. Raises `Exception` if a dialog does not appear or handling fails. Raises `AssertionError` if a text entry does not match the actual dialog text.

---

## Upload File By Selector

Uploads one or more files to a file input element found by selector.

**Parameters:**
- `selector` (String, required)
- `path` (PathLike or FileUploadBuffer, required)
- `extra_paths` (PathLike, optional)

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or the upload fails.

---

## Tap

Simulates a tap gesture on the element found by selector. Requires `hasTouch` set to True on the browser context.

**Parameters:**
- `selector` (String, required)
- `force` (Bool, optional, default `False`)
- `position_x` (Integer or None, optional)
- `position_y` (Integer or None, optional)
- `trial` (Bool, optional, default `False`)

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or tap fails.

---

## Record Selector

Records and returns the selector for the element currently under the mouse.

**Parameters:**
- `label` (String or None, optional)

**Returns:** String — The recorded selector for the element under the mouse.

**Error Handling:** Raises `Exception` if recording the selector fails.