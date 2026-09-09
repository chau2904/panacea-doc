---
title: TableElementTestLibrary
sidebar_position: 6
---

# TableElementTestLibrary

## get_table_cell

Returns the text in a table cell at the given row and column to check its content.

**Parameters:**
- `locator` (Union[WebElement, None, String], required) — The identifier for the table (e.g., 'id=users', '//table') or a WebElement object.
- `row` (Integer, required) — The row number (starts at 1; use negative numbers, like -1, for the last row).
- `column` (Integer, required) — The column number (starts at 1; use negative numbers, like -1, for the last column).
- `loglevel` (String, optional, default `"TRACE"`) — How much detail to log if the action fails.

**Returns:** String — The text in the cell.

**Error Handling:** Raises `Exception` if getting the cell text fails.

---

## table_cell_should_contain

Confirms that a specific cell in a table contains the given text.

**Parameters:**
- `locator` (Union[WebElement, None, String], required) — The identifier for the table.
- `row` (Integer, required) — The row number.
- `column` (Integer, required) — The column number.
- `expected` (String, required) — The text the cell should have.
- `loglevel` (String, optional, default `"TRACE"`) — How much detail to log if the check fails.

**Returns:** None

**Error Handling:** Raises `Exception` if checking the cell text fails.

---

## table_column_should_contain

Confirms that a specific column in a table contains the given text.

**Parameters:**
- `locator` (Union[WebElement, None, String], required) — The identifier for the table.
- `column` (Integer, required) — The column number.
- `expected` (String, required) — The text the column should have.
- `loglevel` (String, optional, default `"TRACE"`) — How much detail to log if the check fails.

**Returns:** None

**Error Handling:** Raises `Exception` if checking the column text fails.

---

## table_footer_should_contain

Confirms that the footer of a table contains the given text.

**Parameters:**
- `locator` (Union[WebElement, None, String], required) — The identifier for the table.
- `expected` (String, required) — The text the footer should have.
- `loglevel` (String, optional, default `"TRACE"`) — How much detail to log if the check fails.

**Returns:** None

**Error Handling:** Raises `Exception` if checking the footer text fails.

---

## table_header_should_contain

Confirms that the header of a table contains the given text.

**Parameters:**
- `locator` (Union[WebElement, None, String], required) — The identifier for the table.
- `expected` (String, required) — The text the header should have.
- `loglevel` (String, optional, default `"TRACE"`) — How much detail to log if the check fails.

**Returns:** None

**Error Handling:** Raises `Exception` if checking the header text fails.

---

## table_row_should_contain

Confirms that a specific row in a table contains the given text.

**Parameters:**
- `locator` (Union[WebElement, None, String], required) — The identifier for the table.
- `row` (Integer, required) — The row number.
- `expected` (String, required) — The text the row should have.
- `loglevel` (String, optional, default `"TRACE"`) — How much detail to log if the check fails.

**Returns:** None

**Error Handling:** Raises `Exception` if checking the row text fails.

---

## table_should_contain

Confirms that the entire table contains the given text.

**Parameters:**
- `locator` (Union[WebElement, None, String], required) — The identifier for the table.
- `expected` (String, required) — The text the table should have.
- `loglevel` (String, optional, default `"TRACE"`) — How much detail to log if the check fails.

**Returns:** None

**Error Handling:** Raises `Exception` if checking the table text fails.