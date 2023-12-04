/// <reference types="cypress" />
import Blog from "../../PageObjects/Blog";

describe('Create post from Blog post URL ', () => {
    beforeEach(() =>{
        cy.visit('/login');
    })

    it('Verify that the user is able to create a post from blog post URL', () => {
       
        const ln = new Blog()
        ln.setEmail()
        ln.setPassword()
        ln.clickLogin()
        ln.clickProject()
        ln.clickOpenProject()
        // ln.clickWritepost()
        cy.get('.project-content-btn .cs-secondary-btn ').click({ force: true })
        ln.clickBlogpost()
        ln.clickNext()
        ln.setBlogurl()
        ln.setDescription()
        ln.clickDropdown()
        ln.setTextarea()
        // ln.clickWritepost()

    });

})