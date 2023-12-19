import YouTube from '../../POM/Youtube'
import data from '../fixtures/data.json'
const { email, password } = data;

const youtube = new YouTube();


describe('Create post from Youtube Video ', () => {
    beforeEach(() =>{
        cy.visit('/login');
    })

    it('Verify that the user is able to create a post from Youtube video', () => {
      
        youtube.setEmail(email)
        youtube.setPassword(password)
        youtube.submit()
        youtube.clickProject()
        youtube.openProject()
        youtube.clickCreatePost()
        youtube.clickFromyoutube()
        youtube.clickNext()
        youtube.enterURL()
        youtube.typeDescription()
        youtube.youtubeDropdown()
        youtube.typeadditionalDescription()
        // youtube.clickwritePost()


       

       

       


        
    });

})