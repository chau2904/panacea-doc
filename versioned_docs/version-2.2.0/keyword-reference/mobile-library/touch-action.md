---
title: TouchActionTestLibrary
sidebar_position: 4
---

# TouchActionTestLibrary

## swipe

Swipes on the screen from a start point to an offset position.

**Parameters:**
- `start_x` (Union[int, float], required)
- `start_y` (Union[int, float], required)
- `end_x` (Union[int, float], required)
- `end_y` (Union[int, float], required)
- `duration` (Union[int, timedelta], optional, default `1s`)

**Returns:** None

**Error Handling:** Raises `Exception` for other unexpected errors.

---

## swipe_by_percent

Swipes using percentage-based coordinates for varying resolutions.

**Parameters:**
- `start_x` (float, required)
- `start_y` (float, required)
- `end_x` (float, required)
- `end_y` (float, required)
- `duration` (int, optional, default `1000`) — In ms.

**Returns:** None

**Error Handling:** Raises `WebDriverException` if swipe fails; `Exception` otherwise.

---

## scroll

Scrolls from one UI element to another.

**Parameters:**
- `start_locator` (str, required)
- `end_locator` (str, required)

**Returns:** None

**Error Handling:** Raises `Exception` if locators are invalid or scroll fails.

---

## scroll_down

Scrolls down until the specified element is in view.

**Parameters:**
- `locator` (str, required)
- `timeout` (Union[int, timedelta], optional, default `10s`)
- `retry_interval` (Union[int, timedelta], optional, default `1s`)

**Returns:** None

**Error Handling:** Raises `Exception` for unexpected errors.

---

## scroll_up

Scrolls up until the specified element is in view.

**Parameters:**
- `locator` (str, required)
- `timeout` (Union[int, timedelta], optional, default `10s`)
- `retry_interval` (Union[int, timedelta], optional, default `1s`)

**Returns:** None

**Error Handling:** Raises `Exception` for unexpected errors.

---

## click_alert_button

Clicks on an alert button identified by its button name. *(iOS only)*

**Parameters:**
- `button_name` (str, required) — The text label on the iOS alert button.

**Returns:** None

**Error Handling:** Raises `Exception` if the alert button cannot be found or clicked, or for any other unexpected errors.

---

## tap_with_positions

Taps on specific screen coordinates.

**Parameters:**
- `duration` (int, optional, default `500`) — In ms.
- `locations` (List[Tuple[int, int]], required) — X,Y positions to tap (up to 5).

**Returns:** None

**Error Handling:** Raises `Exception` for unexpected issues.

---

## tap_with_number_of_taps

Sends multiple taps with one or more touch points. *(iOS only)*

**Parameters:**
- `locator` (str, required)
- `number_of_taps` (int, required)
- `number_of_touches` (int, required)

**Returns:** None

**Error Handling:** Raises `Exception` if locator not found or other errors.

---

## drag_and_drop

Drags an element and drops it onto a target element.

**Parameters:**
- `locator` (str, required) — Element to drag.
- `target` (str, required) — Destination element.

**Returns:** None

**Error Handling:** Raises `Exception` for unexpected errors.

---

## flick

Performs a flick gesture from one point to another.

**Parameters:**
- `start_x` (int, required)
- `start_y` (int, required)
- `end_x` (int, required)
- `end_y` (int, required)

**Returns:** None

**Error Handling:** Raises `Exception` for general errors.

---

## tap

Waits for and taps on an element (or coordinate) using locator or coordinates.

**Parameters:**
- `element` (Union[str, list], required) — XPath locator (string) or coordinates as list `[x, y]`.
- `count` (int, optional, default `1`)
- `duration` (timedelta, optional, default `1s`)

**Returns:** None

**Error Handling:** Raises `Exception` if the tap fails due to invalid locator/coordinates, element not found, timeout, or any other issue.