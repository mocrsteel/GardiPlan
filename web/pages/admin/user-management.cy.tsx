import UserManagementPage from "@/pages/admin/user-management";



describe('<UserManagementPage />', () => {
  it('renders correctly', () => {
    cy.mount(<UserManagementPage />)

    cy.get('h1').should('contain.text', 'User Management')
    cy.fixture('users/database').then((database) => {
      for(const user of database.users) {
        cy.get('li').should('contain.text', user.userName)
        cy.get('li')  .should('contain.text', user.fisrtName)
        cy.get('li').should('contain.text', user.lastName)
        cy.get('li').should('contain.text', user.email)
        cy.get('li').should('contain.text', user.creationDate)
        cy.get('li').should('contain.text', 'Approval status')

      }
    })
    cy.get('ul').children().should('contain.text', 'JaneDoe1')

  })
})

export {}