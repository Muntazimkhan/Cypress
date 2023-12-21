import Locators from '../POM/Locators.json'

class document {
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
        cy.get(Locators.OpenProject).contains("Artificial Intelligence").click({force:true})
    }

    clickCreatePost(){
        cy.get(Locators.createPost).click()
    }

    clickFromdocument(){
        cy.get(Locators.Fromdocument).click({ force: true })
    }    

    clickNext(){
        cy.get(Locators.clickNext).click()
    }

    UploadDocument(){
        cy.fixture('Profile.pdf', 'base64').then((fileContent) => {
            // Find the file input element and attach the file
            cy.get('input#content-from-doc-file').attachFile({
              fileContent: fileContent,
              fileName: 'Profile.pdf',
              mimeType: 'application/pdf'
            });
        })
    }

    typeKeywords(){
        cy.get(Locators.typedocumentKeyword).type('Files',{ force: true })
    }

    typeDescription(){
        cy.get(Locators.typedocumentDescription).type('Additional Context',{ force: true })

    }
    
    clickwritePost(){
        cy.contains(Locators.clickWritepost).click()    
    }

}        
export default document