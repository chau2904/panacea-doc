---
title: BrowserManagementTestLibrary
sidebar_position: 6
---

# BrowserManagementTestLibrary

## Go Forward

Navigates to the next page in browser history.

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if navigation fails.

---

## Go Back

Navigates to the previous page in browser history.

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if navigation fails.

---

## Go To

Navigates the active page to the given URL. Returns the HTTP status code of the navigation request, or 0 if not received.

**Parameters:**
- `url` (String, required)
- `timeout` (Timedelta, optional)
- `wait_until` (String, optional, default `load`) — `load`, `domcontentloaded`, `networkidle`, `commit`.

**Returns:** Integer — HTTP status code of the navigation, or 0 if not received.

**Error Handling:** Raises `Exception` if navigation fails.

---

## Reload

Reloads the currently active page.

**Parameters:**
- `timeout` (Timedelta, optional)
- `wait_until` (String, optional, default `load`)

**Returns:** None

**Error Handling:** Raises `Exception` if the reload fails.

---

## Take Screenshot

Takes a screenshot of the current window or a specific element and saves it to disk. Can also embed the screenshot directly into the Robot Framework log.

**Parameters:**
- `filename` (String, optional, default `robotframework-browser-screenshot-{index}`)
- `selector` (String or None, optional)
- `crop` (BoundingBox or None, optional)
- `disable_animations` (Bool, optional, default `False`)
- `file_type` (String, optional, default `png`)
- `full_page` (Bool, optional, default `False`)
- `highlight_selector` (String or None, optional)
- `log_screenshot` (Bool, optional, default `True`)
- `mask` (String or List[String], optional)
- `mask_color` (String or None, optional)
- `omit_background` (Bool, optional, default `False`)
- `quality` (Integer or None, optional)
- `scale` (String or None, optional) — `css` or `device`.
- `return_as` (String, optional, default `path_string`)
- `timeout` (Timedelta, optional)

**Returns:** String, Bytes, Path, or None — Depends on the `return_as` parameter.

**Error Handling:** Raises `Exception` if taking the screenshot fails.

---

## Set Viewport Size

Sets the current page's viewport to the specified width and height in pixels.

**Parameters:**
- `width` (Integer, required)
- `height` (Integer, required)

**Returns:** None

**Error Handling:** Raises `Exception` if setting the viewport fails.

---

## Set Geolocation

Updates the current browser context's geolocation.

**Parameters:**
- `latitude` (Float, required) — Between -90 and 90.
- `longitude` (Float, required) — Between -180 and 180.
- `accuracy` (Float, optional, default `0`)

**Returns:** None

**Error Handling:** Raises `Exception` if setting the geolocation fails.

---

## Set Browser Timeout

Sets the global timeout used by most input and getter keywords. Returns the previous timeout so it can be restored later.

**Parameters:**
- `timeout` (Timedelta, required)
- `scope` (String, optional, default `Suite`) — `Suite`, `Global`, `Test`, `Task`.

**Returns:** String — The previous timeout as a human-readable string.

**Error Handling:** Raises `Exception` if setting the timeout fails.

---

## Set Retry Assertions For

Sets the timeout used when retrying failed assertions. Returns the previous assertion retry timeout so it can be restored later.

**Parameters:**
- `timeout` (Timedelta, required)
- `scope` (String, optional, default `Suite`)

**Returns:** String — The previous retry timeout as a human-readable string.

**Error Handling:** Raises `Exception` if setting the retry timeout fails.

---

## Set Selector Prefix

Sets a prefix automatically prepended to all selectors within the given scope. Use `${None}` or `${EMPTY}` to disable.

**Parameters:**
- `prefix` (String or None, required)
- `scope` (String, optional, default `Suite`)

**Returns:** String — The previous selector prefix value.

**Error Handling:** Raises `Exception` if setting the prefix fails.

---

## Set Highlight On Failure

Controls whether the interacted element is highlighted in the failure screenshot.

**Parameters:**
- `highlight` (Bool, optional, default `True`)
- `scope` (String, optional, default `Suite`)

**Returns:** Bool — The previous highlight-on-failure value.

**Error Handling:** Raises `Exception` if setting the value fails.

---

## Show Keyword Banner

Controls whether a CSS overlay banner showing the currently executing keyword is displayed on the page.

**Parameters:**
- `show` (Bool, optional, default `True`)
- `style` (String, optional, default empty string)
- `scope` (String, optional, default `Suite`)

**Returns:** Dict — `{"show": <previous show value>, "style": <previous style>}`

**Error Handling:** Raises `Exception` if setting the banner fails.

---

## Set Offline

Toggles offline mode for the currently active browser context.

**Parameters:**
- `offline` (Bool, optional, default `True`)

**Returns:** None

**Error Handling:** Raises `Exception` if setting offline mode fails.

---

## Grant Permissions

Grants one or more browser permissions to the currently active context.

**Parameters:**
- `permissions` (String, required) — `geolocation`, `notifications`, `camera`, `microphone`.
- `origin` (String or None, optional)

**Returns:** None

**Error Handling:** Raises `Exception` if granting permissions fails.

---

## Clear Permissions

Clears all permissions previously granted to the currently active browser context.

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if clearing permissions fails.

---

## Set Presenter Mode

Enables or configures presenter mode, which highlights elements found by keywords during execution.

**Parameters:**
- `mode` (Bool or Dict, required) — `True` to enable with defaults, `False` to disable, or a dict with `duration`, `width`, `style`, `color`.

**Returns:** Bool or Dict — The previous presenter mode value or configuration.

**Error Handling:** Raises `Exception` if setting presenter mode fails.