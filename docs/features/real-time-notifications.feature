Feature: Real-time notifications
  As a CLI user
  I want event-driven notifications for task state changes
  So that I get immediate updates without polling

  Scenario: Emitting a notification when a task is created
    Given notification listeners are active
    When I create a new task
    Then a task-created event is emitted

  Scenario: Emitting an overdue notification
    Given a task has passed its due time
    When the scheduler evaluates due tasks
    Then an overdue alert event is emitted

