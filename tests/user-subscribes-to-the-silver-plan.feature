Feature: User subscribes to plan

    As a landlord user I want to subscribe to the silver plan, to obtain all the statistics of my 5 cars.

    Scenario: User is in the Subscription section

        Given the user wants the silver plan
        When get it
        Then the system will assign your credentials to you.
