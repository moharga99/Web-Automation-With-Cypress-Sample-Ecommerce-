import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../pages/loginpg";
import HomePage from "../pages/homepg";
import YourCartPage from "../pages/yourcartpg";
import CoYourInformationPage from "../pages/coyourinformationpg";
import CoOverviewPage from "../pages/cooverviewPG";
import CoCompletePage from "../pages/cocompletepg";

// User Login To Apps
Given("User Open Website", () => {
    LoginPage.goToApps()
    LoginPage.verifyElementLoginPage()
})

When("User Input Username", () => {
    LoginPage.inputUsername('standard_user')
})

When("User Input Password", () => {
    LoginPage.inputPassword('secret_sauce')
})

When("User Click Login Button", () => {
    LoginPage.clickLoginButton()
})

Then("User Should See Home Page", () => {
    HomePage.verifyElementHomePage()
})

// User Add Items To Cart
Given("User On Home Page", () => {
    HomePage.verifyElementHomePage()
})

When("User Add Item 1 To Cart", () => {
   HomePage.addItemToCart(1)
})

When("User Add Item 2 To Cart", () => {
    HomePage.addItemToCart(2)
})

When("User Click Cart Button", () => {
   HomePage.clickCartButton()
})

Then("User Should See Your Cart Page", () => {
   YourCartPage.verifyElementYCPage()
})

// User Checkout Items
Given("User On Your Cart Page", () => {
    YourCartPage.verifyElementYCPage()
})

When("User Click Checkout Button", () => {
   YourCartPage.clickCheckoutButton()
})

Then("User Should See Checkout - Your Information Page", () => {
   CoYourInformationPage.verifyElementCoYourInformationPage()
})

// User Fill Information
Given("User On Checkout - Your Information Page", () => {
    CoYourInformationPage.verifyElementCoYourInformationPage()
})

When("User Input First Name", () => {
   CoYourInformationPage.inputFirstName('Mohamad')
})

When("User Input Last Name", () => {
   CoYourInformationPage.inputLastName('Arga')
})

When("User Input Postal Code", () => {
   CoYourInformationPage.inputPostalCode('43112')
})

When("User Click Continue Button", () => {
   CoYourInformationPage.clickContinueButton()
})

Then("User Should See Checkout - Overview Page", () => {
   CoOverviewPage.verifyElementCoOverviewPage()
})

// User Checkout Confirmation
Given("User On Checkout - Overview Page", () => {
    CoOverviewPage.verifyElementCoOverviewPage()
})

When("User Click Finish Button", () => {
   CoOverviewPage.clickFinishButton()
})

Then("User Should See Checkout - Complete Page", () => {
   CoCompletePage.verifyElementCoCompletePage()
   CoCompletePage.verifyElementOrderSuccess()
})
  
  