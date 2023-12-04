class Keyword{

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
    
    clickProject()
    {
        cy.contains('a', 'Projects').click()
    }

    clickProject()
    {
        cy.contains('a', 'Projects').click()
    }

    clickOpenProject()
    {
        cy.get("#project_6986").contains("Artificial Intelligence").click({ force: true });
    }

    // clickWritepost()
    // {
    //     cy.get('.project-content-btn .cs-secondary-btn ').click({ force: true })
    // }

    clickNext()
    {
        cy.get('.cs-secondary-btn.next-content').click()

    }

    setKeyword(keyword)
    {
        cy.get("#new-keyword").type('American History')
    }

    setKeywordContext(keywordContext)
    {
        cy.get("#new-keyword-context").type('American History description')
    }

    clickDropdown()

    {
        let dropdown = "#from-keyword-section div div:nth-child(4)";
        cy.get(dropdown).click()
        cy.get("ul#select2-new-keyword-word-count-results li:nth-child(3)").click()
    }
    
    clickCustombrief()
    {
        cy.contains('Customize Brief').click()
    }
    
    clickWritepost()
    {
        cy.contains('Write Post Now').click()
    }
    



}

export default Keyword