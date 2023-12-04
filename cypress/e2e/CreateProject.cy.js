/// <reference types="cypress" />
import createProject from "../../PageObjects/createProject";

describe('Create Project ', () => {
    beforeEach(() =>{
        cy.visit('/login');
    })

    it('Verify that the user is able to create a project', () => {
         
        const ln = new createProject();

        ln.setEmail('1t.aamer@gmail.com');
        ln.setPassword('!Test123*');
        ln.clickLogin();
        ln.clickProject();
        ln.clickCreateProject();
        ln.setProjectName('Automation Project');
        ln.setProjectUrl('www.ibm.com/topics/automation');
        ln.setProjectContext('In general usage.');
        ln.setMonthlyPostCount(5);
        ln.setTargetAudience('Students');
        ln.setTOV(7);
        ln.setLanguage('English');
        ln.setWordCount(10);
        // ln.clickSubmit();
        // ln.Verify();
        


        
        });

})