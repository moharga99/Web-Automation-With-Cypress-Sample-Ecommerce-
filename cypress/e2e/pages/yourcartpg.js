import BasePage from "./basepg";

const YOUR_CART_ELEMENT = '.title'
const CHECKOUT_BUTTON = '#checkout'

class YourCartPage{
    static verifyElementYCPage(){
        BasePage.verifyElementVisible(YOUR_CART_ELEMENT)
    }

    static clickCheckoutButton(){
        BasePage.click(CHECKOUT_BUTTON)
    }

}

export default YourCartPage