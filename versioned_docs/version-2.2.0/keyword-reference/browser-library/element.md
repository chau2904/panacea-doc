---
title: ElementTestLibrary
sidebar_position: 4
---

# ElementTestLibrary

## get_webelement

Pulls the first matching WebElement for further interaction or inspection in a "pull then push" workflow, such as clicking or inputting text.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator (e.g., 'id=username', 'css=.button') or a WebElement object.

**Returns:** WebElement — The first Selenium WebElement matching the locator.

**Error Handling:** Raises `Exception` if no element is found or retrieving it fails, with a message indicating the failure reason.

---

## get_webelements

Pulls a list of matching WebElements for batch operations, such as iterating for clicks or text extraction in a "pull then push" workflow. Returns an empty list if no elements are found.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator (e.g., 'css=.item', 'xpath=//div') or a WebElement object.

**Returns:** List[WebElement] — A list of matching Selenium WebElements, or empty if none found.

**Error Handling:** Raises `Exception` if retrieving elements fails, with a message indicating the failure reason.

---

## element_should_contain

Checks if the element's text includes the expected substring, useful for verification before actions like clicking in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to check.
- `expected` (String, required) — The substring expected in the element's text.
- `message` (String, optional, default `None`) — Custom error message if verification fails.
- `ignore_case` (Bool, optional, default `False`) — If True, performs case-insensitive comparison.

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or verification fails, with a message indicating the failure reason.

---

## element_should_not_contain

Ensures the element's text does not include the specified substring, useful for validation before further actions in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to check.
- `expected` (String, required) — The substring that should not be in the element's text.
- `message` (String, optional, default `None`) — Custom error message if verification fails.
- `ignore_case` (Bool, optional, default `False`) — If True, performs case-insensitive comparison.

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or verification fails, with a message indicating the failure reason.

---

## page_should_contain

Checks if the page's content includes the given text, logging the page source at the specified level if verification fails. Useful before actions like clicking in a "pull then push" workflow.

**Parameters:**
- `text` (String, required) — The text expected on the page.
- `loglevel` (String, optional, default `"TRACE"`) — Log level for page source if verification fails (e.g., 'TRACE', 'DEBUG', 'INFO', 'WARN', 'NONE').

**Returns:** None

**Error Handling:** Raises `Exception` if accessing the page fails, with a message indicating the failure reason.

---

## page_should_contain_element

Confirms the presence of an element, optionally checking for an exact number of matches. Useful for validation before actions like clicking in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to check.
- `message` (String, optional, default `None`) — Custom error message if verification fails.
- `loglevel` (String, optional, default `"TRACE"`) — Log level for page source if verification fails.
- `limit` (Integer, optional, default `None`) — Expected number of matching elements (one or more if not specified).

**Returns:** None

**Error Handling:** Raises `Exception` if verification fails, with a message indicating the failure reason.

---

## page_should_not_contain

Ensures the page's content does not include the given text, logging the page source if verification fails. Useful before further actions in a "pull then push" workflow.

**Parameters:**
- `text` (String, required) — The text that should not be on the page.
- `loglevel` (String, optional, default `"TRACE"`) — Log level for page source if verification fails.

**Returns:** None

**Error Handling:** Raises `Exception` if accessing the page fails, with a message indicating the failure reason.

---

## page_should_not_contain_element

Confirms the absence of an element, useful for ensuring a clean state before actions in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to check.
- `message` (String, optional, default `None`) — Custom error message if verification fails.
- `loglevel` (String, optional, default `"TRACE"`) — Log level for page source if verification fails.

**Returns:** None

**Error Handling:** Raises `Exception` if verification fails, with a message indicating the failure reason.

---

## assign_id_to_element

Sets a temporary ID for an element to simplify subsequent locators in a "pull then push" workflow. The ID expires on page reload.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to assign the ID.
- `id` (String, required) — The temporary ID to assign.

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or assigning the ID fails, with a message indicating the failure reason.

---

## element_should_be_disabled

Confirms that an element (e.g., button, input) is disabled or read-only, useful for state validation before actions in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to check.

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or verification fails, with a message indicating the failure reason.

