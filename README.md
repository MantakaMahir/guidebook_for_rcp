# RCP Trace Guide

A teaching site that walks the Research Collaboration Platform team through the full stack: browser to Oracle: using real code from the real repository.

Live: https://mantakamahir.github.io/guidebook_for_rcp/

## What this is

Eleven traces plus three focused appendices, each following one path through the system:

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
| A | `frontend-code.html` | Frontend pages, client components, UI patterns, and API calls |
| B | `backend-code.html` | API routes, server helpers, validation, security checks, and transactions |
| C | `sql-code-map.html` | How frontend screens and backend helpers connect to SQL objects |

Audience: programmers comfortable with C/C++/Java and DBMS basics but new to web development. Every snippet is taken verbatim from [research-collaboration-platform](https://github.com/MantakaMahir/research-collaboration-platform) with file and line references.

## Tech

Plain static HTML + one stylesheet + a small password-gate script + vendored highlight.js and Geist font. No build step, no framework, no cookies. Works offline once loaded.

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
