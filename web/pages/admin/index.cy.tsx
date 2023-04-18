import AdminPage from '@/pages/admin/index'

describe("<AdminPage />", () => {
  it("loads correctly", () => {
    cy.mount(<AdminPage />)

    cy.get('h1').should('contain.text', 'Administrator')
    cy.get('a[href="/admin/user-management"]').should('contain.text', 'Manage users')
  })
})

export {}