class createProject {

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

    clickCreateProject()
    {
        cy.get('.cs-secondary-btn.create-project').click({ force: true });
    }

    setProjectName(projectName)
    {
        cy.get('#project-name').type('Automation Project')
    }

    setProjectUrl(projectUrl)
    {
        cy.get('#project-url').type('www.ibm.com/topics/automation')
    }

    setProjectContext(projectContext)
    {
        cy.get('#project-context').type('In general usage.')
    }

    setMonthlyPostCount(monthlyPostCount)
    {
        cy.get('#monthly-post-count').type(5)
    }

    setTargetAudience(targetAudience)
    {
        cy.get('#target-audience').type('Students')
    }

    setTOV(TOV)
    {
        let TOVdropdown = ".project-fields.mx-auto div div:nth-child(6)";
        cy.get(TOVdropdown).click()
        cy.get('.select2-results__option.select2-results__option--group li:nth-child(7)').click()
    }

    setLanguage(Language)
    {
        let Languagedropdown = ".project-fields.mx-auto div div:nth-child(7)";
        cy.get(Languagedropdown).click()
        cy.get('.select2-dropdown.select2-dropdown--above li:nth-child(25)').click()
    }

    setWordCount(WordCount)
    {
        let Wordcountdropdown = ".project-fields.mx-auto div div:nth-child(8)";
        cy.get(Wordcountdropdown).click()
        cy.get('.select2-dropdown.select2-dropdown--above li:nth-child(2)').click()
    }

    clickSubmit()
    {
        cy.get('[type="submit"]').click()
    }

    Verify()
    {
        cy.get('.filter-area.mb-5').should('be.visible')
    }       

    


}

export default createProject;