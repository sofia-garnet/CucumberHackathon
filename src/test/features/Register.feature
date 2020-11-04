#language: en
Feature: Registration on the platform

  Background:
    Given Registration page is open

  @success @all
  Scenario Outline: Successful registration on the platform
    When  I enter valid login "<login>"
    And I enter valid password "<password>"
    And I enter valid confirm password "<confirmPassword>"
    And I enter valid email "<email>"
    And I press submit button
    Then I enter the main platform page
    Examples:
      | login  | email  | password   | confirmPassword |
      | random | random | Qwerty!123 | Qwerty!123      |


  @failed @all
  Scenario Outline: Unsuccessful registration with invalid min login
    When  I enter invalid min login "<login>"
    And I enter valid password "<password>"
    And I enter valid confirm password "<confirmPassword>"
    And I enter valid email "<email>"
    And I press submit button
    Then I stay on the same page
    Examples:
      | login  | email  | password   | confirmPassword |
      | random | random | Qwerty!123 | Qwerty!123      |


  @failed @all
  Scenario Outline: Unsuccessful registration with invalid max login
    When  I enter invalid max login "<login>"
    And I enter valid password "<password>"
    And I enter valid confirm password "<confirmPassword>"
    And I enter valid email "<email>"
    And I press submit button
    Then I stay on the same page
    Examples:
      | login  | email  | password   | confirmPassword |
      | random | random | Qwerty!123 | Qwerty!123      |

  @failed
  Scenario Outline: Unsuccessful registration with empty fields
    When I enter empty login "<login>"
    And I enter password "<password>"
    And I enter confirm password "<confirmPassword>"
    And I enter email "<email>"
    And I press submit button
    Then I stay on the same page
    Examples:Data
      | login  | email  | password   | confirmPassword |
      |        |        |            |                 |
      |        | random | Qwerty!123 | Qwerty!123      |
      | random |        | Qwerty!123 | Qwerty!123      |
      | random | random |            | Qwerty!123      |
      | random | random | Qwerty!123 |                 |

  @failed @all
  Scenario Outline: Unsuccessful registration with invalid min email
    When  I enter valid login "<login>"
    And I enter valid password "<password>"
    And I enter valid confirm password "<confirmPassword>"
    And I enter invalid min email "<email>"
    And I press submit button
    Then I stay on the same page
    Examples:
      | login  | email  | password   | confirmPassword |
      | random | random | Qwerty!123 | Qwerty!123      |


  @failed @all
  Scenario Outline: Unsuccessful registration with invalid max email
    When  I enter valid login "<login>"
    And I enter valid password "<password>"
    And I enter valid confirm password "<confirmPassword>"
    And I enter invalid max email "<email>"
    And I press submit button
    Then I stay on the same page
    Examples:
      | login  | email  | password   | confirmPassword |
      | random | random | Qwerty!123 | Qwerty!123      |
