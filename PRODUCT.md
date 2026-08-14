# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS + local vendored highlight.js. Deployed to GitHub Pages at `mantakamahir.github.io/rcp-guide`. No build step, no framework — chosen deliberately so the team being taught can read every line of the guide site itself.

## Users

Primary: the RCP project team — programmers who know C/C++ and Java and DBMS basics (most SQL commands) but have zero software-development experience with web systems: they do not know how frontends, backends, HTTP, or full-stack apps work. They read on desktop/laptop, side-by-side with their editor and the real RCP codebase.

## Product Purpose

A teaching guide that makes the Research Collaboration Platform fully comprehensible: every function, library, import, database connection, and DBMS concept as implemented in the real software. Success means a team member can trace any feature from browser to Oracle and explain why it is built that way.

## Positioning

Not generic web documentation: every explanation is anchored to a real snippet from the actual RCP repository, with file path and line references, mapped onto concepts the team already knows from C/C++/Java and DBMS coursework.

## Operating Context

Read at `https://mantakamahir.github.io/rcp-guide/` during team learning sessions, alongside the RCP source tree at `D:\DBMS\PROJECT MAIN`. Hosted on GitHub Pages from the `rcp-guide` repository.

## Capabilities and Constraints

- 11-page fixed spine: web basics → architecture → frontend → backend → Node↔Oracle → schema → PL/SQL → security → features → testing → deployment.
- All code excerpts are verbatim from the RCP repo, escaped into HTML, with `file:line` provenance.
- No JavaScript frameworks, no server, no cookies; works offline after first load (vendor assets stored locally).
- Code blocks must stay legible at desktop widths next to an editor; horizontal scroll acceptable, wrapping is not.

## Brand Commitments

The guide visually matches the RCP application (user decision): palette, fonts, and component language are inherited from the RCP site's globals.css, not invented anew.

## Evidence on Hand

- RCP source tree: `D:\DBMS\PROJECT MAIN` (93 tracked files under src/).
- RCP visual truth: `src/app/globals.css`, `src/app/layout.tsx`, live at `rcp-research.vercel.app`.
- Key teaching snippets already gathered: `db-core.ts`, `auth.ts`, `passwords.ts`, register route, `researchers/page.tsx`, `auth-form.tsx`, `posts.ts`, `01_schema.sql`, `03_views_and_plsql.sql`, `06_enhanced_er_migration.sql`, `passwords.test.ts`.

## Product Principles

1. Real code over paraphrase: every claim points at an actual file and line.
2. Teach by analogy: map each web concept to the C/C++/Java/DBMS equivalent the team already owns.
3. Reading order is learning order: pages build on previous pages, never assume a later one.
4. The guide's own code must be simple enough that the team can read the guide's source too.
