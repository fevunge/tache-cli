Feature: Memory and resource tracking
  As a CLI user
  I want runtime resource statistics
  So that I can monitor process health

  Scenario: Displaying process statistics
    Given tracking is enabled during runtime
    When I execute a command with the --stats flag
    Then the CLI prints memory, handle, and DB connection metrics

  Scenario: Monitoring lifecycle changes
    Given the process opens and closes resources
    When tracking snapshots are collected
    Then resource counters reflect lifecycle changes accurately

