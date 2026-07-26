Feature: Fuzzy search with Levenshtein distance
  As a CLI user
  I want typo-tolerant task search
  So that I can find tasks with approximate terms

  Scenario: Matching a task with a misspelled query
    Given a task exists with title "Deploy backend service"
    When I search for "Depliy bakend servis"
    Then the related task appears in ranked results

  Scenario: Ranking closer matches first
    Given multiple tasks partially match my query
    When I run fuzzy search
    Then results are ordered by similarity distance

