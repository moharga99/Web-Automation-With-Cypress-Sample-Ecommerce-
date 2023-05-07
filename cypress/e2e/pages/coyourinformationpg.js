import BasePage from "./basepg";

const CO_YOUR_INFORMATION_ELEMENT = '.title'
const FIRST_NAME_FIELD = '#first-name'
const LAST_NAME_FIELD = '#last-name'
const POSTAL_CODE_FIELD = '#postal-code'
const CONTINUE_BUTTON = '#continue'

class CoYourInformationPage{
    static verifyElementCoYourInformationPage(){
        BasePage.verifyElementVisible(CO_YOUR_INFORMATION_ELEMENT)
    }

    static inputFirstName (firstname){
        BasePage.type(FIRST_NAME_FIELD, firstname)
    }

    static inputLastName (lastname){
        BasePage.type(LAST_NAME_FIELD, lastname)
    }

    static inputPostalCode (postalcode){
        BasePage.type(POSTAL_CODE_FIELD, postalcode)
    }

    static clickContinueButton(){
        BasePage.click(CONTINUE_BUTTON)
    }

}

export default CoYourInformationPage