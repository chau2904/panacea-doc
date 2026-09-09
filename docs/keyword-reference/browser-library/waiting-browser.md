---
title: WaitingTestLibrary (Browser)
sidebar_position: 17
---

# WaitingTestLibrary (Browser)

## Wait For Elements State

Waits for the element found by selector to satisfy the given state. Returns immediately if the element already satisfies the condition.

**Parameters:**
- `selector` (String, required)
- `state` (String, optional, default `visible`) — `visible`, `hidden`, `attached`, `detached`, `enabled`, `disabled`, `editable`, `readonly`, `stable`, `focused`, `defocused`, `checked`, `unchecked`, `selected`, `deselected`.
- `timeout` (Timedelta, optional)
- `message` (String, optional) — Accepts `{selector}`, `{function}`, and `{timeout}` format placeholders.

**Returns:** None

**Error Handling:** Raises `Exception` if the element does not reach the specified state within the timeout.

---

## Wait For Function

Polls the given JavaScript expression or function until it returns a truthy value.

**Parameters:**
- `function` (String, required) — e.g. `() => true` or `element => element.offsetWidth > 0`.
- `selector` (String, optional, default empty string)
- `polling` (String or Timedelta, optional, default `raf`) — `raf` to poll on every animation frame, or a time string (e.g. `500ms`).
- `timeout` (Timedelta, optional)
- `message` (String, optional)

**Returns:** None

**Error Handling:** Raises `Exception` if the function does not return truthy within the timeout.

---

## Wait For Condition

Waits for a condition defined with Browser getter keywords to become True.

**Parameters:**
- `condition` (Any, required) — A Browser getter condition without the word `Get`, e.g. `Text`, `Url`, `Element States`.
- `args` (Any, optional)
- `timeout` (Timedelta, optional)
- `message` (String, optional)

**Returns:** Any — The return value of the evaluated condition keyword.

**Error Handling:** Raises `Exception` if the condition is not satisfied within the timeout.

---

## Wait For Load State

Waits for the page to reach the required load state. Note: `networkidle` is discouraged as it can be unreliable on dynamic pages.

**Parameters:**
- `state` (String, optional, default `load`) — `load`, `domcontentloaded`, `networkidle`.
- `timeout` (Timedelta, optional)

**Returns:** None

**Error Handling:** Raises `Exception` if the page does not reach the specified load state within the timeout.