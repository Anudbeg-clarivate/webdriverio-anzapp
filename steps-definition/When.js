'use strict';

import {
    actionHighlightElement,
    inputText
} from "../utilities/helper";

var {Then} = require('cucumber');
const testData = require("../page-objects/TestData");
const ANZapp = require('../page-objects/ANZlocators.js');
var {When} = require('cucumber');
const path = require('path');

When(/^user selects the application type (.*)$/, function (app_type) {
    try {
        browser.pause(2000);
        actionHighlightElement(ANZapp.elem.app_type);
        log.info('app type selected');
        } catch (e) {
        assert.isTrue(false, "failed to select the application types");
    }
});

When(/^user selects the number of dependants (.*)$/, function (no_of_dependants) {
    try {
        browser.keys('PageDown');
        actionHighlightElement(ANZapp.elem.dependants_dropdown);
        log.info('no of dependants selected');
    } catch (e) {
        assert.isTrue(false, "failed to select the number of dependants");
    }
});

When(/^user selects the property to buy in (.*)$/, function (prop_to_buy) {
    try {
        browser.pause(2000);
        actionHighlightElement(ANZapp.elem.property_home);
        log.info('app type selected');
    } catch (e) {
        assert.isTrue(false, "failed to select the property to buy");
    }
});

When(/^user enters the annual income (.*)$/, function (ann_income) {

    try {
        browser.pause(2000);
        let selector = browser.$(ANZapp.elem.annual_income_editbox);
        inputText(selector, ann_income);
        log.info("annual income entered");
    } catch (e) {
        assert.isTrue(false, "failed to enter the annual income");
    }
});

When(/^user enters the other annual income (.*)$/, function (other_income) {

    try {
        browser.pause(2000);
        let selector = browser.$(ANZapp.elem.ann_other_income_editbox);
        inputText(selector, other_income);
        log.info("other annual income entered");
    } catch (e) {
        assert.isTrue(false, "failed to enter the other annual income");

    }
});

When(/^user enters the monthly living expenses (.*)$/, function (living_expenses) {

    try {
        browser.pause(2000);
        let selector = browser.$(ANZapp.elem.mnthly_living_editbox);
        inputText(selector, living_expenses);
        log.info("monthly living expenses entered");
    } catch (e) {
        assert.isTrue(false, "failed to enter the monthly living expenses");
    }
});

When(/^user enters the current home loan monthly repayments (.*)$/, function (monthly_repayments) {

    try {
        browser.pause(2000);
        let selector = browser.$(ANZapp.elem.loan_mnthly_repayments_editbox);
        inputText(selector, monthly_repayments);
        log.info("current home loan monthly repayments entered");
    } catch (e) {
        assert.isTrue(false, "failed to enters the current home loan monthly repayments");
    }
});

When(/^user enters the other loan monthly repayments (.*)$/, function (oth_monthly_repayments) {

    try {
        browser.pause(2000);
        let selector = browser.$(ANZapp.elem.oth_loan_repayments);
        inputText(selector, oth_monthly_repayments);
        log.info("other loan monthly repayments entered");
    } catch (e) {
        assert.isTrue(false, "failed to enter other loan monthly repayments");
    }
});

When(/^user enters the other commitments (.*)$/, function (oth_commitments) {

    try {
        browser.pause(2000);
        let selector = browser.$(ANZapp.elem.oth_mnthly_commitments);
        inputText(selector, oth_commitments);
        log.info("other monthly commitments entered");
    } catch (e) {
        assert.isTrue(false, "failed to enter other monthly commitments");
    }
});

When(/^user enters the total credit card limits (.*)$/, function (credit_card_limit) {

    try {
        browser.pause(2000);
        let selector = browser.$(ANZapp.elem.credit_card_limit);
        inputText(selector, credit_card_limit);
        log.info("credit card limit entered");
    } catch (e) {
        assert.isTrue(false, "failed to enter the credit card limit");
    }
});

// Test case no 3 methods:

When(/^user enters the living expenses as (.*)$/, function (monthly_living_expenses) {

    try {
        browser.pause(2000);
        let selector = browser.$(ANZapp.elem.mnthly_living_editbox);
        inputText(selector, monthly_living_expenses);
        browser.keys('PageDown');
        log.info("monthly living expenses entered");
    } catch (e) {
        assert.isTrue(false, "failed to enter the monthly living expenses");
    }
});