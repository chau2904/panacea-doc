---
title: PlaywrightStateTestLibrary
sidebar_position: 13
---

# PlaywrightStateTestLibrary

## Open Browser

Opens a new browser instance with a context and page. For production test suites, prefer New Page directly.

**Parameters:**
- `url` (String or None, optional)
- `browser` (SupportedBrowsers, optional, default `chromium`)
- `headless` (Boolean, optional, default `False`)
- `pause_on_failure` (Boolean, optional, default `True`)
- `bypass_csp` (Boolean, optional, default `True`)

**Returns:** None

**Error Handling:** Raises `Exception` if opening the browser fails.

---

## Close Browser

Closes the specified browser and all its contexts and pages.

**Parameters:**
- `browser` (SelectionType or String, optional, default `CURRENT`)

**Returns:** None

**Error Handling:** Raises `Exception` if closing the browser fails.

---

## New Browser

Creates a new Playwright browser instance with specified options.

**Parameters:**
- `browser` (SupportedBrowsers, optional, default `chromium`)
- `headless` (Boolean, optional, default `True`)
- `args` (List or None, optional)
- `channel` (String or None, optional) — e.g. `chrome`, `msedge`. Valid only with Chromium.
- `chromium_sandbox` (Boolean, optional, default `False`)
- `devtools` (Boolean, optional, default `False`)
- `downloads_path` (String or None, optional)
- `env` (Dict or None, optional)
- `executable_path` (String or None, optional)
- `firefox_user_prefs` (Dict or None, optional)
- `handle_sighup`, `handle_sigint`, `handle_sigterm` (Boolean, optional, default `True`)
- `ignore_default_args` (List / Boolean / None, optional)
- `proxy` (Proxy or None, optional)
- `reuse_existing` (Boolean, optional, default `True`)
- `slow_mo` (Timedelta, optional)
- `timeout` (Timedelta, optional, default `30s`)

**Returns:** String — Stable identifier for the created (or reused) browser.

**Error Handling:** Raises `Exception` if the browser fails to start.

---

## Launch Browser Server

Launches a new Playwright browser server and returns its WebSocket endpoint.

**Parameters:**
- `browser` (SupportedBrowsers, optional, default `chromium`)
- `headless` (Boolean, optional, default `True`)
- `port` (Integer or None, optional)
- `ws_path` (String or None, optional)
- All other parameters match New Browser.

**Returns:** String — WebSocket endpoint URL (`wsEndpoint`).

**Error Handling:** Raises `Exception` if launching the browser server fails.

---

## Close Browser Server

Closes a Playwright browser server identified by its WebSocket endpoint.

**Parameters:**
- `ws_endpoint` (String, required)

**Returns:** None

**Error Handling:** Raises `Exception` if closing the browser server fails.

---

## Connect To Browser

Connects to a Playwright browser server via WebSocket or Chrome DevTools Protocol.

**Parameters:**
- `ws_endpoint` (String, required)
- `browser` (SupportedBrowsers, optional, default `chromium`)
- `use_cdp` (Boolean, optional, default `False`)
- `timeout` (Timedelta, optional, default `30s`)

**Returns:** String — Stable identifier for the connected browser.

**Error Handling:** Raises `Exception` if the connection fails.

---

## New Context

Creates a new browser context with specified options. A browser context controls a single browser profile; caches and cookies are shared within a context.

**Parameters:**
- `accept_downloads` (Boolean, optional, default `True`)
- `base_url` (String or None, optional)
- `bypass_csp` (Boolean, optional, default `False`)
- `client_certificates` (List or None, optional)
- `color_scheme` (ColorScheme or None, optional)
- `default_browser_type` (SupportedBrowsers or None, optional)
- `device_scale_factor` (Float or None, optional)
- `extra_http_headers` (Dict or None, optional)
- `forced_colors` (ForcedColors, optional, default `none`)
- `geolocation` (GeoLocation or None, optional)
- `has_touch` (Boolean or None, optional)
- `http_credentials` (HttpCredentials or None, optional)
- `ignore_https_errors` (Boolean, optional, default `False`)
- `is_mobile` (Boolean or None, optional)
- `java_script_enabled` (Boolean, optional, default `True`)
- `locale` (String or None, optional)
- `offline` (Boolean, optional, default `False`)
- `permissions` (List or None, optional)
- `proxy` (Proxy or None, optional)
- `record_har` (RecordHar or None, optional)
- `record_video` (RecordVideo or None, optional)
- `reduced_motion` (ReduceMotion, optional, default `no_preference`)
- `screen` (Dict or None, optional) — e.g. `{'width': 414, 'height': 896}`.
- `service_workers` (ServiceWorkersPermissions or None, optional, default `allow`)
- `storage_state` (String or None, optional)
- `timezone_id` (String or None, optional)
- `tracing` (Boolean or Path or None, optional)
- `user_agent` (String or None, optional)
- `viewport` (ViewportDimensions or None, optional, default `1280x720`)

**Returns:** String — Stable identifier for the created context.

**Error Handling:** Raises `Exception` if creating the context fails.

---

## New Persistent Context

Opens a new persistent browser context with a persistent user profile directory. Equivalent to New Browser + New Context + New Page.

