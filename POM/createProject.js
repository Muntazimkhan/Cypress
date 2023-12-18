import Locators from '../POM/Locators.json'

class Project{

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

    clickCreateProject()
    {
        cy.get('#open_create_project_form').click({ force: true })
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
        let Languagedropdown = Locators.languageDropdown;
        cy.get(Languagedropdown).click()
        cy.get(Locators.Language).click()
    }
    
    setWordCount()
    {
        let WordcountDropdown = Locators.Wordcountdropdown;
        cy.get(WordcountDropdown).click()
        cy.get(Locators.Wordcount).click()
    }
    
    clickSubmit()

    {
        cy.get(Locators.clickSubmit).click()
    }

}

export default Project;