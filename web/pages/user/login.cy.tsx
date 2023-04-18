import Login from '@/pages/user/login'

describe('<Login />', () => {
  it('renders a Login title with an username and password form', () => {
    cy.mount(<Login />)

    cy.get('h1').should('contain.text','Login')

    cy.get('form#login').within(() => {
      cy.fixture('users/user-1').then((user) => {
        cy.get('input[name=userName]').type(user.userName)
        cy.get('input[name=password]').type(user.password)
        cy.get('input[name=userName]').should('contain.value', user.userName)
        cy.get('input[name=password]').should('contain.value', user.password)
      })
      
      cy.get('input[name=password]').invoke('attr', 'type').should('eq', 'password')
      cy.get('input[type=submit]').should('contain.value', 'Submit')
    })
  })
})

export {}