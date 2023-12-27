import Locators from '../POM/Locators.json'


class Aidetector {
    selectors= {
        TypeaiURL: "input#fetch_url_input",
        clickfetchURL: "button#fetch_url_button",
        checkAIcontent: "button#check_ai_button",
        rewriteAIcontent: "button#rewrite_all_sentences"
      }
    setEmail(email) 
    {

        cy.get(Locators.emailField).type(email)
    }

    setPassword(password) 
    {

        cy.get(Locators.passowrdField).type(password)
    }

    submit() 
    {
        cy.get(Locators.clickLoginButton).click()
    }

    // clickAIdetector(){
    //     cy.get(Locators.ClickAID).click({ force: true })
    // }

    typeURL(){
        cy.get(this.selectors.TypeaiURL).type('www.atlassian.com/software/jira', { force: true })
    }

    clickFetchURL(){
        cy.get(this.selectors.clickfetchURL).click( { force: true })
    }

    checkAIcontent(){
        cy.get(this.selectors.checkAIcontent).click({ force: true })
    }

    rewriteAllaisentences(){
        cy.get(this.selectors.rewriteAIcontent)
  .click({ force: true })
  .then(() => {
    cy.get('button.swal2-confirm.swal2-styled.swal2-default-outline')
      .click({ force: true });
  });

    
    }
}

export default Aidetector;