Feature: User look their reservations

    As a tenant user, I want to view all my previous and incoming reservations

    Scenario: User navigate in the my reservations section

      Given the user want to view their reservations
      When navigate to the reservation section
      Then the view will show all the reservations and the possibilities to perform actions on each reservation, such as changing dates, rating or canceling a future reservation.
