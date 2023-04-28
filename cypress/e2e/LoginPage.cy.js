
//E2E test for Login page

/// <reference types="cypress"/>

describe('Empty Login Field Login Attempt', () => {
    it('Scenario 1', () => {
      cy.visit('https://wisemdv2.wiseyak.com/login')
      cy.get('.MuiButton-root').click()
      //cy.contains('Invalid username or password').should('exit')
      cy.get('.MuiAlert-message').should('contain','Invalid username or password.')
      cy.wait(1000)
      cy.screenshot()
      
    })
  })


  describe('Username with empty password login attempt', ()=> {
    it('scenario 2', () => {

        cy.visit('https://wisemdv2.wiseyak.com/login')
        cy.get('input[name="username"]').type('superman')
        cy.get('.MuiButton-root').click()
        cy.get('.MuiAlert-message').should('contain','Invalid username or password.')
        cy.wait(1000)
        cy.screenshot()


    })
  })

  describe('Empty username with password login attempt', ()=> {
    it('scenario 3', () => {

        cy.visit('https://wisemdv2.wiseyak.com/login')
        cy.get('input[name="password"]').type('test1')
        cy.get('.MuiButton-root').click()
        cy.get('.MuiAlert-message').should('contain','Invalid username or password.')
        cy.wait(1000)
        cy.screenshot()


    })
  })


  describe('Invalid username and invalid password Loging attempt', ()=> {
    it('Scenario 4', ()=> {
        cy.visit('https://wisemdv2.wiseyak.com/login')
        cy.get('input[name="username"]').type('hawausername')
        cy.get('input[name="password"]').type('hawapassword')
        cy.get('.MuiButton-root').click()
        cy.get('.MuiAlert-message').should('contain','Invalid username or password.')
        cy.wait(1000)
        cy.screenshot()
    })
  })

  describe('Valid username with invalid password login attempt', ()=>{
    it('Scenario 5', ()=> {
        cy.visit('https://wisemdv2.wiseyak.com/login')
        cy.get('input[name="username"]').type('superman')
        cy.get('input[name="password"]').type('hawapassword')
        cy.get('.MuiButton-root').click()
        cy.get('.MuiAlert-message').should('contain','Invalid username or password.')
        cy.wait(1000)
        cy.screenshot()
    })
  })

  describe('Login Attempt with Special Character in Username field', ()=> {
    it('Scenario 6', ()=> {
        cy.visit('https://wisemdv2.wiseyak.com/login')
        cy.get('input[name="username"]').type('%$$@@@@$&()')
        cy.get('input[name="password"]').type('hawapassword')
        cy.get('.MuiButton-root').click()
        cy.get('.MuiAlert-message').should('contain','Invalid username or password.')
        cy.wait(1000)
        cy.screenshot()
    })
  })

  describe('Maximum character of username ', ()=> {
    it('Scenario 7', ()=> {
        cy.visit('https://wisemdv2.wiseyak.com/login')
        cy.get('input[name="username"]').type('kkkkkkkkkkkkkkkkkssssssssssssssssssssssssssskkkkkkkkkkkkkkkkkkkkkkkkkkeeeeeeeeeeeeeeeeeeeeeddddddddddddkls')
        cy.get('input[name="password"]').type('hawapassword')
        cy.get('.MuiButton-root').click()
        cy.get('.MuiAlert-message').should('contain','Invalid username or password.')
        cy.wait(1000)
        cy.screenshot()
    })
  })

  describe('alid Username with valid password login ', ()=> {
    it('Scenario 8', ()=> {
        cy.visit('https://wisemdv2.wiseyak.com/login')
        cy.get('input[name="username"]').type('superman')
        cy.get('input[name="password"]').type('test1')
        cy.get('.MuiButton-root').click()
        cy.wait(1000)
        cy.screenshot()
    })
  })