---

## element_should_be_enabled

Confirms that an element (e.g., button, input) is enabled and not read-only, useful for state validation before actions like clicking in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to check.

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or verification fails, with a message indicating the failure reason.

---

## element_should_be_focused

Checks if an element (e.g., input field) currently has focus, useful before actions like key input in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to check.

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or verification fails, with a message indicating the failure reason.

---

## element_should_be_visible

Confirms that an element is visible on the page, useful before actions like clicking or inputting text in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to check.
- `message` (String, optional, default `None`) — Custom error message if verification fails.

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or verification fails, with a message indicating the failure reason.

---

## element_should_not_be_visible

Ensures an element is hidden, useful for confirming state before further actions in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to check.
- `message` (String, optional, default `None`) — Custom error message if verification fails.

**Returns:** None

**Error Handling:** Raises `Exception` if verification fails, with a message indicating the failure reason.

---

## element_text_should_be

Confirms that an element's text is exactly as specified, useful for validation before actions like inputting text in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to check.
- `expected` (String, required) — The exact text expected in the element.
- `message` (String, optional, default `None`) — Custom error message if verification fails.
- `ignore_case` (Bool, optional, default `False`) — If True, performs case-insensitive comparison.

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or verification fails, with a message indicating the failure reason.

---

## element_text_should_not_be

Ensures an element's text is not exactly the specified value, useful for validation before further actions in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to check.
- `not_expected` (String, required) — The text that should not be in the element.
- `message` (String, optional, default `None`) — Custom error message if verification fails.
- `ignore_case` (Bool, optional, default `False`) — If True, performs case-insensitive comparison.

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or verification fails, with a message indicating the failure reason.

---

## get_element_attribute

Pulls the value of an element's attribute (e.g., 'id', 'href') for inspection or verification in a "pull then push" workflow, often before clicking or other actions.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to check.
- `attribute` (String, required) — The name of the attribute to retrieve (e.g., 'id', 'class', 'value').

**Returns:** String — The value of the requested attribute, or empty string if not present.

**Error Handling:** Raises `Exception` if the element cannot be found or the attribute cannot be retrieved, with a message indicating the failure reason.

---

## element_attribute_value_should_be

Confirms that an element's attribute matches the expected value, useful for validation before actions in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to check.
- `attribute` (String, required) — The attribute name to check (e.g., 'src', 'value').
- `expected` (String, required) — The expected value of the attribute.
- `message` (String, optional, default `None`) — Custom error message if verification fails.

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or verification fails, with a message indicating the failure reason.

---

## get_horizontal_position

Pulls the X-coordinate (in pixels) of an element relative to the page's left edge, useful for positioning checks before actions like clicking at coordinates.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to check.

**Returns:** Integer — The X-coordinate in pixels.

**Error Handling:** Raises `Exception` if the element cannot be found or its position cannot be retrieved, with a message indicating the failure reason.

---

## get_element_size

Pulls the dimensions (width and height in pixels) of an element for layout verification, useful before actions like resizing or dragging.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to check.

**Returns:** Tuple[Integer, Integer] — A tuple containing the width and height in pixels.

**Error Handling:** Raises `Exception` if the element cannot be found or its size cannot be retrieved, with a message indicating the failure reason.

---

## cover_element

Applies a visual overlay to an element, useful for highlighting or testing visibility in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to cover.

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or covering fails, with a message indicating the failure reason.

---

## get_value

Pulls the value attribute (e.g., from an input field) for inspection or verification in a "pull then push" workflow, often before clearing or inputting text.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to check.

**Returns:** String — The value attribute of the element, or empty string if not present.

**Error Handling:** Raises `Exception` if the element cannot be found or the value cannot be retrieved, with a message indicating the failure reason.

---

## get_text

Pulls the visible text content of an element for inspection or verification, useful before actions like clicking or inputting text in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to check.

**Returns:** String — The visible text of the element, or empty string if none.

**Error Handling:** Raises `Exception` if the element cannot be found or the text cannot be retrieved, with a message indicating the failure reason.

---

## clear_element_text

