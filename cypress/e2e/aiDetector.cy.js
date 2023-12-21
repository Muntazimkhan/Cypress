import Aidetector from "../../POM/AIDetector";
import data from '../fixtures/data.json'

const {email, password} = data;

const AIDetector = new Aidetector
describe('Create fetch data from link ', () => {
    beforeEach(() =>{
        cy.visit('/login');
    })

    it('Verify that the user is able to fetch data from a link', () => {
        
        AIDetector.setPassword(password)
        AIDetector.setEmail(email)
        AIDetector.submit()
        // AIDetector.clickAIdetector()
        cy.get('.list-unstyled.components.mb-5 li:nth-child(4)').click()
        AIDetector.typeURL()
        AIDetector.clickFetchURL()
        //Check for AI-Content 
        AIDetector.checkAIcontent()
        //Rewrite All AI Sentences
        cy.wait(25000);
        AIDetector.rewriteAllaisentences()
        cy.get('button.swal2-confirm.swal2-styled.swal2-default-outline').click(force , true);
        cy.wait(25000);

    });

})