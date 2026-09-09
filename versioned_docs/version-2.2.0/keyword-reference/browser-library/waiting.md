---
title: WaitingTestLibrary
sidebar_position: 7
---

# WaitingTestLibrary

## wait_for_condition

Waits until a JavaScript condition evaluates to true.

**Parameters:**
- `condition` (String, required) — JavaScript expression that must return a truthy value.
- `timeout` (Optional[Timedelta], optional, default library timeout) — Maximum wait time.
- `error` (Optional[String], optional) — Custom error message if the wait fails.

**Returns:** None

**Error Handling:** Raises `Exception` if the condition does not become true within the timeout.

---

## wait_until_location_is

Waits until the browser's current URL matches the expected URL.

**Parameters:**
- `expected` (String, required) — Expected full URL.
- `timeout` (Optional[Timedelta], optional, default library timeout) — Maximum wait time.
- `message` (Optional[String], optional) — Custom error message if the wait fails.

**Returns:** None

**Error Handling:** Raises `Exception` if the URL does not match within the timeout.

---

## wait_until_location_is_not

Waits until the browser's current URL does not match the given URL.

**Parameters:**
- `location` (String, required) — URL that should no longer match.
- `timeout` (Optional[Timedelta], optional, default library timeout) — Maximum wait time.
- `message` (Optional[String], optional) — Custom error message if the wait fails.

**Returns:** None

**Error Handling:** Raises `Exception` if the URL still matches within the timeout.

---

## wait_until_location_contains

Waits until the browser's current URL contains the expected substring.

**Parameters:**
- `expected` (String, required) — Substring expected in the URL.
- `timeout` (Optional[Timedelta], optional, default library timeout) — Maximum wait time.
- `message` (Optional[String], optional) — Custom error message if the wait fails.

**Returns:** None

**Error Handling:** Raises `Exception` if the URL does not contain the substring within the timeout.

---

## wait_until_location_does_not_contain

Waits until the browser's current URL does not contain the given substring.

**Parameters:**
- `location` (String, required) — Substring that must not be present.
- `timeout` (Optional[Timedelta], optional, default library timeout) — Maximum wait time.
- `message` (Optional[String], optional) — Custom error message if the wait fails.

**Returns:** None

**Error Handling:** Raises `Exception` if the URL still contains the substring within the timeout.

---

## wait_until_page_contains

Waits until the given text appears on the current page.

**Parameters:**
- `text` (String, required) — Text expected to appear on the page.
- `timeout` (Optional[Timedelta], optional, default library timeout) — Maximum wait time.
- `error` (Optional[String], optional) — Custom error message if the wait fails.

**Returns:** None

**Error Handling:** Raises `Exception` if the text does not appear within the timeout.

---

## wait_until_page_does_not_contain

Waits until the given text disappears from the current page.

**Parameters:**
- `text` (String, required) — Text that must no longer be present on the page.
- `timeout` (Optional[Timedelta], optional, default library timeout) — Maximum wait time.
- `error` (Optional[String], optional) — Custom error message if the wait fails.

**Returns:** None

**Error Handling:** Raises `Exception` if the text still appears within the timeout.

---

## wait_until_page_contains_element

Waits until an element matching the locator appears on the page.

**Parameters:**
- `locator` (Union[WebElement, String], required) — Locator for the element (e.g., 'id=username').
- `timeout` (Optional[Timedelta], optional, default library timeout) — Maximum wait time.
- `error` (Optional[String], optional) — Custom error message if the wait fails.
- `limit` (Optional[int], optional, default `None`) — Exact number of elements expected.

**Returns:** None

**Error Handling:** Raises `Exception` if the element does not appear or count does not match limit within the timeout.

---

## wait_until_page_does_not_contain_element

Waits until an element matching the locator disappears from the page.

**Parameters:**
- `locator` (Union[WebElement, String], required) — Locator for the element.
- `timeout` (Optional[Timedelta], optional, default library timeout) — Maximum wait time.
- `error` (Optional[String], optional) — Custom error message if the wait fails.
- `limit` (Optional[int], optional, default `None`) — Number of elements that must not be present.

**Returns:** None

**Error Handling:** Raises `Exception` if the element still exists or count matches limit within the timeout.

---

## wait_until_element_is_visible

Waits until the element is visible on the page.

**Parameters:**
- `locator` (Union[WebElement, String], required) — Locator for the element.
- `timeout` (Optional[Timedelta], optional, default library timeout) — Maximum wait time.
- `error` (Optional[String], optional) — Custom error message if the wait fails.

**Returns:** None

**Error Handling:** Raises `Exception` if the element does not become visible within the timeout.

---

## wait_until_element_is_not_visible

Waits until the element is no longer visible on the page.

**Parameters:**
- `locator` (Union[WebElement, String], required) — Locator for the element.
- `timeout` (Optional[Timedelta], optional, default library timeout) — Maximum wait time.
- `error` (Optional[String], optional) — Custom error message if the wait fails.

**Returns:** None

**Error Handling:** Raises `Exception` if the element remains visible within the timeout.

---

## wait_until_element_is_enabled

Waits until the element is enabled.

**Parameters:**
- `locator` (Union[WebElement, String], required) — Locator for the element (e.g., 'id=submit').
- `timeout` (Optional[Timedelta], optional, default library timeout) — Maximum wait time.
- `error` (Optional[String], optional) — Custom error message if the wait fails.

**Returns:** None

**Error Handling:** Raises `Exception` if the element does not become enabled within the timeout.

---

## wait_until_element_contains

Waits until the specified element contains the given text.

**Parameters:**
- `locator` (Union[WebElement, String], required) — Locator for the element (e.g., 'id=status').
- `text` (String, required) — Expected text inside the element.
- `timeout` (Optional[Timedelta], optional, default library timeout) — Maximum wait time.
- `error` (Optional[String], optional) — Custom error message if the wait fails.

**Returns:** None

**Error Handling:** Raises `Exception` if the element does not contain the text within the timeout.

---

## wait_until_element_does_not_contain

Waits until the specified element no longer contains the given text.

**Parameters:**
- `locator` (Union[WebElement, String], required) — Locator for the element (e.g., 'id=status').
- `text` (String, required) — Text that should disappear from the element.
- `timeout` (Optional[Timedelta], optional, default library timeout) — Maximum wait time.
- `error` (Optional[String], optional) — Custom error message if the wait fails.

**Returns:** None

**Error Handling:** Raises `Exception` if the element still contains the text within the timeout.