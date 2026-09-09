---
title: FormElementTestLibrary
sidebar_position: 9
---

# FormElementTestLibrary

## submit_form

Pushes a form submission action, typically after pulling form element states (e.g., verifying text fields or checkboxes) in a "pull then push" workflow. If no locator is provided, submits the first form on the page.

**Parameters:**
- `locator` (Union[WebElement, None, String], optional, default `None`) — The locator for the form (e.g., 'css=form#login') or a WebElement object.

**Returns:** None

**Error Handling:** Raises `Exception` if the form cannot be found or submission fails, with a message indicating the failure reason.

---

## checkbox_should_be_selected

Pulls the state of a checkbox to confirm it is selected, useful before pushing actions like unselecting or form submission in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator for the checkbox (e.g., 'id=accept-terms') or a WebElement object.

**Returns:** None

**Error Handling:** Raises `Exception` if the checkbox cannot be found or verification fails, with a message indicating the failure reason.

---

## checkbox_should_not_be_selected

Pulls the state of a checkbox to confirm it is not selected, useful before pushing actions like selecting or form submission in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator for the checkbox (e.g., 'id=subscribe') or a WebElement object.

**Returns:** None

**Error Handling:** Raises `Exception` if the checkbox cannot be found or verification fails, with a message indicating the failure reason.

---

## page_should_contain_checkbox

Pulls the presence of a checkbox for verification, useful before pushing actions like selecting or checking its state in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator for the checkbox.
- `message` (String, optional, default `None`) — Custom error message if verification fails.
- `loglevel` (String, optional, default `"TRACE"`) — Log level for page source if verification fails.

**Returns:** None

**Error Handling:** Raises `Exception` if verification fails, with a message indicating the failure reason.

---

## page_should_not_contain_checkbox

Pulls the absence of a checkbox for verification, ensuring the page is in the expected state before pushing other actions in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator for the checkbox (e.g., 'id=obsolete-checkbox').
- `message` (String, optional, default `None`) — Custom error message if verification fails.
- `loglevel` (String, optional, default `"TRACE"`) — Log level for page source if verification fails.

**Returns:** None

**Error Handling:** Raises `Exception` if verification fails, with a message indicating the failure reason.

---

## select_checkbox

Pushes a selection action on a checkbox, typically after pulling its state to confirm it is not selected in a "pull then push" workflow. Does nothing if already selected.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator for the checkbox.

**Returns:** None

**Error Handling:** Raises `Exception` if the checkbox cannot be found or selection fails, with a message indicating the failure reason.

---

## unselect_checkbox

Pushes a deselection action on a checkbox, typically after pulling its state to confirm it is selected in a "pull then push" workflow. Does nothing if not selected.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator for the checkbox.

**Returns:** None

**Error Handling:** Raises `Exception` if the checkbox cannot be found or deselection fails, with a message indicating the failure reason.

---

## page_should_contain_radio_button

Pulls the presence of a radio button for verification, useful before pushing actions like selecting or checking its state in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator for the radio button (e.g., 'name=gender value=male').
- `message` (String, optional, default `None`) — Custom error message if verification fails.
- `loglevel` (String, optional, default `"TRACE"`) — Log level for page source if verification fails.

**Returns:** None

**Error Handling:** Raises `Exception` if verification fails, with a message indicating the failure reason.

---

## page_should_not_contain_radio_button

Pulls the absence of a radio button for verification, ensuring the page is in the expected state before pushing other actions in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator for the radio button (e.g., 'name=gender value=other').
- `message` (String, optional, default `None`) — Custom error message if verification fails.
- `loglevel` (String, optional, default `"TRACE"`) — Log level for page source if verification fails.

**Returns:** None

**Error Handling:** Raises `Exception` if verification fails, with a message indicating the failure reason.

---

## radio_button_should_be_set_to

Pulls the state of a radio button group to confirm the selected value, useful before pushing actions like selecting a different value or form submission in a "pull then push" workflow.

**Parameters:**
- `group_name` (String, required) — The name attribute of the radio button group (e.g., 'gender').
- `value` (String, required) — The expected selected value (e.g., 'male').

**Returns:** None

**Error Handling:** Raises `Exception` if the group cannot be found or verification fails, with a message indicating the failure reason.

---

## radio_button_should_not_be_selected

Pulls the state of a radio button group to confirm no option is selected, useful before pushing actions like selecting a value in a "pull then push" workflow.

**Parameters:**
- `group_name` (String, required) — The name attribute of the radio button group (e.g., 'gender').

**Returns:** None

**Error Handling:** Raises `Exception` if the group cannot be found or verification fails, with a message indicating the failure reason.

---

## select_radio_button

Pushes a selection action on a radio button, typically after pulling the group's state to confirm no selection or a different selection in a "pull then push" workflow.

**Parameters:**
- `group_name` (String, required) — The name attribute of the radio button group (e.g., 'size').
- `value` (String, required) — The id or value attribute of the radio button to select (e.g., 'XL').

**Returns:** None

**Error Handling:** Raises `Exception` if the radio button cannot be found or selection fails, with a message indicating the failure reason.

---

## choose_file

