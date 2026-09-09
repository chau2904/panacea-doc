---
title: DataLoader Keyword Library
sidebar_position: 4
---

# DataLoader Keyword Library

Keywords to connect and load data from data files like CSV, YAML & JSON.

## get_value_from_file

Returns a single value from a data file (JSON, YAML, or CSV).

**Parameters:**
- `file_path` (str, required) — Path to the data file.
- `section` (str, required) — Top-level key/section name (for CSV: the row-identifier column value).
- `key` (str, required) — The key whose value you want inside the section.

**Returns:** Any — The value found at `data[section][key]`.

**Error Handling:** Raises `FileNotFoundError` if the file does not exist. Raises `ValueError` if the extension is unsupported, or the key is missing. Raises `Exception` for any other unexpected errors.

---

## get_section_from_file

Returns an entire section or block from the file as a dictionary.

**Parameters:**
- `file_path` (str, required) — Path to the data file (JSON, YAML, or CSV).
- `section` (str, required) — The top-level key/section name to retrieve (for CSV: the value in the first column of the target row).

**Returns:** Dict — The full section or CSV row as a dictionary.

**Error Handling:** Raises `FileNotFoundError` if the file does not exist. Raises `KeyError` if the section is not found. Raises `ValueError` if the file extension is unsupported. Raises `Exception` for any other unexpected errors.

---

## get_all_data_from_file

Returns the entire contents of the data file.

**Parameters:**
- `file_path` (str, required) — Path to the data file (JSON, YAML, or CSV).

**Returns:** Dict | List — Complete file contents. JSON/YAML returns a Dict; CSV returns a List of Dicts.

**Error Handling:** Raises `FileNotFoundError` if the file does not exist. Raises `ValueError` if the file extension is unsupported. Raises `Exception` for any other unexpected errors.

---

## clear_cache

Clears the in-memory file cache.

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if the cache cannot be cleared.