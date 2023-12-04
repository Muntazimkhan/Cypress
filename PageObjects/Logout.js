class Logout{

    setEmail(email)
{
    cy.get('[id="email"]').type('1t.aamer@gmail.com')
}

    setPassword(password)
{
    cy.get('[id="password"]').type('!Test123*')
}

    clickLogin()
{
    cy.get('[class="submit"]').click()
}

    clickDropdown()
{
    cy.get('.drop-down.user-option').click()

}
    clickLogout()
{
    cy.xpath("//i[contains(@class,'bx bx-power-off')]").click()

}

Verify()
{
    cy.get('.field-area.login-area').should('contain.text', 'Welcome Back!')
}

}

export default Logout;