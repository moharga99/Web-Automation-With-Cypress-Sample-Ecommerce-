import BasePage from "./basepg"

const URL = 'https://www.saucedemo.com'
const USERNAME_FIELD = '#user-name'
const PASSWORD_FIELD = '#password'
const LOGIN_BUTTON = '#login-button'
const LOGIN_ELEMENT = '.login_logo'

class LoginPage {
    static goToApps(){
        BasePage.visit(URL)
    }

    static verifyElementLoginPage(){
        BasePage.verifyElementVisible(LOGIN_ELEMENT)
    }

    static inputUsername(username){
        BasePage.type(USERNAME_FIELD, username)
    }

    static inputPassword(password){
        BasePage.type(PASSWORD_FIELD, password)
    }

    static clickLoginButton(){
        BasePage.click(LOGIN_BUTTON)
    }

}

export default LoginPage