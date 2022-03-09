'use strict';
import {
    actionClick,
    actionHighlightElement,
    waitUntilElementVisible,
} from "../utilities/helper";

const testData = require("../page-objects/TestData");
const ANZapplocators = require('../page-objects/ANZlocators.js');
var {Then} = require('cucumber');

Then(/^user clicks on the work out how much I could borrow link$/, function () {
    try {
        browser.pause(2000);
        actionHighlightElement(ANZapplocators.elem.workouthowmuch_link);
        browser.pause(2000);
        actionClick(ANZapplocators.elem.workouthowmuch_link);
        log.info("clicked on the work out how much I could borrow link ");
    } catch (e) {
        assert.isTrue(false, "Failed to click on the link");
    }
});

Then(/^user has a borrowing estimate of value (.*)$/, function (estimate_value) {
    try {
        browser.pause(2000);
        waitUntilElementVisible(ANZapplocators.elem.estimate_text);
        actionHighlightElement(ANZapplocators.elem.estimate_text);
        assert.strictEqual(browser.$(ANZapplocators.elem.estimate_text).getText(), testData.total_estimation, 'total estimation');
        log.info("borrowing estimation calculated");
    } catch (e) {
        assert.isTrue(false, "Failed to calculate the borrowing estimate");
    }
});

Then(/^user clears the form by clicking on the Start over button$/, function () {
    try {
        browser.pause(2000);
        actionHighlightElement(ANZapplocators.elem.start_over_link);
        actionClick(ANZapplocators.elem.start_over_link);
        browser.pause(2000);
        log.info("user clicked on the Start over button");
    } catch (e) {
        assert.isTrue(false, "Failed to click on the Start over button");
    }
});

Then(/^user receives an error message$/, function () {
    try {
        browser.pause(2000);
        actionHighlightElement(ANZapplocators.elem.text_message);
        // assert.strictEqual(browser.$(ANZapplocators.elem.return_message).getText(), testData.return_message, 'return message');
        log.info("return message displayed");
    } catch (e) {
        assert.isTrue(false, "return message not displayed");
    }
});
