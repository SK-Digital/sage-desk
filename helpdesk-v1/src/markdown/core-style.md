# SageDesk Core Style Guide

## Teal Thin Lines & Hover Effects
- All boxes, modals, graphs, and key UI containers must use a thin teal border (`border-brand-500` or `#14b8a6`), matching the sidebar nav accent.
- On hover, these elements should have a consistent glow or grow effect (e.g., teal box-shadow or border transition). Use the `.hover:teal-glow` utility for this effect.
- All transitions should be smooth and visually appealing.

## Text & Color Compatibility
- Always use white or black text for maximum contrast, depending on background.
- All text and borders must be fully compatible with both dark mode and light mode.
- Avoid color combinations that reduce readability or accessibility.

## Consistency
- The teal border and hover effect must be applied consistently across all interactive and informational containers (stat boxes, modals, analytics charts, etc.).
- Do not use other accent colors for borders unless specifically required for status indication.

## Reference & Rules
- This file must be referenced in `currsorrules`.
- `structure.md` must be updated to reflect the current file structure and core features, only including what is implemented (marking mockups as mockups).
- All contributors must follow this style guide for any new UI components or containers. 