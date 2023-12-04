class Login {

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

Verify()
{
    cy.get('.filter-area.mb-5').should('be.visible')
}


}

export default Login;