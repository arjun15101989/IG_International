import { registerPage } from "../../Pages/registerPage"
const registerOBJ = new registerPage()

describe('Registration Flow', ()=>{






    it('Validate Click Demo AC CTA for New User',()=>{

        registerOBJ.clickCreateDemoAcCTA()
    })

    
    it('Validate First Name field on Registration Page',()=>{

        registerOBJ.clickCreateDemoAcCTA()
        registerOBJ.enterFirstName()
    })

    
    it('Validate Last Name field on Registration Page',()=>{

        registerOBJ.clickCreateDemoAcCTA()
        registerOBJ.enterFirstName()
        registerOBJ.enterLastName()
    })

    
    it('Validate User Name field on Registration Page',()=>{

        registerOBJ.clickCreateDemoAcCTA()
        registerOBJ.enterFirstName()
        registerOBJ.enterLastName()
        registerOBJ.enterUserName()

    })

    it('Validate Password field on Registration Page',()=>{

        registerOBJ.clickCreateDemoAcCTA()
        registerOBJ.enterFirstName()
        registerOBJ.enterLastName()
        registerOBJ.enterUserName()
        registerOBJ.enterPassWord()
        
    })

    it('Validate Contact Number field on Registration Page',()=>{

        registerOBJ.clickCreateDemoAcCTA()
        registerOBJ.enterFirstName()
        registerOBJ.enterLastName()
        registerOBJ.enterUserName()
        registerOBJ.enterPassWord()
        registerOBJ.enterContactNo()
    })


    it('Validate Email field on Registration Page',()=>{

        registerOBJ.clickCreateDemoAcCTA()
        registerOBJ.enterFirstName()
        registerOBJ.enterLastName()
        registerOBJ.enterUserName()
        registerOBJ.enterPassWord()
        registerOBJ.enterContactNo()
        registerOBJ.enterEmail()
    })

    
    it('Validate Country field on Registration Page',()=>{

        registerOBJ.clickCreateDemoAcCTA()
        registerOBJ.enterFirstName()
        registerOBJ.enterLastName()
        registerOBJ.enterUserName()
        registerOBJ.enterPassWord()
        registerOBJ.enterContactNo()
        registerOBJ.enterEmail()
        registerOBJ.selectCountry()
    })

    it('Validate INformation Consent field on Registration Page',()=>{

        registerOBJ.clickCreateDemoAcCTA()
        registerOBJ.enterFirstName()
        registerOBJ.enterLastName()
        registerOBJ.enterUserName()
        registerOBJ.enterPassWord()
        registerOBJ.enterContactNo()
        registerOBJ.enterEmail()
        registerOBJ.selectCountry()
        registerOBJ.selectConsent()
    })

    it('Validate Create My Account CTA on Registration Page',()=>{

        registerOBJ.clickCreateDemoAcCTA()
        registerOBJ.enterFirstName()
        registerOBJ.enterLastName()
        registerOBJ.enterUserName()
        registerOBJ.enterPassWord()
        registerOBJ.enterContactNo()
        registerOBJ.enterEmail()
        registerOBJ.selectCountry()
        registerOBJ.selectConsent()
        registerOBJ.clickCreateDemoAcCTA()
        
    })




})