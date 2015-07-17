Feature: Logging for Velocity's User
  As an velocity user
  In order to Test the login
  I want to login and check my name
  
  Scenario: Valid login
    Given I am on the homePage
    When I enter email "idell@makingsense.com" and password "qwerty"
    Then I should see "Actualmente no tienes ningún evento activo."