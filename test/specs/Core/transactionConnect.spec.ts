import { expect } from 'chai';
import { TestBuildingBlocks } from '../../../src/infra/utilities/testBuildingBlock';
import { TestLogger } from '../../../src/infra/loggers/test-logger';
import { HomePage } from '../../../src/pages/TransactionConnectPages/homePage/home.page';
import { IncriptionPage } from '../../../src/pages/TransactionConnectPages/transactionConnect/incription.page';
import { BaseTestData } from "../../../src/infra/models/base-test-data";
import { TransactionConnectTestBuildingBlocks } from '../../../src/infra/utilities/test-BuildingBlock';

let homePage = new HomePage();
let incriptionPage = new IncriptionPage();
let logger: TestLogger;
let testIndex = 0;
let testData: BaseTestData = new BaseTestData(undefined);
let transactionConnectTestBuildingBlocks = new TransactionConnectTestBuildingBlocks(testData);


describe('Transaction Connect FRONT-END CHALLENGE', () => {

    before(() => {
        logger = new TestLogger();
        transactionConnectTestBuildingBlocks.navigateToHomePage();
    });

    beforeEach(() => {
        testIndex++;
        transactionConnectTestBuildingBlocks.navigateToHomePage();
    });

    it('Verify that Transaction Connect registration process succussfully created', () => {
        const randomNum = Math.floor((Math.random() * 1000) + 1);
        const firstName = 'Dinkar';
        const lastName = 'Singh' + randomNum;
        const mobile = '0628' + Math.floor((Math.random() * 1000000) + 1);
        const email = 'mailmedinkar' + randomNum + '@gmail.com';
        const identification = '1234' + randomNum;
        TestBuildingBlocks.addStepAndExecute(`Verfy that home page is displaying`, () => {
            expect(homePage.isHomePageLoaded()).to.eq(true, 'Home page was not displaying');
        });
        TestBuildingBlocks.addStepAndExecute(`Click on Join the Program button`, () => {
            homePage.clickOnLoginInButton();
            expect(incriptionPage.isPageTitleExistingDisplaying()).to.eq(true, 'Registration page title was not displaying');
        });
        TestBuildingBlocks.addStepAndExecute(`Verfy that Transaction Connect registration page is displaying`, () => {
            const pageURL = browser.getUrl();
            expect(pageURL).to.contain('creation-identifiant', `URL not found as ${pageURL}`);
        });
        TestBuildingBlocks.addStepAndExecute(`Create your identification with following fields`, () => {
            TestBuildingBlocks.addStepAndExecute(`Enter the user First name as ${firstName}`, () => {
                incriptionPage.enterFirstName(firstName);
            });
            TestBuildingBlocks.addStepAndExecute(`Enter the user Last name as ${lastName}`, () => {
                incriptionPage.enterLasttName(lastName);
            });
            TestBuildingBlocks.addStepAndExecute(`Enter the user mobile number as ${mobile}`, () => {
                incriptionPage.enterMobileNumber(mobile);
            });
            TestBuildingBlocks.addStepAndExecute(`Enter the user email id as ${email}`, () => {
                incriptionPage.enterEmailId(email);
            });
            expect(incriptionPage.isMyAccountButtonActive()).to.equal(true, `I create my account button was not active`);
            TestBuildingBlocks.addStepAndExecute(`Click on I create my account button`, () => {
                incriptionPage.clickOnMyAccountButton();
            });
            TestBuildingBlocks.addStepAndExecute(`Check that purchases title text is displaying or not`, () => {
                expect(incriptionPage.isUnlockOffersTextDisplaying()).to.equal(true, `Purchases title was not displaying`);
            });
        });
        TestBuildingBlocks.addStepAndExecute(`Purchase type selection steps`, () => {
            TestBuildingBlocks.addStepAndExecute(`Verify that purchases type as Automatically is displaying`, () => {
                expect(incriptionPage.checkPuchasesType()).to.equal(true, `Purchases type Automatically option was not displaying`);
            });
            TestBuildingBlocks.addStepAndExecute(`Click on puchases type as Automatically button`, () => {
                incriptionPage.clickOnPurchasesTypeButton();
            });
            TestBuildingBlocks.addStepAndExecute(`Verify that unclock offers title was displaying or not`, () => {
                expect(incriptionPage.isPurchasesTitleTextExisting()).to.equal(true, `Unlock offers title was not displaying`);
            });
        });
        TestBuildingBlocks.addStepAndExecute(`Bank account to unlock offers steps`, () => {
            TestBuildingBlocks.addStepAndExecute(`Select the organization type from the list`, () => {
                incriptionPage.selectOrganizationType('Connecteur de test');
                expect(incriptionPage.isOrganizationTextValueExisting('Connecteur de test')).to.equal(true, `Organization value was not selected`);
            });
            TestBuildingBlocks.addStepAndExecute(`Verify that compatible title was displaying or not`, () => {
                expect(incriptionPage.isCompatibleTitleTextExisting()).to.equal(true, `Account to unlock offers title was not displaying`);
            });
            TestBuildingBlocks.addStepAndExecute(`Select the open API from the dropdown list`, () => {
                incriptionPage.selectOpenApiType('Particuliers');
                expect(incriptionPage.isOpenApiSelectOptionDisplaying('Particuliers')).to.equal(true, `Open api value was not selected`);
            });
            TestBuildingBlocks.addStepAndExecute(`Select the direct access from the dropdown list`, () => {
                incriptionPage.selectDirectAccessType('Particuliers');
                expect(incriptionPage.isDirectAccessOptionDisplaying('Particuliers')).to.equal(true, `Direct access value was not selected`);
            });
            TestBuildingBlocks.addStepAndExecute(`Enter the identificatin number`, () => {
                incriptionPage.enterIdentificationNumber(identification);
            });
            TestBuildingBlocks.addStepAndExecute(`Enter the password`, () => {
                incriptionPage.enterPassword('1234');
            });
            TestBuildingBlocks.addStepAndExecute(`Click on authorize checkboxs`, () => {
                incriptionPage.clickOnCheckBoxForAuthorise();
            });
            TestBuildingBlocks.addStepAndExecute(`Click on I Validate button`, () => {
                incriptionPage.clickOnValidateButton();
            });
        });
        TestBuildingBlocks.addStepAndExecute(`Verify that Synchronization processing title is displaying`, () => {
            expect(incriptionPage.isSynchronizationProcessTitleExisting()).to.equal(true, `Synchronization processing title was not displaying`);
        });
    });
});
