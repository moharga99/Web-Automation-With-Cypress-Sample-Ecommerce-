import BasePage from "./basepg";

const CO_OVERVIEW_ELEMENT = '.title'
const FINISH_BUTTON = '#finish'

class CoOverviewPage{
    static verifyElementCoOverviewPage(){
        BasePage.verifyElementVisible(CO_OVERVIEW_ELEMENT)
    }

    static clickFinishButton(){
        BasePage.click(FINISH_BUTTON)
    }

}

export default CoOverviewPage