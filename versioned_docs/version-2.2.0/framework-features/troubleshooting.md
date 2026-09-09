---
title: Troubleshooting
sidebar_position: 15
---

# Troubleshooting

## Common Issues and Solutions

When working with the Panacea Test, you might encounter various issues that can hinder your test automation efforts. This section provides solutions to some of the most common problems faced by users.

### 1. Test Cases Not Found

**Issue:** Panacea Framework cannot find your test cases, resulting in an error message such as "No test cases found."

**Solution:**

- **Check File Extensions:** Ensure that your test files have the correct extensions (.Robot, .txt, .csv).

- **Verify Test Case Names:** Make sure that your test cases are correctly defined and named within the test files.

- **Directory Structure:** Ensure that your test files are placed in the appropriate directories and that you are running the tests from the correct location.

- **Command Line Usage:** Verify that you are using the correct command line options and paths when running your tests.

### 2. Library Import Errors

**Issue:** Framework cannot import the specified library, resulting in an error message like "Importing test library failed."

**Solution:**

- **Library Installation:** Ensure that the library is correctly installed. Use **pip list** to check if the library is installed.

- **Library Path:** Verify that the library is located in the correct directory and that the path is correctly specified in your test suite.

- **Library Spelling:** Double-check the spelling and case of the library name in your test suite.

- **Python Path:** Ensure that your Python environment is correctly set up and that Panacea Framework can access the installed libraries.

### 3. Keyword Not Found

**Issue:** A keyword used in your test case is not recognized, resulting in an error message such as "Keyword 'KeywordName' not found."

**Solution:**

- **Correct Spelling:** Ensure that the keyword name is spelled correctly and matches the defined keyword in the library or resource file.

- **Library Import:** Confirm that the appropriate library or resource file containing the keyword is imported at the beginning of your test suite.

- **Alias Usage:** If you are using an alias for the library, ensure that the alias is correctly used when calling the keyword.

- **Scope Issues:** Check if the keyword is defined within the correct scope (e.g., global or suite scope) and is accessible where it is called.

### 4. Variable Not Found

**Issue:** A variable used in your test case is not recognized, leading to an error message such as "Variable not found."

**Solution:**

- **Variable Declaration:** Verify that the variable is correctly declared and initialized in the test case or resource file.

- **Correct Scope:** Ensure that the variable is declared within the correct scope and is accessible from where it is called.

- **Variable Spelling:** Double-check the spelling and case of the variable name.

- **Dynamic Variables:** If using dynamic variables, ensure that they are correctly generated and accessible at runtime.

### 5. Unexpected Behaviour

**Issue:** Tests are not behaving as expected, causing failures or inconsistent results.

**Solution:**

- **Clear Cache:** Clear any caches or temporary files that might be affecting the test results.

- **Check Dependencies:** Ensure that all dependencies (libraries, external tools, etc.) are correctly installed and configured.

- **Isolate Test Cases:** Run test cases individually to identify if a specific test is causing issues.

- **Review Logs:** Examine the Panacea Framework logs and reports for detailed information about test execution and errors.

- **Environment Consistency:** Make sure that the test environment is consistent, including system settings, browser versions, and other configurations.

### 6. Test Execution Performance

**Issue:** Tests are running slower than expected.

**Solution:**

-**Optimize Test Cases:** Review and optimize test cases to eliminate unnecessary steps and improve efficiency.

- **Parallel Execution:** Use parallel test execution to run multiple tests simultaneously and reduce overall execution time.

- **Resource Management:** Ensure that system resources (CPU, memory, etc.) are adequately available and managed during test execution.

- **Network Latency:** Check for network issues that might be causing delays, especially for tests involving web applications or remote systems.

## Debugging Tests in Panacea Framework

Debugging is a crucial step in the test development process, allowing you to identify and fix issues in your test cases and automation scripts. Panacea Framework offers various techniques and tools to aid in debugging tests effectively.

### Techniques for Debugging

#### 1. Using Logs and Reports

**Panacea Framework** generates detailed logs and reports after test execution. These logs and reports provide valuable insights into the execution flow and any errors encountered.

- **Log File**: Provides a detailed, step-by-step execution log, including keyword execution, arguments, and any errors. The log file is in HTML format and can be viewed in any web browser.

- **Report File**: Provides a summary of the test execution, including the overall status, pass/fail counts, and high-level statistics.

#### 2. Using the Built-in Library

The **Built-in** library in Panacea Framework provides keywords for debugging purposes, such as **Log**, **Log To Console**, **Log Variables**, and **Pause Execution**.

![Platform Overview diagram](/img/debugging.png)


#### 3. Running Tests in a Step-by-Step Mode

Running tests in a step-by-step mode can help identify the exact point of failure:

**Dry Run Mode**: Executes the tests without performing any actions. This is useful for checking the syntax and structure of the tests.

![Platform Overview diagram](/img/dryrunmode.png)


### Tools for Debugging

#### 4. Visual Studio Code (VS Code)

VS Code, another popular IDE, can be configured to support Panacea Framework with the help of extensions.

**Debugging**: Use the **Debug** feature in VS Code to step through your Panacea Framework test cases.