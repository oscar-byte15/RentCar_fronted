Feature: Registered person log in with Facebook account

  As a registered person I want to log in with my Facebook account to access the virtual platform

  Scenario: Correct Facebook Account
    Given the person wants to log in with their Facebook account
    When you log in
    And sign in with a correct account
    Then the system allows access

  Scenario: Bad Facebook Account
    Given the person wants to log in with their Facebook account
    When you log in
    And sign in with the wrong account
    Then the view shows you a prompt informing you to try with a valid account.
