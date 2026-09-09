---
title: Appium Service Management Keywords
sidebar_position: 8
---

# Appium Service Management Keywords

## start_appium_service

Start the Appium service with the specified log folder path and server URL.

**Parameters:**
- `appiumLogFolderPath` (str, optional, default empty string)
- `server_url` (str, optional, default `http://127.0.0.1:4723`)

**Returns:** str — URL of running Appium server.

**Error Handling:** Raises `Exception` if Appium fails to start or parameters are invalid.

---

## stop_appium_service

Stop the currently running Appium service. Logs a message if no service is active.

**Parameters:**
- `appium_url` (str, optional)

**Returns:** None

**Error Handling:** Raises `Exception` if Appium fails to stop.

---

## keep_appium_session_alive

Keeps the Appium session alive by performing periodic interactions for a specified duration.

**Parameters:**
- `duration_seconds` (int/str, required)
- `interaction_interval` (int, optional, default `10`)

**Returns:** None

**Error Handling:** Raises `Exception` if an error occurs during interaction.

---

## stop_remote_appium_service_iOS

Stops Appium on a remote macOS machine via SSH and transfers logs locally.

**Parameters:**
- `appium_url` (str, required)
- `username` (str, required)
- `key_file` (str, optional)
- `password` (str, optional)
- `local_log_path` (str, optional)
- `remote_log_path` (str, optional)

**Returns:** None

**Error Handling:** Raises `Exception` if Appium fails to stop or SSH/log transfer fails.

---

## start_remote_appium_service_iOS

Starts Appium on a remote macOS machine via SSH and transfers logs to the local system after a delay.

**Parameters:**
- `appium_url` (str, required)
- `username` (str, required)
- `log_file_path` (str, required)
- `key_file` (str, optional)
- `password` (str, optional)
- `local_log_path` (str, optional)

**Returns:** str — URL of started Appium server.

**Error Handling:** Raises `Exception` if Appium fails to start or SSH/log transfer fails.

---

## start_remote_appium_service_android

Starts Appium on a remote Windows machine via SSH and transfers logs to the local system after a delay.

**Parameters:**
- `appium_url` (str, required)
- `username` (str, required)
- `log_file_path` (str, required)
- `key_file` (str, optional)
- `password` (str, optional)
- `local_log_path` (str, optional)

**Returns:** str — URL of started Appium server.

**Error Handling:** Raises `Exception` if Appium fails to start or SSH/log transfer fails.

---

## stop_remote_appium_service_android

Stops Appium on a remote Windows machine via SSH and transfers logs locally.

**Parameters:**
- `appium_url` (str, required)
- `username` (str, required)
- `key_file` (str, optional)
- `password` (str, optional)
- `local_log_path` (str, optional)
- `remote_log_path` (str, optional)

**Returns:** None

**Error Handling:** Raises `Exception` if Appium fails to stop or SSH/log transfer fails.