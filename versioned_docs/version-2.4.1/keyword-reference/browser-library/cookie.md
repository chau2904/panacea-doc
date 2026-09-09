---
title: CookieTestLibrary
sidebar_position: 8
---

# CookieTestLibrary

## Get Cookies

Returns all cookies from the currently active browser context.

**Parameters:**
- `return_type` (String, optional, default `dictionary`) — `dictionary` or `string`.

**Returns:** List[DotDict] or String — Cookies as a list of dot dictionaries or a semicolon-separated `name=value` string.

**Error Handling:** Raises `Exception` if retrieving cookies fails.

---

## Get Cookie

Returns information about a specific cookie by name from the active browser context. The dot dictionary contains keys: `name`, `value`, `domain`, `path`, `expires`, `httpOnly`, `secure`, `sameSite`.

**Parameters:**
- `cookie` (String, required)
- `return_type` (String, optional, default `dictionary`)

**Returns:** DotDict or String — Cookie details as a dot dictionary or a `name=value` string.

**Error Handling:** Raises `Exception` if the cookie is not found or retrieval fails.

---

## Add Cookie

Adds a cookie to the currently active browser context. Either url or the domain/path pair must be provided.

**Parameters:**
- `name` (String, required)
- `value` (String, required)
- `url` (String, optional)
- `domain` (String, optional)
- `path` (String, optional)
- `expires` (String, optional)
- `httpOnly` (Bool, optional)
- `secure` (Bool, optional)
- `sameSite` (String, optional) — `Strict`, `Lax`, `None`.

**Returns:** None

**Error Handling:** Raises `Exception` if adding the cookie fails.

---

## Delete Cookie

Deletes a single cookie by name from the currently active browser context.

**Parameters:**
- `name` (String, required)

**Returns:** None

**Error Handling:** Raises `Exception` if deleting the cookie fails.

---

## Delete All Cookies

Deletes all cookies from the currently active browser context.

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if deleting cookies fails.

---

## Eat All Cookies

Deletes all cookies and displays the Cookie Monster easter egg in the log.

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if the operation fails.