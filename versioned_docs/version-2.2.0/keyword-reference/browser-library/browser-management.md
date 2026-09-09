---
title: BrowserManagementTestLibrary
sidebar_position: 2
---

# BrowserManagementTestLibrary

## close_all_browsers

Terminates all active browser instances and resets the internal browser index to start from 1 for new browser openings. Ideal for test suite cleanup.

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if closing browsers fails, with failure reason.

---

## close_browser

Shuts down the active browser instance, leaving other open browsers unaffected. Useful for selectively closing a browser during a test.

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if closing the current browser fails, with failure reason.

---

## open_browser

Launches a new browser instance with customizable settings, such as browser type, alias, and remote execution. Optionally navigates to the specified URL after opening. Returns the browser's index for switching or reference.

**Parameters:**
- `url` (str, optional, default `None`) — URL to open after launching the browser.
- `browser` (str, optional, default `"firefox"`) — Browser type (e.g., `"firefox"`, `"chrome"`).
- `alias` (str, optional, default `None`) — Alias name for the browser instance.
- `remote_url` (str | bool, optional, default `False`) — Remote Selenium Grid URL, if any.
- `desired_capabilities` (dict | str | None, optional, default `None`) — Browser capabilities.
- `ff_profile_dir` (FirefoxProfile | str | None, optional, default `None`) — Firefox profile path or object.
- `options` (Any, optional, default `None`) — Browser-specific Selenium options.
- `service_log_path` (str, optional, default `None`) — Path to save browser driver logs.
- `executable_path` (str, optional, default `None`) — Path to the browser driver executable.
- `cookie` (bool, optional, default `True`) — Enable cookies (True) or disable (False).
- `headless` (bool, optional, default `False`) — Run in headless mode if True.

**Returns:** None

**Error Handling:** Raises `Exception` if opening browser fails, with failure reason.

---

## create_webdriver

Initializes a Selenium WebDriver instance for a specified browser type, allowing fine-grained control via constructor arguments. Useful for advanced browser configurations beyond standard open browser settings.

**Parameters:**
- `driver_name` (String, required) — The WebDriver implementation name (e.g., `"Firefox"`, `"Chrome"`, `"Edge"`, `"Safari"`, `"Remote"`).
- `alias` (String, optional, default `None`) — Alias for the WebDriver instance.
- `kwargs` (Dict, optional, default `{}`) — Dictionary of WebDriver initialization parameters.
- `init_kwargs` (Any, optional) — Additional keyword arguments for WebDriver.

**Returns:** String — Index of created browser instance.

**Error Handling:** Raises `Exception` if WebDriver creation fails.

---

## switch_browser

Activates a browser instance identified by its index (returned by Open Browser) or alias. Essential for managing multiple open browsers in a test.

**Parameters:**
- `index_or_alias` (String, required) — The index or alias of the browser to switch to.

**Returns:** None

**Error Handling:** Raises `Exception` if no browser found with given index/alias.

---

## get_browser_ids

Returns a list of IDs for all currently open browser instances, enabling iteration or management of multiple browsers.

**Parameters:** None

**Returns:** List[String] — Active browser IDs.

**Error Handling:** Raises `Exception` if retrieving browser IDs fails, with a message indicating the failure reason.

---

## get_browser_aliases

Returns a dictionary-like list of aliases mapped to their browser indices, useful for referencing browsers by name in multi-browser tests.

**Parameters:** None

**Returns:** List[String] — A dictionary-like object containing aliases as keys and browser indices as values.

**Error Handling:** Raises `Exception` if retrieval fails.

---

## get_session_id

Returns the unique session ID of the currently active browser, useful for debugging or tracking browser sessions.

**Parameters:** None

**Returns:** String — Active browser's session ID.

**Error Handling:** Raises `Exception` if retrieval fails.

---

## get_source

Returns the complete HTML source code of the active page or frame in the current browser, useful for debugging or validation.

**Parameters:** None

**Returns:** String — The HTML source of the current page or frame.

**Error Handling:** Raises `Exception` if retrieval fails.

---

## get_title

Returns the title of the active page in the current browser, useful for verifying page content or navigation.

**Parameters:** None

**Returns:** String — The title of the current page.

**Error Handling:** Raises `Exception` if retrieval fails.

---

## get_location

Returns the URL of the current page in the active browser window, useful for navigation verification.

**Parameters:** None

**Returns:** String — The current URL of the active browser window.

**Error Handling:** Raises `Exception` if retrieval fails.

---

## location_should_be

Confirms that the active browser's current URL exactly matches the specified URL, failing the test if it does not.

**Parameters:**
- `url` (String, required) — The expected URL.
- `message` (String, optional, default `None`) — Custom error message for assertion failure.

**Returns:** None

**Error Handling:** Raises `Exception` if verification fails.

---

## location_should_contain

Checks if the active browser's current URL includes the specified substring, failing the test if it does not.

**Parameters:**
- `expected` (String, required) — The substring expected in the URL.
- `message` (String, optional, default `None`) — Custom error message for assertion failure.

**Returns:** None

**Error Handling:** Raises `Exception` if verification fails.

---

## log_location

Logs the current URL of the active browser window to the test log and returns it for further use.

**Parameters:** None

**Returns:** String — The current URL of the active browser window.

**Error Handling:** Raises `Exception` if retrieval/logging fails.

---

## log_source

Logs HTML source at given log level, returns it.

**Parameters:**
- `loglevel` (String, optional, default `"INFO"`) — The log level for logging (`"WARN"`, `"INFO"`, `"DEBUG"`, `"TRACE"`, `"NONE"`).

**Returns:** String — The full HTML source of the current page or frame.

**Error Handling:** Raises `Exception` if retrieval/logging fails.

