---
title: WebAppStateTestLibrary
sidebar_position: 18
---

# WebAppStateTestLibrary

## Local Storage Get Item

Retrieves the value stored under key in the page's localStorage. Optionally asserts the returned value.

**Parameters:**
- `key` (String, required)
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (Any or None, optional)
- `message` (String or None, optional)
- `frame_selector` (String or None, optional) — e.g. `iframe[name="test"] >>> body`.

**Returns:** Any — The value stored under key, or None if the key does not exist.

**Error Handling:** Raises `AssertionError` if the assertion fails. Raises `Exception` if retrieving the localStorage item fails.

---

## Local Storage Set Item

Saves value under key in the page's localStorage.

**Parameters:**
- `key` (String, required)
- `value` (String, required)
- `frame_selector` (String or None, optional)

**Returns:** None

**Error Handling:** Raises `Exception` if writing to localStorage fails.

---

## Local Storage Remove Item

Removes the item stored under key from the page's localStorage.

**Parameters:**
- `key` (String, required)
- `frame_selector` (String or None, optional)

**Returns:** None

**Error Handling:** Raises `Exception` if removing the item fails.

---

## Local Storage Clear

Removes all items from the page's localStorage.

**Parameters:**
- `frame_selector` (String or None, optional)

**Returns:** None

**Error Handling:** Raises `Exception` if clearing localStorage fails.

---

## Session Storage Get Item

Retrieves the value stored under key in the page's sessionStorage. Optionally asserts the returned value.

**Parameters:**
- `key` (String, required)
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (Any or None, optional)
- `message` (String or None, optional)
- `frame_selector` (String or None, optional)

**Returns:** Any — The value stored under key, or None if the key does not exist.

**Error Handling:** Raises `AssertionError` if the assertion fails. Raises `Exception` if retrieving the sessionStorage item fails.

---

## Session Storage Set Item

Saves value under key in the page's sessionStorage.

**Parameters:**
- `key` (String, required)
- `value` (String, required)
- `frame_selector` (String or None, optional)

**Returns:** None

**Error Handling:** Raises `Exception` if writing to sessionStorage fails.

---

## Session Storage Remove Item

Removes the item stored under key from the page's sessionStorage.

**Parameters:**
- `key` (String, required)
- `frame_selector` (String or None, optional)

**Returns:** None

**Error Handling:** Raises `Exception` if removing the item fails.

---

## Session Storage Clear

Removes all items from the page's sessionStorage.

**Parameters:**
- `frame_selector` (String or None, optional)

**Returns:** None

**Error Handling:** Raises `Exception` if clearing sessionStorage fails.