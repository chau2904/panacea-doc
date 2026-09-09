---
title: HTTP Utility Keywords
sidebar_position: 2
---

# HTTP Utility Keywords

A collection of functions for sending requests and validating responses.

## status_should_be

Verifies that the HTTP status code of a response matches the expected status code.

**Parameters:**
- `expected_status` (str/int, required)
- `response` (Any, optional)
- `msg` (str, optional)

**Returns:** None

**Error Handling:** Raises `Exception` if status verification fails, including failure reason.

---

## request_should_be_successful

Verifies that an HTTP request was successful by checking if the response status code is in the 2xx range.

**Parameters:**
- `response` (Any, optional)

**Returns:** None

**Error Handling:** Raises `Exception` if request was not successful, with failure reason.

---

## session_less_get

Sends a sessionless GET request to a URL, retrieving the resource without a pre-existing session.

**Parameters:**
- `url` (str, required)
- `params` (dict/list/bytes/str, optional)
- `expected_status` (str/int, optional)
- `msg` (str, optional)
- `kwargs` (Any, optional)

**Returns:** Response object

**Error Handling:** Raises `Exception` if request fails or status check fails.

---

## session_less_post

Sends a sessionless POST request, typically to create or submit data. Supports form data or JSON.

**Parameters:**
- `url` (str, required)
- `data` (Any, optional)
- `json` (Any, optional)
- `expected_status` (str/int, optional)
- `msg` (str, optional)
- `kwargs` (Any, optional)

**Returns:** Response object

**Error Handling:** Raises `Exception` on failure.

---

## session_less_put

Sends a sessionless PUT request to update a resource. Supports form data or JSON. Same parameters as `session_less_post`.

**Returns:** Response object

**Error Handling:** Raises `Exception` on failure.

---

## session_less_head

Sends a sessionless HEAD request, retrieving only resource headers.

**Parameters:**
- `url` (str, required)
- `expected_status` (str/int, optional)
- `msg` (str, optional)
- `kwargs` (Any, optional)

**Returns:** Response object (headers only)

**Error Handling:** Raises `Exception` on failure.

---

## session_less_patch

Sends a sessionless PATCH request, partially updating a resource. Supports form data or JSON. Same parameters as `session_less_post`.

**Returns:** Response object

**Error Handling:** Raises `Exception` on failure.

---

## session_less_delete

Sends a sessionless DELETE request, used to remove a resource.

**Parameters:**
- `url` (str, required)
- `expected_status` (str/int, optional)
- `msg` (str, optional)
- `kwargs` (Any, optional)

**Returns:** Response object

**Error Handling:** Raises `Exception` on failure.

---

## session_less_options

Sends a sessionless OPTIONS request to retrieve allowed methods and options for a resource. Same parameters as `session_less_delete`.

**Returns:** Response object

**Error Handling:** Raises `Exception` on failure.

---

## get_on_session

Sends a GET request on a previously created HTTP session.

**Parameters:**
- `alias` (str, required)
- `url` (str, required)
- `params` (dict/list/bytes/str, optional)
- `expected_status` (str/int, optional)
- `msg` (str, optional)
- `kwargs` (Any, optional)

**Returns:** Response object

**Error Handling:** Raises `Exception` on failure.

---

## post_on_session

Sends a POST request on a session, used to create or submit data.

**Parameters:**
- `alias` (str, required)
- `url` (str, required)
- `data` (Any, optional)
- `json` (Any, optional)
- `expected_status` (str/int, optional)
- `msg` (str, optional)
- `kwargs` (Any, optional)

**Returns:** Response object

**Error Handling:** Raises `Exception` on failure.

---

## patch_on_session

Sends a PATCH request on a session to partially update a resource. Same parameters as `post_on_session`.

**Returns:** Response object

**Error Handling:** Raises `Exception` on failure.

---

## put_on_session

Sends a PUT request on a session to update a resource. Same parameters as `post_on_session`.

**Returns:** Response object

**Error Handling:** Raises `Exception` on failure.

---

## delete_on_session

Sends a DELETE request on a session to remove a resource.

**Parameters:**
- `alias` (str, required)
- `url` (str, required)
- `expected_status` (str/int, optional)
- `msg` (str, optional)
- `kwargs` (Any, optional)

**Returns:** Response object

**Error Handling:** Raises `Exception` on failure.

---

## head_on_session

Sends a HEAD request on a session to retrieve resource headers. Same parameters as `delete_on_session`.

**Returns:** Response object (headers only)

**Error Handling:** Raises `Exception` on failure.

---

## options_on_session

Sends an OPTIONS request on a session to retrieve allowed methods and options. Same parameters as `delete_on_session`.

**Returns:** Response object

**Error Handling:** Raises `Exception` on failure.