**Parameters:**
- `user_data_dir` (String, optional, default `""`)
- `browser` (SupportedBrowsers, optional, default `chromium`)
- `headless` (Boolean, optional, default `True`)
- `url` (String or None, optional)
- All other parameters match New Browser and New Context.

**Returns:** Tuple — (`browser_id`, `context_id`, `NewPageDetails`).

**Error Handling:** Raises `Exception` if creating the persistent context fails.

---

## Close Context

Closes a browser context and all pages belonging to it.

**Parameters:**
- `context` (SelectionType or String, optional, default `CURRENT`)
- `browser` (SelectionType or String, optional, default `CURRENT`)
- `save_trace` (Boolean, optional, default `True`)

**Returns:** None

**Error Handling:** Raises `Exception` if closing the context fails.

---

## New Page

Opens a new browser page (tab). Creates browser and context automatically if needed.

**Parameters:**
- `url` (String or None, optional)
- `wait_until` (PageLoadStates, optional, default `load`)

**Returns:** Dictionary — NewPageDetails containing `page_id` and `video_path`.

**Error Handling:** Raises `Exception` if opening the page fails.

---

## Close Page

Closes the specified page in the given context and browser.

**Parameters:**
- `page` (SelectionType or String, optional, default `CURRENT`)
- `context` (SelectionType or String, optional, default `CURRENT`)
- `browser` (SelectionType or String, optional, default `CURRENT`)
- `run_before_unload` (Boolean, optional, default `False`)

**Returns:** List — Page closure details including id, errors, and console messages.

**Error Handling:** Raises `Exception` if closing the page fails.

---

## Set Default Run Before Unload

Sets the default `runBeforeUnload` value used during automatic page closing.

**Parameters:**
- `run_before_unload` (Boolean, required)

**Returns:** Boolean — Previous `runBeforeUnload` value.

**Error Handling:** Raises `Exception` if setting the value fails.

---

## Get Browser Catalog

Returns all open browsers, their contexts, and pages as a structured list.

**Parameters:**
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (Any or None, optional)
- `message` (String or None, optional)

**Returns:** List — Browser information including contexts and pages.

**Error Handling:** Raises `Exception` if retrieving the catalog fails.

---

## Get Console Log

Returns the console log messages of the active page.

**Parameters:**
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (Any or None, optional)
- `message` (String or None, optional)
- `full` (Boolean, optional, default `False`)
- `last` (Integer or Timedelta or None, optional)

**Returns:** List — Log message details.

**Error Handling:** Raises `Exception` if retrieving the console log fails.

---

## Get Page Errors

Returns the page error messages of the active page.

**Parameters:**
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (Any or None, optional)
- `message` (String or None, optional)
- `full` (Boolean, optional, default `False`)
- `last` (Integer or Timedelta or None, optional)

**Returns:** List — Error details including name, message, stack, and time.

**Error Handling:** Raises `Exception` if retrieving page errors fails.

---

## Switch Browser

Switches the currently active browser to another open browser by id.

**Parameters:**
- `id` (String, required)

**Returns:** String — Previously active browser id.

**Error Handling:** Raises `Exception` if browser is not found.

---

## Switch Context

Switches the active browser context to another open context by id.

**Parameters:**
- `id` (String, required)
- `browser` (SelectionType or String, optional, default `CURRENT`)

**Returns:** String — Previously active context id.

**Error Handling:** Raises `Exception` if the context is not found or switch fails.

---

## Switch Page

Switches the active browser page to another open page by id or NEW.

**Parameters:**
- `id` (SelectionType or String, required) — Use `NEW` for a recently opened popup, `CURRENT` to switch within another context/browser.
- `context` (SelectionType or String, optional, default `CURRENT`)
- `browser` (SelectionType or String, optional, default `CURRENT`)

**Returns:** String — Previously active page id.

**Error Handling:** Raises `Exception` if the page is not found or switch fails.

---

## Get Browser Ids

Returns a list of ids from open browsers.

**Parameters:**
- `browser` (SelectionType, optional, default `ALL`)
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (Any, optional)
- `message` (String or None, optional)

**Returns:** List — Browser id strings.

**Error Handling:** Raises `Exception` if retrieving browser ids fails.

---

## Get Context Ids

Returns a list of context ids based on browser selection.

**Parameters:**
- `context` (SelectionType, optional, default `ALL`)
- `browser` (SelectionType or String, optional, default `ALL`)
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (Any, optional)
- `message` (String or None, optional)

**Returns:** List — Context id strings.

**Error Handling:** Raises `Exception` if retrieving context ids fails.

---

## Get Page Ids

Returns a list of page ids based on context and browser selection.

**Parameters:**
- `page` (SelectionType, optional, default `ALL`)
- `context` (SelectionType or String, optional, default `ALL`)
- `browser` (SelectionType or String, optional, default `ALL`)
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (Any, optional)
- `message` (String or None, optional)

**Returns:** List — Page id strings.

**Error Handling:** Raises `Exception` if retrieving page ids fails.

---

## Save Storage State

Saves the current active context's storage state (cookies, local storage) to a file.

**Parameters:** None

**Returns:** String — Absolute path to the saved storage state JSON file.

**Error Handling:** Raises `Exception` if saving the storage state fails.

---

## Cancel Download

Cancels an active download.

**Parameters:**
- `download` (String or DownloadInfo, required)

**Returns:** None

**Error Handling:** Raises `Exception` if cancelling the download fails.