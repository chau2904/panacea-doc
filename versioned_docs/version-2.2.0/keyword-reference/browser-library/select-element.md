---
title: SelectElementTestLibrary
sidebar_position: 5
---

# SelectElementTestLibrary

## get_list_items

Returns a list of all option names or values in a dropdown menu to check what's available.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The identifier for the dropdown (e.g., 'id=country', '//select') or a WebElement object.
- `values` (Bool, optional, default `False`) — If True, gets option values instead of names.

**Returns:** List[String] — A list of option names or values.

**Error Handling:** Raises `Exception` if getting the options fails.

---

## get_selected_list_label

Returns the name of the first option chosen in a dropdown to check its current selection.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The identifier for the dropdown.

**Returns:** String — The name of the first selected option, or empty if none is selected.

**Error Handling:** Raises `Exception` if getting the selected name fails.

---

## get_selected_list_labels

Returns a list of all chosen option names in a dropdown, useful for checking multiple selections.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The identifier for the dropdown.

**Returns:** List[String] — A list of selected option names, or empty if none are selected.

**Error Handling:** Raises `Exception` if getting the selected names fails.

---

## get_selected_list_value

Returns the value of the first option chosen in a dropdown to check its current selection.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The identifier for the dropdown.

**Returns:** String — The value of the first selected option, or empty if none is selected.

**Error Handling:** Raises `Exception` if getting the selected value fails.

---

## get_selected_list_values

Returns a list of all chosen option values in a dropdown, useful for checking multiple selections.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The identifier for the dropdown.

**Returns:** List[String] — A list of selected option values, or empty if none are selected.

**Error Handling:** Raises `Exception` if getting the selected values fails.

---

## list_selection_should_be

Confirms that the chosen options in a dropdown match the expected names or values.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The identifier for the dropdown.
- `expected` (String, required) — One or more expected selected option names or values (e.g., 'Finland', 'fi').

**Returns:** None

**Error Handling:** Raises `Exception` if checking the selection fails.

---

## list_should_have_no_selections

Confirms that no options are chosen in a dropdown menu.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The identifier for the dropdown.

**Returns:** None

**Error Handling:** Raises `Exception` if checking the selection fails.

---

## page_should_contain_list

Confirms that a dropdown menu is present on the page.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The identifier for the dropdown.
- `message` (Optional[String], optional, default `None`) — A custom error message if the check fails.
- `loglevel` (String, optional, default `"TRACE"`) — How much detail to log if the check fails.

**Returns:** None

**Error Handling:** Raises `Exception` if checking the presence fails.

---

## page_should_not_contain_list

Confirms that a dropdown menu is not present on the page.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The identifier for the dropdown.
- `message` (Optional[String], optional, default `None`) — A custom error message if the check fails.
- `loglevel` (String, optional, default `"TRACE"`) — How much detail to log if the check fails.

**Returns:** None

**Error Handling:** Raises `Exception` if checking the absence fails.

---

## select_all_from_list

Selects every option in a dropdown that allows multiple selections.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The identifier for the dropdown.

**Returns:** None

**Error Handling:** Raises `Exception` if selecting all options fails.

---

## select_from_list_by_index

Selects one or more options in a dropdown using their position numbers (starting from 0).

**Parameters:**
- `locator` (Union[WebElement, String], required) — The identifier for the dropdown.
- `indexes` (String, required) — One or more position numbers of options to select (e.g., '0', '1').

**Returns:** None

**Error Handling:** Raises `Exception` if selecting options fails.

---

## select_from_list_by_value

Selects one or more options in a dropdown using their value codes (e.g., 'fi' for Finland).

**Parameters:**
- `locator` (Union[WebElement, String], required) — The identifier for the dropdown.
- `values` (String, required) — One or more value codes of options to select (e.g., 'fi', 'se').

**Returns:** None

**Error Handling:** Raises `Exception` if selecting options fails.

---

## select_from_list_by_label

Selects one or more options in a dropdown using their displayed names (e.g., 'Finland').

**Parameters:**
- `locator` (Union[WebElement, String], required) — The identifier for the dropdown.
- `labels` (String, required) — One or more names of options to select (e.g., 'Finland', 'Sweden').

**Returns:** None

**Error Handling:** Raises `Exception` if selecting options fails.

---

## unselect_all_from_list

Clears all selected options in a dropdown that allows multiple selections.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The identifier for the dropdown.

**Returns:** None

**Error Handling:** Raises `Exception` if unselecting options fails.

---

## unselect_from_list_by_index

Removes selections from one or more options in a multi-select dropdown using their position numbers (starting from 0).

**Parameters:**
- `locator` (Union[WebElement, String], required) — The identifier for the dropdown.
- `indexes` (String, required) — One or more position numbers of options to unselect.

**Returns:** None

**Error Handling:** Raises `Exception` if unselecting options fails.

---

## unselect_from_list_by_value

Removes selections from one or more options in a multi-select dropdown using their value codes (e.g., 'fi' for Finland).

**Parameters:**
- `locator` (Union[WebElement, String], required) — The identifier for the dropdown.
- `values` (String, required) — One or more value codes of options to unselect.

**Returns:** None

**Error Handling:** Raises `Exception` if unselecting options fails.

---

## unselect_from_list_by_label

Removes selections from one or more options in a multi-select dropdown using their displayed names (e.g., 'Finland').

**Parameters:**
- `locator` (Union[WebElement, String], required) — The identifier for the dropdown.
- `labels` (String, required) — One or more names of options to unselect.

**Returns:** None

**Error Handling:** Raises `Exception` if unselecting options fails.