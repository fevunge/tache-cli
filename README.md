# Tâche

**Tache - CLI Task Management System Enterprise-Grade**

![Tache](./assets/logo/tache.png)

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/fevunge/task-management-cli)](https://github.com/fevunge/task-management-cli/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/fevunge/task-management-cli)](https://github.com/fevunge/task-management-cli/network/members)
[![GitHub Issues](https://img.shields.io/github/issues/fevunge/task-management-cli)](https://github.com/fevunge/task-management-cli/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/fevunge/task-management-cli)](https://github.com/fevunge/task-management-cli/pulls)


## Introduction

### Core Features

- **Task CRUD & Validation**


   Full create, read, update, and delete operations for tasks, with strict schema validation powered by Zod
   
    — ensuring all inputs are type-safe and well-formed before hitting the database.


- **Task Scheduling**


   Tasks can be scheduled for future execution using cron job syntax, 
   
   allowing users to set recurring or one-time deadlines that trigger background jobs automatically.


- **Real-Time Notifications**


   An event-driven notification system using Node.js `EventEmitter` 
   
   that fires alerts when tasks are created, updated, completed, or overdue — without polling.


- **Export / Import**


   Users can export their full task list (or filtered subsets) to JSON, CSV, or raw SQL, 
   
   and re-import from any of those formats — useful for backups, migrations, or data sharing.


- **Fuzzy Search with Levenshtein Distance**


   A search engine that finds tasks even with typos or partial matches, 
   
   using the Levenshtein distance algorithm to rank results by similarity.


- **Undo / Redo**


   A command history stack that lets users undo or redo any destructive action (delete, bulk update, etc.) within the current session.


- **Plugin System**


   A dynamic plugin loader that allows third-party or user-defined modules to extend the CLI's functionality at runtime, without modifying the core codebase.



### Tech Stack

- TypeScript
- Node.js
- PostgreSQL + Redis

### 42-Inspired Differentiators

- **Custom Norminette (Linter)**
   
   A project-specific linting ruleset that enforces code style conventions similar to 42's norminette
   
    — function length limits, naming rules, and forbidden patterns — implemented as a custom ESLint plugin.

- **Detailed Logging (ft_printf style)**

   A structured logging module inspired by 42's `ft_printf` project, 
   
   with log levels, timestamps, color-coded output, and optional verbose mode for debugging internals.

- **Memory & Resource Tracking**

   A lightweight tracker that monitors heap usage, open handles, 

   and DB connection counts throughout the process lifecycle — surfaced via a `--stats` CLI flag.


## Demo

![Weather App Screenshot 1](images/screenshot1.png)
![Weather App Screenshot 2](images/screenshot2.png)

You can explore more with video demo of **Tache**  [here](https://youtube.com/@fevunge)

## Features

The Task Management CLI comes with a wide range of features to enhance your task management Enterprise-Grade experience:

- Complete **CRUD** with Zod validation
- Task scheduling with cron jobs
- Real-time notifications (EventEmitter)
- Export/Import (JSON, CSV, SQL)
- **Levenshtein** distance search
- Undo/redo pattern
- Plugin system (dynamic loading)

For a comprehensive list of features and how to use them, please refer to the [User Guide](docs/USERGUIDE.md).

---

## Installation

To run CLI Task Management Syste locally, follow these installation steps:

> [!NOTE]
> TODO

---

## Contributing

> [!NOTE]
> TODO

## Acknowledgments

> [!NOTE]
> TODO

## Advanced Usage

> [!NOTE]
> TODO

## FAQ

> [!NOTE]
> TODO


## Roadmap

> [!NOTE]
> TODO

## Changelog

[Changelog](docs/changelog.md).
