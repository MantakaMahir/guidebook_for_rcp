# RCP Trace Guide

A teaching site that walks the Research Collaboration Platform team through the full stack: browser to Oracle: using real code from the real repository.

Live: https://mantakamahir.github.io/rcp-guide/

## What this is

Eleven traces plus two appendices, each following or indexing one path through the system:

| Trace | Page | Topic |
|---|---|---|
| 01 | `index.html` | How the web works: HTTP, clients, servers |
| 02 | `architecture.html` | Folder map and layer boundaries |
| 03 | `frontend.html` | React pages, JSX, server vs client components |
| 04 | `backend.html` | API routes, following a registration |
| 05 | `database.html` | node-oracledb pool, binds, transactions |
| 06 | `schema.html` | Tables, constraints, sequences |
| 07 | `plsql.html` | Triggers, views, packages |
| 08 | `security.html` | Password hashing, sessions, injection defense |
| 09 | `features.html` | Research posts end to end |
| 10 | `testing.html` | Unit, integration, and SQL harness |
| 11 | `deployment.html` | Local dev, wallet, Vercel + Oracle Cloud |
| A | `sql-reference.html` | All SQL scripts, DDL, DML, PL/SQL, grants, tests, and runtime SQL sources |
| B | `website-reference.html` | All frontend pages, components, API routes, user flows, security, and deployment behavior |

Audience: programmers comfortable with C/C++/Java and DBMS basics but new to web development. Every snippet is taken verbatim from [research-collaboration-platform](https://github.com/MantakaMahir/research-collaboration-platform) with file and line references.

## Tech

Plain static HTML + one stylesheet + vendored highlight.js and Geist font. No build step, no framework, no cookies. Works offline once loaded.

## Run locally

Serve the folder with any static file server:

```powershell
python -m http.server 8080
# or
npx serve .
```

Open http://localhost:8080.

## Deploy

Pushes to `main` are published automatically by GitHub Pages (Settings → Pages → Deploy from branch).
