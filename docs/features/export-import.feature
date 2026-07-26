Feature: Export and import
  As a CLI user
  I want to export and import task data in multiple formats
  So that I can back up, migrate, or share my data

  Scenario: Exporting tasks as JSON
    Given I have tasks in storage
    When I export tasks to JSON
    Then a valid JSON file is generated

  Scenario: Importing tasks from CSV
    Given I have a valid CSV export file
    When I import tasks from CSV
    Then tasks are restored into the database

