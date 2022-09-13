Feature: User view their saved cars

    As a user I want to see their cars that I save before

    Scenario: User navigate to the favorite section

        Given the user want to see the cars previous saved
        When is navigating in the navbar
        Then the view will show you with all the saved cars
