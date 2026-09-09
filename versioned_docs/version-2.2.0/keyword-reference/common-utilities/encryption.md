---
title: Encryption Keyword Library
sidebar_position: 3
---

# Encryption Keyword Library

Keywords for generating secure keys and encrypting or decrypting data using Fernet encryption.

## generate_key

Generates a new Fernet key that can be used for encryption and decryption.

**Parameters:** None

**Returns:** String — A base64-encoded Fernet key.

**Error Handling:** Raises `Exception` if key generation fails.

---

## encrypt_string

Encrypts a plaintext string using the provided Fernet key.

**Parameters:**
- `plain_text` (str, required) — The plaintext string to encrypt.
- `key` (str, required) — A base64-encoded Fernet key.

**Returns:** String — The base64-encoded encrypted string.

**Error Handling:** Raises `Exception` if encryption fails (e.g., invalid key or plaintext).

---

## decrypt_string

Decrypts an encrypted string using the provided Fernet key.

**Parameters:**
- `encrypted_text` (str, required) — The base64-encoded encrypted string.
- `key` (str, required) — A base64-encoded Fernet key.

**Returns:** String — The decrypted plaintext string.

**Error Handling:** Raises `Exception` if decryption fails (e.g., invalid key or invalid ciphertext).