Removes the text from an input element, useful after pulling the current value in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to clear.

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or clearing fails, with a message indicating the failure reason.

---

## get_vertical_position

Pulls the Y-coordinate (in pixels) of an element relative to the page's top edge, useful for positioning checks before actions like clicking at coordinates.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to check.

**Returns:** Integer — The Y-coordinate in pixels.

**Error Handling:** Raises `Exception` if the element cannot be found or its position cannot be retrieved, with a message indicating the failure reason.

---

## click_button

Performs a click action on a button, often used after verifying its state in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement of the button.
- `modifier` (Union[Bool, String], optional, default `False`) — Optional Selenium key modifiers (e.g., 'CTRL', 'ALT').

**Returns:** None

**Error Handling:** Raises `Exception` if the button cannot be found or clicking fails, with a message indicating the failure reason.

---

## click_image

Performs a click action on an image, often used after verifying its presence in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement of the image.
- `modifier` (Union[Bool, String], optional, default `False`) — Optional Selenium key modifiers.

**Returns:** None

**Error Handling:** Raises `Exception` if the image cannot be found or clicking fails, with a message indicating the failure reason.

---

## click_link

Performs a click action on a link, often used after verifying its presence or attributes in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement of the link.
- `modifier` (Union[Bool, String], optional, default `False`) — Optional Selenium key modifiers.

**Returns:** None

**Error Handling:** Raises `Exception` if the link cannot be found or clicking fails, with a message indicating the failure reason.

---

## click_element

Performs a click action on an element, supporting modifiers or ActionChains, often used after verifying visibility or state in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to click.
- `modifier` (Union[Bool, String], optional, default `False`) — Optional Selenium key modifiers (e.g., 'CTRL').
- `action_chain` (Bool, optional, default `False`) — If True, uses ActionChains for the click.

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or clicking fails, with a message indicating the failure reason.

---

## click_element_at_coordinates

Performs a click at the given offsets relative to an element's center, useful after pulling position data in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to click.
- `xoffset` (Integer, required) — Horizontal offset in pixels from the element's center.
- `yoffset` (Integer, required) — Vertical offset in pixels from the element's center.

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or clicking fails, with a message indicating the failure reason.

---

## double_click_element

Performs a double-click action on an element, often used after verifying its visibility in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to double-click.

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or double-clicking fails, with a message indicating the failure reason.

---

## set_focus_to_element

Assigns input focus to an element, useful before key input actions in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to focus.

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or setting focus fails, with a message indicating the failure reason.

---

## scroll_element_into_view

Scrolls the page to bring an element into the viewport, useful before actions like clicking in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to scroll to.

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or scrolling fails, with a message indicating the failure reason.

---

## drag_and_drop

Performs a drag-and-drop action from one element to another, often used after verifying element presence in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to drag.
- `target` (Union[WebElement, String], required) — The locator or WebElement to drop onto.

**Returns:** None

**Error Handling:** Raises `Exception` if the source or target element cannot be found or drag-and-drop fails, with a message indicating the failure reason.

---

## drag_and_drop_by_offset

Performs a drag action by given pixel offsets, useful after pulling position data in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to drag.
- `xoffset` (Integer, required) — Horizontal offset in pixels.
- `yoffset` (Integer, required) — Vertical offset in pixels.

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or drag-and-drop fails, with a message indicating the failure reason.

---

## mouse_down

Simulates pressing the mouse button down, useful for complex interactions in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement.

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or mouse-down fails, with a message indicating the failure reason.

---

## mouse_out

Simulates moving the mouse cursor away, often used after hovering in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement.

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or mouse-out fails, with a message indicating the failure reason.

---

## mouse_over

Simulates hovering the mouse over an element, useful after verifying visibility in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement.

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or mouse-over fails, with a message indicating the failure reason.

---

## mouse_up

Simulates releasing the mouse button, often used after mouse-down in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement.

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or mouse-up fails, with a message indicating the failure reason.

---

## open_context_menu

Simulates a right-click to open the context menu, useful after verifying element presence in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement to right-click.

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or opening the context menu fails, with a message indicating the failure reason.

