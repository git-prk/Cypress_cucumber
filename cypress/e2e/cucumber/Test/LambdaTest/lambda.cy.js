///<reference types="cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import page from "../../pages/lambda"
import data from "../../../../fixtures/lambda"

let pg = new page
let currentUser;

Given('I visit to lambda test login url{word}', (index) => {
    currentUser = data[index]
    pg.visitUrl()
})
And('i click on continue button', () => {
    pg.btnClick(pg.selector.registerUContinueBtn)
})
When('i fill the form and i click on continue button', () => {
    pg.newUserRegister(currentUser)


})
Then('i check for new user created', () => {
pg.validateText(pg.selector.validationText,' Your Account Has Been Created!')
cy.get('ul[class="navbar-nav horizontal"]').find('li').contains(' My account').click({force: true})
cy.get('ul[class="mz-sub-menu-96 dropdown-menu"]').find('li').contains(' Dashboard').click({force:true})
cy.wait(5000)
})