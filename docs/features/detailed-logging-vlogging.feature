Feature: Detailed logging with Vlogging
  As a developer
  I want structured and leveled logs
  So that I can diagnose behavior quickly

  Scenario: Writing logs with metadata
    Given logging is enabled
    When a task command runs
    Then logs include level, timestamp, and message context

  Scenario: Enabling verbose diagnostics
    Given I run a command with verbose logging
    When internal workflow events occur
    Then debug-level logs are printed with colored output

