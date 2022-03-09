
@testCalculator
Feature: Verify the personal loan details (test case 1 and 2 in same scenario)

  Scenario Outline: Login to anz.com.au loan calculator page
    Given user launches the ANZ application
    When user selects the application type <app_type>
    When user selects the number of dependants <no_of_dependants>
    When user selects the property to buy in <prop_to_buy>
    When user enters the annual income <ann_income>
    When user enters the other annual income <other_income>
    When user enters the monthly living expenses <living_expenses>
    When user enters the current home loan monthly repayments <monthly_repayments>
    When user enters the other loan monthly repayments <oth_monthly_repayments>
    When user enters the other commitments <oth_commitments>
    When user enters the total credit card limits <credit_card_limit>
    Then user clicks on the work out how much I could borrow link
    Then user has a borrowing estimate of value <estimate_value>
    Then user clears the form by clicking on the Start over button

    Examples:
      | app_type | no_of_dependants | prop_to_buy     | ann_income | other_income | living_expenses | monthly_repayments | oth_monthly_repayments | oth_commitments | credit_card_limit | estimate_value |
     # we can pass multiple test data for this scenario
      | Single   | 0                | Home to live in | 80000      | 10000        | 500             | 0                  | 100                    | 0               | 10000             | 482000         |


  Scenario Outline: Verify the test case when user enters $1 for Living expenses
    Given user launches the ANZ application
    When user enters the living expenses as <monthly_living_expenses>
    Then user clicks on the work out how much I could borrow link
    Then user receives an error message

    Examples:
      | monthly_living_expenses |
      | 1                       |