#language: en
Feature: Authorization on the platform

  Background:
    Given Registration page is open

  @success @all
  Scenario Outline: Successful registration on the platform
    When  I enter valid login "<login>"
    And I enter valid password "<password>"
    And I enter valid confirm password "<confirmPassword>"
    And I enter valid email "<email>"
    And I press submit button
    And I enter valid auth email
    And I enter valid auth password
    And I press submit sign in button
    And I press alert button

    Examples:
      | login  | email  | password   | confirmPassword |
      | random | random | Qwerty!123 | Qwerty!123      |