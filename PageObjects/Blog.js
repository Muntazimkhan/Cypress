class Blog {

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

    clickBlogpost()
    {
        cy.get('.from-blog').click()
    }

    clickNext()
    {
        cy.get('.cs-secondary-btn.next-content').click()

    }

    setBlogurl()
    {
        cy.get('#content-from-blog-url').type('https://blog.hubspot.com/marketing/how-to-start-a-blog')
    }

    setDescription()
    {
        cy.get('input#new-blog-url-keyword').type('Description')
    }

    clickDropdown()
    {
        let dropdown = "div#from-blog-section div div div:nth-child(3)";
        cy.get(dropdown).click();
        cy.get('.select2-dropdown.select2-dropdown--below li:nth-child(4)').click()
    }

    setTextarea()
    {
        cy.get('textarea#new-blog-post-context').type('Additional Context Description')
    }

    clickWritepost()
    {
        cy.contains('Write Post Now').click()
    }

}

export default Blog;