---
title: WebDriverAgent (WDA)
sidebar_position: 6
---

# WebDriverAgent (WDA)

## start_wda

Wrapper to start WebDriverAgent (WDA) for multiple devices locally.

**Parameters:**
- `project_path` (str, required) — Path to the WDA Xcode project.
- `device_names` (Union[str, List[str]], required)
- `udids` (Union[str, List[str]], required)
- `ports` (Union[int, List[int]], required)
- `log_file_path` (str, required)

**Returns:** Dict[str, any] — Mapping of device name to process instance.

**Error Handling:** Raises `Exception` if starting multiple WDA instances fails.

---

## stop_wda

Wrapper to stop a running WDA instance for a specific device locally.

**Parameters:**
- `wda_processes` (Dict[str, any], required)
- `device_name` (str, required)

**Returns:** None

**Error Handling:** Raises `Exception` if stopping WDA for the device fails.

---

## start_wda_on_remote_machine

Starts WDA for multiple devices on a remote machine via SSH.

**Parameters:**
- `project_path` (str, required) — Remote WDA project path.
- `device_names` (List[str], required)
- `udids` (List[str], required)
- `ports` (List[int], required)
- `appium_url` (str, required)
- `username` (str, required)
- `key_file` (Optional[str], optional, default `None`)
- `password` (Optional[str], optional, default `None`)

**Returns:** Dict[str, any] — Process info for each device.

**Error Handling:** Raises `Exception` if starting remote WDA instances fails.

---

## stop_wda_on_remote_machine

Stops a remote WDA instance for a specific device by connecting via SSH and killing the WDA process.

**Parameters:**
- `wda_processes` (Dict[str, any], required)
- `device_name` (str, required)
- `appium_url` (str, required)
- `username` (str, required)
- `key_file` (Optional[str], optional, default `None`)
- `password` (Optional[str], optional, default `None`)

**Returns:** None

**Error Handling:** Raises `Exception` if stopping remote WDA fails.