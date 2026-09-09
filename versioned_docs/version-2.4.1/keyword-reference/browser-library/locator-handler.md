---
title: LocatorHandlerTestLibrary
sidebar_position: 5
---

# LocatorHandlerTestLibrary

## Add Locator Handler Click

Adds a locator handler that automatically clicks `click_selector` whenever the element matched by selector becomes visible on the page.

**Parameters:**
- `selector` (String, required) — Selector for the element whose visibility triggers the handler.
- `click_selector` (String, required) — Selector for the element to click when triggered.
- `noWaitAfter` (Bool, optional, default `True`)
- `times` (Integer, optional) — Number of times the handler fires before being removed. `None` means unlimited.
- `click_clickCount` (Integer, optional, default `1`)
- `click_delay` (Integer, optional, default `0`)
- `click_force` (Bool, optional, default `False`)

**Returns:** None

**Error Handling:** Raises `Exception` if adding the locator handler fails.

---

## Add Locator Handler Custom

Adds a custom locator handler that performs a sequence of actions defined in `handler_spec` whenever the element matched by selector becomes visible.

**Parameters:**
- `selector` (String, required)
- `handler_spec` (List, required) — Each item is a dict with `action` (`click`, `fill`, `check`, `uncheck`) and `selector`. `fill` also requires `value`.
- `noWaitAfter` (Bool, optional, default `True`)
- `times` (Integer, optional)

**Returns:** None

**Error Handling:** Raises `ValueError` if `action` or `selector` is missing from any handler spec dictionary, or if `action` is not one of `click`, `fill`, `check`, `uncheck`, or if `value` is missing/present incorrectly for a `fill` action. Raises `Exception` if adding the locator handler fails.

---

## Remove Locator Handler

Removes the locator handler associated with the given locator from the current page.

**Parameters:**
- `locator` (String, required)

**Returns:** None

**Error Handling:** Raises `Exception` if removing the locator handler fails.