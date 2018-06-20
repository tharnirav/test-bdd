
Feature: To submit a query in Query Portal and view its result sets in the Submitted Queries table

    @OutlineScenario
    Scenario Outline: Submitting a Query by selecting desired filter criteria
        Given User is on the OTQT Home Page.
        #Date and Time Bar Section
        When User selects Date and Time range <Date> and <From_Time> and <To_Time> filters
        #Types Section
        And User selects Types <Trades_Orders> and <Equities_Options> filters
        #Symbols Section
        And User selects Symbols <Symbols> filter
        #General Tab
        And User inputs Exchanges <Exchange> filter
        And User inputs Order Id <Order_Id> filter
        And User selects Order Types <Order_Types> filter
        #Prices & Quantities
        And User inputs Trades Trade Price <Trade_Price> and Trade Quantity <Trade_Quantity> filters
        And User inputs Oder details <Limit_Price> and <Order_Quantity> filters
        #Equities Section
        And User inputs Equity Capacity <Equity_Capacity> filter
        And User clicks SUBMIT button
        Then Submit Query Confirmation popup window is displayed
        Examples:
            | Date       | From_Time | To_Time  | Trades_Orders     | Equities_Options | Symbols | Exchange | Order_Id          | Order_Types | Trade_Price | Trade_Quantity | Limit_Price | Order_Quantity | Equity_Capacity |
            | 10/02/2017 | 08:00:00  | 14:00:00 | Orders And Trades | Equities Only    | AAPL    | ARCA     | 16044086573117208 | LMT         | 153.40      | 92             | 153.40      | 92             | Principal       |

    @Scenario
    Scenario: Submit Query Confirmation popup window data validation
        Given User is on the Submit Query Confirmation popup window
        When User modifies the Query Name
        And User Validates the details of the Query Confirmation popup window
        And User clicks Submit button
        And The Submit Query Confirmation popup window is closed and the Submitted Query is listed in the Submitted Queries table grid
        And User validates the Query record data for all the columns for Statuses Processing and Completed
        Then The Results Count is null for status Processing and populates data for Results Count for status Completed


   # @OutlineScenario
  #  Scenario Outline: Results set data validation of the Submitted Query Id
  #      Given User is on the Query Results Page of the submitted Query Id
  #      When User validates the details on the Submission Information tab
  #      Then Submission Information tab details should match the Submitted Queries table grid data
  #      And User validates the details on the Query Parameters and Filters tab
  #      Then Query Parameters and Filters tab details should match the Submit Query Confirmation popup data <Date>, <From_Time>, <To_Time>, <Trades_Orders>, <Equities_Options>, <Symbols>, <Exchange>, <Order_Id>, <Order_Types>, <Trade_Price>, <Trade_Quantity>, <Limit_Price>, <Order_Quantity>, <Equity_Capacity>
  #      And User validates the Grid data
  #      Then should match with the backend data
  #      Examples:
 #           | Date       | From_Time | To_Time  | Trades_Orders     | Equities_Options | Symbols | Exchange | Order_Id          | Order_Types | Trade_Price | Trade_Quantity | Limit_Price | Order_Quantity | Equity_Capacity |
  #          | 10/02/2017 | 08:00:00  | 14:00:00 | Orders And Trades | Equities Only    | AAPL    | ARCA     | 16044086573117208 | LMT         | 153.40      | 92             | 153.40      | 92             | Principal       |

