---
title: NetworkTestLibrary
sidebar_position: 11
---

# NetworkTestLibrary

## HTTP

Performs an HTTP request in the current browser context and returns the response as a dictionary. If the request body can be parsed as JSON, the Content-Type header is automatically set to `application/json`.

**Parameters:**
- `url` (String, required) — e.g. `/api/foo` or `https://example.com/api`.
- `method` (String, optional, default `GET`)
- `body` (String, optional) — GET requests cannot have a body.
- `headers` (Dictionary, optional)

**Returns:** Dictionary — Response dict with keys: `status` (int), `statusText` (str), `body` (dict or str), `headers` (dict), `ok` (bool).

**Error Handling:** Raises `Exception` if the HTTP request fails.

---

## Wait For Request

Waits for an HTTP request matching matcher to be made and returns it. The matcher can be a glob pattern, a JavaScript RegExp enclosed in `/`, or a JavaScript arrow function.

**Parameters:**
- `matcher` (String, optional, default empty string) — Matches first request if empty.
- `timeout` (Timedelta, optional)

**Returns:** Any — The matched request object as a dictionary.

**Error Handling:** Raises `Exception` if no matching request is made within the timeout.

---

## Wait For Response

Waits for an HTTP response matching matcher and returns it as a dictionary.

**Parameters:**
- `matcher` (String, optional, default empty string)
- `timeout` (Timedelta, optional)

**Returns:** Dictionary — The matched response with keys: `status`, `statusText`, `body`, `headers`, `ok`, `request`, `url`.

**Error Handling:** Raises `Exception` if no matching response is received within the timeout.

---

## Wait Until Network Is Idle

*(Deprecated — use Wait For Load State with `networkidle` instead.)* Waits until there has been at least one instance of 500ms of no network traffic on the page after loading.

**Parameters:**
- `timeout` (Timedelta, optional)

**Returns:** None

**Error Handling:** Raises `Exception` if the network does not become idle within the timeout.

---

## Wait For Navigation

Waits until the page has navigated to the given URL.

**Parameters:**
- `url` (String, required) — Exact URL or a JavaScript RegExp in `/` slashes.
- `timeout` (Timedelta, optional)
- `wait_until` (String, optional, default `load`)

**Returns:** None

**Error Handling:** Raises `Exception` if the navigation does not reach the expected URL within the timeout.

---

## Mock Route

Registers a mock route that intercepts navigation requests matching `url_pattern` and returns a configurable fake response.

**Parameters:**
- `url_pattern` (String, required)
- `body` (String, optional, default empty string)
- `status` (Integer, optional, default `200`)
- `headers` (Dictionary, optional, default `{"Content-Type": "application/json"}`)

**Returns:** None

**Error Handling:** Raises `Exception` if registering the mock route fails.

---

## Abort Route

Registers a URL pattern whose requests should be aborted.

**Parameters:**
- `url_pattern` (String, required)

**Returns:** None

**Error Handling:** Raises `Exception` if registering the abort route fails.

---

## Unroute

Removes a mock route previously registered with Mock Route.

**Parameters:**
- `url_pattern` (String, required)

**Returns:** None

**Error Handling:** Raises `Exception` if removing the mock route fails.

---

## Get Mock URL

Returns the local mock server URL if url matches a registered mock route.

**Parameters:**
- `url` (String, required)

**Returns:** String — The local mock server URL if a mock matches, or empty string if no mock matches.

**Error Handling:** Raises `Exception` if resolving the mock URL fails.