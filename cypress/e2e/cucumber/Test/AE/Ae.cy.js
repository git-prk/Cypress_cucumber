
///<reference types="cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import page from "../../pages/autoexe"
import user from "../../../../fixtures/Ae.payload"

let pg = new page
let currentUser;
let title;

Given('I visit to AE web page {word}', (index) => {
    currentUser = user[index] //user[0],user[1]
    pg.visitUrl()

})

And('I click on signup button', () => {
    pg.btnClick(pg.selector.loginSinup)
})

When('I type user name and email and click on signup button', () => {
    pg.newUserSignUp(currentUser)
    pg.btnClick(pg.selector.signUpBtn)
})

And('I fill new user data and i click on create user button', () => {
    if(currentUser.title=='Mr'){
        title=pg.selector.titleMr
    }
    else if(currentUser.title=='Mrs'){
        title=pg.selector.titleMrs
    }

    pg.newUserCreate(title,currentUser)

})
When('I verify new user created', () => {
pg.validatetext(pg.selector.accountcreatedText,'Account Created!')
})
Then('I verify login for new user', () => {
    pg.btnClick(pg.selector.loginSinup)
    pg.btnClick(pg.selector.logout)
    pg.loginUser(currentUser)
    pg.validatetext(pg.selector.loginTextValidation,currentUser.username)
})
