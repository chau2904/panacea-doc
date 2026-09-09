---
title: Detailed Feature Guide
sidebar_position: 1
---

# Detailed Feature Guide

The **Panacea Framework** provides advanced capabilities such as keyword-driven automation, flexible variable management, and robust control structures. These features enable the creation of scalable, maintainable, and reusable automated test cases across multiple system layers.

## Integration with Simulators, Emulators, and Physical Devices

**Panacea Test** supports seamless integration with simulators, emulators, and real physical hardware. This capability allows the framework to be effectively used across all phases of application development and evolution, from early simulation-based testing to full hardware validation.

### Integration with Simulators

![Platform Overview diagram](/img/layers.png)


Simulated functionality of a device or system component can be exposed to Panacea Test for automated validation. Keywords responsible for receiving data from external components can invoke simulator interfaces—such as API endpoints—to retrieve data and perform functional verification.

This approach enables early-stage testing without dependency on physical hardware availability.

### Integration with Emulators and Physical Devices

**Hardware Communication in Panacea Test**

Panacea Test enables automated communication with emulators and real physical devices through an **edge-wrapper** deployed on a hardware board (for example, a Raspberry Pi).

**Key characteristics include:**

- The hardware board hosts an API-based web server to receive commands from Panacea test cases.
- Commands are processed by the edge-wrapper, which invokes corresponding emulator or hardware functions using supported protocols such as UART, Wi-Fi, or USB.

**Edge Wrapper Library**

- Developed in C, the Edge Wrapper Library acts as a bridge between the Go-based server and the hardware or emulator under test.
- Abstracts low-level hardware interactions and exposes standardized APIs for automation consumption.

**Go Server**

- Serves as the central communication component within Panacea.
- Receives commands from Panacea test cases and coordinates execution on the target device.
- Exchanges data with the Edge Wrapper Library and manages command execution workflows.