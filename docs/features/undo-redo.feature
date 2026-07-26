Feature: Undo and redo
  As a CLI user
  I want to undo and redo destructive actions
  So that I can recover from mistakes in the current session

  Scenario: Undoing a delete action
    Given I deleted an existing task
    When I execute undo
    Then the deleted task is restored

  Scenario: Redoing an undone action
    Given I have just undone a task deletion
    When I execute redo
    Then the task deletion is applied again