---

## simulate_event

Triggers a specified DOM event (e.g., 'click', 'mouseover') on an element, useful after verifying element state in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement.
- `event` (String, required) — The DOM event to simulate (e.g., 'click', 'mouseover').

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or event simulation fails, with a message indicating the failure reason.

---

## press_keys

Sends one or multiple keys to an element or the active browser, useful after verifying focus in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String, None], optional, default `None`) — The locator or WebElement, or None to send to the active browser.
- `keys` (String, required) — One or more keys or key combinations to send (e.g., 'ENTER', 'CTRL+a').

**Returns:** None

**Error Handling:** Raises `Exception` if the element cannot be found or key press fails, with a message indicating the failure reason.

---

## get_all_links

Pulls a list of link IDs for verification or iteration, useful before actions like clicking links in a "pull then push" workflow.

**Parameters:** None

**Returns:** List[String] — A list of link IDs, or empty strings for links without IDs.

**Error Handling:** Raises `Exception` if fetching links fails, with a message indicating the failure reason.

---

## mouse_down_on_link

Simulates pressing the mouse button down on a link, useful after verifying link presence in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement of the link.

**Returns:** None

**Error Handling:** Raises `Exception` if the link cannot be found or mouse-down fails, with a message indicating the failure reason.

---

## page_should_contain_link

Confirms the presence of a link, useful before clicking in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement of the link.
- `message` (String, optional, default `None`) — Custom error message if verification fails.
- `loglevel` (String, optional, default `"TRACE"`) — Log level for page source if verification fails.

**Returns:** None

**Error Handling:** Raises `Exception` if verification fails, with a message indicating the failure reason.

---

## page_should_not_contain_link

Ensures a link is absent, useful for confirming state before further actions in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement of the link.
- `message` (String, optional, default `None`) — Custom error message if verification fails.
- `loglevel` (String, optional, default `"TRACE"`) — Log level for page source if verification fails.

**Returns:** None

**Error Handling:** Raises `Exception` if verification fails, with a message indicating the failure reason.

---

## mouse_down_on_image

Simulates pressing the mouse button down on an image, useful after verifying image presence in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement of the image.

**Returns:** None

**Error Handling:** Raises `Exception` if the image cannot be found or mouse-down fails, with a message indicating the failure reason.

---

## page_should_contain_image

Confirms the presence of an image, useful before clicking in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement of the image.
- `message` (String, optional, default `None`) — Custom error message if verification fails.
- `loglevel` (String, optional, default `"TRACE"`) — Log level for page source if verification fails.

**Returns:** None

**Error Handling:** Raises `Exception` if verification fails, with a message indicating the failure reason.

---

## page_should_not_contain_image

Ensures an image is absent, useful for confirming state before further actions in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement of the image.
- `message` (String, optional, default `None`) — Custom error message if verification fails.
- `loglevel` (String, optional, default `"TRACE"`) — Log level for page source if verification fails.

**Returns:** None

**Error Handling:** Raises `Exception` if verification fails, with a message indicating the failure reason.

---

## get_element_count

Pulls the count of matching elements for verification, useful before actions like clicking multiple elements in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator or WebElement.

**Returns:** Integer — The number of matching elements.

**Error Handling:** Raises `Exception` if verification fails, with a message indicating the failure reason.

---

## add_location_strategy

Registers a custom strategy for locating elements, enhancing flexibility in a "pull then push" workflow.

**Parameters:**
- `strategy_name` (String, required) — The name of the custom strategy.
- `strategy_keyword` (String, required) — The keyword or function implementing the strategy.
- `persist` (Bool, optional, default `False`) — If True, the strategy persists for the test session.

**Returns:** None

**Error Handling:** Raises `Exception` if verification fails, with a message indicating the failure reason.

---

## remove_location_strategy

Deletes a previously registered custom location strategy, useful for cleanup in a "pull then push" workflow.

**Parameters:**
- `strategy_name` (String, required) — The name of the strategy to remove.

**Returns:** None

**Error Handling:** Raises `Exception` if verification fails, with a message indicating the failure reason.