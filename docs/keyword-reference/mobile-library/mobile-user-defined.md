---
title: MobileUserDefinedKeywordTestLibrary
sidebar_position: 10
---

# MobileUserDefinedKeywordTestLibrary

## get_text_from_index

Extracts a substring from the given text between startIndex and lastIndex.

**Parameters:**
- `txt` (str, required) — Source string.
- `startIndex` (Union[int, str], required)
- `lastIndex` (Union[int, str], required) — Ending index (exclusive).

**Returns:** str — Extracted substring.

**Error Handling:** Raises `Exception` if slicing fails.

---

## get_text_from_startindex

Extracts a substring from the given text starting at startIndex to the end.

**Parameters:**
- `txt` (str, required)
- `startIndex` (Union[int, str], required)

**Returns:** str — Extracted substring.

**Error Handling:** Raises `Exception` if slicing fails.

---

## launch_camera_app

Launches the camera application on an Android device using an ADB shell command.

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if launching the app fails.