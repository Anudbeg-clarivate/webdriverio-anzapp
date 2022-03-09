# webdriverio-anzapp
To automate the front end of ANZ loan application using WebdriverIO

Configuring the framework: 

1) Clone the project from the repository as it is
2) Install nodejs version v14.16.0 and make sure all the node modules are downloaded successfully
3) Run the command 'npm install' in the IDE CLI or from git bash
4) Update the chromedriver by running the cmd 'npm install chromedriver' if it is not updated as per your browser used
5) Make sure package.json is up to date
6) To run the tests, use the below command:
npx wdio wdio.conf.js --baseUrl=https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/ --cucumberOpts.tagExpression=@testCalculator

6) To generate the report in local server, use the below commands:

Run npx allure generate ./allure-results -> this wil generate allure-results folder in the framework
Then run 'npx allure open' to open the report in browser -> this will generate allure-report folder in the framework
