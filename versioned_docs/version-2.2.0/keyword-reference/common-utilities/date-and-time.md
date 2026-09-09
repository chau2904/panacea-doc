---
title: Date and Time Keyword Library
sidebar_position: 2
---

# Date and Time Keyword Library

Keywords for formatting timestamps, working with time zones, calculating date differences, and adjusting dates.

## Get Current Timestamp

Returns the current timestamp formatted according to the given format string and timezone.

**Parameters:**
- `fmt` (String, optional, default `"%Y-%m-%d %H:%M:%S"`) — The datetime format string.
- `timezone_str` (String, optional, default `"Asia/Kolkata"`) — The timezone name.

**Returns:** Current timestamp string formatted according to `fmt` and localized to `timezone_str`.

**Error Handling:** Raises `ValueError` if there is an error retrieving the timezone or formatting the timestamp.

---

## Get Formatted Timestamp

Returns the current timestamp formatted in a user-defined format and timezone.

**Parameters:**
- `fmt` (String, optional, default `"%d-%m-%Y_%H-%M-%S"`) — The datetime format string.
- `timezone_str` (String, optional, default `"Asia/Kolkata"`) — The timezone name.

**Returns:** Current timestamp string formatted according to `fmt` and localized to `timezone_str`.

**Error Handling:** Raises `ValueError` if there is an error retrieving the timezone or formatting the timestamp.

---

## Get Current Date Plus Offset

Returns the current date offset by a specified number of days, formatted according to the given format and timezone.

**Parameters:**
- `days` (Integer) — Number of days to offset the current date.
- `fmt` (String, optional, default `"%Y-%m-%d"`) — The date format string.
- `timezone_str` (String, optional, default `"Asia/Kolkata"`) — The timezone name.

**Returns:** Date string representing current date plus the offset, formatted and localized.

**Error Handling:** Raises `ValueError` if there is an error retrieving the timezone or formatting the date.

---

## Add Days To Date

Adds a specified number of days to a given date string and returns the new date string.

**Parameters:**
- `date_str` (String) — The input date string.
- `days` (Integer) — Number of days to add.
- `fmt` (String, optional, default `"%Y-%m-%d"`) — Format of the input and output date string.

**Returns:** New date string after adding days, formatted according to `fmt`.

**Error Handling:** Raises `ValueError` if the input date string does not match the format or on other errors.

---

## Subtract Days From Date

Subtracts a specified number of days from a given date string and returns the result.

**Parameters:**
- `date_str` (String) — The input date string.
- `days` (Integer) — Number of days to subtract.
- `fmt` (String, optional, default `"%Y-%m-%d"`) — Format of the input and output date string.

**Returns:** New date string after subtracting days, formatted according to `fmt`.

**Error Handling:** Raises `ValueError` if the input date string does not match the format or on other errors.

---

## Get Difference In Days

Calculates the number of days between two date strings.

**Parameters:**
- `date1` (String) — The first date string.
- `date2` (String) — The second date string.
- `fmt` (String, optional, default `"%Y-%m-%d"`) — Format of the input date strings.

**Returns:** Integer — Number of days between `date1` and `date2` (`date2 - date1`).

**Error Handling:** Raises `ValueError` if input dates do not match the format or on other errors.

---

## Convert Date Format

Converts a date string from one format to another.

**Parameters:**
- `date_str` (String) — The input date string.
- `from_fmt` (String) — The current format of `date_str`.
- `to_fmt` (String) — The desired output format.

**Returns:** Date string converted to the new format `to_fmt`.

**Error Handling:** Raises `ValueError` if the input date string does not match `from_fmt` or on other errors.