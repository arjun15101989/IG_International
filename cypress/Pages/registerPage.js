export class registerPage{


    weblocators={

        //Home Page 

        createDemoAcCTA : ".cta__text",

        //Demo Account Form 

        fisrtName : "input[name='forename']",
        lastName : "input[name='surname']",
        userName :  "input[name='username']",
        passWord : "input[name='password']",
        contactNo : "input[name='mainContactNumber']",
        email : "input[name='email']",
        countryDropdown : ".selectbox__styled.selectbox--active",
        infoConcentYesNo : "input[value='false']",
        tryDemoCTA : "input[value='Try our demo']",






    }

    //Open Url

    openURL()
    {
        cy.visit('https://www.ig.com/en')
    }

    //Home Page Actions

    clickCreateDemoAcCTA () 
    {
        cy.get(this.weblocators.createDemoAcCTA).click()

    }


    //DemO Account Form Page

    enterFirstName()
    {
        cy.get(this.weblocators.fisrtName).text('Test');
    }

    enterLastName()
    {
        cy.get(this.weblocators.lastName).text('QA');
    }

    enterUserName()
    {
        cy.get(this.weblocators.userName).text('Test QA');
    }

    enterPassWord()
    {
        cy.get(this.weblocators.passWord).text('QAversace@123');
    }

    enterFirstName()
    {
        cy.get(this.weblocators.fisrtName).text(Test);
    }


    enterContactNo()
    {
        cy.get(this.weblocators.contactNo).text('7208732204');
    }

    enterEmail()
    {
        cy.get(this.weblocators.email).text('algo.arjun@gmail.com');
    }

    selectCountry()
    {
        cy.get(this.weblocators.countryDropdown).select('India');
    }

    selectConsent()
    {
        cy.get(this.weblocators.infoConcentYesNo).click()
    }

    clickCreateDemoAcCTA()
    {
        cy.get(this.weblocators.tryDemoCTA).click()
    }




    






}