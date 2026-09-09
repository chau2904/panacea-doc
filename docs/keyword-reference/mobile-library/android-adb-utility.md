---
title: Android / ADB Utility Keywords
sidebar_position: 7
---

# Android / ADB Utility Keywords

## start_adb_log

Starts capturing ADB logs for a device, filtering only error logs, and writes them to a file.

**Parameters:**
- `udid` (str, required)
- `log_file_path` (str, required)
- `log_level` (str, optional, default `all`)

**Returns:** Popen — The process handle of the ADB logcat process.

**Error Handling:** Raises `Exception` for any other unexpected errors during log capture startup.

---

## stop_adb_log

Stops the ADB log capture process.

**Parameters:**
- `adb_process` (Popen, required)

**Returns:** None

**Error Handling:** Raises `Exception` if stopping fails.

---

## toggle_bluetooth_for_android

Toggles Bluetooth ON/OFF on the specified Android device.

**Parameters:**
- `device_name` (str, required)
- `turn_on` (bool, optional, default `False`)

**Returns:** "enabled" or "disabled"

**Error Handling:** Raises `Exception` on unexpected errors.

---

## turn_on_flight_mode_for_android

Enables Flight Mode on the device by interacting with the notification shade.

**Parameters:**
- `device_name` (str, required)

**Returns:** "enabled" if successful, "disabled" otherwise.

**Error Handling:** Raises `Exception` if toggle not found or stale reference.

---

## turn_off_flight_mode_for_android

Disables Flight Mode on the device via notification shade.

**Parameters:**
- `device_name` (str, required)

**Returns:** "disabled" if successful, "enabled" otherwise.

**Error Handling:** Raises `Exception` if toggle not found or stale reference.

---

## unlock_android_device

Unlocks the device using the provided passcode.

**Parameters:**
- `passcode` (str, optional, default `None`)

**Returns:** None

**Error Handling:** Raises `Exception` if unlock fails.

---

## open_android_activity

Launches a specific Android activity on a device.

**Parameters:**
- `package` (str, required)
- `activity` (str, required)
- `device_id` (str, optional) — UDID or address.

**Returns:** bool — True if launched successfully.

**Error Handling:** Raises `Exception` if launch fails.

---

## open_notifications

Opens and expands the notification drawer.

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if operation fails.

---

## clear_notifications

Clears all notifications from the notification drawer.

**Parameters:**
- `timeout` (int, optional, default `10`) — Max wait for "Clear" button.

**Returns:** None

**Error Handling:** Raises `Exception` on unexpected errors.

---

## open_notifications_and_wait_for_text

Opens notification drawer and waits for a specific notification text.

**Parameters:**
- `notification_text` (str, required)
- `timeout` (int, optional, default `10`)

**Returns:** WebElement or False

**Error Handling:** Raises `Exception` if fails.

---

## get_network_connection_status

Returns bitmask representing the network connection type.

**Parameters:** None

**Returns:** int — Bitmask (0=None, 1=Airplane, 2=Wifi, 4=Data, 6=All).

**Error Handling:** Raises `Exception` if retrieval fails.

---

## set_network_connection_status

Sets the network connection status.

**Parameters:**
- `connection_status` (int, required) — Bitmask.

**Returns:** bool — True if set successfully.

**Error Handling:** Raises `Exception` if setting fails.

---

## pull_file

Retrieves a file and returns its content.

**Parameters:**
- `path` (str, required) — File path on device.
- `decode` (bool, optional, default `False`)

**Returns:** str — File content.

**Error Handling:** Raises `Exception` if retrieval/decoding fails.

---

## pull_folder

Retrieves a folder, returning its zipped contents.

**Parameters:**
- `path` (str, required)
- `decode` (bool, optional, default `False`)

**Returns:** bytes — Zipped folder content.

**Error Handling:** Raises `Exception` if retrieval/decoding fails.

---

## push_file

Puts data into a specified file path on the device.

**Parameters:**
- `path` (str, required) — Destination path.
- `data` (Any, required)
- `encode` (bool, optional, default `False`)

**Returns:** None

**Error Handling:** Raises `Exception` if pushing fails.

---

## delete_file

Deletes a specified file on the device.

**Parameters:**
- `path` (str, required)
- `timeout` (int, optional, default `5000`)
- `include_stderr` (bool, optional, default `True`) — Throw exception on non-zero return code.

**Returns:** None

**Error Handling:** Raises `Exception` if deletion fails.

---

## get_activity

Retrieves the current activity on the device.

**Parameters:** None

**Returns:** str — Current activity name.

**Error Handling:** Raises `Exception` if retrieval fails.

---

## start_activity

Opens an arbitrary activity during a test.

**Parameters:**
- `appPackage` (str, required)
- `appActivity` (str, required)
- `opts` (Any, optional)

**Returns:** None

