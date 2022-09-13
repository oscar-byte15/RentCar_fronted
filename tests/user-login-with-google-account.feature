+Feature: Registered person log in with Google account

As a registered person I want to log in with my Google account to access the virtual platform

Scenario: Correct Google Account
Given the person wants to log in with their Google account
When you log in
And sign in with a correct account
Then the system allows access

Scenario: Bad Google Account
Given the person wants to log in with their Google account
When you log in
And sign in with the wrong account
Then the view shows you a prompt informing you to try with a valid account.
