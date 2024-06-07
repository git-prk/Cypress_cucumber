///<reference types ="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('I navigate to OHRM login webpage valid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

//for valid user
And('I enter username and passwrd', () => {
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
})

When('I click on login button', () => {
    cy.get('[type="submit"]').click()
})

Then('Valid user should be logged in', () => {
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
})

//invalid user

And('I enter invalid username and passwrd', () => {
    cy.get('[name="username"]').type('invalid-un')
    cy.get('[name="password"]').type('invalid-pw')
})

Then('login page should display Invalid credentials message', () => {
    cy.get('.oxd-alert-content-text').should('have.text', 'Invalid credentials')
})