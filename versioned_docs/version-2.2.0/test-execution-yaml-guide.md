---
title: Test Execution YAML Guide
sidebar_position: 4
---

# Test Execution YAML Guide

## How It Runs Your Tests

### Mobile

Panacea starts one process per device — so two devices run in parallel automatically. Within each device:

1. Runs that device's `specific_tests` first (if any).
2. Then pulls from a shared pool of global tests until it is empty.

Three devices and 10 global tests = all three race to pick from the same pool. One device = runs sequentially, no parallel overhead.

### Web

Panacea calculates workers based on your machine (CPU cores and RAM). All tests go into one shared queue. Each worker grabs a test, waits for a free browser slot, runs it, then picks the next one.

### Report Folder Structure

```
TestResults / <timestamp> / <device or browser> / <suite> / <test> /
    output.xml  |  log.html  |  report.html  |  stdout.txt
```

:::note
`TERMINAL_LOG` is automatically disabled when running in parallel to prevent garbled output. Logs are always saved to `stdout.txt` per test folder.
:::

## YAML Configuration — Mobile

**Required:** `devices`, `testsuite`
**Optional:** `robot_files`, `tags`, `specific_tests`

**Rules:**
- `testsuite` takes exactly ONE directory path.
- `robot_files` entries are filenames only (e.g. `Smoke.robot`) — Panacea finds them inside the `testsuite` folder. Do not include a subfolder path.
- Tags must start with a letter or number.

### Run .robot files across all devices

```yaml
devices:
  - Samsung S21

testsuite:
  - YOUR-FOLDER/TestcaseSuite

robot_files:
  - SmokeTest_Android.robot
```

### Run by tag across all devices

```yaml
devices:
  - Samsung S21

testsuite:
  - YOUR-FOLDER/TestcaseSuite

tags:
  - regression
```

### Different tests per device

```yaml
devices:
  - Samsung S21
  - Samsung S20+

testsuite:
  - YOUR-FOLDER/TestcaseSuite

specific_tests:
  Samsung S21:
    robot_files:
      - SmokeTest_Android.robot
  Samsung S20+:
    tags:
      - sanity
```

S21 runs `SmokeTest_Android.robot`. S20+ runs the "sanity" tag. Neither runs on the other device.

### Mix of global and specific

```yaml
devices:
  - Samsung S21
  - Samsung S20+

testsuite:
  - YOUR-FOLDER/TestcaseSuite

robot_files:
  - RegressionSuite.robot
  - SmokeTest_Android.robot

specific_tests:
  Samsung S21:
    robot_files:
      - SmokeTest_Android.robot
```

`SmokeTest_Android` is claimed by S21 via `specific_tests`, so it is removed from the global list. S21 gets: `SmokeTest_Android` (specific) + `RegressionSuite` (global). S20+ gets: `RegressionSuite` only.

### Run the entire suite

```yaml
devices:
  - Samsung S21

testsuite:
  - YOUR-FOLDER/TestcaseSuite
```

No filters = Panacea runs every `.robot` file found in the suite folder.

## YAML Configuration — Web

**Required:** `browsers`, `testsuite`
**Optional:** `robot_files`, `tags`, `specific_tests`

Same rules as mobile. The browser value (`chrome`, `firefox`, `edge`) is passed directly as the `BROWSER` variable into Robot Framework — make sure it matches what your browser keyword library expects.

### Run by tag across browsers

```yaml
browsers:
  - chrome
  - firefox

testsuite:
  - YOUR-FOLDER/TestSuite

tags:
  - smoke
```

### Run a .robot file across all browsers

```yaml
browsers:
  - chrome

testsuite:
  - YOUR-FOLDER/TestSuite

robot_files:
  - SmokeSuite.robot
```

### Different tests per browser

```yaml
browsers:
  - chrome
  - firefox

testsuite:
  - YOUR-FOLDER/TestSuite

specific_tests:
  chrome:
    robot_files:
      - SmokeSuite.robot
  firefox:
    tags:
      - regression
```

`SmokeSuite` runs only on chrome. "regression" runs only on firefox.

### Run the entire suite

```yaml
browsers:
  - chrome

testsuite:
  - YOUR-FOLDER/TestSuite
```

## Common Mistakes

:::danger Avoid these common YAML mistakes

**Missing `.robot` extension:**
```
- SmokeTest_Android        ❌ WRONG
- SmokeTest_Android.robot  ✅ CORRECT
```

**`robot_files` entry is a path, not a filename:**
```
- subfolder/SmokeTest.robot  ❌ WRONG (use the filename only)
- SmokeTest.robot            ✅ CORRECT
```

**Tags with `.robot` extension:**
```
- regression.robot  ❌ WRONG
- regression        ✅ CORRECT
```

**Tags not starting with a letter or number:**
```
- _regression  ❌ WRONG
- regression   ✅ CORRECT
```

**Device/browser in `specific_tests` not declared at the top:**
```yaml
devices:
  - Samsung S21
specific_tests:
  Samsung S20+:    # ❌ WRONG — S20+ was never declared in devices
```

**More than one `testsuite` path:**
```yaml
testsuite:
  - YOUR-FOLDER/SuiteA   # ❌ WRONG — only one directory is allowed
  - YOUR-FOLDER/SuiteB
```

**Other issues:**
- Duplicate device/browser names
- Missing `testsuite` key

