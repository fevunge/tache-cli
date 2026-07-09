Feature: Custom Norminette with Lentte
  As a project contributor
  I want style rules enforced by Lentte
  So that code and text follow repository conventions

  Scenario: Reporting a forbidden pattern
    Given a file contains a forbidden pattern
    When I run the custom linter
    Then the linter reports a clear violation message

  Scenario: Suggesting automatic fixes
    Given a file violates length or naming constraints
    When the linter analyzes the file
    Then it suggests an available auto-fix strategy

