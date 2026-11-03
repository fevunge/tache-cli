# {{PROJECT_NAME}}

> {{PROJECT_TAGLINE}}

Template repository for bootstrapping new GitHub projects with consistent structure, documentation, and workflow conventions.

## Table of Contents

- [Overview](#overview)
- [Use This Template](#use-this-template)
- [Template Variables](#template-variables)
- [Included Files](#included-files)
- [Quick Start After Generation](#quick-start-after-generation)
- [Project Structure](#project-structure)
- [Conventions](#conventions)
- [Roadmap Seed](#roadmap-seed)
- [License](#license)

## Overview

This repository is intentionally generic. Replace placeholders and keep only the sections/files that match your generated project.

### Goals

- Provide a clean baseline for new repositories.
- Keep documentation and release tracking ready from day one.
- Preserve lightweight defaults with minimal tooling assumptions.

## Use This Template

1. On GitHub, click **Use this template**.
2. Create a new repository from this template.
3. Clone the generated repository:

```bash
git clone https://github.com/{{OWNER}}/{{REPO_NAME}}.git
cd {{REPO_NAME}}
```

## Template Variables

Use these placeholders and replace them in generated repositories:

| Placeholder | Meaning |
|---|---|
| `{{PROJECT_NAME}}` | Human-readable project name |
| `{{PROJECT_TAGLINE}}` | One-line summary of value/purpose |
| `{{OWNER}}` | GitHub user or organization |
| `{{REPO_NAME}}` | Repository slug |
| `{{PRIMARY_LANGUAGE}}` | Main implementation language |
| `{{LICENSE_NAME}}` | Selected license name |

## Included Files

| File | Purpose |
|---|---|
| `.tlhc.yml` | Template identity marker (watermark) for TemplateGitHub repositories. |
| `README.md` | Main documentation entry point with template instructions. |
| `TODO.md` | Prioritized pending work (`High`, `Medium`, `Low`) with checkboxes. |
| `CHANGELOG.md` | Release notes and historical changes in Keep a Changelog format. |
| `docs/README.md` | Documentation index for template and generated projects. |
| `docs/setup.md` | Setup checklist for newly generated repositories. |
| `docs/customization.md` | Customization rules that preserve template conventions. |


## Quick Start After Generation

1. Replace all `{{...}}` placeholders.
2. Update repository description, topics, and visibility.
3. Review `TODO.md` and keep only relevant tasks.
4. Add stack-specific files (CI, build config, runtime setup).
5. Record meaningful structural changes in `CHANGELOG.md`.

## Project Structure

```text
.
├── .github/
│   └── copilot-instructions.md
├── docs/
│   ├── README.md
│   ├── customization.md
│   └── setup.md
├── .gitignore
├── .tlhc.yml
├── CHANGELOG.md
├── README.md
└── TODO.md
```

## Conventions

- Commit style: [Conventional Commits](https://www.conventionalcommits.org/).
- Changelog style: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
- Versioning style: [Semantic Versioning](https://semver.org/).
- Keep template docs abstract and reusable; avoid product-specific business logic.

## Roadmap Seed

- [ ] Add `CONTRIBUTING.md` with branch and PR guidelines.
- [ ] Add `LICENSE` with selected template default.
- [ ] Add reusable `.github/workflows/` CI pipelines.
- [ ] Add portable `Makefile` targets (`all`, `build`, `test`, `lint`, `clean`, `fclean`, `re`, `install`).

## License

{{LICENSE_NAME}} (replace this section with the final license reference for generated projects).
