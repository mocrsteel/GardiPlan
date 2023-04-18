/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress E2E Test
describe('Index Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="about"]').click()

    // The new url should include "/about"
    cy.url().should('include', '/about')

    // The new page should contain an h1 with "About page"
    cy.get('h1').contains('About Page')
  })
  it('should navigate to the login page', () => {
    cy.visit('http://localhost:3000/')

    cy.get('a[href*="/user/login"]').click()

    cy.url().should('include', '/user/login')
    cy.get('h1').should('contain.text', 'Login')
  })
})
describe("User navigation", () => {
  it('should navigate from login to create user when link is clicked', () => {
    cy.visit('http://localhost:3000/user/login')

    cy.get('a[href="/user/create"]').click()
    cy.url().should('include', 'user/create')
    cy.get('h1').should('contain.text', "Create an user account")
  })
})

describe("Admin navigation", () => {
  it('navigates to user management', () => {
    cy.visit("http://localhost:3000/admin")

    cy.get('a[href="/admin/user-management"]').click()
    cy.url().should('include', '/admin/user-management')
    cy.get('h1').should('contain.text', "User management")
  })
})

// Prevent TypeScript from reading file as legacy script
export {}
