Feature: Registered user see the details of the rental cars

    As a user I want to see the characteristics of the available cars to know the details.

    Scenario: User is in search section

        Given the user wants to see the details of a car
        When selecting a car
        Then the view will show you more details
