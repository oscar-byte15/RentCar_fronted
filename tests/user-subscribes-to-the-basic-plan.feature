Feature: User subscribes to plan

    As a landlord user I want to subscribe to a basic plan to obtain all my statistics of a car.

    Scenario: User is in the Subscription section

        Given the user wants the basic plan
        When get it
        Then the system will assign your credentials to you.
