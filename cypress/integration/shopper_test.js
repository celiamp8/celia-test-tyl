describe('Tyl Tech Test - Swag Labs Shopping App', () => {

  beforeEach(() => {
    // Preserve cookies in every test
    Cypress.Cookies.defaults({
      preserve: (cookie) => {
        return true
      }
    })
    // Restore local storage in every test
    cy.restoreLocalStorage()
  });

  afterEach(() => {
    cy.saveLocalStorage()
  });

  before('logs in to the swag labs shopping website', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name')
      .type('standard_user')
    cy.get('#password')
      .type('secret_sauce')
    cy.get('#login-button')
      .click()

    cy.url().should('include', 'inventory')
  })

  it('sorts the product list from highest to lowest price', () => {
    cy.get('[data-test=product_sort_container]')
      .select('hilo')

    cy.get('[data-test=product_sort_container]')
      .find(':selected').should('have.text', 'Price (high to low)')
  })

  it('adds the most expensive and cheapest items to the cart', () => {
    cy.get('.inventory_item')
      .first()
      .find('.btn_inventory')
      .click()

    cy.get('.inventory_item')
      .last()
      .find('.btn_inventory')
      .click()

    cy.get('.shopping_cart_badge').should('have.text', '2')
  })

  it('opens the cart to view the items', () => {
    cy.get('.shopping_cart_link')
      .click()

    cy.get('.cart_list')
      .find('.cart_item').should('have.length', 2)
  })

  it('finishes the checkout process', () => {
    cy.get('[data-test=checkout]')
      .click()

    cy.get('[data-test=firstName]')
      .type('Celia')
    cy.get('[data-test=lastName]')
      .type('Test')
    cy.get('[data-test=postalCode]')
      .type('0000')

    cy.get('[data-test=continue]')
      .click()

    cy.get('#checkout_summary_container').should('be.visible')

    cy.get('[data-test=finish]')
      .click()

    cy.url().should('include', 'checkout-complete')
    cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
  })
})