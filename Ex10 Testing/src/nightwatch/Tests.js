module.exports = {
    'Browser Test': function (browser) {
        browser
            .url('http://localhost:8080')
            .waitForElementVisible('body')
            .assert.titleContains('Ex10')
            .assert.visible('#page')
            .assert.containsText('#page', '1 / 10')
            .assert.visible('#wrapper')
            .end();
    },
    'Next Test': function (browser) {
        browser
            .url('http://localhost:8080')
            .waitForElementVisible('button')
            .assert.visible('#next')
            .click('#next')
            .assert.containsText('#page', '2 / 10')
            .end();
    },
    'Prev Test': function (browser) {
        browser
            .url('http://localhost:8080')
            .waitForElementVisible('button')
            .assert.visible('#prev')
            .assert.visible('#page')
            .assert.containsText('#page', '1 / 10')
            .click('#prev')
            .assert.containsText('#page', '1 / 10')
            .end();
    },
    'Next Then Prev Test': function (browser) {
        browser
            .url('http://localhost:8080')
            .waitForElementVisible('button')
            .assert.visible('#prev')
            .assert.visible('#next')
            .click('#prev')
            .assert.containsText('#page', '1 / 10')
            .click('#next')
            .assert.containsText('#page', '2 / 10')
            .click('#prev')
            .assert.containsText('#page', '1 / 10')
            .end();
    }
};
