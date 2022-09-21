Feature: Calculator

    Scenario: Sum 2 numbers
    Given A running calculator
    When I enter the numbers "2" and "3"
    Then I should receive "5" as result