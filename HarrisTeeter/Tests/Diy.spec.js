var DiyPage = require('../Pages/DiyPage.page.js'); 

describe('DIY', ()=>{

    beforeEach(function (){
        browser.waitForAngularEnabled(false);
        browser.get('https://www.harristeeter.com/'); 
    }); 

    fit('should navigate to DIY menu', ()=>{
        browser.wait(ExpectedConditions.presenceOf(element(by.className("logo-icon"))),30000);
        DiyPage.diyButton.click(); 
    }); 

    it('should be able to see the first picture', ()=>{
        DiyPage.diyButton.click(); 
        element(by.css("#_ht-container>div>div>div>a>img")).isDisplayed().then(function(displayed){
            if(displayed){
            console.log("element is visible")
            }else{
            console.log("element is not visible")
            }
        }); 

    });

}); 
