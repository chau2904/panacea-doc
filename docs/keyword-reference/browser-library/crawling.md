---
title: CrawlingTestLibrary
sidebar_position: 10
---

# CrawlingTestLibrary

## Crawl Site

Crawls all pages reachable within the domain of the given URL by following internal `<a href>` links and executes `page_crawl_keyword` on each page.

**Parameters:**
- `url` (String, optional) — If not provided, crawling begins from the currently open page.
- `page_crawl_keyword` (String, optional, default `take_screenshot`)
- `max_number_of_page_to_crawl` (Integer, optional, default `1000`)
- `max_depth_to_crawl` (Integer, optional, default `50`)

**Returns:** List — A list of all crawled URLs.

**Error Handling:** Raises `Exception` if the crawl cannot be started. Pages that fail to load during crawling are skipped with a warning and do not cause the keyword to fail.