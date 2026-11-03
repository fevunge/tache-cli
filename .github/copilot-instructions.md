# Copilot Instructions — Template Repository

## Project context

This repository is a **standardized template for new GitHub projects**. It contains no business logic of its own — its purpose is to provide a consistent structure, supporting files (documentation, automation, configuration), and conventions that will be inherited by any project created from it.

When suggesting code or text, GitHub Copilot should **prioritize structural consistency and clarity** over domain-specific solutions, since this repository serves as a generic starting point.

## Standard file structure

- `README.md` — project description, badges, usage and setup instructions.
- `TODO.md` — pending tasks list, organized by priority/category (e.g. `## High`, `## Medium`, `## Low`), using `- [ ]` checkboxes.
- `Makefile` — standardized targets: `all`, `build`, `test`, `lint`, `clean`, `fclean`, `re`, `install`. Each target should have a short comment explaining its purpose.
- `.gitignore` — covering build artifacts, dependencies, and environment files.
- `LICENSE` — the template's default license (to be defined).
- `CONTRIBUTING.md` — contribution guide (branch naming, commits, PRs).
- `CHANGELOG.md` — following the [Keep a Changelog](https://keepachangelog.com/) format.
- `.github/workflows/` — reusable CI pipelines (lint, build, test) shared across projects.
- `docs/` — additional documentation, if needed.

## Commit conventions

- Follow **Conventional Commits** (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, `test:`, `build:`).
- Short, imperative-mood messages, in English.

## Code and documentation conventions

- Prioritize clarity and traceability: any relevant structural decision should be commented or documented in `docs/` or in `README.md` itself.
- Avoid unnecessary dependencies — the template should work with the minimum possible external tooling.
- `Makefile` scripts should be portable (avoid bashisms when possible, or explicitly declare the required shell).
- Any new standard file added to the template must be referenced in `README.md`, explaining its purpose.

## What Copilot should NOT do

- Do not insert business logic specific to a real project inside this template.
- Do not suggest heavy dependencies (full frameworks) without clear justification — this is meant to be a lean template.
- Do not remove or rewrite established conventions (e.g. `TODO.md` format, `Makefile` targets) without flagging the change.

## Expected tone in suggestions

- Direct, objective, without unnecessary verbosity.
- Suggestions that change an existing convention should come with a brief justification.
