---
title: GetterTestLibrary
sidebar_position: 3
---

# GetterTestLibrary

## Get Url

Returns the current URL of the active page. Optionally asserts that the URL satisfies the given assertion operator and expected value.

**Parameters:**
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (Any or None, optional)
- `message` (String or None, optional)

**Returns:** String — The current URL of the active page.

**Error Handling:** Raises `Exception` if retrieving the URL fails or the assertion fails.

---

## Get Title

Returns the title of the current page. Optionally asserts the title against the given operator and expected value.

**Parameters:**
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (Any or None, optional)
- `message` (String or None, optional)

**Returns:** String — The title of the current page.

**Error Handling:** Raises `Exception` if retrieving the title fails or the assertion fails.

---

## Get Page Source

Returns the full HTML source of the current page as a string. Optionally asserts the source against the given operator and expected value.

**Parameters:**
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (Any or None, optional)
- `message` (String or None, optional)

**Returns:** String — The full HTML source of the current page.

**Error Handling:** Raises `Exception` if retrieving the page source fails or the assertion fails.

---

## Get Viewport Size

Returns the current viewport dimensions. Returns a dictionary with width and height by default, or a single value when key is specified.

**Parameters:**
- `key` (SizeFields, optional) — `ALL` (default) returns `{width, height}` dict. Pass `width` or `height` for a single value.
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (Any or None, optional)
- `message` (String or None, optional)

**Returns:** Dict or Number — Viewport dimensions or a single dimension value.

**Error Handling:** Raises `Exception` if retrieving the viewport size fails or the assertion fails.

---

## Get Text

Returns the visible text content of the element found by selector. Also works on `<input>` and `<textarea>` elements, returning their value property.

**Parameters:**
- `selector` (String, required)
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (Any or None, optional)
- `message` (String or None, optional)

**Returns:** String — The visible text content of the element.

**Error Handling:** Raises `Exception` if the element cannot be found or the assertion fails.

---

## Get Property

Returns the value of the given DOM property from the element found by selector, e.g. `innerText`, `innerHTML`, `value`, `checked`.

**Parameters:**
- `selector` (String, required)
- `property` (String, required)
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (Any or None, optional)
- `message` (String or None, optional)

**Returns:** Any — The value of the requested DOM property.

**Error Handling:** Raises `Exception` if the element is not found, the property does not exist, or the assertion fails.

---

## Get Attribute

Returns the value of the HTML attribute from the element found by selector.

**Parameters:**
- `selector` (String, required)
- `attribute` (String, required)
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (Any or None, optional)
- `message` (String or None, optional)

**Returns:** String or None — The attribute value, or None if not present.

**Error Handling:** Raises `Exception` if the attribute is not found (and no assertion operator is set) or the assertion fails.

---

## Get Attribute Names

Returns all HTML attribute names of the element found by selector as a list.

**Parameters:**
- `selector` (String, required)
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (String, optional)
- `message` (String or None, optional)

**Returns:** List[String] — A list of all HTML attribute names on the element.

**Error Handling:** Raises `Exception` if the element is not found or the assertion fails.

---

## Get Classes

Returns all CSS classes of the element found by selector as a list.

**Parameters:**
- `selector` (String, required)
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (String, optional)
- `message` (String or None, optional)

**Returns:** List[String] — A list of all class names on the element.

**Error Handling:** Raises `Exception` if the element is not found or the assertion fails.

---

## Get Style

Gets the computed style properties of the element found by selector.

**Parameters:**
- `selector` (String, required)
- `key` (String, optional) — CSS property name, or `ALL` (default) to return all properties as a dict.
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (Any or None, optional)
- `message` (String or None, optional)
- `pseudo_element` (String or None, optional)

**Returns:** Dict or String — All computed styles as a dict, or a single property value.

**Error Handling:** Raises `Exception` if the element is not found or the assertion fails.

---

## Get Aria Snapshot

Returns the ARIA snapshot of the element found by selector.

**Parameters:**
- `selector` (String, required)
- `return_type` (AriaSnapshotReturnType, optional) — `yaml` (default) returns a YAML string; `dict` returns a dictionary.
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (Any or None, optional)
- `message` (String or None, optional)

**Returns:** String or Dict — ARIA snapshot in YAML format or as a dictionary.

**Error Handling:** Raises `Exception` if retrieving the snapshot fails or the assertion fails.

---

## Get Select Options

Returns all options of a `<select>` element as a list of dictionaries. Each dict contains `index`, `value`, `label`, and `selected` keys.

**Parameters:**
- `selector` (String, required)
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (Any or None, optional)
- `message` (String or None, optional)

**Returns:** List[Dict] — List of option dictionaries.

**Error Handling:** Raises `Exception` if the element is not found or the assertion fails.

---

## Get Selected Options

Returns the specified attribute of the currently selected options of a `<select>` element.

**Parameters:**
- `selector` (String, required)
- `option_attribute` (SelectAttribute, optional, default `label`) — `label`, `value`, or `index`.
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (Any, optional)
- `message` (String or None, optional)

**Returns:** List — Selected option values for the specified attribute.

**Error Handling:** Raises `Exception` if the element is not found or the assertion fails.

---

## Get Checkbox State

Returns the checked state of the checkbox found by selector.

**Parameters:**
- `selector` (String, required)
- `assertion_operator` (AssertionOperator or None, optional) — `==` and `!=` are supported.
- `assertion_expected` (Bool or String, optional, default `Unchecked`)
- `message` (String or None, optional)

**Returns:** Bool — True if checked, False if unchecked.

**Error Handling:** Raises `Exception` if the element is not found or the assertion fails.

---

## Get Element Count

