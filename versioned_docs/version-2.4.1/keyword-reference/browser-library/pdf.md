---
title: PDFTestLibrary
sidebar_position: 12
---

# PDFTestLibrary

## Save Page As PDF

Saves the current browser page as a PDF file. Only supported in Chromium headless.

**Parameters:**
- `path` (String, required)
- `display_header_footer` (Boolean, optional, default `False`)
- `footer_template` (String, optional, default empty string)
- `format` (PdfFormat, optional, default `Letter`)
- `header_template` (String, optional, default empty string)
- `height` (String, optional, default `0px`)
- `landscape` (Boolean, optional, default `False`)
- `margin` (PdfMarging, optional, default all `0px`)
- `outline` (Boolean, optional, default `False`)
- `page_ranges` (String, optional, default empty string — all pages)
- `prefer_css_page_size` (Boolean, optional, default `False`)
- `print_background` (Boolean, optional, default `False`)
- `scale` (Float, optional, default `1`)
- `tagged` (Boolean, optional, default `False`)
- `width` (String, optional, default `0px`)

**Returns:** String — The absolute path to the saved PDF file.

**Error Handling:** Raises `Exception` if saving the PDF fails.

---

## Emulate Media

Changes the CSS media type and/or media feature emulation for the current page.

**Parameters:**
- `color_scheme` (ColorScheme or None, optional) — `light`, `dark`.
- `forced_colors` (ForcedColors or NotSet, optional)
- `media` (Media or None, optional) — `screen`, `print`.
- `reduced_motion` (ReducedMotion or None, optional) — `reduce`, `no-preference`.

**Returns:** None

**Error Handling:** Raises `Exception` if media emulation fails.