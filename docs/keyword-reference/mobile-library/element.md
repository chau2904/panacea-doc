---
title: Element Keyword Library
sidebar_position: 2
---

# Element Keyword Library

## clear_text

Clears text from an input field identified by the given locator.

**Parameters:**
- `locator` (str, required)

**Returns:** None

**Error Handling:** Raises `Exception` if the text field cannot be found or cleared.

---

## click_element

Clicks an element identified by the given locator.

**Parameters:**
- `locator` (str, required) — e.g. xpath, id, name.

**Returns:** None

**Error Handling:** Raises `Exception` if the element is not found or the click fails.

---

## click_button

Clicks a button using its index or name.

**Parameters:**
- `index_or_name` (Union[str, int], required)

**Returns:** None

**Error Handling:** Raises `Exception` if the button is not found or cannot be clicked.

---

## click_text

Clicks a UI element containing or matching the text.

**Parameters:**
- `text` (str, required)
- `exact_match` (bool, optional, default `False`)

**Returns:** None

**Error Handling:** Raises `Exception` if no element is found or cannot be clicked.

---

## input_text_into_current_element

Inputs text into the currently selected field. *(Android only)*

**Parameters:**
- `text` (str, required)

**Returns:** None

**Error Handling:** Raises `Exception` if text cannot be typed into the current element.

---

## input_text

Inputs text into a text field identified by the locator.

**Parameters:**
- `locator` (str, required)
- `text` (str, required)

**Returns:** None

**Error Handling:** Raises `Exception` if the input field cannot be found or typed into.

---

## input_password

Inputs a password into the specified field.

**Parameters:**
- `locator` (str, required)
- `text` (str, required)

**Returns:** None

**Error Handling:** Raises `Exception` if the field cannot be found or password cannot be entered.

---

## input_value

Sets value into a text field using iOS `set_value`.

**Parameters:**
- `locator` (str, required)
- `text` (str, required)

**Returns:** None

**Error Handling:** Raises `Exception` if the input field cannot be found or the value cannot be set.

---

## hide_keyboard

Hides the software keyboard.

**Parameters:**
- `key_name` (str, optional, default `None`) — iOS only – the name of the key to press to close the keyboard.

**Returns:** None

**Error Handling:** Raises `Exception` if the keyboard cannot be hidden.

---

## is_keyboard_shown

Returns whether the Android keyboard is displayed. *(Android only)*

**Parameters:** None

**Returns:** bool — True if visible, False otherwise.

**Error Handling:** Raises `Exception` if the keyboard state cannot be determined.

---

## page_should_contain_text

Verifies that the current page contains the specified text.

**Parameters:**
- `text` (str, required)
- `loglevel` (str, optional, default `INFO`)

**Returns:** None

**Error Handling:** Raises `Exception` for unexpected errors.

---

## page_should_not_contain_text

Verifies that the current page does NOT contain the specified text.

**Parameters:**
- `text` (str, required)
- `loglevel` (str, optional, default `INFO`)

**Returns:** None

**Error Handling:** Raises `Exception` for unexpected errors.

---

## page_should_contain_element

Verifies that the current page contains the element identified by the given locator.

**Parameters:**
- `locator` (str, required)
- `loglevel` (str, optional, default `INFO`)

**Returns:** None

**Error Handling:** Raises `Exception` for unexpected errors.

---

## page_should_not_contain_element

Verifies that the current page does NOT contain the element identified by the given locator.

**Parameters:**
- `locator` (str, required)
- `loglevel` (str, optional, default `INFO`)

**Returns:** None

**Error Handling:** Raises `Exception` for unexpected errors.

---

## element_should_be_disabled

Verifies that the element identified by the given locator is disabled.

**Parameters:**
- `locator` (str, required)
- `loglevel` (str, optional, default `INFO`)

**Returns:** None

**Error Handling:** Raises `Exception` for unexpected errors.

---

## element_should_be_enabled

