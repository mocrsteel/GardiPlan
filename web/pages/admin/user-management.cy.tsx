import UserManagementPage from "@/pages/admin/user-management";



describe('<UserManagementPage />', () => {
  it('renders correctly', () => {
    cy.mount(<UserManagementPage />)

    cy.get('h1').should('contain.text', 'User management')


  })
})

export {}