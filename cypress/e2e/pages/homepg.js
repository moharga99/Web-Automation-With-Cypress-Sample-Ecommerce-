import BasePage from "./basepg"
const HOME_ELEMENT = '.app_logo'
const ADD_TO_CART_BUTTON = '[data-test]'
const CART_BUTTON = '.shopping_cart_link'

class HomePage {
    static verifyElementHomePage(){
        BasePage.verifyElementVisible(HOME_ELEMENT)
    }

    static addItemToCart(itemIndex){
        BasePage.clickByEq(ADD_TO_CART_BUTTON, itemIndex)
    }

    static clickCartButton(){
        BasePage.click(CART_BUTTON)
    }

}

export default HomePage