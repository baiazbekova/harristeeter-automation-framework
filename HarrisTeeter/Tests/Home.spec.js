
var HomePage = require('../Pages/HomePage.page.js'); 

describe('Home', ()=>{

    beforeEach(function (){
        browser.waitForAngularEnabled(false);
        browser.get ('https://www.harristeeter.com/')
    }); 

    it('should have correct page title', ()=>{
        expect(browser.getTitle()).toEqual("Harris Teeter");
    });

    it('should stay at the homepage when Home Button is clicked', ()=>{
        HomePage.homeButton.click(); 
    }); 

})
