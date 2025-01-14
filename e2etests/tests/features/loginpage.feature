Feature: to test home page functionality

  Scenario: To test home page
    Given User is on home page
    When User enter login details
    And Home page should be displayed
    And Upon logout
    Then Logout should be successful
    And This is a dummy step to fail

     Scenario: To test home page again
    Given User is on home page
    When User enter login details
    And Home page should be displayed
    And Upon logout
    Then Logout should be successful
    And This is a dummy step to fail