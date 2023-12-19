import { ecNormalize } from 'sshpk'
import AudioFile from '../../POM/AudioFile'
import data from '../fixtures/data.json'

const {email, password} = data

const audio = new AudioFile

describe('Create post from Audio File ', () => {
    beforeEach(() =>{
        cy.visit('/login');
    })

    it('Verify that the user is able to create a post from Audio File', () => {
      
        audio.setEmail(email)
        audio.setPassword(password)
        audio.submit()
        audio.clickProject()
        audio.openProject()
        audio.clickCreatePost()
        audio.clickFromaudio()
        audio.clickNext()
        audio.audioURL()
        audio.audioDescription()
        audio.audioDropdown()
        audio.audioadditionalDescription()
        // audio.clickSubmit()

        

        


        
        
    });

})