---
title: ScreenShotTestLibrary
sidebar_position: 13
---

# ScreenShotTestLibrary

## set_screenshot_directory

Chooses a folder for saving screenshots or sets them to appear in the test log. If the folder doesn't exist, it's created. Use `'EMBED'` to add screenshots to the log or `'NONE'` for the default folder.

**Parameters:**
- `path` (Union[None, String], optional) — The folder path for screenshots, `'EMBED'` to add to the log, or `'NONE'` for the default folder.

**Returns:** String — The folder that was previously set, or `None` if no folder was set before.

**Error Handling:** Raises `Exception` if setting the folder fails.

---

## capture_page_screenshot

Saves a screenshot of the current webpage to a file or adds it to the test log. The file name can be customized or set to a default with automatic numbering.

**Parameters:**
- `filename` (String, optional, default `"selenium-screenshot-{index}.png"`) — The name of the screenshot file (e.g., 'my-page.png') or `'EMBED'` to add to the log.

**Returns:** String — The path to the saved screenshot file or `'EMBED'` if added to the log.

**Error Handling:** Raises `Exception` if taking the screenshot fails.

---

## capture_element_screenshot

Saves a screenshot of a chosen webpage element, like a button or image, to a file or adds it to the test log. The file name can be customized or set to a default with automatic numbering.

**Parameters:**
- `locator` (Union[WebElement, None, String], required) — The identifier for the element (e.g., 'id=header', '//h1') or a WebElement object.
- `filename` (String, optional, default `"selenium-element-screenshot-{index}.png"`) — The name of the screenshot file (e.g., 'element.png') or `'EMBED'` to add to the log.

**Returns:** String — The path to the saved screenshot file or `'EMBED'` if added to the log.

**Error Handling:** Raises `Exception` if taking the screenshot fails.