---
title: Panacea Log Lens
sidebar_position: 3
---

# Panacea Log Lens (Smart Log Viewer)

**Panacea Log Lens** is a powerful and intuitive **log visualization tool** that simplifies and accelerates debugging. It provides a **unified, timestamp-aligned view of logs** from multiple sources—such as ADB, Appium, BLE, and more—down to the specific **test step level**.

## Features

- **Multi-source Log Syncing:** View logs from ADB, Appium, BLE, etc., aligned by timestamp.
- **Real-time Context:** Focus on logs for a specific step or test case.
- **Simplified Debugging:** Quickly identify failures and cross-layer issues.
- **Interactive Viewer:** Easily switch between test steps to inspect related logs.

## Setting Up Panacea Log Lens

### 1. Configuration Setup

- Add the required configuration to `testdata.yaml`.
- Keep the provided data unchanged.

![Platform Overview diagram](/img/panaceacoredata.png)

### 2. Test Execution

1. Update the `LOG_LENS` flag from `False` to `True` in the runner file.
2. Execute the tests using `runner.py`.
3. Once the execution is complete, a log entry will appear in the terminal. Open the displayed port using `Ctrl + Click`.

![Platform Overview diagram](/img/info.png)

4. Navigate to your **test result folder**.
5. Open either:
   - `log.html` and click **"Log Lens"** at the top right, or

![Platform Overview diagram](/img/testcasesuitereport.png)

   - Open `log_viewer.html` directly.

### Explore Logs for Specific Steps

![Platform Overview diagram](/img/log.png)

- Use the **dropdown** to select a test case or keyword step.

![Platform Overview diagram](/img/testcasedropdown.png)

- View **synced logs side-by-side** for easy debugging and analysis.

![Platform Overview diagram](/img/adbappiumlogs.png)
