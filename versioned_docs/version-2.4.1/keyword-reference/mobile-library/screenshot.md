---
title: ScreenShotTestLibrary
sidebar_position: 13
---

# ScreenShotTestLibrary

## capture_page_screenshot

Takes a screenshot of the current page and embeds it into the Robot log. If filename is provided, saves it to the file and links it in the log. If not, embeds directly as a Base64 image without saving.

**Parameters:**
- `filename` (str, optional, default `None`)

**Returns:** Optional[str] — File path if saved; None if only embedded in log.

**Error Handling:** Raises `Exception` for unexpected failures.