const mailinatorMainPage = require ('../pages/mailinatorMainPage');

const searchValue = 'capitalix';

describe('Mailinator email box creation', function() {
    it('Load mailinator page', function() {
        browser.sleep(15000);
        mailinatorMainPage.get();
        expect(browser.getTitle()).toEqual("Mailinator");
    });

    it('Set search value and submit', function() {
        mailinatorMainPage.setSearchValue(searchValue);
        mailinatorMainPage.clickGoButton();
        expect(browser.getTitle()).toEqual(`Mailinator | Main Site`);
        browser.sleep(5000);
    });

    // it('Check than mail box was created', function() {
    // //https://www.mailinator.com/v3/index.jsp?zone=public&query=mailinator#/#inboxpane
    // //public inbox: mailinator
    // //update field
    // });
});