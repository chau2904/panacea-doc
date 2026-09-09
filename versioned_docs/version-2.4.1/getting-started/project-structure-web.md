---
title: Project Structure (Web)
sidebar_position: 3
---

# Project Structure (Web)

![Platform Overview diagram](/img/webdemo.png)

## ConfigFiles

- **testdata.yaml:** A YAML file for storing test data used across the project.

## PageObject

- **keywords:** Contains Python files or modules that define high-level test actions (keywords) for automation, following the Page Object Model (POM) design pattern.
- **locators:** Stores locators or elements used for finding web elements during testing, potentially in the form of XPath, CSS selectors, or IDs.

## TestSuite

This folder contains test scripts.

`Web_Test.robot`

![Platform Overview diagram](/img/webtest.png)

## TestResults

Stores the results of executed test cases, including logs and reports.

![Platform Overview diagram](/img/webtestresults.png)

## test_execution.yaml

![Platform Overview diagram](/img/webyaml.jpg)

### Configuration Fields

| Key | Description |
| --- | --- |
| `browsers` | Specifies the list of browsers on which the tests should be executed. Supported values: `chrome`, `edge`, `firefox`. |
| `testsuite` | Defines the path to the test suite folder containing the test cases to be executed. Example: `ZimetricsWebDemo/TestSuite` |
| `robot_files` (Optional) | Lists specific `.robot` files to execute within the test suite. If not provided, all files in the suite may be picked up. Example: `Web_Test.robot`, `Smoke_Test.robot` |
| `tags` (Optional) | Filters and runs only those test cases that match the specified tags across all browsers. Example: `PANACEA-81`, `PANACEA-80` |
| `specific_tests` (Optional) | Allows browser-specific tag filtering. Tests under each browser key will only run on that particular browser using the specified tags. Example: `chrome` → `PANACEA-77`, `edge` → `PANACEA-78`, `firefox` → `PANACEA-79` |

:::note
`robot_files`, `tags`, and `specific_tests` are optional fields. If neither is provided, all tests within the specified `testsuite` will be executed across all listed browsers.
:::

**Test Distribution Behavior:** Whether you are running tests via tags, specific `robot_files`, or the entire `testsuite`, all selected tests will be distributed and executed across every browser listed under the `browsers` key. This means if 3 browsers are configured (`chrome`, `edge`, `firefox`) and 2 tags are specified, the matching tests will run once per browser, ensuring full cross-browser coverage automatically.