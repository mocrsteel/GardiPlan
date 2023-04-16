import CreateUser, { CreateUserForm } from '@/pages/user/create'

describe('<CreateUser/>', () => {
  it('renders a title and the correct form', () => {
    cy.mount(<CreateUser />)

    cy.get('h1').should('contain.text', 'Create a new user')

    cy.get('form').within(() => {
      cy.fixture('users/user-1').then((user) => {
        cy.get('#userName').should('be.visible')
        cy.get('#firstName').should('be.visible')
        cy.get('#lastName').should('be.visible')
        cy.get('#email').should('be.visible')
        cy.get('#password').should('be.visible')
        cy.get('#verifyPassword').should('be.visible')
        cy.get('input[type=submit]').should('be.visible')
      })
    })
  })
  it('takes inputs correctly', () => {
    cy.mount(<CreateUser />)

    cy.fixture('users/user-1').then((user) => {
      for (const key in user) {
        const value = user[key]
        console.log(key, value)
        cy.get(`#${key}`).type(value)
      }
      for (const key in user) {
        const value = user[key]
        cy.get(`#${key}`).should('contain.value', value)
      }
    })
  })
})
