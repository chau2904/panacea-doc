---
title: JavaScriptTestLibrary
sidebar_position: 11
---

# JavaScriptTestLibrary

## execute_javascript

Runs JavaScript to get information from a webpage (like the page title) or change something (like filling a text field). The result can be used to check or do more actions.

**Parameters:**
- `code` (Union[WebElement, String], required) — The JavaScript code to run, a file path with JavaScript, or arguments ```(e.g., 'return document.title', '${CURDIR}/script.js')```. Use `'ARGUMENTS'` or `'JAVASCRIPT'` to pass arguments.

**Returns:** Any — The result of the JavaScript, like a string, number, or list.

**Error Handling:** Raises `Exception` if the JavaScript fails to run, with a message explaining why.

---

## execute_async_javascript

Runs JavaScript that waits for something (like a timer) to get information or change the webpage. The code must use a special function (callback) to say it's done.

**Parameters:**
- `code` (Union[WebElement, String], required) — The JavaScript code to run, a file path with JavaScript, or arguments. The code must call a callback (e.g., 'arguments[arguments.length - 1]') to finish.

**Returns:** Any — The result of the JavaScript, like a string, number, or list.

**Error Handling:** Raises `Exception` if the JavaScript fails to run or times out, with a message explaining why.