'use strict';

var {Given} = require('cucumber');


Given(/^user launches the ANZ application$/, function () {
    browser.url(browser.options.baseUrl);
    browser.maximizeWindow();
    log.info('Opening ' +browser.options.baseUrl);

});