Returns the number of elements matching the given selector.

**Parameters:**
- `selector` (String, required)
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (Any or None, optional)
- `message` (String or None, optional)

**Returns:** Integer — The number of elements matching the selector.

**Error Handling:** Raises `Exception` if counting elements fails or the assertion fails.

---

## Get Element States

Returns the active states of the element found by selector as a list of state name strings.

**Parameters:**
- `selector` (String, required)
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (String, optional)
- `message` (String or None, optional)
- `return_names` (Bool, optional, default `True`)

**Returns:** List[String] or ElementState — Active state names or IntFlag value.

**Error Handling:** Raises `Exception` if the element is not found or the assertion fails.

---

## Get Boundingbox

Returns the size and position of the element found by selector as `{x, y, width, height}` dict by default, or a single value when key is specified.

**Parameters:**
- `selector` (String, required)
- `key` (BoundingBoxFields, optional) — `ALL` (default), `x`, `y`, `width`, or `height`.
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (Any or None, optional)
- `message` (String or None, optional)
- `allow_hidden` (Bool, optional, default `False`)

**Returns:** Dict, Number, or None — Bounding box or a single dimension.

**Error Handling:** Raises `Exception` if the element is not found or visible, or the assertion fails.

---

## Get Scroll Size

Returns the scrollable size of an element or the page.

**Parameters:**
- `selector` (String or None, optional)
- `key` (SizeFields, optional)
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (Any or None, optional)
- `message` (String or None, optional)

**Returns:** Dict or Number — Scroll dimensions or a single value.

**Error Handling:** Raises `Exception` if the operation fails or the assertion fails.

---

## Get Scroll Position

Returns the current scroll position of an element or the page as a `{top, left, bottom, right}` dict.

**Parameters:**
- `selector` (String or None, optional)
- `key` (AreaFields, optional)
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (Any or None, optional)
- `message` (String or None, optional)

**Returns:** Dict or Number — Scroll position or a single value.

**Error Handling:** Raises `Exception` if the operation fails or the assertion fails.

---

## Get Client Size

Returns the client size (`clientWidth`, `clientHeight`) of an element or the page.

**Parameters:**
- `selector` (String or None, optional)
- `key` (SizeFields, optional)
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (Any or None, optional)
- `message` (String or None, optional)

**Returns:** Dict or Number — Client size dimensions or a single value.

**Error Handling:** Raises `Exception` if the operation fails or the assertion fails.

---

## Get Table Cell Element

Returns a locator reference to the cell at the intersection of column and row within a `<table>` element.

**Parameters:**
- `table` (String, required)
- `column` (String, required) — Selector, or a 0-based index (`-1` for last).
- `row` (String, required) — Selector, or a 0-based index.

**Returns:** String — Locator reference to the matched table cell.

**Error Handling:** Raises `Exception` if the table, column, or row cannot be resolved.

---

## Get Table Cell Index

Returns the 0-based column index of a table cell within its row.

**Parameters:**
- `selector` (String, required)
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (Any, optional, default `0`)
- `message` (String or None, optional)

**Returns:** Integer — 0-based column index of the cell.

**Error Handling:** Raises `Exception` if the element is not found or the assertion fails.

---

## Get Table Row Index

Returns the 0-based row index of a table row.

**Parameters:**
- `selector` (String, required)
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (Any, optional, default `0`)
- `message` (String or None, optional)

**Returns:** Integer — 0-based row index.

**Error Handling:** Raises `Exception` if the element is not found or the assertion fails.

---

## Get Element

Returns a Playwright Locator reference for the element found by selector.

**Parameters:**
- `selector` (String, required)

**Returns:** String — Playwright Locator reference.

**Error Handling:** Raises `Exception` if the element is not found.

---

## Get Elements

Returns Playwright Locator references for all elements matching selector.

**Parameters:**
- `selector` (String, required)

**Returns:** List[String] — List of Playwright Locator references.

**Error Handling:** Raises `Exception` if the lookup fails (returns an empty list on timeout).

---

## Get Element By Role

Returns a Playwright Locator reference for the element matching the given ARIA role, with optional filters.

**Parameters:**
- `role` (ElementRole, required) — ARIA role to locate, e.g. `button`, `heading`, `checkbox`.
- `all_elements` (Bool, optional, default `False`)
- `checked` (Bool or None, optional)
- `disabled` (Bool or None, optional)
- `exact` (Bool or None, optional)
- `expanded` (Bool or None, optional)
- `include_hidden` (Bool or None, optional)
- `level` (Integer or None, optional)
- `name` (String or None, optional)
- `pressed` (Bool or None, optional)
- `selected` (Bool or None, optional)

**Returns:** String or List[String] — Locator reference(s).

**Error Handling:** Raises `Exception` if no matching element is found.

---

## Get Element By

Returns a Playwright Locator reference using a named selection strategy. Supports `AltText`, `Label`, `Placeholder`, `TestId`, `Text`, and `Title`.

**Parameters:**
- `selection_strategy` (SelectionStrategy, required)
- `text` (String, required)
- `exact` (Bool, optional, default `False`)
- `all_elements` (Bool, optional, default `False`)

**Returns:** String or List[String] — Locator reference(s).

**Error Handling:** Raises `Exception` if no matching element is found.

---

## Get Download State

Returns the current state of a download as a DownloadInfo dictionary.

**Parameters:**
- `download` (DownloadInfo or String, required)
- `assertion_operator` (AssertionOperator or None, optional)
- `assertion_expected` (Any or None, optional)
- `message` (String or None, optional)

**Returns:** Dict — Download state dictionary.

**Error Handling:** Raises `Exception` if retrieving the download state fails or the assertion fails.