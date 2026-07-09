# TODO — tache-cli feature completion roadmap

This checklist is organized by sections and assumes the stack is **Bun + TypeScript + Drizzle ORM + SQLite**.

## 1. Foundation and architecture

- [x] Define and freeze feature scope for all README features.
- [x] Create implementation specs for each feature in `docs/features/*.feature`.
- [x] Align layered architecture boundaries (`presentation`, `application`, `domain`, `infrastructure`, `shared`).
- [ ] Define shared error model and CLI-friendly error output conventions.
- [ ] Define shared command result/output formatter contract.
- [ ] Add centralized config loader (`env`, paths, flags) with schema validation.
- [ ] Add dependency wiring/bootstrap module for repositories, services, and handlers.

## 2. Database and Drizzle setup (SQLite)

- [ ] Review and finalize SQLite file location strategy across OS environments.
- [ ] Define complete Drizzle schema for tasks, projects, subtasks, dependencies, schedules, logs, history, and imports.
- [ ] Add constraints (FK, unique, check constraints) to protect data integrity.
- [ ] Add indexes for common query paths (status, due date, project, fuzzy search support tables).
- [ ] Create initial migration set and baseline seed.
- [ ] Implement migration scripts for dev and production runtime.
- [ ] Add database transaction helpers for multi-step writes.
- [ ] Add repository-level tests for schema behavior and constraints.

## 3. Domain models and DTO contracts (TypeScript)

- [ ] Finalize domain entities: Task, Project, Subtask, Dependency, Schedule, Notification, AuditLog.
- [ ] Define strict DTO schemas with `zod/v4` for all command inputs.
- [ ] Add mapping layer between CLI DTOs and domain models.
- [ ] Add domain validation rules for invariants not covered by database constraints.
- [ ] Add typed error classes/codes for domain and infrastructure failures.

## 4. CLI command system (Bun runtime)

- [ ] Finalize command tree with Commander (`task`, `project`, `schedule`, `me`, etc.).
- [ ] Implement consistent help text, usage examples, and flag descriptions.
- [ ] Add command middleware for validation, error handling, and logging context.
- [ ] Add machine-readable output mode (`--json`) for automation.
- [ ] Add interactive confirmation flow for destructive operations.
- [ ] Add command aliases and backward compatibility layer if needed.

## 5. Feature: Task CRUD and validation

- [ ] Implement `task add` with full schema validation and persistence.
- [ ] Implement `task list` with filtering, sorting, and pagination.
- [ ] Implement `task read` by id and human-friendly output.
- [ ] Implement `task update` with partial updates and validation.
- [ ] Implement `task delete` with soft/hard delete strategy decision.
- [ ] Add tests for invalid payloads and boundary values.

## 6. Feature: Project and subtask management

- [ ] Implement project creation and project metadata updates.
- [ ] Implement parent/child subtask linkage.
- [ ] Enforce completion rules (cannot complete child when parent/dependency blocks it).
- [ ] Implement dependency graph validation (prevent cycles).
- [ ] Implement project progress computation from child task states.
- [ ] Add CLI commands to show hierarchy tree.

## 7. Feature: Task scheduling

- [ ] Implement schedule model for one-time and recurring executions.
- [ ] Add cron parser integration and taimplex syntax parser integration.
- [ ] Validate schedule expressions with clear CLI errors.
- [ ] Implement scheduler runtime service in Bun process lifecycle.
- [ ] Persist next-run and last-run metadata in SQLite.
- [ ] Add missed-run recovery behavior after process restart.
- [ ] Add schedule inspection commands (`schedule list`, `schedule next`).

## 8. Feature: Real-time notifications

- [ ] Implement event bus abstraction on top of Node/Bun event emitter APIs.
- [ ] Emit events for create, update, complete, overdue, import/export operations.
- [ ] Add notification subscribers for terminal alerts.
- [ ] Add configurable notification channels (stdout/log/file hooks).
- [ ] Add debounce/rate-limit strategy for noisy events.
- [ ] Add integration tests for event emission order and payload shape.

## 9. Feature: Export and import (JSON/CSV/SQL)

- [ ] Implement export service with format serializers (JSON, CSV, SQL).
- [ ] Implement import service with format parsers and schema validation.
- [ ] Add dry-run import mode to preview changes.
- [ ] Add duplicate resolution strategy (skip, merge, overwrite).
- [ ] Ensure transactional rollback for failed import batches.
- [ ] Add compatibility/version metadata to exported files.
- [ ] Add command options for scoped export (project/tag/date/status filters).

## 10. Feature: Fuzzy search with Levenshtein distance

- [ ] Implement searchable index projection for task text fields.
- [ ] Implement Levenshtein-based ranking function with configurable threshold.
- [ ] Combine fuzzy score with exact-match boosts.
- [ ] Add `task search` CLI command with ranking display.
- [ ] Optimize performance for large task sets (top-k, prefiltering, indexes).
- [ ] Add tests for typo tolerance and ranking consistency.

## 11. Feature: Undo and redo

- [ ] Define command history model (action, inverse action, timestamp, metadata).
- [ ] Implement history stack persistence strategy (session-only vs persisted).
- [ ] Implement undo for delete/update/bulk operations.
- [ ] Implement redo replay with safety checks.
- [ ] Add conflict handling when state diverges before redo.
- [ ] Add clear CLI feedback for stack boundaries (nothing to undo/redo).

## 12. Feature: Custom norminette (Lentte)

- [ ] Integrate Lentte into project tooling and CI command flow.
- [ ] Define project-specific ruleset (naming, length, forbidden patterns).
- [ ] Add lint command entry points compatible with Bun scripts.
- [ ] Add autofix mode and clear diagnostics formatting.
- [ ] Document lint workflow for contributors.

## 13. Feature: Detailed logging (Vlogging)

- [ ] Integrate Vlogging with centralized logger adapter.
- [ ] Define log levels and environment-based verbosity defaults.
- [ ] Add correlation IDs / command execution context fields.
- [ ] Add structured logs for DB queries, scheduler runs, and event dispatch.
- [ ] Add log redaction for sensitive fields.
- [ ] Add `--verbose` and `--quiet` behavior consistency across commands.

## 14. Feature: Memory and resource tracking

- [ ] Implement runtime metrics collector (heap, handles, DB connections).
- [ ] Track command-level resource deltas and durations.
- [ ] Implement `--stats` output formatter.
- [ ] Add periodic snapshot mode for long-running scheduler process.
- [ ] Add thresholds and warnings for abnormal resource growth.
- [ ] Add tests for metrics collection and formatting.

## 15. Security and reliability

- [ ] Sanitize CLI input and file path handling for import/export.
- [ ] Add safe file write strategy (temp file + atomic rename).
- [ ] Add DB backup/restore helper commands.
- [ ] Add lock strategy for concurrent process access to SQLite.
- [ ] Add retry/backoff policy for transient filesystem failures.

## 16. Documentation and examples

- [ ] Update README commands to match real implementation.
- [ ] Add docs for each feature command and options.
- [ ] Add end-to-end examples for common workflows.
- [ ] Add migration/upgrade notes for schema changes.
- [ ] Add troubleshooting section for scheduler, DB path, and permissions.

## 17. Testing and release

- [ ] Add unit tests for domain and utility modules.
- [ ] Add integration tests for CLI commands against SQLite test DB.
- [ ] Add golden output tests for CLI text formatting.
- [ ] Add performance tests for search and bulk import.
- [ ] Add release checklist (build binary with Bun, smoke test, package artifacts).
- [ ] Add CI pipeline for build, tests, and lint flow.

