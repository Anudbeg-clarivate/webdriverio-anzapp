'use strict';

module.exports = {
    elem: {
        app_type: '//label[contains(text(),"Single")]',
        // for this below field, I am just highlighting the dependants and not selecting any from the dropdowns. We can select the dropdowns using various webdriverio methods
        dependants_dropdown: '//div[contains(@class,'borrow__question__answer borrow__question__answer--select')]',
        property_home: '//ul[@class=\'borrow__question__answer clearfix\']/li/label[contains(text(),\'Home to live in\')]',
        annual_income_editbox: '//input[@aria-labelledby=\'q2q1\']',
        ann_other_income_editbox: '//input[@aria-labelledby=\'q2q2\']',
        mnthly_living_editbox: '//input[@id=\'expenses\']',
        loan_mnthly_repayments_editbox: '//input[@id=\'homeloans\']',
        oth_loan_repayments: '//input[@aria-labelledby=\'q3q3\']',
        oth_mnthly_commitments: '//input[@aria-labelledby=\'q3q4\']',
        credit_card_limit: '//input[@id=\'credit\']',
        workouthowmuch_link: '//button[@id=\'btnBorrowCalculater\']',
        estimate_text: '//span[@id=\'borrowResultTextAmount\']',
        start_over_link: '//body/main[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/button[1]',
        text_message: '//div[contains(@class,\'borrow__error__text\')]',
    },
};