Verifies that the element identified by the given locator is enabled.

**Parameters:**
- `locator` (str, required)
- `loglevel` (str, optional, default `INFO`)

**Returns:** None

**Error Handling:** Raises `Exception` for unexpected errors.

---

## element_should_be_visible

Verifies that the element identified by the given locator is visible on the screen.

**Parameters:**
- `locator` (str, required)
- `loglevel` (str, optional, default `INFO`)

**Returns:** None

**Error Handling:** Raises `Exception` for unexpected errors.

---

## element_name_should_be

Verifies the element has the expected name attribute.

**Parameters:**
- `locator` (str, required)
- `expected` (str, required)

**Returns:** None

**Error Handling:** Raises `Exception` for unexpected errors.

---

## element_value_should_be

Verifies the element has the expected value attribute.

**Parameters:**
- `locator` (str, required)
- `expected` (str, required)

**Returns:** None

**Error Handling:** Raises `Exception` for unexpected errors.

---

## element_attribute_should_match

Verifies that the specified attribute of an element matches the expected pattern. The first matched element is used if multiple are found.

**Parameters:**
- `locator` (str, required)
- `attr_name` (str, required)
- `match_pattern` (Union[str, bool], required)
- `regexp` (bool, optional, default `False`)

**Returns:** None

**Error Handling:** Raises `Exception` for unexpected errors.

---

## element_should_contain_text

Verifies element contains expected text.

**Parameters:**
- `locator` (str, required)
- `expected` (str, required)
- `message` (str, optional)

**Returns:** None

**Error Handling:** Raises `Exception` for unexpected errors.

---

## element_should_not_contain_text

Verifies element does NOT contain expected text.

**Parameters:**
- `locator` (str, required)
- `expected` (str, required)
- `message` (str, optional)

**Returns:** None

**Error Handling:** Raises `Exception` for unexpected errors.

---

## element_text_should_be

Verifies element text matches exactly.

**Parameters:**
- `locator` (str, required)
- `expected` (str, required)
- `message` (str, optional)

**Returns:** None

**Error Handling:** Raises `Exception` for unexpected errors.

---

## get_webelement

Returns the first matching WebElement.

**Parameters:**
- `locator` (str, required)

**Returns:** WebElement

**Error Handling:** Raises `Exception` if element not found.

---

## scroll_element_into_view

Scrolls to bring element into view.

**Parameters:**
- `locator` (str, required)

**Returns:** WebElement — The matched Selenium WebElement object.

**Error Handling:** Raises `Exception` if scrolling fails or element not found.

---

## scroll_to_element_by_exact_text

Scrolls to an element with the exact text on the screen using Android UIAutomator.

**Parameters:**
- `element_text` (str, required)

**Returns:** None

**Error Handling:** Raises `Exception` if not found or scrolling fails.

---

## scroll_to_element_by_exact_text_in_long_view

Scrolls to an element with the exact text in a long view (using maximum swipe limit).

**Parameters:**
- `element_text` (str, required)
- `max_swipe_count` (str, required)

**Returns:** None

**Error Handling:** Raises `Exception` if not found or scrolling fails.

---

## scroll_to_element_by_partial_text

Scrolls to an element that contains partial text on the screen.

**Parameters:**
- `element_text` (str, required)

**Returns:** None

**Error Handling:** Raises `Exception` if not found or scrolling fails.

---

## scroll_to_element_by_partial_text_in_long_view

Scrolls to an element that contains partial text in a long view with limited swipes.

**Parameters:**
- `element_text` (str, required)
- `max_swipe_count` (str, required)

**Returns:** None

**Error Handling:** Raises `Exception` if not found or scrolling fails.

---

## scroll_to_element_by_description_contains

Scrolls to an element that contains the given content description.

**Parameters:**
- `description` (str, required)

**Returns:** None

**Error Handling:** Raises `Exception` if not found or scrolling fails.

---

