---
title: Project Structure (Mobile)
sidebar_position: 4
---

# Project Structure (Mobile)

![Platform Overview diagram](/img/mobiledemo.jpg)

## Builds/

- Holds the compiled mobile application builds (IPA and APK files).
- These are the applications under test.

## ConfigFiles/

Configuration files necessary for the test execution, such as device information and test data.

- **deviceDetails.json:** Stores device-related details (e.g., device name, OS, appium-capabilities, etc.).
- **testdata.yaml:** A YAML file for storing test data used across the project.

## PageObject/

Implements the **Page Object Model (POM)** pattern for the application under test.

Separates: Test logic from UI locators and actions.

### keywords/

- Holds keyword files containing reusable test steps.
- Panacea Framework keyword resource file for mobile application testing.
- Contains keywords for actions like:
  - Loading device and test data
  - Setting up and tearing down the test environment
  - Waiting for a specified time
  - Toggling Bluetooth and Flight Mode (on/off)
- Supports both **Android** and **iOS** platforms.
- Utilizes the **mob library** for mobile device interaction.

### locators/

- Contains locator files with UI element locators used in the tests.

## ReliabilitySuite/

Dedicated folder for **reliability testing** cases, including:

- Reconnection of a device to a mobile app after **Bluetooth** or **Flight Mode** toggling.

Example file:

- `Bluetooth_Toggle.robot`

![Platform Overview diagram](/img/mobiletest.png)


## TestResults/

![Platform Overview diagram](/img/mobileresults.png)

Stores the results of executed test cases, including logs and reports.

## test_execution.yaml

![Platform Overview diagram](/img/mobileyaml.jpg)

Used to manage and trigger test execution for multiple mobile devices. Each row corresponds to a unique device and includes all necessary configurations for running its tests.