import Locators from '../POM/Locators.json'

class Blogpost{

    setEmail(email) 
    {

        cy.get(Locators.emailField).type(email)
    }

    setPassword(password) 
    {

        cy.get(Locators.passowrdField).type(password)
    }

    submit() 
    {
        cy.get(Locators.clickLoginButton).click()
    }

    clickProject()
    {
        cy.get(Locators.clickProject).click()
    }

    openProject(){
        cy.get('#_-Color').click({force: true})
        cy.get(Locators.OpenProject).contains("Artificial Intelligence").click({force:true})
    }

    clickCreatePost(){
        cy.get(Locators.createPost).click()
    }

    clickBlogpost(){
        cy.get(Locators.blogPost).click()

    }

    clickNext(){
        cy.get(Locators.clickNext).click()
    }

    blogURL(){
        cy.get(Locators.BlogURL).type('https://blog.hubspot.com/marketing/how-to-start-a-blog', {force:true})
    }

    blogDescription(){
        cy.get(Locators.BlogDescription).type('Blog Post Description',  {force:true})
    }

    blogDropdown(){
        let dropdown = Locators.BlogpostDropdown;
        cy.get(Locators.BlogpostDropdown).click();
        cy.get(Locators.Blogwordcount).click()
    }

    blogAdditionalcontext(){
        cy.get(Locators.blogAdditionalcontext).type('Additional Context Description', {force: true})

    }

    clickwritePost(){
        cy.contains(Locators.clickWritepost).click()    
    }
}
export default Blogpost;