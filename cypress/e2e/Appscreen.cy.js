/// <reference types="cypress"/>

beforeEach(()=> {

    cy.visit('https://wisemdv2.wiseyak.com/login')
    cy.get('input[name="username"]').type('superman')
    cy.get('input[name="password"]').type('test1')
    cy.contains('LOGIN').click()
    cy.contains('Invalid username or password').should('not.exist')
    cy.url().should('include','/appscreen')
    

})


/// may not be required just for normal test'
describe('Verify basic things in the WiseMD app , ()=> {



    it('Verify it contains WiseMd text Logo',()=>{
        cy.contains('WISEMD').should('exist')
    })

    it('Verify it includes username in left top corner of site',()=>{
        cy.contains('superman').should('exist')
    })


    
    it('Verify it contains Invoice Management Card', ()=> {
        cy.contains('invoice-management').should('exist')
    })

    it('Verify it contains Patient card', ()=> {
        cy.contains('patient').should('exist')
    })

    it('Verify it contains Patient-Designer card', ()=> {
        cy.contains('patient-designer').should('exist')
    })

    it('Verify it contains Pharmacy-Management card', ()=> {
        cy.contains('pharmacy-management').should('exist')
    })

    it('Verify it contains Service-Request Card', ()=> {
        cy.contains('service-request').should('exist')
    })


    
})


describe('Test for logout', () => {
    it('should show profile down when profile dropdown is clicked and contain logout', () => {
      cy.get('[data-testid="ArrowDropDownIcon"]').click();

      cy.get('[data-e2e="logoutLink"]').click()
      cy.url().should('includes', '/login');
      cy.contains('Enter your credential to access your account.').should('exist')
    })

})


