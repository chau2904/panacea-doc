---
title: ClockTestLibrary
sidebar_position: 7
---

# ClockTestLibrary

## Set Time

Sets the time of the browser's internal clock. Three clock types are supported: `install` sets up fake timers for manual control of time flow; `fixed` makes `Date.now` and `new Date()` always return the specified fake time while keeping all timers running; `system` sets the current system time without triggering any timers.

**Parameters:**
- `time` (DateTime, required)
- `clock_type` (ClockType, optional, default `install`) — `install`, `fixed`, `system`.

**Returns:** None

**Error Handling:** Raises `Exception` if setting the clock time fails.

---

## Resume Clock

Resumes the browser clock after it has been paused. Time resumes flowing normally and timers are fired as usual.

**Parameters:** None

**Returns:** None

**Error Handling:** Raises `Exception` if resuming the clock fails.

---

## Pause At

Advances the clock by jumping forward to the given time and then pauses it. Simulates a user closing a laptop and reopening it at the specified time. The clock cannot be moved backwards using this keyword.

**Parameters:**
- `time` (DateTime, required) — Must be a future time relative to the current clock time.

**Returns:** None

**Error Handling:** Raises `Exception` if pausing the clock fails.

---

## Advance Clock

Advances the browser clock by the specified duration. `fast_forward` jumps forward and only fires due timers at most once. `run_for` advances the clock by firing all time-related callbacks within the elapsed duration.

**Parameters:**
- `time` (Timedelta, required)
- `advance_type` (CLockAdvanceType, optional, default `fast_forward`) — `fast_forward`, `run_for`.

**Returns:** None

**Error Handling:** Raises `Exception` if advancing the clock fails.