**Error Handling:** Raises `Exception` if start fails.

---

## wait_activity

Waits for a target activity to appear.

**Parameters:**
- `activity` (str, required)
- `timeout` (int, required)
- `interval` (int, optional, default `1`)

**Returns:** None

**Error Handling:** Raises `TimeoutException` or `Exception` on failure.

---

## install_app

Installs an app and verifies installation.

**Parameters:**
- `app_path` (str, required)
- `app_package` (str, required)

**Returns:** bool — True if installed successfully.

**Error Handling:** Raises `Exception` if installation fails.

---

## set_location

Sets the device location.

**Parameters:**
- `latitude` (float, required)
- `longitude` (float, required)
- `altitude` (float, optional, default `10`)

**Returns:** None

**Error Handling:** Raises `Exception` if setting fails.

---

## unpair_bluetooth_device

Unpairs a Bluetooth device by name.

**Parameters:**
- `paired_device_name` (str, required)
- `device_name` (str, required) — Device model for flow.

**Returns:** bool — True if successful, False otherwise.

**Error Handling:** Raises `Exception` if unpairing fails.

---

## handle_bluetooth_pairing_request

Handles a Bluetooth pairing request by entering a PIN.

**Parameters:**
- `pin` (str, optional, default `None`)

**Returns:** None

**Error Handling:** Raises `Exception` if handling fails.

---

## cancel_bluetooth_pairing_request

Cancels a Bluetooth pairing request.

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if canceling fails.

---

## get_battery_percentage

Retrieves the battery percentage for a device.

**Parameters:**
- `device_udid` (str, required)

**Returns:** Optional[int] — Battery % or None.

**Error Handling:** Raises `Exception` if retrieval fails.

---

## get_current_directory

Returns directory path of current script.

**Parameters:** None

**Returns:** Path — Directory path.

**Error Handling:** Raises `Exception` if retrieval fails.

---

## update_meta_data

Updates metadata from a JSON file.

**Parameters:**
- `device_key` (str, required)
- `device_details_path` (str, required)
- `meta_data_path` (str, required)

**Returns:** dict — Updated metadata.

**Error Handling:** Raises `Exception` if JSON read/write fails.

---

## stop_battery_charging

Stops battery charging for a device via ADB.

**Parameters:**
- `udid` (str, required)

**Returns:** None

**Error Handling:** Raises `Exception` if ADB command fails.

---

## reset_battery_status

Resets battery status to default via ADB.

**Parameters:**
- `udid` (str, required)

**Returns:** None

**Error Handling:** Raises `Exception` if ADB command fails.

---

## get_wifi_status

Retrieves Wi-Fi status of the device.

**Parameters:** None

**Returns:** Optional[str] — "enabled"/"disabled"/None.

**Error Handling:** Raises `Exception` if retrieval fails.

---

## turn_on_screen

Turns on the device screen via ADB.

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if command fails.

---

## start_remote_adb_log

Starts remote ADB log capture via SSH.

**Parameters:**
- `appium_url` (str, required)
- `username` (str, required)
- `udid` (str, required)
- `remote_log_file_path` (str, required)
- `local_report_dir` (str, required)
- `key_file` (str, optional)
- `password` (str, optional)

**Returns:** SSHClient — SSH client instance.

**Error Handling:** Raises `Exception` on startup errors.

---

## stop_remote_adb_log

Stops remote ADB log capture and transfers logs.

**Parameters:**
- `appium_url` (str, required)
- `username` (str, required)
- `udid` (str, required)
- `remote_log_file_path` (str, required)
- `local_report_dir` (str, required)
- `key_file` (str, optional)
- `password` (str, optional)

**Returns:** None

**Error Handling:** Raises `Exception` on stop or transfer errors.

---

## handle_android_popup

Handles an Android popup with optional input.

**Parameters:**
- `text` (str, required) — Popup text.
- `input_text` (str, optional, default `None`)

**Returns:** None

**Error Handling:** Raises `Exception` if handling fails.

---

## get_current_epoch_time

Retrieves current epoch time in seconds.

**Parameters:** None

**Returns:** int — Epoch time.

**Error Handling:** Raises `Exception` if retrieval fails.

---

## set_sound_mode

Sets the sound mode (silent, vibrate, normal).

**Parameters:**
- `mode` (str, required)

**Returns:** None

**Error Handling:** Raises `Exception` if setting fails.

---

## verify_opened_pdf_name

Verifies the opened PDF name matches expected.

**Parameters:**
- `expected_pdf_name` (str, required)
- `loglevel` (str, optional, default `INFO`)

**Returns:** None

**Error Handling:** Raises `Exception` if verification/logging fails.

---

## press_device_back_button

Presses the device back button via ADB.

**Parameters:**
- `udid` (str, required)

**Returns:** None

**Error Handling:** Raises `Exception` if command fails.