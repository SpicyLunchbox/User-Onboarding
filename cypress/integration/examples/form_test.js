describe('Form App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('sanity check to make sure tests work', () => {
        expect(1 + 2).to.equal(3)
        expect(2 + 2).not.to.equal(5)
    })

//     Get the Name input and type a name in it.
//  Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
//  Get the Email input and type an email address in it
//  Get the password input and type a password in it
//  Set up a test that will check to see if a user can check the terms of service box
//  Check to see if a user can submit the form data
//  Check for form validation if an input is left empty

    it('name input test', () => {
        cy.get('input[name=name]')
            .should('have.value', '')
            .type('weston')
            .should('have.value', 'weston')
    })

    it('email input test', () => {
        cy.get('input[name=email]')
            .should('have.value', '')
            .type('weston@gmail.com')
            .should('have.value', 'weston@gmail.com')
    })

    it('password input test', () => {
        cy.get('input[name=password]')
            .should('have.value', '')
            .type('blahblahblah')
            .should('have.value', 'blahblahblah')
    })

    it('ToS checkbox test', () => {
        cy.get('input[name=ToS]')
            .should('not.be.checked')
            .check()
            .should('be.checked')
    })

    it('submit form test', () => {
        cy.get('input[name=name]')
            .should('have.value', '')
            .type('weston')
            .should('have.value', 'weston')

        cy.get('input[name=email]')
            .should('have.value', '')
            .type('weston@gmail.com')
            .should('have.value', 'weston@gmail.com')

        cy.get('input[name=password]')
            .should('have.value', '')
            .type('blahblahblah')
            .should('have.value', 'blahblahblah')

        cy.get('input[name=ToS]')
            .should('not.be.checked')
            .check()
            .should('be.checked')
        //it is necessary to fill out input fields and check the checkbox before
        //you are able to click the submit button,
        // hence the prior code in this function

        cy.get('button')
            .click()
    })
})