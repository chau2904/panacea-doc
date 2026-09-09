---
title: DeviceTestLibrary
sidebar_position: 1
---

# DeviceTestLibrary

## Get Devices

Returns a dictionary of all available Playwright device descriptors. Each key is a device name (e.g., iPhone X, Pixel 5), and each value is a descriptor dictionary containing viewport size, user agent, device scale factor, and other browser context settings.

**Parameters:** None

**Returns:** Dictionary — A dictionary of all Playwright device descriptors keyed by device name.

**Error Handling:** Raises `Exception` if retrieving the device list fails.

---

## Get Device

Returns a single Playwright device descriptor matching the specified device name exactly. The returned descriptor can be unpacked directly into a browser context configuration to emulate the selected device.

**Parameters:**
- `name` (String, required) — Exact name of the device to retrieve (e.g., iPhone X, Pixel 5, iPad Pro 11).

**Returns:** Dictionary — The Playwright device descriptor for the specified device.

**Error Handling:** Raises `Exception` if the device name is not found or retrieval fails.