---
title: HTTP Session Management Keywords
sidebar_position: 1
---

# HTTP Session Management Keywords

Functions for creating and managing HTTP sessions, including different authentication types (basic, client certificates, custom, digest, and NTLM).

## create_session

Creates a new HTTP session identified by an alias, with configurable headers, cookies, authentication, and other parameters.

**Parameters:**
- `alias` (String, required) — Unique identifier for the session.
- `url` (String, required) — Base URL for the session.
- `headers` (Dict, optional, default `{}`)
- `cookies` (Dict, optional, default `{}`)
- `auth` (Any, optional, default `None`) — Authentication credentials.
- `timeout` (Float, optional)
- `proxies` (Dict, optional)
- `verify` (Bool, optional, default `False`)
- `debug` (Integer, optional, default `0`)
- `max_retries` (Integer, optional, default `3`)
- `backoff_factor` (Float, optional, default `0.10`)
- `disable_warnings` (Integer, optional, default `0`)
- `retry_status_list` (List, optional)
- `retry_method_list` (List, optional)

**Returns:** Session object

**Error Handling:** Raises `Exception` if session creation fails, with message indicating the failure reason.

---

## create_client_cert_session

Creates a new HTTP session identified by an alias, using client certificates for authentication.

**Parameters:**
- `alias` (String, required)
- `url` (String, required)
- `headers` (Dict, optional, default `{}`)
- `cookies` (Dict, optional, default `{}`)
- `client_certs` (Tuple, optional)
- `timeout` (Float, optional)
- `proxies` (Dict, optional)
- `verify` (Bool, optional, default `False`)
- `debug` (Integer, optional, default `0`)
- `max_retries` (Integer, optional, default `3`)
- `backoff_factor` (Float, optional, default `0.10`)
- `disable_warnings` (Integer, optional, default `0`)
- `retry_status_list` (List, optional)
- `retry_method_list` (List, optional)

**Returns:** Session object

**Error Handling:** Raises `Exception` if session creation fails, with message indicating the failure reason.

---

## create_custom_session

Creates a new HTTP session identified by an alias, using custom authentication credentials.

**Parameters:**
- `alias` (String, required)
- `url` (String, required)
- `auth` (Any, required)
- `headers` (Dict, optional, default `{}`)
- `cookies` (Dict, optional, default `{}`)
- `timeout` (Float, optional)
- `proxies` (Dict, optional)
- `verify` (Bool, optional, default `False`)
- `debug` (Integer, optional, default `0`)
- `max_retries` (Integer, optional, default `3`)
- `backoff_factor` (Float, optional, default `0.10`)
- `disable_warnings` (Integer, optional, default `0.4`)
- `retry_status_list` (List, optional)
- `retry_method_list` (List, optional)

**Returns:** Session object

**Error Handling:** Raises `Exception` if session creation fails, with message indicating the failure reason.

---

## create_digest_session

Creates a new HTTP session identified by an alias, using Digest authentication credentials.

**Parameters:**
- `alias` (String, required)
- `url` (String, required)
- `auth` (Any, required)
- `headers` (Dict, optional, default `{}`)
- `cookies` (Dict, optional, default `{}`)
- `timeout` (Float, optional)
- `proxies` (Dict, optional)
- `verify` (Bool, optional, default `False`)
- `debug` (Integer, optional, default `0`)
- `max_retries` (Integer, optional, default `3`)
- `backoff_factor` (Float, optional, default `0.10`)
- `disable_warnings` (Integer, optional, default `0`)
- `retry_status_list` (List, optional)
- `retry_method_list` (List, optional)

**Returns:** Session object

**Error Handling:** Raises `Exception` if session creation fails, with message indicating the failure reason.

---

## create_ntlm_session

Creates a new HTTP session identified by an alias, using NTLM authentication credentials.

**Parameters:**
- `alias` (String, required)
- `url` (String, required)
- `auth` (Any, required)
- `headers` (Dict, optional, default `{}`)
- `cookies` (Dict, optional, default `{}`)
- `timeout` (Float, optional)
- `proxies` (Dict, optional)
- `verify` (Bool, optional, default `False`)
- `debug` (Integer, optional, default `0`)
- `max_retries` (Integer, optional, default `3`)
- `backoff_factor` (Float, optional, default `0.10`)
- `disable_warnings` (Integer, optional, default `0`)
- `retry_status_list` (List, optional)
- `retry_method_list` (List, optional)

**Returns:** Session object

**Error Handling:** Raises `Exception` if session creation fails, with message indicating the failure reason.

---

## session_exists

Verifies whether an HTTP session with the specified alias exists in the current context.

**Parameters:**
- `alias` (String, required)

**Returns:** Bool (True if session exists, False otherwise)

**Error Handling:** Raises `Exception` if checking session existence fails, with message indicating the failure reason.

---

## delete_all_sessions

Removes all HTTP sessions currently managed by the library.

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if session deletion fails, with message indicating the failure reason.