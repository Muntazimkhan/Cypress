import Blogpost from "../../POM/blogPost";
import data from '../fixtures/data.json'

const {email, password} = data

const BlogpostPage = new Blogpost();
describe('Create post from Blog post URL ', () => {
    beforeEach(() =>{
        cy.visit('/login');
    })

    it('Verify that the user is able to create a post from blog post URL', () => {
       
        BlogpostPage.setEmail(email)
        BlogpostPage.setPassword(password)
        BlogpostPage.submit()
        BlogpostPage.clickProject()
        BlogpostPage.openProject()
        BlogpostPage.clickCreatePost()
        BlogpostPage.clickBlogpost()
        BlogpostPage.clickNext()
        BlogpostPage.blogURL()
        BlogpostPage.blogDescription()
        BlogpostPage.blogDropdown()
        BlogpostPage.blogAdditionalcontext()
        // BlogpostPage.clickwritePost()

    });

})