Feature: Task scheduling
  As a CLI user
  I want to schedule one-time and recurring tasks
  So that reminders and deadlines trigger automatically

  Scenario: Scheduling a one-time task
    Given I provide a valid future schedule
    When I save the task with scheduling options
    Then the task is registered for one execution

  Scenario: Scheduling a recurring task
    Given I provide a valid cron or taimplex schedule
    When I save the recurring task
    Then background jobs are registered for repeat execution

