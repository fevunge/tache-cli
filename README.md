<div align="center">


<img src="https://placehold.co/900x200/0f0f0f/ffffff?text=tache-cli&font=montserrat" alt="Project Banner" width="100%" />

<br/>


![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)
![Coverage](https://img.shields.io/badge/coverage-00%25-brightgreen?style=for-the-badge)  
[![Issues](https://img.shields.io/github/issues/fevunge/task-management-cli)](https://github.com/fevunge/task-management-cli/issues)
[![Stars](https://img.shields.io/github/stars/fevunge/task-management-cli)](https://github.com/fevunge/task-management-cli/stargazers)

<br/>


<img src="./assets/icon/tache.png" width="100px"/> 

# tache-cli

### *An enterprise-grade command-line task management system—for developers and other CLI's users.* 
The system manages tasks with priorities, due dates, tags, and interdependencies, using SQLite persistence via Drizzle ORM  
and integrates with Ollama for intelligent prioritization suggestions based on the user’s historical patterns.

<br/>

[**Live Demo**](https://fevunge.github.io/live-demo) &nbsp;·&nbsp;
[**Documentation**](https://fevunge.github.io/repo-name-placeholder/) &nbsp;·&nbsp;
[**Article**](https://github.com/fevunge/article-placeholder) &nbsp;·&nbsp;

</div>

---

## Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment](#environment)
- [Usage](#-usage)
- [API Reference](#-api-reference)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [Authors](#-authors)
- [Acknowledgements](#-acknowledgements)
- [License](#-license)

---

## Overview

Tache CLI is a lightweight task, project, and calendar management system built for real-world use, designed for programmers and IT and technology professionals in general who prefer to work directly from the command line.  
It enables fast and organized task and project management through a terminal-centric experience, 
with support for priorities, deadlines, reminders, alarms, and smart notifications.

Tache CLI can be integrated with Large Language Models (LLMs), transforming task and project management into an intelligent workflow assistant.

---

## Features

- **Task CRUD & Validation**  
  Full create, read, update, and delete operations for tasks, with strict schema validation powered by Zod  
    — ensuring all inputs are type-safe and well-formed before hitting the database.

- **Project & Subtask Management**  
   Support for hierarchical task structures, allowing users to create projects with nested subtasks,  
   and manage dependencies between them (e.g., a subtask cannot be marked complete until its parent task is done).
  
- **Task Scheduling**  
   Tasks can be scheduled for future execution using cron job syntax or the [**`taimplex`**](https://fevunge.github.io/blog/taimplex) syntax,
   allowing users to set recurring or one-time deadlines that trigger background jobs automatically.

- **Real-Time Notifications**  
   An event-driven notification system using Node.js `EventEmitter`  
   that fires alerts when tasks are created, updated, completed, or overdue — without polling.

- **Export / Import**  
   Users can export their full task list (or filtered subsets) to JSON, CSV, or raw SQL,     
   and re-import from any of those formats — useful for backups, migrations, or data sharing.

- **Fuzzy Search with Levenshtein Distance**  
   A search engine that finds resources even with typos or partial matches,  
   using the Levenshtein distance algorithm to rank results by similarity.

- **Undo / Redo**  
   A command history stack that lets users undo or redo any destructive action (delete, bulk update, etc.) within the current session.

- **Custom Norminette [Lentte](https://github.com/fevunge/lentte)**  
   A project-specific linting ruleset that enforces text style conventions similar to 42's norminette
    — length limits, naming rules, and forbidden patterns — with clear error messages and auto-fix suggestions.

- **Detailed Logging [Vlogging](https://github.com/fevunge/vlogging)**  
   A structured logging module - **`vlogging`** - inspired by 42's `ft_printf` project,   
   with log levels, timestamps, color-coded output, and optional verbose mode for debugging internals.

- **Memory & Resource Tracking**  
   A lightweight tracker that monitors heap usage, open handles,  
   and DB connection counts throughout the process lifecycle
    — surfaced via a `--stats` CLI flag.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Core Language** | TypeScript |
| **Frontend** | Commander.js, Klaur |
| **Compiler** | Bun |
| **Database** | SQLite, DrizzleORM |
| **DevOps** | Docker, Jenkins |
| **Testing** | Vitest |
| **Log** | [Vlogging](https://github.com/fevunge/vlogging) |
| **Linter** | [Lentte](https://github.com/fevunge/lentte) |

---

## Getting Started

### Prerequisites

For local development, test, and contribution purposes, you will need to have the following software installed on your machine.

```bash
bun = 1.3.14
pnpm >= 10.33.0
docker >= 29.3.0  # optional
```

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/fevunge/tache-cli.git
cd tache-cli
```

**2. Install dependencies**

```bash
make install # or

```

**3. Set up environment variables**

```bash
cp .env.example .env
```

**4. Run database migrations**

```bash
pnpm run db:migrate
pnpm run db:seed  # optional: seed with sample data
```

**5. Start the development server**

```bash
pnpm run dev
```

---

### Environment

Create a `.env` file in the root directory. See `.env.example` for reference.

| Variable | Description | Required |
|---|---|---|
| `RESOURCE_PATH` | Path to resource files | [x] |
| `LLM_API_KEY` | API key for LLM integration | [ ] |

---

## Usage

### Basic Example

```shell
# Create a new task
$ tache create "Finish project report" --priority high --due "2024-07-01"
```

### Advanced Example

```shell
# Create a project with subtasks and dependencies
$ tache create "Launch Marketing Campaign" --type project

$ tache create "Design Ad Creatives" --parent "Launch Marketing Campaign" --due "2024-06-15"

$ tache create "Set Up Email List" --parent "Launch Marketing Campaign" --due "2024-06-20"

$ tache create "Schedule Social Media Posts" --parent "Launch Marketing Campaign" --due "2024-06-25"
```

> 💡 **Tip:** Check the [`/examples`](./examples) directory for more comprehensive usage patterns.

---

## API Reference

### Full API reference available at [`/docs/api.md`](./docs/api.md)

- **`GET /api/v1/resource`**: Returns a list of resources.
- **`POST /api/v1/resource`**: Creates a new resource.

Full API reference available at [`/docs/api.md`](./docs/api.md)

---

## Screenshots

<div align="center">

| Dashboard | Detail View | Mobile |
|---|---|---|
| ![Dashboard](https://placehold.co/380x220/1a1a2e/ffffff?text=Dashboard) | ![Detail](https://placehold.co/380x220/16213e/ffffff?text=Detail+View) | ![Mobile](https://placehold.co/180x320/0f3460/ffffff?text=Mobile) |

</div>

---

## Contributing

Contributions are what make the open source community incredible.  
Any contributions you make are **greatly appreciated**.

1. **Fork** the repository
2. Create your feature branch: `git checkout -b feat/feature-or-bugfix`
3. Commit your changes: `git commit -m 'feat: add some amazing feature or fix a bug'`
4. Push to the branch: `git push origin feat/feature-or-bugfix`
5. Open a **Pull Request**

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) if it exists for more details on our code of conduct, and the process for submitting pull requests.

Please, follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(scope):     New feature
fix(scope):      Bug fix
docs(scope):     Documentation update
style(scope):    Formatting (no logic change)
refactor(scope): Code refactoring
test(scope):     Adding tests
chore(scope):    Maintenance tasks
```

---

## Authors

<div align="center">

| <img src="https://github.com/fevunge.png" width="80px" style="border-radius:50%"/> |
|:---:|
| **Fernando Vunge** |
| [![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat&logo=github)](https://github.com/fevunge) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin)](https://linkedin.com/in/fevunge) [![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=flat&logo=twitter)](https://twitter.com/fevunge) |

</div>

---
<div align="center">

Made with 🧠 by [fevunge](https://github.com/fevunge)

⭐ **Star this repo** if you found it useful or interesting!

</div>

## Acknowledgements

- [Awesome Library](https://github.com/) — Used for X feature
- [Design Inspiration](https://dribbble.com/) — UI/UX reference
- [Community Resource](https://stackoverflow.com/) — Problem-solving guidance
- [Open Source Project](https://github.com/) — Architectural patterns

---

## License

Distributed under the **MIT License**.
