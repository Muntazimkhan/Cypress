import Project from "../../POM/createProject";
import data from '../fixtures/data.json'
const {email, password} = data;


const   createProject = new Project()


describe('Create Project ', () => {
    beforeEach(() =>{
        cy.visit('/login');
    })

    it('Verify that the user is able to create a project', () => {
         
        createProject.setEmail(email)
        createProject.setPassword(password)
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