---

## log_title

Logs the title of the active page in the current browser to the test log and returns it for further use.

**Parameters:** None

**Returns:** String — The title of the current page.

**Error Handling:** Raises `Exception` if retrieval/logging fails.

---

## title_should_be

Confirms that the title of the active page in the current browser exactly matches the specified title, failing the test if it does not.

**Parameters:**
- `title` (String, required) — The expected page title.
- `message` (String, optional, default `None`) — Custom error message for assertion failure.

**Returns:** None

**Error Handling:** Raises `Exception` if verification fails.

---

## go_back

Simulates clicking the browser's back button to return to the previous page in the navigation history.

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if navigation fails.

---

## go_to

Directs the active browser to load the provided URL, replacing the current page.

**Parameters:**
- `url` (String, required) — The target URL to navigate to.

**Returns:** None

**Error Handling:** Raises `Exception` if navigation fails.

---

## reload_page

Refreshes the active page in the current browser, simulating a user-initiated page reload.

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if reload fails.

---

## get_selenium_speed

Returns the current delay applied after Selenium commands as a human-readable string, useful for understanding test execution pacing.

**Parameters:** None

**Returns:** String — The current Selenium speed as a human-readable string (e.g., "1 second").

**Error Handling:** Raises `Exception` if retrieval fails.

---

## get_selenium_timeout

Returns the current timeout value used by Selenium keywords as a human-readable string, useful for configuring test wait times.

**Parameters:** None

**Returns:** String — The current Selenium timeout as a human-readable string.

**Error Handling:** Raises `Exception` if retrieval fails.

---

## get_selenium_implicit_wait

Returns the current implicit wait value used by Selenium for element detection as a human-readable string, useful for adjusting test robustness.

**Parameters:** None

**Returns:** String — The current Selenium implicit wait value as a human-readable string.

**Error Handling:** Raises `Exception` if retrieval fails.

---

## get_selenium_page_load_timeout

Returns the current timeout for page loading in Selenium as a human-readable string, useful for managing page load wait times.

**Parameters:** None

**Returns:** String — The current page load timeout as a human-readable string.

**Error Handling:** Raises `Exception` if retrieval fails.

---

## set_selenium_speed

Configures the delay after each Selenium command to control test execution speed, returning the previous value for restoration if needed.

**Parameters:**
- `value` (Timedelta, required) — Delay duration as seconds or a human-readable string (e.g., "1 second").

**Returns:** String — The previous Selenium speed as a human-readable string.

**Error Handling:** Raises `Exception` if setting fails.

---

## set_selenium_timeout

Configures the timeout for Selenium keywords to manage wait times, returning the previous value for restoration if needed.

**Parameters:**
- `value` (Timedelta, required) — Timeout duration as seconds or a human-readable string.

**Returns:** String — The previous Selenium timeout as a human-readable string.

**Error Handling:** Raises `Exception` if setting fails.

---

## set_selenium_implicit_wait

Configures the implicit wait for element detection across all browsers, returning the previous value for restoration if needed.

**Parameters:**
- `value` (Timedelta, required) — Implicit wait duration as seconds or a human-readable string.

**Returns:** String — The previous implicit wait value as a human-readable string.

**Error Handling:** Raises `Exception` if setting fails.

---

## set_action_chain_delay

Configures the delay for ActionChains (e.g., mouse or keyboard actions), stored in milliseconds, and returns the previous value for restoration.

**Parameters:**
- `value` (Timedelta, required) — Delay duration as seconds or a human-readable string.

**Returns:** String — The previous delay value as a human-readable string.

**Error Handling:** Raises `Exception` if setting fails.

---

## get_action_chain_delay

Returns the current delay for ActionChains operations as a human-readable string, useful for verifying action timing settings.

**Parameters:** None

**Returns:** String — The current ActionChains delay as a human-readable string.

**Error Handling:** Raises `Exception` if retrieval fails.

---

## set_browser_implicit_wait

Configures the implicit wait for element detection for only the active browser, leaving other browsers unaffected.

**Parameters:**
- `value` (Timedelta, required) — Implicit wait duration as seconds or a human-readable string.

**Returns:** None

**Error Handling:** Raises `Exception` if setting fails.

---

## set_selenium_page_load_timeout

Configures the timeout for page loading in Selenium, returning the previous value for restoration if needed.

**Parameters:**
- `value` (Timedelta, required) — Page load timeout duration as seconds or a human-readable string.

**Returns:** String — The previous page load timeout as a human-readable string.

**Error Handling:** Raises `Exception` if setting fails.

---

## get_web_logs

Captures and saves web browser logs or performance metrics to a file. Fetches browser console logs or performance data depending on the browser type and log category. The collected logs are written to the specified file path. Does not return any value.

**Supported Browsers and Log Types:**
- **Chrome:** `browser` (via WebDriver logs), `performance` (via JavaScript Performance API)
- **Edge:** `browser` (via WebDriver logs), `performance` (via JavaScript Performance API)
- **Firefox:** `browser` NOT supported, `performance` (via JavaScript Performance API)

**Parameters:**
- `log_type` (str, required) — Type of log to capture. Supported values: `"browser"`, `"performance"`.
- `file_path` (str, required) — Absolute or relative path where the logs will be saved. The parent directory must already exist.
- `browser_name` (str, optional) — Browser name override (e.g., `"chrome"`, `"edge"`, `"firefox"`). If not provided, auto-detected from the active WebDriver capabilities.

**Returns:** None

**Error Handling:** Prints an error message if no active WebDriver is available, the target directory does not exist, the requested log type is unsupported by the browser, or log collection/file writing fails. Does NOT raise exceptions — execution continues safely.