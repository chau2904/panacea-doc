---
title: Setting Up the Panacea Framework
sidebar_position: 2
---

# Setting Up the Panacea Framework

## 1. Setting up Panacea Framework in Visual Studio Code

### Step 1: Install Visual Studio Code

Download and install [Visual Studio Code](https://code.visualstudio.com/) from the official website.

### Step 2: Install Python

- **Download and Install:** Download Python from the [official Python website](https://www.python.org/downloads/release/python-3123/) and install it on your system.
- **Add to PATH:** During installation, ensure the option **"Add Python to your PATH"** is selected.
- **Environment Variable:** Verify that the Python installation path is correctly configured in the system environment variables.

### Step 3: Install Node.js

- **Download and Install:** Download Node.js from the [official website](https://nodejs.org/en/blog/release/v24.14.1) and install it.
- **Environment Variable Setup:** Add Node.js to the system environment variables.
- Ensure that the option to install **npm (Node Package Manager)** is selected during installation.

### Step 4: Clone Panacea Framework

- Clone the **Panacea Framework** from the provided repository.
- Open the cloned project folder in Visual Studio Code.

### Step 5: Configure Visual Studio Code for Panacea Framework

**Install Required Extensions:**
- **Python:** Provides Python language support.

![Platform Overview diagram](/img/python.png)

- **RobotCode:** Enables support for Panacea Framework syntax and related features.

![Platform Overview diagram](/img/robotcode.png)

To install extensions, navigate to the Extensions view in Visual Studio Code (`Ctrl + Shift + X`), search for the required extension, and click **Install**.

## 2. Mobile Automation (Additional Requirements)

### Step 1: Install Java

- **Download and Install:** Download the [Java executable](https://www.oracle.com/java/technologies/downloads/) and complete the installation.
- **Environment Variable Setup:**
  - Configure the `JAVA_HOME` environment variable to point to the JDK installation directory.
  - Add the Java `bin` directory to the system environment variables.

### Step 2: Install Android Studio

- **Download and Install:** Download [Android Studio (SDK)](https://developer.android.com/studio) and install it.
- **Environment Variable Setup:** Set the `ANDROID_HOME` environment variable to reference the Android SDK installation directory.

### Step 3: Install Appium

Open Command Prompt / Terminal and execute the Appium installation command:

```bash
npm install -g appium@3.3.0
```

**Install Required Drivers:**
- Install **UIAutomator2** for Android-only application automation.
- Install **XCUITest** for iOS-only application automation.
- Install the **Flutter driver** for Flutter-based mobile application automation.

```bash
appium driver install uiautomator2@7.1.2
appium driver install xcuitest
appium driver install --source=npm appium-flutter-driver
```

Ensure that all related paths are correctly configured in the environment variables.

![Platform Overview diagram](/img/paths.png)

## 3. Additional Setup on macOS

- Follow the same setup steps outlined above for installing required tools and dependencies.
- Configure all required paths in the `.zshrc` file.
- Install **libimobiledevice** to capture iOS device logs:

```bash
brew install libimobiledevice
```

- Download and install [Xcode](https://developer.apple.com/xcode/), then configure the project as required.

## 4. Create Virtual Environment (panacea_env)

### For Windows

Open **PowerShell** and execute the virtual environment creation command:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Open **Visual Studio Code → Terminal → New Terminal** (`Ctrl + Shift + ~`) from the Panacea root directory, and execute the following commands sequentially:

```powershell
python -m venv panacea_env
cd panacea_env/Scripts
./activate
cd ../..
```

### For macOS

Open **Visual Studio Code → Terminal → New Terminal** (`Ctrl + Shift + ~`) from the Panacea root directory, and execute the following commands sequentially:

```bash
python3 -m venv panacea_env
cd panacea_env/bin/
source activate
cd ../..
```

## 5. Configure Python Interpreter

- Open the **Command Palette** (`Ctrl + Shift + P`).
- Type `Python: Select Interpreter`.
- Select the interpreter named `panacea_env`.
- (If already selected, ignore this step.)

## 6. Install Panacea Test

### Step 1: Clone Panacea Test

Clone the `PanaceaTest.whl` file from the Git repository.

### Step 2: Install Panacea Test

Once the `.whl` (Wheel) file is available locally, install it by executing the following command in the Panacea root directory terminal:

```bash
pip install path/to/PanaceaTest.whl
```

Replace `path/to/` with the actual file location. This installation deploys all required test components necessary for the Panacea Framework to function correctly.

Finally, install browsers for web automation:

```bash
panacea install browsers
```