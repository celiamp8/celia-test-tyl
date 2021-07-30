# Tyl SDET Technical Test - Celia Martin

### Exercise

Create a E2E test that comprises the below steps:

1. Login to https://www.saucedemo.com/ using the "standard user" account
2. Sort the products by Price (high to low)
3. Add the cheapest & costliest products to your basket
4. Open the basket
5. Checkout
6. Enter details and Finish the purchase

### Technical specs

The tests are written using Cypress.io and Javascript.

### How to run

- Download the repository
- Run `npm install`
- From the terminal, navigate to the repository's main folder: celia-test-tyl
- If you want to run the tests **from the command line**: In the terminal run `npm run cy:run:test`
- If you want to run the tests **from the Cypress App**: In the terminal run `npm run cy:open`, once the app is open click on `shopper_test.js`
