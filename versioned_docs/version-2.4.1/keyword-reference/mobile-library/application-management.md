---
title: Application Management Keyword Reference
sidebar_position: 1
---

# Application Management Keyword Reference

## open_application

Opens a new application on the given Appium server with the provided desired capabilities. *(Android and iOS)*

**Parameters:**
- `remote_url` (str, required) — The Appium server URL (e.g., `http://localhost:4723/wd/hub`).
- `alias` (str, optional, default `None`) — An alias for this application session.
- `kwargs` (Any, optional) — Additional desired capabilities (e.g., `platformName`, `deviceName`, `app`, `appPackage`, `appActivity`, `strict_ssl`).

**Returns:** str — A reference (session alias or ID) to the opened application session.

**Error Handling:** Raises `Exception` if the application fails to start or if Appium capabilities are invalid.

---

## background_application

Sends the currently active application to the background for a specified duration. *(Android and iOS)*

**Parameters:**
- `seconds` (int, optional, default `5`)

**Returns:** None

**Error Handling:** Raises `Exception` if the application fails to go into the background.

---

## activate_application

Brings the specified application to the foreground. *(Android and iOS)*

**Parameters:**
- `app_id` (str, required) — The package name (Android) or bundle ID (iOS).

**Returns:** None

**Error Handling:** Raises `Exception` if the application fails to activate.

---

## terminate_application

Terminates the specified application running on the device. *(Android and iOS)*

**Parameters:**
- `app_id` (str, required)

**Returns:** bool — True if app was terminated successfully, False otherwise.

**Error Handling:** Raises `Exception` if the application fails to terminate.

---

## close_application

Closes the specified application session on the device. *(Android and iOS)*

**Parameters:** None

**Returns:** bool — True if the session was closed successfully, False otherwise.

**Error Handling:** Raises `Exception` if the application session fails to close.

---

## close_all_applications

Closes all open application sessions on the device. *(Android and iOS)*

**Parameters:** None

**Returns:** bool — True if all sessions closed successfully, False otherwise.

**Error Handling:** Raises `Exception` if closing all sessions fails.

---

## get_appium_timeout

Retrieves the timeout in seconds used by various keywords. *(Android and iOS)*

**Parameters:** None

**Returns:** str — Current timeout value (e.g., "5 seconds").

**Error Handling:** Raises `Exception` if the timeout value cannot be retrieved.

---

## set_appium_timeout

Sets the timeout in seconds used by various keywords. *(Android and iOS)*

**Parameters:**
- `seconds` (Union[str, int], required)

**Returns:** str — The previous timeout value.

**Error Handling:** Raises `Exception` if the timeout value cannot be set.

---

## get_appium_sessionId

Retrieves the current Appium session ID. *(Android and iOS)*

**Parameters:** None

**Returns:** str — The current Appium session ID.

**Error Handling:** Raises `Exception` if the session ID cannot be retrieved.

---

## switch_application

Switches the active application by index or alias. *(Android and iOS)*

**Parameters:**
- `index_or_alias` (Union[int, str], required)

**Returns:** int — Index of the previous active application.

**Error Handling:** Raises `Exception` if switching fails due to invalid index/alias or driver issues.

---

## remove_application

Removes the application identified by the given application ID. *(Android and iOS)*

**Parameters:**
- `application_id` (str, required)

**Returns:** None

**Error Handling:** Raises `Exception` if removing the application fails due to driver issues.

---

## get_source

Returns the entire source of the current page. *(Android and iOS)*

**Parameters:** None

**Returns:** str — The page source of the current application.

**Error Handling:** Raises `Exception` if retrieving the page source fails due to driver issues.

---

## log_source

Logs and returns the entire HTML source of the current page or frame. *(Android and iOS)*

**Parameters:**
- `loglevel` (str, optional, default `INFO`) — `WARN`, `INFO`, `DEBUG`, `TRACE`, `NONE`.

**Returns:** str — The page source if logged, empty string if loglevel is `NONE`.

**Error Handling:** Raises `Exception` if logging or retrieving the page source fails due to driver issues.

---

## execute_script

Executes native/mobile commands not associated with a specific endpoint. *(Android and iOS)*

**Parameters:**
- `script` (str, required) — e.g. `'mobile: scrollGesture'`.
- `kwargs` (Any, optional)

**Returns:** Any — Result of the executed script (depends on command).

**Error Handling:** Raises `Exception` if executing fails due to driver issues or invalid arguments.

---

## execute_async_script

Injects async JavaScript into the page for execution in the current frame. *(Web only)*

**Parameters:**
- `script` (str, required)
- `kwargs` (Any, optional)

**Returns:** Any — Value returned by the callback in the executed script.

**Error Handling:** Raises `Exception` if executing async script fails due to driver issues or invalid arguments.

---

## execute_adb_shell

Executes ADB shell commands on an Android device. *(Android only)*

**Parameters:**
- `command` (str, required)
- `args` (str, optional)

**Returns:** Any — Exit code or result of the command.

