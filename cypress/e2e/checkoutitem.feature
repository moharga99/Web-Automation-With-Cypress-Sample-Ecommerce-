@e2e @webautomation
Feature: E2E - User Checkout Several Items

  Scenario: User Checkout Several Items
  # User Login To Apps
    Given User Open Website
     When User Input Username
     When User Input Password
     When User Click Login Button
     Then User Should See Home Page

  # User Add Items To Cart
    Given User On Home Page
     When User Add Item 1 To Cart
     When User Add Item 2 To Cart
     When User Click Cart Button
     Then User Should See Your Cart Page

  # User Checkout Items
    Given User On Your Cart Page
     When User Click Checkout Button
     Then User Should See Checkout - Your Information Page

  # User Fill Information
    Given User On Checkout - Your Information Page
     When User Input First Name
     When User Input Last Name
     When User Input Postal Code
     When User Click Continue Button
     Then User Should See Checkout - Overview Page

  # User Checkout Confirmation
    Given User On Checkout - Overview Page
     When User Click Finish Button
     Then User Should See Checkout - Complete Page