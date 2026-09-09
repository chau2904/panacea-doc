---
title: Panacea OpenSearch Integration
sidebar_position: 5
---

# Panacea OpenSearch Integration

Panacea seamlessly integrates with OpenSearch to enable centralized and searchable logging of test execution data—indexed by Rig ID, test case, and test step.

This powerful feature removes the dependency on local logs and allows real-time querying, deep analysis, and smart visual debugging.

## Key Features

- **Centralized Logging:** Logs from every test execution (including ADB, Appium, BLE, system, etc.) are pushed to Elasticsearch, tagged with contextual metadata.
- **Searchable & Indexed Logs:** Query logs by:
  - Rig ID (device/environment identifier)
  - Test case name
  - Test step / keyword
  - Error or stack trace content
- **Instant Debugging:** Instantly find failed test steps and navigate through surrounding logs for root cause analysis.
- **Integrate with any visualization tool of your choice.**

## Setup Instructions

1. Add config in `testdata.yaml`.
2. Update the following section with your project-specific credentials.

![Platform Overview diagram](/img/opensearchdata.png)

3. **Test Execution:** Update the `"OpenSearch"` flag from `False` to `True` in the runner file.
4. Initiate the execution using the `runner.py` file; the logs will be visible in the terminal.

![Platform Overview diagram](/img/opensearchlogs.png)

Open the URL configured in your `test_data.yaml` file for the OpenSearch Dashboards instance running on port **5601**.

![Platform Overview diagram](/img/opensearchdashboard.png)

From there, test execution logs can be filtered and reviewed based on the execution data.