Feature: User subscribes to plan

    As a landlord user I want to subscribe to the golden fleet plan, to obtain all the statistics of my 10 cars.

    Scenario: User is in the Subscription section

        Given the user wants the golden plan
        When get it
        Then the system will assign your credentials to you.
