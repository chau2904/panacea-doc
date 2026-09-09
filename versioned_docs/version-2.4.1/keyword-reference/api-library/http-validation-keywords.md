---
title: HTTP Validation Keywords
sidebar_position: 3
---

# HTTP Validation Keywords

A set of validations for verifying REST API responses when performing API operations such as Create, Read, Update, and Delete (CRUD).

## response_should_contain

Asserts that the response body contains the given text.

**Parameters:**
- `response` (Any, required) — The response object returned from an HTTP request.
- `text` (String, required) — The text expected to be present in the response body.

**Returns:** None

**Error Handling:** Raises `Exception` if the text is not found in the response body.

---

## response_should_not_contain

Asserts that the response body does NOT contain the given text.

**Parameters:**
- `response` (Any, required)
- `text` (String, required) — The text expected to be absent from the response body.

**Returns:** None

**Error Handling:** Raises `Exception` if the text is found in the response body.

---

## response_header_should_exist

Asserts that the response contains the specified header. The check is case-insensitive.

**Parameters:**
- `response` (Any, required)
- `header` (String, required) — The header name to check for (e.g., `Content-Type`).

**Returns:** None

**Error Handling:** Raises `Exception` if the header is not present in the response.

---

## response_header_should_equal

Asserts that the given response header exists and its value exactly matches the expected value.

**Parameters:**
- `response` (Any, required)
- `header` (String, required)
- `expected_value` (String, required)

**Returns:** None

**Error Handling:** Raises `Exception` if the header is missing or its value does not match.

---

## response_should_be_json

Asserts that the response body is valid JSON. Parses and returns the decoded object so it can be used for further assertions within the same test.

**Parameters:**
- `response` (Any, required)

**Returns:** Parsed JSON object (Dictionary or List).

**Error Handling:** Raises `Exception` if the response body is not valid JSON.

---

## response_time_should_be_less_than

Asserts that the response time of the HTTP request is less than the specified threshold in milliseconds.

**Parameters:**
- `response` (Any, required)
- `milliseconds` (Float, required)

**Returns:** None

**Error Handling:** Raises `Exception` if the response time exceeds the specified limit.

---

## response_status_should_be_in

Asserts that the response status code matches one of the given acceptable values.

**Parameters:**
- `response` (Any, required)
- `statuses` (Integer, required) — One or more acceptable HTTP status codes.

**Returns:** None

**Error Handling:** Raises `Exception` if the status code is not in the list of expected values.

---

## get_json_value

Extracts and returns a value from the JSON response body using dot notation. Supports top-level keys, nested objects, and array indices (e.g., `items.0.id`).

**Parameters:**
- `response` (Any, required)
- `path` (String, required) — Dot-notation path to the target value (e.g., `user.name`, `items.0.id`).

**Returns:** Value found at the specified JSON path.

**Error Handling:** Raises `Exception` if the path cannot be resolved or the response is not valid JSON.

---

## json_value_should_equal

Asserts that the value at the given JSON path exactly equals the expected value.

**Parameters:**
- `response` (Any, required)
- `path` (String, required)
- `expected` (Any, required)

**Returns:** None

**Error Handling:** Raises `Exception` if the value does not match the expected value.

---

## json_value_should_not_equal

Asserts that the value at the given JSON path does NOT equal the expected value.

**Parameters:**
- `response` (Any, required)
- `path` (String, required)
- `expected` (Any, required)

**Returns:** None

**Error Handling:** Raises `Exception` if the value equals the expected value.

---

## json_value_should_contain

Asserts that the string value at the given JSON path contains the expected substring.

**Parameters:**
- `response` (Any, required)
- `path` (String, required)
- `expected` (String, required)

**Returns:** None

**Error Handling:** Raises `Exception` if the value does not contain the expected substring.

---

## json_array_length_should_be

Asserts that the JSON array at the given path contains exactly the expected number of items.

**Parameters:**
- `response` (Any, required)
- `path` (String, required) — Dot-notation path to the array (e.g., `items`, `data.results`).
- `expected_length` (Integer, required)

**Returns:** None

**Error Handling:** Raises `Exception` if the array length does not match or the path does not point to an array.

---

## json_array_should_not_be_empty

Asserts that the JSON array at the given path contains at least one item.

**Parameters:**
- `response` (Any, required)
- `path` (String, required)

**Returns:** None

**Error Handling:** Raises `Exception` if the array is empty or the path does not point to an array.

---

## response_json_should_contain_key

Asserts that the top-level JSON response object contains the specified key.

**Parameters:**
- `response` (Any, required)
- `key` (String, required) — The top-level key to check for (e.g., `id`, `accessToken`).

**Returns:** None

**Error Handling:** Raises `Exception` if the key is not present in the top-level JSON object.

---

## log_response_body

Pretty-prints the full HTTP response body to the Robot Framework log and returns it as a formatted string.

**Parameters:**
- `response` (Any, required)

**Returns:** String — The formatted response body.

**Error Handling:** Raises `Exception` if the response body cannot be read or formatted.