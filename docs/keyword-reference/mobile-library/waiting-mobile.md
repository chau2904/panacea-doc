---
title: WaitingTestLibrary (Mobile)
sidebar_position: 5
---

# WaitingTestLibrary (Mobile)

## wait_until_element_is_visible

Waits until the specified element (locator) is visible.

**Parameters:**
- `locator` (str, required)
- `timeout` (Union[int, float, None], optional, default `None`)
- `error` (str, optional, default `None`)

**Returns:** None — Returns nothing if element becomes visible.

**Error Handling:** Raises `Exception` if element is not visible within timeout.

---

## wait_until_page_contains

Waits until text appears on the current page.

**Parameters:**
- `text` (str, required)
- `timeout` (Union[int, float, None], optional, default `None`)
- `error` (str, optional, default `None`)

**Returns:** None — Returns nothing if text appears within timeout.

**Error Handling:** Raises `WebDriverException` for webdriver errors. Raises `Exception` if text does not appear.

---

## wait_until_page_does_not_contain

Waits until text disappears from the current page.

**Parameters:**
- `text` (str, required)
- `timeout` (Union[int, float, None], optional, default `None`)
- `error` (str, optional, default `None`)

**Returns:** None — Returns nothing if text disappears within timeout.

**Error Handling:** Raises `Exception` if text does not disappear within timeout.

---

## wait_until_page_contains_element

Waits until the specified element (locator) appears on the current page.

**Parameters:**
- `locator` (str, required)
- `timeout` (Union[int, float, None], optional, default `None`)
- `error` (str, optional, default `None`)

**Returns:** None — Returns nothing if element appears within timeout.

**Error Handling:** Raises `Exception` if element does not appear within timeout.

---

## wait_until_page_does_not_contain_element

Waits until the specified element (locator) disappears from the current page.

**Parameters:**
- `locator` (str, required)
- `timeout` (Union[int, float, None], optional, default `None`)
- `error` (str, optional, default `None`)

**Returns:** None — Returns nothing if element disappears within timeout.

**Error Handling:** Raises `Exception` if element does not disappear within timeout.

---

## set_sleep_between_wait_loop

Sets the sleep duration between wait loops for wait-related keywords.

**Parameters:**
- `seconds` (float, optional, default `0.2`)

**Returns:** float — Previous sleep duration before the update.

**Error Handling:** Raises `Exception` if setting the duration fails.

---

## get_sleep_between_wait_loop

Gets the current sleep duration between wait loops for wait-related keywords.

**Parameters:** None

**Returns:** str — Current sleep duration between wait loops as a time string.

**Error Handling:** Raises `Exception` if retrieving the sleep duration fails.