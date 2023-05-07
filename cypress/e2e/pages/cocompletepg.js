import BasePage from "./basepg";

const CO_COMPLETE_ELEMENT = '.title'
const ORDER_SUCCESS_ELEMENT = '.complete-header'

class CoCompletePage{
    static verifyElementCoCompletePage(){
        BasePage.verifyElementVisible(CO_COMPLETE_ELEMENT)
    }

    static verifyElementOrderSuccess(){
        BasePage.verifyElementVisible(ORDER_SUCCESS_ELEMENT)
    }

}

export default CoCompletePage