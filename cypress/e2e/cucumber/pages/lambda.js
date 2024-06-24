export default class MyLTPage {
    selector = {
        url : 'https://ecommerce-playground.lambdatest.io/index.php?route=account/login',
        registerUContinueBtn : 'a[class="btn btn-primary"]',
        firstname : '[id="input-firstname"]',
        lastname : '[id="input-lastname"]',
        email : '[id="input-email"]',
        telephone : '[id="input-telephone"]',
        password : '[id="input-password"]',
        passwordC : '[id="input-confirm"]',
        agreeCheckbox : '[id="input-agree"]',
        continueRegister : '[value="Continue"]',
        validationText : '[class="page-title my-3"]'
    }

    visitUrl(){
        cy.visit(this.selector.url)

    }

    btnClick(css){
        cy.get(css).click()
    }

    newUserRegister(userData){
        cy.get(this.selector.firstname).type(userData.fn)
        cy.get(this.selector.lastname).type(userData.ln)
        cy.get(this.selector.email).type(userData.email)
        cy.get(this.selector.telephone).type(userData.ph)
        cy.get(this.selector.password).type(userData.pw)
        cy.get(this.selector.passwordC).type(userData.pw)
        cy.get(this.selector.agreeCheckbox).click({force:true})
        cy.get(this.selector.continueRegister).click()
    }

    validateText(css,text){
        cy.get(css).should('have.text',text)
    }
}


//cy.get('ul[class="mz-sub-menu-96 dropdown-menu"]').find('li').contains(' Login').click({force: true})