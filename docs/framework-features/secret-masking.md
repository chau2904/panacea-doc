---
title: Secret Masking
sidebar_position: 7
---

# Secret Masking

Panacea automatically hides sensitive values — passwords, API keys, tokens — across all test output. You never put real credentials in your config files or repository. Instead you use `${ENV:VAR_NAME}` as a placeholder in any YAML or JSON file inside `ConfigFiles/`, and supply the real value through the environment.

![Platform Overview diagram](/img/secretmaskingyaml.png)

## How to Use It

Locally, create a `.env` file at the project root with the real values — Panacea picks it up automatically. In CI/CD, inject them as pipeline environment variables (GitHub Actions secrets, Jenkins credentials, etc.).

Load your config using any DataLoader keyword (`Get Section From File`, `Get Value From File`, `Get All Data From File`) — that is what triggers the masking registration.

![Platform Overview diagram](/img/secretmaskingtestdata.png)

## How It Appears

Anywhere the real value would have appeared — keyword arguments, log messages, response bodies — it is replaced with `*****`. This applies to `log.html`, `output.xml`, `.log`, `.csv`, and `.txt` files.

Reports shared with stakeholders or uploaded to ALM, S3, or OpenSearch contain no sensitive data.

![Platform Overview diagram](/img/secretmaskingreport.png)