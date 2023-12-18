import Keyword from "../../POM/Keyword";
import data from "../fixtures/data.json";

const { email, password } = data;

const keyword = new Keyword();
describe("Create post from Keyword ", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("Verify that the user is able to create a post from Keyword", () => {
    
    keyword.setEmail(email)
    keyword.setPassword(password)
    keyword.submit()
    keyword.clickProject()
    keyword.openProject()
    keyword.clickCreatePost()
    keyword.clickNext()
    keyword.typeKeywords()
    keyword.typeDescription()
    keyword.selectDropdown()
    // keyword.clickwritePost()




  
  });

});
