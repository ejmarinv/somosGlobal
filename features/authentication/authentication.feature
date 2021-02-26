Feature: validate the user login and logout sessions

  @testToSkipLogout
  Scenario: As a user i want to validate wrong username and password
    Given a user sets wrong username and password
    Then a error message is displayed

  Scenario: As a user I want to be able login sucessfully 
    Given a logged in user
    Then the user is able to see a message about the success login process

  Scenario: As a user I want to be able logOut sucessfully
    Given a logged in user
    Then the user is able to see a message about the success logOut process
