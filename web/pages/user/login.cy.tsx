import Login from '@/pages/user/login'

const TESTUSER: string = 'testUser'
const TESTPASSWORD: string = 'testPassword'

describe('<Login />', () => {
  it('renders a Login title with an username and password form', () => {
    cy.mount(<Login />)

    cy.get('h1').should('contain.text','Login')

    cy.get('form#login').within(() => {
      cy.get('input[name=username]').type(TESTUSER)
      cy.get('input[name=username]').should('contain.value', TESTUSER)

      cy.get('input[name=password]').type(TESTPASSWORD)

      cy.get('input[name=password]').should('contain.value', TESTPASSWORD)
      cy.get('input[name=password]').invoke('attr', 'type').should('eq', 'password')

      cy.get('input[type=submit]').should('contain.value', 'Submit')
    })

  })
})
