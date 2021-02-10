describe('Testing madewithangular', function() {
    it('should open madewithangular page', function() {
        browser.get('https://www.madewithangular.com/');
        expect(browser.getTitle()).toEqual('Home');
    });
});