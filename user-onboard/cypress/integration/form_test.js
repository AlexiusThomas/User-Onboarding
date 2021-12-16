describe('Form App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    //Stored Values
    const nameInput = () => cy.get('input[name=username]');
    const emailInput  = () => cy.get('input[name=email]');
    const passwordInput  = () => cy.get('input[name=password]');
    const checkbox  = () => cy.get('input[name=tos]');
    const submitBtn = () => cy.get('input[type=submit]');
    const termsOfServiceType =() => cy.get('[type=checkBox]')

    it('Elements exist', () => {
        nameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        checkbox().should('exist');
        submitBtn().should('exist');
    })

    describe('Can input data and submit', () => {
        
        it('can access site', () => {
            cy.url().should('include', 'localhost');
        })

        it('can input the data/  name,email,pwd', () => {
            nameInput().should('have.value', '');
            nameInput().type('Tester');
            nameInput().should('have.value', 'Tester');
            
            emailInput().should('have.value', '');
            emailInput().type('tester@gmail.com');
            emailInput().should('have.value', 'tester@gmail.com');
            
            passwordInput().should('have.value', '');
            passwordInput().type('Tester');
            passwordInput().should('have.value', 'Tester');
        })

        it('can submit user information', () => {
            nameInput().type('Alexius Thomas');
            emailInput().type('fake@email.com');
            passwordInput().type('password');
        })    

        it('can check terms of service', () => {
           checkbox().click();
        })

        it('can submit form', () => {
            submitBtn().click();
        })

    })

    describe('form validates', () => {

       it('values are empty', () => {
        nameInput().should('have.value', '');
        emailInput().should('have.value', '');
        passwordInput().should('have.value', '');
       })


       it('can type in the inputs', () => {
       termsOfServiceType().check();
       })

    })
})