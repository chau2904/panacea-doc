---
title: SeleniumCompatTestLibrary
sidebar_position: 16
---

# SeleniumCompatTestLibrary

## Close All Browsers

Closes all open browser instances.

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if closing all browsers fails.

---

## Click Element

Clicks the element identified by selector.

**Parameters:**
- `selector` (String, required) — A Playwright-compatible selector, e.g. `id=submit`, `css=button.primary`.

**Returns:** None

**Error Handling:** Raises `Exception` if the element is not found or the click fails.

---

## Input Text

Types text into the element identified by selector. Clears the field before typing by default.

**Parameters:**
- `selector` (String, required)
- `text` (String, required)
- `clear` (Boolean, optional, default `True`)

**Returns:** None

**Error Handling:** Raises `Exception` if the element is not found or input fails.

---

## Input Password

Types password into the element identified by selector without logging the value.

**Parameters:**
- `selector` (String, required)
- `password` (String, required) — Masked in logs.
- `clear` (Boolean, optional, default `True`)

**Returns:** None

**Error Handling:** Raises `Exception` if the element is not found or input fails.

---

## Clear Element Text

Clears the text content of the element identified by selector.

**Parameters:**
- `selector` (String, required)

**Returns:** None

**Error Handling:** Raises `Exception` if the element is not found or clearing fails.

---

## Double Click Element

Double-clicks the element identified by selector.

**Parameters:**
- `selector` (String, required)

**Returns:** None

**Error Handling:** Raises `Exception` if the element is not found or the double-click fails.

---

## Element Should Be Visible

Asserts that the element identified by selector is visible on the page.

**Parameters:**
- `selector` (String, required)
- `message` (String or None, optional)

**Returns:** None

**Error Handling:** Raises `AssertionError` if the element is not visible. Raises `Exception` if the assertion check itself fails.

---

## Element Should Be Enabled

Asserts that the element identified by selector is enabled (not disabled).

**Parameters:**
- `selector` (String, required)
- `message` (String or None, optional)

**Returns:** None

**Error Handling:** Raises `AssertionError` if the element is not enabled.

---

## Element Should Be Disabled

Asserts that the element identified by selector is disabled.

**Parameters:**
- `selector` (String, required)
- `message` (String or None, optional)

**Returns:** None

**Error Handling:** Raises `AssertionError` if the element is not disabled.

---

## Page Should Contain Element

Asserts that at least one element matching selector exists on the page.

**Parameters:**
- `selector` (String, required)
- `message` (String or None, optional)

**Returns:** Integer — The number of matching elements found.

**Error Handling:** Raises `AssertionError` if no matching element is found.

---

## Page Should Not Contain Element

Asserts that no element matching selector exists on the page.

**Parameters:**
- `selector` (String, required)
- `message` (String or None, optional)

**Returns:** Integer — The count of matching elements (always 0 on success).

**Error Handling:** Raises `AssertionError` if matching element(s) are found.

---

## Element Should Contain

Asserts that the text content of the element identified by selector contains the expected substring.

**Parameters:**
- `selector` (String, required)
- `expected` (String, required)
- `message` (String or None, optional)

**Returns:** None

**Error Handling:** Raises `AssertionError` if the expected text is not found.

---

## Wait Until Element Is Visible

Waits until the element identified by selector becomes visible.

**Parameters:**
- `selector` (String, required)
- `timeout` (String or None, optional) — e.g. `5s`, `1m 30s`.

**Returns:** None

**Error Handling:** Raises `Exception` if the element does not become visible within the timeout.

---

## Wait Until Element Is Not Visible

Waits until the element identified by selector becomes hidden or disappears.

**Parameters:**
- `selector` (String, required)
- `timeout` (String or None, optional)

**Returns:** None

**Error Handling:** Raises `Exception` if the element does not become hidden within the timeout.

---

## Wait Until Element Is Enabled

Waits until the element identified by selector becomes enabled.

**Parameters:**
- `selector` (String, required)
- `timeout` (String or None, optional)

**Returns:** None

**Error Handling:** Raises `Exception` if the element does not become enabled within the timeout.

---

## Set Window Size

Sets the browser viewport size to the given width and height in pixels.

**Parameters:**
- `width` (Integer, required)
- `height` (Integer, required)

**Returns:** None

**Error Handling:** Raises `Exception` if setting the viewport size fails.

---

## Get Window Size

Returns the current browser viewport dimensions.

**Parameters:** None

**Returns:** Dictionary — A dict with keys `width` and `height` (integers).

**Error Handling:** Raises `Exception` if retrieving the viewport size fails.

---

## Maximize Browser Window

Maximizes the browser window to the screen's available dimensions. Falls back to 1920x1080 when a headless screen is detected (screen size reported as 800x600 or smaller).

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if maximizing the browser window fails.