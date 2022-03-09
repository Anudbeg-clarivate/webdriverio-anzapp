// actionClick method will click an element
export const actionClick = (locator) => {
    try {

        let selector = browser.$(locator);
        waitUntilElementVisible(locator);
        log.info('Clicking ' + locator + ' locator');
        selector.click();
    } catch (e) {
        assert.isTrue(false,'Unable to click on '+locator+' '+e);
    }
};

// Enter value to input box
export const inputText = (locator, text) => {
    try {
        log.info('Entering ' + text + 'to ' + locator);
        let selector = browser.$(locator);
        selector.setValue(text);
    } catch (e) {
        log.error('Failed to set text to ' + locator + ' ' + e);
    }

};
//highlights an element
export const actionHighlightElement = (locator) => {
    try {
        let selector = browser.$(locator);
        waitUntilElementVisible(locator);
        browser.execute("arguments[0].setAttribute('style', 'background: yellow; border: 2px solid red;');", selector);
    } catch (e) {
        assert.isTrue(false,'Highlighting an element failed ' + locator + ' ' + e);
    }
};
export const waitUntilElementVisible = (locator) => {
    try {
        let selector = browser.$(locator);
        let count = 0;
        let elementStatus = false;
        while (elementStatus == false && count < 100) {
            elementStatus = selector.isDisplayed();
            browser.pause(250);

            if (elementStatus === true) {
                log.info(locator + " visibility status: " + elementStatus + " : Searching---------- " + count);
                break;
            }
               if(count===99)
              {
                  browser.deleteSession();
                  assert.isTrue(false, "Failed to find element");

              }
            count++;
            log.info(locator + " visibility status: " + elementStatus + " : Searching---------- " + count);
        }

    } catch (e) {
        log.error('Element not found ' + locator + ' ' + e);
    }
};

export const actionScrollIntoView = (locator) => {
    var count = 0;
    var maxTries = 3;
    while (true) {
        try {
            let selector = browser.$(locator);
            waitUntilElementVisible(locator);
            selector.scrollIntoView();
            break;
        } catch (err) {
            if (++count === maxTries) throw err;
            log.error(err.message);
            assert.isTrue(false, "Failed to scroll into view");
        }
    }
};

