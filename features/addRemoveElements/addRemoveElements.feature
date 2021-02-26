Feature: validate adding and removing elements

    @testToSkipLogout
    Scenario: As a user i want to be able to include and remove elements
    Given a logged in user
    When the user is able to press the AddElement button
    Then the user is able also to remove that element from the screen


   