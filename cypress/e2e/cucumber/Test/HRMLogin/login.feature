Feature: Login functionality of Orange HRM web site

    Scenario: TC001 I should be able to login OHRM web page with valid username and password
        Given I navigate to OHRM login webpage valid
        And I enter username and passwrd
        When I click on login button
        Then Valid user should be logged in

    Scenario: TC002 I should be able to login OHRM web page with invalid username and password
        Given I navigate to OHRM login webpage valid
        And I enter invalid username and passwrd
        When I click on login button
        Then login page should display Invalid credentials message