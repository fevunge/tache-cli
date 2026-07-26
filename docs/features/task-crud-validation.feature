Feature: Task CRUD and validation
  As a CLI user
  I want to create, read, update, and delete tasks with input validation
  So that task data stays consistent and type-safe

  Scenario: Creating a task with valid fields
    Given the task payload matches the expected schema
    When I run the task creation command
    Then the task is persisted successfully

  Scenario: Rejecting malformed task input
    Given the task payload is missing required fields
    When I run the task creation command
    Then validation fails with a clear error message

