import document from "../../POM/Document";
import data from '../fixtures/data.json'

const {email, password} = data

const Document = new document


describe('Create post from Document ', () => {
    beforeEach(() =>{
        cy.visit('/login');
    })

    it('Verify that the user is able to create a post from Document', () => {
      
        Document.setEmail(email);
        Document.setPassword(password);
        Document.submit();
        Document.clickProject();
        Document.openProject();
        Document.clickCreatePost();
        Document.clickFromdocument();
        Document.clickNext();
        Document.UploadDocument();
        Document.typeKeywords();
        Document.typeDescription();
        // Document.clickwritePost();
        
     


});
});
