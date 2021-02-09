describe('Protractor Demo App', function() {

    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));

    it('should add one and two', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);
        goButton.click();
        expect(latestResult.getText()).toEqual('3');
    });
});