Pushes a file upload action to a file input field, typically after pulling the field's presence in a "pull then push" workflow. Does not validate the file's local existence.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator for the file input field (e.g., 'id=uploadField').
- `file_path` (String, required) — The path of the file to upload ```(e.g., '${CURDIR}/data.csv')```.

**Returns:** None

**Error Handling:** Raises `Exception` if the file input field cannot be found or the upload fails, with a message indicating the failure reason.

---

## input_password

Pushes a password input action, typically after pulling the field's value to verify its state in a "pull then push" workflow. The password is hidden in logs unless TRACE level is used.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator for the password field (e.g., 'id=passwd').
- `password` (String, required) — The password to input.
- `clear` (Bool, optional, default `True`) — If True, clears the field before input.

**Returns:** None

**Error Handling:** Raises `Exception` if the password field cannot be found or input fails, with a message indicating the failure reason.

---

## input_text

Pushes a text input action, typically after pulling the field's value or content to verify its state in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator for the text field (e.g., 'id=username').
- `text` (String, required) — The text to input.
- `clear` (Bool, optional, default `True`) — If True, clears the field before input.

**Returns:** None

**Error Handling:** Raises `Exception` if the text field cannot be found or input fails, with a message indicating the failure reason.

---

## input_secure_text

Pushes a secure text input action for sensitive data, typically after pulling the field's value to verify its state in a "pull then push" workflow. The input is hidden from logs.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator for the text field (e.g., 'id=tokenField').
- `secret_text` (String, required) — The sensitive text to input.
- `clear` (Bool, optional, default `True`) — If True, clears the field before input.

**Returns:** None

**Error Handling:** Raises `Exception` if the text field cannot be found or input fails, with a message indicating the failure reason.

---

## page_should_contain_textfield

Pulls the presence of a text field for verification, useful before pushing actions like inputting text or passwords in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator for the text field (e.g., 'id=username').
- `message` (String, optional, default `None`) — Custom error message if verification fails.
- `loglevel` (String, optional, default `"TRACE"`) — Log level for page source if verification fails.

**Returns:** None

**Error Handling:** Raises `Exception` if verification fails, with a message indicating the failure reason.

---

## page_should_not_contain_textfield

Pulls the absence of a text field for verification, ensuring the page is in the expected state before pushing other actions in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator for the text field (e.g., 'id=obsolete-field').
- `message` (String, optional, default `None`) — Custom error message if verification fails.
- `loglevel` (String, optional, default `"TRACE"`) — Log level for page source if verification fails.

**Returns:** None

**Error Handling:** Raises `Exception` if verification fails, with a message indicating the failure reason.

---

## textfield_should_contain

Pulls the content of a text field to confirm it contains the expected substring, useful before pushing actions like inputting new text in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator for the text field (e.g., 'id=username').
- `expected` (String, required) — The substring expected in the text field.
- `message` (String, optional, default `None`) — Custom error message if verification fails.

**Returns:** None

**Error Handling:** Raises `Exception` if the text field cannot be found or verification fails, with a message indicating the failure reason.

---

## textfield_value_should_be

Pulls the exact value of a text field to confirm it matches the expected text, useful before pushing actions like inputting new text in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator for the text field (e.g., 'id=username').
- `expected` (String, required) — The exact text expected in the text field.
- `message` (String, optional, default `None`) — Custom error message if verification fails.

**Returns:** None

**Error Handling:** Raises `Exception` if the text field cannot be found or verification fails, with a message indicating the failure reason.

---

## textarea_should_contain

Pulls the content of a text area to confirm it contains the expected substring, useful before pushing actions like inputting new text in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator for the text area (e.g., 'id=comments').
- `expected` (String, required) — The substring expected in the text area.
- `message` (String, optional, default `None`) — Custom error message if verification fails.

**Returns:** None

**Error Handling:** Raises `Exception` if the text area cannot be found or verification fails, with a message indicating the failure reason.

---

## textarea_value_should_be

Pulls the exact value of a text area to confirm it matches the expected text, useful before pushing actions like inputting new text in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator for the text area (e.g., 'id=comments').
- `expected` (String, required) — The exact text expected in the text area.
- `message` (String, optional, default `None`) — Custom error message if verification fails.

**Returns:** None

**Error Handling:** Raises `Exception` if the text area cannot be found or verification fails, with a message indicating the failure reason.

---

## page_should_contain_button

Pulls the presence of a button for verification, useful before pushing actions like clicking or form submission in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator for the button (e.g., 'id=submit').
- `message` (String, optional, default `None`) — Custom error message if verification fails.
- `loglevel` (String, optional, default `"TRACE"`) — Log level for page source if verification fails.

**Returns:** None

**Error Handling:** Raises `Exception` if verification fails, with a message indicating the failure reason.

---

## page_should_not_contain_button

Pulls the absence of a button for verification, ensuring the page is in the expected state before pushing other actions in a "pull then push" workflow.

**Parameters:**
- `locator` (Union[WebElement, String], required) — The locator for the button (e.g., 'id=cancel').
- `message` (String, optional, default `None`) — Custom error message if verification fails.
- `loglevel` (String, optional, default `"TRACE"`) — Log level for page source if verification fails.

**Returns:** None

**Error Handling:** Raises `Exception` if verification fails, with a message indicating the failure reason.