**Error Handling:** Raises `Exception` if command fails due to driver issues or Appium restrictions.

---

## execute_adb_shell_timeout

Executes ADB shell commands with a specified timeout. *(Android only)*

**Parameters:**
- `command` (str, required)
- `timeout` (int, required) — In milliseconds.
- `args` (str, optional)

**Returns:** Any — Exit code or result of the command.

**Error Handling:** Raises `Exception` if command fails due to driver issues, timeout, or Appium restrictions.

---

## go_back

Goes one step backward in the browser history.

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if navigating back fails due to driver issues.

---

## Lock

Locks the device for a specified period of time. *(iOS only)*

**Parameters:**
- `seconds` (Union[int, str], optional, default `5`)

**Returns:** None

**Error Handling:** Raises `Exception` if locking fails due to driver issues or invalid duration.

---

## stop_application

Stops the given app on the device. *(Android only)*

**Parameters:**
- `app_id` (str, required)
- `timeout` (int, optional, default `5000`)
- `include_stderr` (bool, optional, default `True`)

**Returns:** None

**Error Handling:** Raises `Exception` if stopping app fails due to driver issues or command errors.

---

## touch_id

Simulates Touch ID on iOS Simulator. *(iOS only)*

**Parameters:**
- `match` (bool, optional, default `True`)

**Returns:** None

**Error Handling:** Raises `Exception` if simulating Touch ID fails due to driver issues.

---

## toggle_touch_id_enrollment

Toggles the Touch ID enrolled state on iOS Simulator. *(iOS only)*

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if toggling Touch ID enrollment fails due to driver issues.

---

## Shake

Shakes the device. *(Android and iOS)*

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if shaking the device fails due to driver issues.

---

## Portrait

Sets device orientation to PORTRAIT. *(Android and iOS)*

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if setting orientation fails due to driver issues.

---

## Landscape

Sets device orientation to LANDSCAPE. *(Android and iOS)*

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if setting orientation fails due to driver issues.

---

## get_current_context

Gets the current context. *(Android and iOS)*

**Parameters:** None

**Returns:** str — Current context of the application.

**Error Handling:** Raises `Exception` if retrieving context fails due to driver issues.

---

## get_contexts

Gets the available contexts. *(Android and iOS)*

**Parameters:** None

**Returns:** List[str] — Available contexts for the application.

**Error Handling:** Raises `Exception` if retrieving contexts fails due to driver issues.

---

## get_window_height

Gets the current device height. *(Android and iOS)*

**Parameters:** None

**Returns:** int — Height of the current window in pixels.

**Error Handling:** Raises `Exception` if retrieving window height fails due to driver issues.

---

## get_window_width

Gets the current device width. *(Android and iOS)*

**Parameters:** None

**Returns:** int — Width of the current window in pixels.

**Error Handling:** Raises `Exception` if retrieving window width fails due to driver issues.

---

## switch_to_context

Switches to a new context. *(Android and iOS)*

**Parameters:**
- `context_name` (str, required)

**Returns:** None

**Error Handling:** Raises `Exception` if switching fails due to driver issues or invalid context name.

---

## switch_to_frame

Switches focus to the specified frame (index, name, or WebElement). *(Android and iOS)*

**Parameters:**
- `frame` (Union[int, str, WebElement], required)

**Returns:** None

**Error Handling:** Raises `Exception` if switching to the frame fails due to driver issues or invalid frame.

---

## switch_to_parent_frame

Switches focus to the parent frame of the current context. *(Android and iOS)*

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if switching fails due to driver issues or invalid context.

---

## switch_to_window

Switches focus to a specified window or webview. *(Android and iOS)*

**Parameters:**
- `window_name` (str, required)

**Returns:** None

**Error Handling:** Raises `Exception` if the window name is invalid or switching fails.

---

## go_to_url

Opens the specified URL in the active browser session. *(Android and iOS)*

**Parameters:**
- `url` (str, required)

**Returns:** None

**Error Handling:** Raises `Exception` if the URL cannot be opened or the session is not browser-capable.

---

## get_capability

Returns the value of a specific desired capability from the current session. *(Android and iOS)*

**Parameters:**
- `capability_name` (str, required) — e.g. `platformName`, `deviceName`.

**Returns:** str — Value of the specified capability.

**Error Handling:** Raises `Exception` if capability is not found or session is invalid.

---

## get_window_title

Returns the title of the current WebView window. *(Android and iOS)*

**Parameters:** None

**Returns:** str — Title of the current window.

**Error Handling:** Raises `Exception` if title cannot be retrieved due to driver or session issues.

---

## get_window_url

Returns the URL of the current WebView window. *(Android and iOS)*

**Parameters:** None

**Returns:** str — Current URL.

**Error Handling:** Raises `Exception` if URL cannot be retrieved due to driver or session issues.

---

## get_windows

Returns a list of available WebView window handles. *(Android and iOS)*

**Parameters:** None

**Returns:** List[str] — List of available window handles.

**Error Handling:** Raises `Exception` if window handles cannot be retrieved.