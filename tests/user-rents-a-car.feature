Feature: User rents a car

    As a tenant user, I want to rent a car of my preference to work and/or transport myself.

    Scenario: User is in search section

        Given the user is in the search section
        When i rent the car
        Then the view will show you a dialog window to confirm the action
