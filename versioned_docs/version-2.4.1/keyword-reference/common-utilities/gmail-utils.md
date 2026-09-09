---
title: GmailUtils
sidebar_position: 1
---

# GmailUtils

Functions for connecting to Gmail, searching and retrieving emails, decoding email subjects, and deleting emails.

## Connect To Mailbox

Connects to Gmail using the provided email ID and app password, and returns the mailbox object.

**Parameters:**
- `email_id` (String) — The Gmail email ID.
- `app_password` (String) — The application-specific password for Gmail login.

**Returns:** Mailbox object connected to the Gmail inbox.

**Error Handling:** Raises exceptions if connection or login fails.

---

## Search Emails

Searches emails matching the given criteria and returns a list of email IDs.

**Parameters:**
- `email_id` (String) — Gmail email ID.
- `app_password` (String) — Application-specific password.
- `search_criteria` (String, optional, default `"ALL"`) — Criteria to filter emails (e.g., `"ALL"`, `"UNSEEN"`).

**Returns:** List of email IDs matching the search criteria.

**Error Handling:** Raises `Exception` if email retrieval fails.

---

## Fetch Email By ID

Fetches the full email content for the specified email UID.

**Parameters:**
- `email_id` (String) — Gmail email ID.
- `app_password` (String) — Application-specific password.
- `email_uid` (String) — UID of the email to fetch.

**Returns:** Email message object parsed from raw email bytes.

**Error Handling:** Raises `Exception` if fetching the email fails.

---

## Decode Subject

Decodes a MIME encoded email subject to a readable string.

**Parameters:**
- `raw_subject` (String) — The raw MIME encoded subject.

**Returns:** Decoded subject string.

**Error Handling:** Handles decoding errors by ignoring invalid bytes.

---

## Get Email Body

Retrieves the body of a specific email, trying plain text first and falling back to HTML.

**Parameters:**
- `email_id` (String) — Gmail email ID.
- `app_password` (String) — Application-specific password.
- `email_uid` (String) — UID of the email.

**Returns:** Email body as plain text string.

**Error Handling:** Returns empty string if no body content is found.

---

## Fetch Mail Body By Subject

Gets the body of the latest email that matches the given subject.

**Parameters:**
- `email_id` (String) — Gmail email ID.
- `app_password` (String) — Application-specific password.
- `subject` (String, optional, default `"CareLink™ Personal Verification Code"`) — Subject to match.

**Returns:** Email body of the matched email.

**Error Handling:** Raises `Exception` if no matching email is found.

---

## Wait For Unread Mail Body By Subject

Waits up to a specified timeout for an unread email with the given subject, polling at regular intervals.

**Parameters:**
- `email_id` (String) — Gmail email ID.
- `app_password` (String) — Application-specific password.
- `subject` (String, optional, default `"CareLink™ Personal Verification Code"`) — Subject to match.
- `timeout` (Integer, optional, default `180`) — Maximum wait time in seconds.
- `poll_interval` (Integer, optional, default `5`) — Polling interval in seconds.

**Returns:** Email body of the matched unread email.

**Error Handling:** Raises `Exception` if no matching unread email is received within timeout.

---

## Delete Email By Subject

Deletes all emails from the inbox that match the given subject.

**Parameters:**
- `email_id` (String) — Gmail email ID.
- `app_password` (String) — Application-specific password.
- `subject` (String, optional, default `"CareLink™ Personal Verification Code"`) — Subject to match for deletion.

**Returns:** Integer — Number of emails deleted.

**Error Handling:** Logs errors and returns 0 if deletion fails.