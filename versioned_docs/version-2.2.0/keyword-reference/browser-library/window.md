---
title: WindowTestLibrary
sidebar_position: 8
---

# WindowTestLibrary

## switch_window

Switches to a browser window or tab identified by the given locator. Useful when multiple windows are open.

**Parameters:**
- `locator` (Union[list, str], optional, default `"MAIN"`) — Window identifier (handle, name, title, URL, 'MAIN', 'CURRENT', 'NEW', or list of excluded handles).
- `timeout` (Optional[str], optional, default library timeout) — Maximum wait time for the window (e.g., '10s').
- `browser` (str, optional, default `"CURRENT"`) — Browser to use ('CURRENT' or alias).

**Returns:** None

**Error Handling:** Raises `Exception` if switching to the window fails (invalid locator or window not found).

---

## close_window

Closes the currently active browser window or tab. Useful after switching windows or when cleaning up.

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if closing the window fails (e.g., no active window).

---

## get_window_handles

Returns a list of all window handles for the specified browser. Useful before switching between windows.

**Parameters:**
- `browser` (str, optional, default `"CURRENT"`) — Browser to query ('CURRENT' or alias).

**Returns:** List[str] — List of window handles.

**Error Handling:** Raises `Exception` if retrieving window handles fails (e.g., no browser open).

---

## get_window_identifiers

Returns a list of id attributes for all windows of the specified browser.

**Parameters:**
- `browser` (str, optional, default `"CURRENT"`) — Browser to query.

**Returns:** List[str] — List of window identifiers.

**Error Handling:** Raises `Exception` if retrieving window identifiers fails.

---

## get_window_names

Returns a list of names for all windows of the specified browser.

**Parameters:**
- `browser` (str, optional, default `"CURRENT"`) — Browser to query.

**Returns:** List[str] — List of window names.

**Error Handling:** Raises `Exception` if retrieving window names fails.

---

## get_window_titles

Returns a list of titles for all windows of the specified browser.

**Parameters:**
- `browser` (str, optional, default `"CURRENT"`) — Browser to query.

**Returns:** List[str] — List of window titles.

**Error Handling:** Raises `Exception` if retrieving window titles fails.

---

## get_locations

Returns a list of URLs for all windows of the specified browser.

**Parameters:**
- `browser` (str, optional, default `"CURRENT"`) — Browser to query.

**Returns:** List[str] — List of URLs.

**Error Handling:** Raises `Exception` if retrieving window URLs fails.

---

## maximize_browser_window

Maximizes the current browser window to occupy the full screen.

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if maximizing the window fails (e.g., no active window).

---

## get_window_size

Returns the current window's width and height. Can return either inner or outer dimensions.

**Parameters:**
- `inner` (bool, optional, default `False`) — If True, returns inner dimensions (window.innerWidth, window.innerHeight).

**Returns:** Tuple[float, float] — Width and height.

**Error Handling:** Raises `Exception` if retrieving the window size fails.

---

## set_window_size

Sets the current window's size to the specified width and height.

**Parameters:**
- `width` (int, required) — Desired width in pixels.
- `height` (int, required) — Desired height in pixels.
- `inner` (bool, optional, default `False`) — If True, sets inner dimensions.

**Returns:** None

**Error Handling:** Raises `Exception` if setting the window size fails.

---

## get_window_position

Returns the current window's position as the X and Y coordinates of its top-left corner.

**Parameters:** None

**Returns:** Tuple[int, int] — X and Y coordinates.

**Error Handling:** Raises `Exception` if retrieving the window position fails.

---

## set_window_position

Sets the current window's position to the specified X and Y coordinates.

**Parameters:**
- `x` (int, required) — X-coordinate of the top-left corner.
- `y` (int, required) — Y-coordinate of the top-left corner.

**Returns:** None

**Error Handling:** Raises `Exception` if setting the window position fails.