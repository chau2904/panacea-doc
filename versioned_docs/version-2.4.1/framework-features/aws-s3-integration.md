---
title: AWS S3 Integration
sidebar_position: 8
---

# AWS S3 Integration

**Panacea** supports seamless uploading of test execution artifacts—such as logs, reports, screenshots, and videos—to Amazon S3 for centralized, long-term storage, easy sharing, archiving, and integration with CI/CD pipelines or reporting dashboards.

After each test run, the latest results folder is automatically compressed and uploaded to a configurable Amazon S3 location using a structured path that includes the execution ID and rig ID.

## Key Features

- **Automatic Artifact Zipping and Upload:** The most recent test results folder is compressed into a ZIP file and uploaded to Amazon S3.
- **Organized Storage:** Artifacts are stored under a configurable base key with dynamic sub-paths:

base_key / execution_id / rig_id / results.zip

This structure enables easy identification and retrieval of results by run or device/rig.
- **Secure and Configurable:** AWS credentials and region are sourced from the configuration file; no hard-coded secrets are used.
- **Cleanup:** The local ZIP file is automatically deleted after a successful upload to conserve disk space.

## Setup Instructions

1. Add the required configuration to `testdata.yaml`.
2. Update the `aws_data` section in `testdata.yaml` with the appropriate AWS credentials and Amazon S3 details.

![Platform Overview diagram](/img/awsdata.png)

## Test Execution

Update the flag `"AWS_S3": False` to `True` in the runner file. Then start the execution using the `runner.py` file.

Logs similar to the following will be displayed in the terminal during and after execution.

![Platform Overview diagram](/img/awslogs.png)

## Accessing Artifacts

1. Log in to the AWS Management Console → S3 → your bucket.
2. Navigate to the path: `panacea/test-runs/<execution_id>/<rig_id>/`
3. Download the result file.

![Platform Overview diagram](/img/awsdashboard.png)