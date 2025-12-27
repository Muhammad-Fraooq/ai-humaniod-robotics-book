---
title: "Fix Search Functionality Bug"
description: "Resolve the 'document not found' error in the search bar."
---

## 1. Introduction

The current search functionality is broken. When a user searches for a book in the search bar, it returns a "document not found" error. This is because of a conflict between multiple search plugins.

## 2. User Story

As a user, I want to be able to search for books and get relevant results, so that I can easily find the content I am looking for.

## 3. Acceptance Criteria

- When a user types a search query in the search bar, the search results should be displayed correctly.
- The "document not found" error should no longer appear for valid search queries.
- The search functionality should be powered by Algolia, as intended.

## 4. Technical Details

The root cause of the bug is a configuration conflict between multiple search plugins (`@docusaurus/theme-search-algolia`, `docusaurus-plugin-search-local`, `@cmfcmf/docusaurus-search-local`).

The fix involves:
- Removing the conflicting local search plugins.
- Correctly configuring the Algolia search plugin in `docusaurus.config.ts`.
- Installing the correct dependencies.
