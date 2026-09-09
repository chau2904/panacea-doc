---
title: Test Execution Overview
sidebar_position: 5
---

# Test Execution Overview

## Running Tests using runner.py for Web

### Step 1: Update the YAML File

**File:** `test_execution.yaml`

Open the `test_execution.yaml` file and add or update the following columns:

- **browsers** – List the browsers to run tests on (e.g., `chrome`, `firefox`, `edge`).
- **testsuite** – Specify the path(s) to the test suite folder(s) to execute.
- **robot_files** – (Optional) Specify individual `.robot` files to run.
- **tags** – (Optional) Filter test cases by one or more tags across all browsers.
- **specific_tests** – (Optional) Per-browser tag filters for targeted test selection.

![Platform Overview diagram](/img/testexecution.jpg)

### Step 2: Execute the Tests

**File:** `runner.py`

Open the `runner.py` file. Right-click anywhere inside the file. Select **Run Python File in Terminal**. The script will read `test_execution.yaml` and execute the tests on each specified browser.

![Platform Overview diagram](/img/runner.png)

## Running Tests using runner.py for Mobile

Before starting execution, connect the device to your system and ensure that **Developer Options** and **USB Debugging** are enabled.

### Step 1: Update Device Details

**File:** `device_details.json`

Modify or add your device capabilities in the `device_details.json` file to include the necessary updates:

- **DeviceName**
- **PlatformVersion**
- **PlatformName**
- **OSName**
- **App:** Specify the path of the application you want to test and update `appPackage` and `appActivity`.
- **UDID:** Update the unique device identifier (UDID) for each device.
- **Appium-URL:** Update the Appium URL capability for your device.

![Platform Overview diagram](/img/appiumurl.png)

:::note Only for iOS
Update the following in `device_details.json`:
- **wdaLocalPort**
- **wdaProjectPath**
:::

![Platform Overview diagram](/img/wdadetails.png)

### Step 2: Update the YAML File

**File:** `test_execution.yaml`

Open the file and add/update the following columns:

- **devices** – List device names exactly as defined in `device_details.json`.
- **testsuite** – Specify path(s) to the test suite folder(s).
- **robot_files** – (Optional) Specify individual `.robot` files to run.
- **tags** – (Optional) Run only tests matching these tags across all devices.
- **specific_tests** – (Optional) Per-device tag filters for targeted test selection.

![Platform Overview diagram](/img/yaml.jpg)

**Execution Behavior:**
- All listed devices run their tests in parallel.
- The `tags` key filters tests globally across all devices.
- The `specific_tests` key allows per-device granular filtering — only the specified tags run for that device.

### Step 3: Execute the Tests

**File:** `runner.py`

Open the `runner.py` file. Right-click anywhere inside the file. Click **Run Python File in Terminal**. The script reads `test_execution.yaml` and executes tests on each specified device simultaneously.

![Platform Overview diagram](/img/runner2.png)