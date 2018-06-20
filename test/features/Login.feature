
Feature: To validate the Login Screen functionality

@Scenario
Scenario: User is on the Thesys CAT Login Page
    Given User is on the Browser
    When User inputs URL and launch the thesyscat login screen
    Then User is on the Thesys CAT Login Page 

@OutlineScenario
Scenario Outline: Login Screen UI field Labels validations
    When User Validates the UI Field Labels <Field_Labels>
    Then All the UI field labels should match the Requirment Screen Mockup Labels <Field_Labels>
    Examples:
    |Field_Labels|
    |CAT|
    |CAT LOGIN|
    |Enter Login Credentials|
    |Username *|
    |Password *|
    |LOGIN|
    |If you need to reset your password or recover your username, contact the Thesys CAT Testing Team at: uat@thesyscat.com.|

@OutlineScenario
Scenario Outline: Username and Password input error messages validations
    When User inputs invalid credentials for <Username> and <Password> fields
    Then User should see the appropriate error messages <Error_Message_Usename> and <Error_Message_Password>
    Examples:
    |Username               |Password            |Error_Message_Usename   |Error_Message_Password|
    |                       |                    |* Username is required  |* Password is required|
    |SRO_TEST@TEST.COM      |PASSWORD            |* Enter a valid username|                      |


@OutlineScenario
Scenario Outline: Login Credentials validations
    When User enters the different combinations of invalid credentials <Username> and <Password>
    And User clicks on LOGIN button
    Then User should see the appropriate error message <Error_Message>
    Examples:
    |Username               |Password                                  |Error_Message                                 |
    |test_all@test.com      |Password@456                              |The username and password entered is incorrect.|
    |test_all@test.com      |Password456~!@#$%^&*()_+_)(*&^%$#$%:"<>?}{|The username and password entered is incorrect.|

@OutlineScenario
Scenario Outline: Thesys CAT Login with valid Credentials using LOGIN button
    When User enters valid credentials <Username> and <Password>
    And User clicks on LOGIN button
    Then User successfully logged in to the Administrator Portal and sees the <Message>
    Examples: 
    |Username               |Password       |Message                              |
    |test_all@test.com      |#Wbv27HXPzU@3rB97g0^    |Consolidated Audit Trail system is up|

@Scenario
Scenario: Thesys CAT Logout validation
    Given User is on the Thesys CAT Home Page
    When User clicks Logout button
    Then User successfully logs out of the Thesys CAT Application

@OutlineScenario
Scenario Outline: Thesys CAT Login with valid Credentials using ENTER Key
    When User enters valid credentials <Username> and <Password>
    And User hits on ENTER Key
    Then User successfully logged in to the Administrator Portal and sees the <Message>
    Examples:
    |Username               |Password                                 |Message                              |
    |test_all@test.com      |#Wbv27HXPzU@3rB97g0^                              |Consolidated Audit Trail system is up|

# this scenario is used to logout from system
@Scenario
Scenario: Thesys CAT Logout validation
    Given User is on the Thesys CAT Home Page
    When User clicks Logout button
    Then User successfully logs out of the Thesys CAT Application

    
@OutlineScenario
Scenario Outline: User Logins To Thesyscat Portal
    When User inputs valid user <Username>
    Then User inputs valid pass <Password>
    Then User Clicks on Login Button
    Then User Will be On Admin Portal Page
  Examples:
    |Username               |Password                                 |Message                              |
    |test_all@test.com      |#Wbv27HXPzU@3rB97g0^                     |Consolidated Audit Trail system is up|

