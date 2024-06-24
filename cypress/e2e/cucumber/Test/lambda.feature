Feature: Verify new user register for lambda test
    Scenario Outline: verift LT for valid data
        Given I visit to lambda test login url<index>
        And i click on continue button
        When i fill the form and i click on continue button
        Then i check for new user created
        Examples:
            | index |
            | 0     |
            | 1     |