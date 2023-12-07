import Locators from '../POM/Locators.json'

class Project{

    setEmail() 
    {

        cy.get(Locators.emailField).type('1t.aamer@gmail.com')
    }

    setPassword() 
    {

        cy.get(Locators.passowrdField).type('!Test123*')
    }

    submit() 
    {
        cy.get(Locators.clickLoginButton).click()
    }

    clickProject()
    {
        cy.contains(Locators.clickProject).click()
    }

    clickCreateProject()
    {
        cy.get(Locators.ClickCreateProjectButton).click({ force: true })
    }

    setProjectName()
    {
        cy.get(Locators.setProjectName).type('Automation Project')
    }

    setProjectUrl()
    {
        cy.get(Locators.setProjectUrl).type('www.ibm.com/topics/automation')
    }
    
    setProjectContext()
    {
        cy.get(Locators.setProjectContext).type('In general usage.')
    }

    setMonthlyPostCount()
    {
        cy.get(Locators.setMonthlyPostCount).type(5)
    }

    setTargetAudience()
    {
        cy.get(Locators.setTargetAudience).type('Students')
    }

    setTOV()
    {
        let TOVdropdown = Locators.TovDropdown;
        cy.get(Locators.TovDropdown).click()
        cy.get(Locators.TOV).click()
    }
    
    setLanguage()
    {
        let Languagedropdown = Locators.Languagedropdown;
        cy.get(Locators.Languagedropdown).click()
        cy.get(Locators.Language).click()
    }
    
    setWordCount()
    {
        let Wordcountdropdown = Locators.Wordcountdropdown;
        cy.get(Locators.Wordcountdropdown).click()
        cy.get(Locators.Wordcount).click()
    }
    
    clickSubmit()

    {
        cy.get(Locators.clickSubmit).click()
    }

}

export default Project;