## get_webelement_in_webelement

Returns the first child WebElement found within a given parent WebElement using the provided locator.

**Parameters:**
- `parent_element` (WebElement, required)
- `locator` (Union[str, WebElement], required)

**Returns:** WebElement

**Error Handling:** Raises `Exception` if no matching child element.

---

## get_webelements

Returns a list of WebElements matching the given locator.

**Parameters:**
- `locator` (str, required)

**Returns:** List[WebElement]

**Error Handling:** Raises `Exception` if no elements found.

---

## get_element_attribute

Returns the value of a specified attribute from an element identified by the given locator.

**Parameters:**
- `locator` (str, required)
- `attribute` (str, required)

**Returns:** The value of the specified attribute.

**Error Handling:** Raises `Exception` if element or attribute not found.

---

## get_element_location

Returns the location of the element identified by the given locator.

**Parameters:**
- `locator` (str, required)

**Returns:** Dict[str, int] — A dictionary with `x` and `y` coordinates.

**Error Handling:** Raises `Exception` if element not found or retrieval fails.

---

## get_element_size

Returns the size (width and height) of the element identified by the given locator.

**Parameters:**
- `locator` (str, required)

**Returns:** Dict[str, int] — A dictionary containing `width` and `height` keys.

**Error Handling:** Raises `Exception` if element not found or retrieval fails.

---

## get_element_rect

Returns the location and size (rect) of the element identified by the given locator.

**Parameters:**
- `locator` (str, required)

**Returns:** Dict[str, int] — A dictionary containing `x`, `y`, `width`, and `height`.

**Error Handling:** Raises `Exception` if element not found or retrieval fails.

---

## get_text

Returns the text content of the element identified by the given locator.

**Parameters:**
- `locator` (str, required)

**Returns:** str — The text value of the element.

**Error Handling:** Raises `Exception` if element not found or text retrieval fails.

---

## get_matching_xpath_count

Returns the number of elements matching the given XPath. Do not include the `xpath=` prefix.

**Parameters:**
- `xpath` (str, required)

**Returns:** str — Number of matching elements as a string.

**Error Handling:** Raises `Exception` if evaluation fails.

---

## text_should_be_visible

Verifies element with given text is visible.

**Parameters:**
- `text` (str, required)
- `exact_match` (bool, optional, default `False`)
- `loglevel` (str, optional, default `INFO`)

**Returns:** None

**Error Handling:** Raises `Exception` for unexpected errors.

---

## xpath_should_match_x_times

Verifies that the given XPath matches a specific number of elements. Do not use the `xpath=` prefix.

**Parameters:**
- `xpath` (str, required)
- `count` (int, required)
- `error` (str, optional)
- `loglevel` (str, optional, default `INFO`)

**Returns:** None

**Error Handling:** Raises `Exception` for unexpected errors.

---

## expect_element

Verifies that the element with the given locator has the desired state (visible, not visible, enabled, or disabled).

**Parameters:**
- `locator` (str, required)
- `state` (Literal["visible", "not visible", "enabled", "disabled"], required)
- `timeout` (timedelta, optional, default `5s`)
- `retry_interval` (timedelta, optional, default `1s`)
- `message` (str, optional)
- `loglevel` (str, optional, default `INFO`)

**Returns:** None

**Error Handling:** Raises `Exception` if the element does not reach the expected state or for any other unexpected errors.

---

## expect_text

Verifies that the specified text has the desired state (visible or not visible).

**Parameters:**
- `text` (str, required)
- `state` (Literal["visible", "not visible"], required)
- `exact_match` (bool, optional, default `False`)
- `timeout` (timedelta, optional, default `5s`)
- `retry_interval` (timedelta, optional, default `1s`)
- `message` (str, optional)
- `loglevel` (str, optional, default `INFO`)

**Returns:** None

**Error Handling:** Raises `Exception` if the text does not reach the expected state or for any other unexpected errors.