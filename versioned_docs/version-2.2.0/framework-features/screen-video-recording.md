---
title: Screen Video Recording (Android)
sidebar_position: 2
---

# Screen Video Recording (Android)

Screen Video Recording is a built-in feature in the Panacea automation framework, automatically triggered via framework hooks during test execution. Recording starts at the beginning of each test suite and stops at teardown — no manual keyword calls are required.

## Features

- **Automatic Test Session Recording:** Starts and stops recording automatically via hooks at suite setup/teardown.
- **Visual Debugging:** Provides video evidence for failed tests or flaky behavior.
- **Seamless Integration:** Recordings are saved alongside logs and reports in your `REPORT_DIR`.

## Setting Up Screen Recording

### Prerequisites: Install FFmpeg

FFmpeg must be installed on your machine to enable video encoding and file saving.

**Installation Steps (Windows):**

1. Download FFmpeg from the [official site](https://ffmpeg.org/download.html).
2. Under "Get packages & executable files", click **Windows**.
3. Choose **gyan.dev** or **BtbN** (precompiled builds).
4. Under "Release builds", download: `ffmpeg-release-essentials.zip` (not the source code).
5. Extract the ZIP (e.g., to `C:\ffmpeg`).
6. Open the extracted folder and locate the `bin` folder.
7. Copy the full path to the `bin` folder (e.g., `C:\ffmpeg\bin`) and add it to your Environment Variables (System Path).

### Enable Screen Recording

In your `device_details.json`, set the following capability for the device:

```json
{
  "screenRecording": true
}
```

Once FFmpeg is installed and this flag is set to `true`, recording will automatically start when the test suite begins and stop when it finishes.

:::note
If `screenRecording` is set to `false` or omitted, recording is skipped silently — no other changes to test scripts are required.
:::