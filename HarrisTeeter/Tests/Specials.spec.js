var SpecialsPage = require('../Pages/SpecialsPage.page.js'); 

describe('Specials', ()=>{

    beforeEach(function (){
        browser.waitForAngularEnabled(false);
        browser.get ('https://www.harristeeter.com/'); 
    }); 

    it('should be able to see the Specials menu when hovered over Specials', ()=> {
        browser. wait (ExpectedConditions.presenceOf(element (by.className("logo-icon"))),30000);
        browser.actions().mouseMove(SpecialsPage.specialsButton); 
    }); 

    it('should click on Weekly Ad and have correct title', ()=> {
        SpecialsPage.weeklyAdButton.click(); 
        expect(browser.getTitle()).toEqual("weekly ad - Harris Teeter");
    });

    it('should stay on the Specials page when clicked on Weekly Ad', ()=> {
       SpecialsPage.specialsButton.click(); 
       SpecialsPage.weeklyAdButton.click(); 
       expect(browser.getTitle()).toEqual("my specials - Harris Teeter");
    }); 


});