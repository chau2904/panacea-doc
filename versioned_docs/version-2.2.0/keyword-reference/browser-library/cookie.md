---
title: CookieTestLibrary
sidebar_position: 3
---

# CookieTestLibrary

## delete_all_cookies

Clears all cookies in the active browser session to reset the state. Useful in test setup or teardown for a clean environment.

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if deleting cookies fails, with failure reason.

---

## delete_cookie

Removes a cookie by name from the active browser session. If the cookie does not exist, it silently succeeds.

**Parameters:**
- `name` (String, required) — The name of the cookie to delete.

**Returns:** None

**Error Handling:** Raises `Exception` if deleting the cookie fails, with failure reason.

---

## get_cookies

Fetches all cookies from the current browser page for inspection or modification. Supports string or dictionary return formats.

**Parameters:**
- `as_dict` (Bool, optional, default `False`) — If True, returns cookies as a dictionary; if False, returns as a semicolon-separated string.

**Returns:** Union[String, Dict] — Cookies as a semicolon-separated string (e.g., "name1=value1; name2=value2") or dictionary of name-value pairs.

**Error Handling:** Raises `Exception` if retrieving cookies fails, with failure reason.

---

## get_cookie

Retrieves attributes (value, path, domain, etc.) of a specified cookie from the active session.

**Parameters:**
- `name` (String, required) — The name of the cookie to retrieve.

**Returns:** Any — A dictionary-like object containing cookie attributes such as name, value, path, domain, secure, and expiry.

**Error Handling:** Raises `Exception` if cookie not found or retrieval fails.

---

## add_cookie

Inserts a new or modified cookie into the active session. Supports optional attributes like path, domain, secure, expiry. Useful for simulating sessions.

**Parameters:**
- `name` (String, required) — The name of the cookie.
- `value` (String, required) — The value of the cookie.
- `path` (String, optional, default `None`) — The path for the cookie (e.g., '/').
- `domain` (String, optional, default `None`) — The domain for the cookie (e.g., 'example.com').
- `secure` (Bool, optional, default `None`) — Whether the cookie requires HTTPS.
- `expiry` (String, optional, default `None`) — Expiry as datetime string (e.g., '2025-12-31 23:59:59') or Unix timestamp.

**Returns:** None

**Error Handling:** Raises `Exception` if adding cookie fails, with failure reason.