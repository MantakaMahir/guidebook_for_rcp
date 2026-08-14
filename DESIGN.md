# Design System

<!-- impeccable:design-schema 1 -->

## Direction

Debugger-trace documentation inside the Research Collaboration Platform visual world. The guide is not a generic docs site: it reads like stepping through a call stack from browser to Oracle.

## Visual World

- Mineral white canvas: `#f6f7f4`, with the same faint dotted-grid texture used by the RCP app.
- Graphite text: `#151816`.
- Scholarly green accent: `#0b5c3b`.
- Translucent white panels: `rgb(255 255 255 / 74-82%)` with `#d9ded7` borders.
- Dark workspace/call-stack sidebar: `#111916`, inherited from the RCP dashboard navigation.
- Rounded but restrained radii: `0.65rem` to `1rem`.

## Typography

- Geist is intentionally retained because the user chose visual continuity with the RCP app.
- Headings use tight tracking and high weight, matching `src/app/globals.css` from the app.
- Code uses the system monospace stack with scrollable, non-wrapping code blocks.

## Layout Grammar

- Desktop uses a two-column trace shell: sticky dark call stack on the left, readable source pane on the right.
- Mobile collapses the call stack into a horizontal sticky rail.
- Pages are numbered traces, and sections are numbered steps with a vertical stepping line.
- Code frames always include file path and line range.

## Components

- `stack-nav`: dark call-stack navigation.
- `trace`: main reading pane.
- `step`: numbered debugger step.
- `code-frame`: source panel with provenance header.
- `callout analogy`: Java/C/C++ mental-model bridge.
- `callout breakpoint`: caution or security boundary.
- `pager`: previous/next trace control.

## Accessibility

- Skip link present on every page.
- Real links and semantic headings are used throughout.
- Focus rings use the RCP ring color.
- Code blocks scroll horizontally instead of wrapping, preserving code shape.

## Finish Notes

Mechanical detector warning for Geist is accepted because matching the RCP app is an explicit user requirement.
