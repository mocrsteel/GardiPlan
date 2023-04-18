import CreateUser from "@/pages/user/create"

import type { NewUser } from '@/types/users'

const fillForm = (userData: NewUser) => {
  for (const key in userData) {
    const value = userData[key]
    
  }
}

describe("<CreateUser/>", () => {
  it("renders a title and the correct form", () => {
    cy.mount(<CreateUser />)

    cy.get("h1").should("contain.text", "Create a new user account")

    cy.get("form").within(() => {
      cy.fixture("users/user-1").then((user) => {
        cy.get("input[name=userName]").should("be.visible")
        cy.get("input[name=firstName]").should("be.visible")
        cy.get("input[name=lastName]").should("be.visible")
        cy.get("input[name=email]").should("be.visible")
        cy.get("input[name=password]").should("be.visible")
        cy.get("input[name=verifyPassword]").should("be.visible")
        cy.get("input[type=submit]").should("be.visible")
      })
    })
  })
  it("takes inputs correctly", () => {
    cy.mount(<CreateUser />)

    cy.fixture("users/user-1").then((user) => {
      for (const key in user) {
        const value = user[key]
        cy.get(`input[name=${key}]`).type(value)
      }
      for (const key in user) {
        const value = user[key]
        cy.get(`input[name=${key}]`).should("contain.value", value)
      }
    })

    // submitting form keeps reloading test for some reason.

    // cy.get('input[type=submit]').click()
  })
  it('displays an error when the password and verification password do not match', () => {
    cy.mount(<CreateUser />)

    cy
  })
})

export {}
