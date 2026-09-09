---
title: iOS Keyword Library
sidebar_position: 3
---

# iOS Keyword Library

## turn_off_flight_mode_for_ios

Turns off Flight Mode (Airplane Mode) on an iOS device using system preferences.

**Parameters:** None

**Returns:** str — "disabled" if flight mode was successfully turned off, otherwise "enabled".

**Error Handling:** Raises `Exception` if turning off flight mode fails due to UI issues, element not found, or Appium failure.

---

## turn_on_flight_mode_for_ios

Turns on Flight Mode (Airplane Mode) on an iOS device using system preferences.

**Parameters:** None

**Returns:** str — "enabled" if airplane mode was successfully turned on, otherwise "disabled".

**Error Handling:** Raises `Exception` if enabling flight mode fails due to element lookup failure, system delays, or UI issues.

---

## turn_on_bluetooth_for_ios

Enables Bluetooth on an iOS device via system preferences.

**Parameters:** None

**Returns:** str — "enabled" if Bluetooth is turned on or already enabled, otherwise "disabled".

**Error Handling:** Raises `Exception` if Bluetooth option cannot be found or mobile driver interaction fails.

---

## turn_off_bluetooth_for_ios

Disables Bluetooth on an iOS device via system preferences.

**Parameters:** None

**Returns:** str — "disabled" if Bluetooth is turned off or already disabled, otherwise "enabled".

**Error Handling:** Raises `Exception` if Bluetooth option cannot be found or mobile driver interaction fails.

---

## unpair_bluetooth_device_iOS

Unpairs (forgets) a specified Bluetooth device from iOS Bluetooth settings.

**Parameters:**
- `controller_name` (str, required) — The exact name of the Bluetooth device to unpair.

**Returns:** None

**Error Handling:** Raises `Exception` if Bluetooth device is not found or driver interaction fails.

---

## handle_alerts_except_bluetooth

Handles all iOS system alerts except Bluetooth pairing requests, which are handled by entering the provided PIN.

**Parameters:**
- `pin` (str, required)

**Returns:** None

**Error Handling:** Raises `Exception` for unexpected errors while handling alerts.

---

## handle_bluetooth_pairing_request_iOS

Handles Bluetooth pairing request alert by entering the provided PIN and confirming the pairing.

**Parameters:**
- `pin` (str, optional, default `None`)

**Returns:** None

**Error Handling:** Raises `Exception` if the PIN entry field or Pair button is not found or driver error occurs.

---

## toggle_bluetooth_iOS

Toggles the Bluetooth state on an iOS device by opening the Control Center and clicking the Bluetooth toggle switch.

**Parameters:** None

**Returns:** bool — True if the toggle action was performed successfully, False otherwise.

**Error Handling:** Raises `Exception` if error occurs while opening Control Center or toggling Bluetooth.

---

## tap_unpair

Taps the 'Unpair' button identified by a locator in iOS Bluetooth settings.

**Parameters:**
- `locator` (str, required) — Locator string using IOS_CLASS_CHAIN.

**Returns:** bool — True if the unpair button was found and clicked, False otherwise.

**Error Handling:** Raises `Exception` for errors during locating or clicking.

---

## unlock_ios_device

Unlocks an iOS device by waking the screen, swiping up, and entering the device passcode if required.

**Parameters:**
- `passcode` (str, optional, default `None`) — e.g. "1234".

**Returns:** None

**Error Handling:** Raises `Exception` if passcode buttons are not found or for other unlocking errors.

---

## get_ios_battery_life

Retrieves the current battery percentage of the connected iOS device.

**Parameters:** None

**Returns:** Union[int, str] — Battery percentage, or a string message if battery info is unavailable.

**Error Handling:** Raises `Exception` if retrieving battery information fails.

---

## start_ios_log

Starts capturing iOS system logs and writes them to a specified file path.

**Parameters:**
- `log_file_path` (str, required)

**Returns:** subprocess.Popen — The process handle for the running `idevicesyslog` command.

**Error Handling:** Raises `Exception` if the `idevicesyslog` executable is not found or for other errors during log capturing.

---

## stop_ios_log

Stops the running iOS system log capture process.

**Parameters:**
- `syslog_process` (subprocess.Popen, required)

**Returns:** None

**Error Handling:** Raises `Exception` if stopping the log process fails.

---

## lock_device

Locks the iOS device for a specified duration or indefinitely if none provided.

**Parameters:**
- `duration` (int, optional, default `None`) — Indefinite lock if not provided.

**Returns:** None

**Error Handling:** Raises `Exception` if locking fails or Appium driver is uninitialized.

---

## start_remote_ios_log

Starts capturing iOS logs on a remote machine via SSH and writes to a specified remote path.

**Parameters:**
- `server_url` (str, required)
- `username` (str, required)
- `log_file_path` (str, required)
- `key_file` (str, optional, default `None`)
- `password` (str, optional, default `None`)
- `local_log_path` (str, optional, default `None`)

**Returns:** bool — True if log capture started successfully.

**Error Handling:** Raises `Exception` for SSH connection-related errors or other unexpected errors during the remote log capture start.

---

## stop_remote_ios_log

Stops iOS log capture on a remote machine via SSH and optionally transfers logs locally.

**Parameters:**
- `server_url` (str, required)
- `username` (str, required)
- `remote_log_path` (str, required)
- `key_file` (str, optional, default `None`)
- `password` (str, optional, default `None`)
- `local_log_path` (str, optional, default `None`)

**Returns:** None

**Error Handling:** Raises `Exception` for SSH connection errors, stopping issues, or transfer failures.

---

## start_ios_console_log

Starts iOS console log collection by recording start time and preparing the environment.

**Parameters:**
- `log_archive_path` (str, required)
- `udid` (str, optional)

**Returns:** Tuple[str, str, str] — (udid, start_time, log_path).

**Error Handling:** Raises `Exception` if log preparation fails.

---

## stop_ios_console_log

Stops console log collection, parses logs into human-readable format, and optionally deletes the raw archive.

**Parameters:**
- `start_info` (Tuple[str, str, str], required) — From `start_ios_console_log`.
- `log_archive_path` (str, required)
- `output_txt_path` (str, required)
- `delete_logarchive` (bool, optional, default `True`)

**Returns:** None

**Error Handling:** Raises `Exception` if subprocess fails, or parsing/file operations fail.

---

## disable_Wifi_on_ios

Disables Wi-Fi on an iOS device via Settings.

**Parameters:** None

**Returns:** str — "disabled" if Wi-Fi turned off, "enabled" otherwise.

**Error Handling:** Raises `Exception` if interacting with Wi-Fi toggle fails.

---

## enable_Wifi_on_ios

Enables Wi-Fi on an iOS device via Settings.

**Parameters:** None

**Returns:** str — "enabled" if Wi-Fi turned on, "disabled" otherwise.

**Error Handling:** Raises `Exception` if interacting with Wi-Fi toggle fails.