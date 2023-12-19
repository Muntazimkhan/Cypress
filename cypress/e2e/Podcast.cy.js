import Podcast from '../../POM/Podcast'
import data from '../fixtures/data.json'

const {email, password} = data

const podcast = new Podcast


describe('Create post from podcast ', () => {
    beforeEach(() =>{
        cy.visit('/login');
    })

    it('Verify that the user is able to create a post from podcast', () => {
        
        podcast.setEmail(email)
        podcast.setPassword(password)
        podcast.submit()
        podcast.clickProject()
        podcast.openProject()
        podcast.clickCreatePost()
        podcast.clickFrompodcast()
        podcast.clickNext()
        podcast.podcastURL()
        podcast.podcastDescription()
        podcast.podcastDropdown()
        podcast.podcastadditionalcontext()
        // podcast.clickSubmit()


      

       


        
    });

})