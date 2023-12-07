import Project from "../../POM/createProject";

const   createProject = new Project()


describe('Create Project ', () => {
    beforeEach(() =>{
        cy.visit('/login');
    })

    it('Verify that the user is able to create a project', () => {
         
        createProject.setEmail()
        createProject.setPassword()
        createProject.submit()
        createProject.clickProject()
        createProject.clickCreateProject()
        createProject.setProjectName()
        createProject.setProjectUrl()
        createProject.setProjectContext()
        createProject.setMonthlyPostCount()
        createProject.setTargetAudience()
        createProject.setTOV()
        createProject.setLanguage()
        createProject.setWordCount()
        // createProject.clickSubmit()

        
    
        


        
        });

})