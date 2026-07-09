Feature: Project and subtask management
  As a CLI user
  I want to organize work with projects and nested subtasks
  So that I can manage hierarchy and dependencies

  Scenario: Creating a project with subtasks
    Given I have no project named "Launch Campaign"
    When I create the project and attach subtasks
    Then each subtask is linked to its parent project

  Scenario: Enforcing dependency completion rules
    Given a subtask depends on its parent task
    When I try to complete the subtask before the parent
    Then the command is rejected with a dependency error

