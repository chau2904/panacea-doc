---
title: ScreenRecordTestLibrary
sidebar_position: 12
---

# ScreenRecordTestLibrary

## start_screen_recording

Starts continuous screen recording on the Android device using ADB.

**Parameters:**
- `report_dir` (str, required) — Directory to store recording chunks and final video.
- `udid` (str, optional, default `None`)

**Returns:** None

**Error Handling:** Raises `Exception` if recording thread fails to start.

---

## stop_screen_recording

Stops recording, merges recorded chunks, compresses the final video, and performs cleanup.

**Parameters:**
- `udid` (str, required) — Device UDID to stop the corresponding recording session.

**Returns:** str — Path to the merged and compressed video file.

**Error Handling:** Raises `Exception` if stopping or merging fails.