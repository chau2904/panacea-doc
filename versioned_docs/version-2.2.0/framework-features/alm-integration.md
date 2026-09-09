---
title: ALM Integration
sidebar_position: 4
---

# ALM Integration

## TestRail via TRCLI Integration

TestRail Integration enables seamless reporting of test results and artifact uploads to TestRail, an ALM (Application Lifecycle Management) tool. It leverages TRCLI for automation, allowing you to automatically create and update test runs, and attach logs and reports after execution.

### Features

- **Automated Test Result Upload:** Sends Panacea Framework results (`output.xml`) directly to TestRail.
- **Dynamic Test Run Creation:** Automatically creates or updates runs using test names.
- **Attachment Support:** Uploads `log.html`, `report.html`, and `output.xml` as test run attachments.

## Xray + Jira Integration with Panacea Automation Framework

This feature allows automatic publishing of Panacea Framework test execution results to **Xray Test Execution** issues and updating **Jira issue statuses** based on test outcomes. It also supports uploading test evidence (logs, reports) to Jira.

### Key Features

**Xray Integration:**
- Upload test results (`output.xml`) directly to a Test Execution
- Attach logs/screenshots to specific test runs
- Authenticates securely via client ID & secret

**Jira Integration:**
- Transition Jira issues (e.g., from "To Do" to "Done") based on test result (PASS or FAIL)
- Automatically upload zipped test result folders to Jira issues

### Setup Instructions

**1. Add Config in `testdata.yaml`**

Update the following section with your project-specific credentials. Update the `success_status` and `fail_status` according to your project workflow.

![Platform Overview diagram](/img/jiradata.jpg)

**2. Test Execution**

Update the flag `"ALM": False` to `True` in the runner file. Then start the execution using the `runner.py` file.

This will:
- Execute tests listed in `test_execution.csv`
- Upload results to Xray
- Attach reports to Jira
- Transition the issue to "In Progress" or "To Do" based on pass/fail status

### How It Works

- **XrayUtils** authenticates and pushes Robot `output.xml` to the given Test Execution
- **JiraUtils:**
  - Zips the report folder and uploads it to the Test Execution issue
  - Transitions the issue based on test outcome
- All network errors, missing files, or failed transitions are handled with descriptive logs