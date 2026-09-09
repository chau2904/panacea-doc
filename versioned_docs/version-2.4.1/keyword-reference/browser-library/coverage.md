---
title: CoverageTestLibrary
sidebar_position: 9
---

# CoverageTestLibrary

## Start Coverage

Starts coverage collection for the current page. Must be called after a page is open and before any actions are performed on it.

**Parameters:**
- `config_file` (PathLike, optional)
- `coverage_type` (String, optional, default `all`) — `all`, `css`, `js`.
- `path` (Path, optional)
- `raw` (Bool, optional, default `False`)
- `reportAnonymousScripts` (Bool, optional, default `False`)
- `resetOnNavigation` (Bool, optional, default `True`)

**Returns:** String — The coverage type that was started.

**Error Handling:** Raises `Exception` if starting coverage fails.

---

## Stop Coverage

Stops coverage collection for the current page and generates a coverage report.

**Parameters:** None

**Returns:** Path — Path to the generated HTML coverage report file or coverage folder.

**Error Handling:** Raises `Exception` if stopping coverage or generating the report fails.

---

## Merge Coverage Reports

Merges multiple raw coverage reports from `input_folder` into a single combined report saved to `output_folder`.

**Parameters:**
- `input_folder` (Path, required)
- `output_folder` (Path, required)
- `config_file` (Path, optional)
- `name` (String, optional)
- `reports` (List, optional, default `["v8"]`)

**Returns:** Path — Path to the output folder where the combined report was saved.

**Error Handling:** Raises `FileNotFoundError` if `config_file` does not exist or if no raw coverage reports are found in `input_folder`. Raises `Exception` if merging the reports fails.