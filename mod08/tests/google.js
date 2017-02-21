module.exports = {

    canSearch(browser){
        browser
            .url('http://google.com')
            .waitForElementVisible('#lst-ib', 1000)
            .setValue('#lst-ib', 'ECMAScript 2015')
            .waitForElementVisible('.rc', 5000)
            .assert.containsText('.rc', 'ECMAScript 2015 Language Specification – ECMA-262 6th Edition')
            .end();
    }


}