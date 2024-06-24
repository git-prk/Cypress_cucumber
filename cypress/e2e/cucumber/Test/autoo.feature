Feature: verify signup functionality for Auto Exercise web page

    Scenario Outline: signup and login for new user
        Given I visit to AE web page <index>
        And I click on signup button
        When I type user name and email and click on signup button
        And I fill new user data and i click on create user button
        When I verify new user created
        Then I verify login for new user

        Examples:
            | index |
            | 0     |
            | 1     |