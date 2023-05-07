class BasePage{
    static visit(url){
        cy.visit(url)
    }
    
    static click(element){
        cy.get(element).click()
    }

    static clickByEq(element, index){
        cy.get(element).eq(index).click()
    }

    static type(element,text){
        cy.get(element).type(text)
    }

    static verifyElementVisible(element){
        cy.get(element).should('be.visible')
    }

    static wait3Seconds(){
        cy.wait(3000)
    }
}

export default BasePage