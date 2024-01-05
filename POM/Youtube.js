import Locators from '../POM/Locators.json'

class youtube {
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

    clickFromyoutube(){
        cy.get(Locators.Fromyoutube).click({ force: true })
    }

    clickNext(){
        cy.get(Locators.clickNext).click({ force: true })
    }

    enterURL(){
        cy.get(Locators.YoutubeURL).type('https://youtu.be/N8p7tmoHZ1k?si=mlD02Xh4jEvMp-ns', { force: true })

    }

    typeDescription(){
        cy.get(Locators.YoutubeDescription).type('Youtube Video Description', { force: true })
    }

    youtubeDropdown(){
        let dropDown = Locators.YoutubepostDropdown;
        cy.get(Locators.YoutubepostDropdown).click()
        cy.get(Locators.Youtubewordcount).click()
    }

    typeadditionalDescription(){
        cy.get(Locators.YoutubeAdditionalcontext).type('Additional Youtube Video context', { force: true })
    }

    clickwritePost(){
        cy.get(Locators.clickwritePost).click()
    }



}
export default youtube;