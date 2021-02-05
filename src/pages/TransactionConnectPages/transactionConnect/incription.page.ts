import { Timeouts } from '../../../infra/enum/timeouts';
import { waitUntil } from '../../../infra/waiter/wait';
import { BasePage } from '../base-Page';

export class IncriptionPage extends BasePage {

    constructor() {
        super();
        this.relativeUrl = '/inscription/creation-identifiant';
    }

    private get pageTitle() { return $('.sc-iUuytg  h1') }

    private get fname() { return $('#firstName') }

    private get lname() { return $('#lastName') }

    private get mobile() { return $('#phone') }

    private get email() { return $('#email') }

    private get myAccount() { return $('[data-cy="registration_validate_btn"]') }

    private get purchasesTitle() { return $('.sc-iUuytg h1') }

    private get purchaseType() { return $$('.sc-gkdzZj h3') }

    private get purchaseSelectionButton() { return $$('.sc-gkdzZj button') }

    private get unlockOfferTitle() { return $('.sc-iUuytg h1') }

    private get organizationButton() { return $('.ant-select-selection__placeholder') }

    private get organizationlist() { return $$('.ant-select-dropdown-placement-bottomLeft ul li') }

    private get compatibleTitle() { return $('.sc-iUuytg h1') }

    private get organizationOptionText() { return $('.ant-row p') }

    private get openApi() { return $('#openapiwebsite .ant-select-selection__placeholder') }

    private get openApiText() { return $('#openapiwebsite .ant-select-selection__rendered .ant-select-selection-selected-value') }

    private get directAccess() { return $('#directaccesswebsite .ant-select-selection__placeholder') }

    private get directAccessText() { return $('#directaccesswebsite .ant-select-selection__rendered .ant-select-selection-selected-value') }

    private get login() { return $('#login') }

    private get password() { return $('#password') }

    private get authoriseCheckboxs() { return $$('.sc-cOajty label input') }

    private get validateButton() { return $('[data-cy="bank_credentials_validate_btn"]') }

    private get synochronizationTitle() { return $('#rcDialogTitle0') }


    /**
     * Transaction Connect registration page existing or not
     */
    public isPageTitleExistingDisplaying(): boolean {
        return waitUntil(() => this.pageTitle.isExisting(), Timeouts.FORTY_SECONDS, 'Transaction Connect registration page was not displaying');
    }

    /**
     * 
     * @param firstName 
     * Enter the registration user First name
     */
    public enterFirstName(firstName: string) {
        waitUntil(() => this.fname.isExisting(), Timeouts.FORTY_SECONDS, 'First name text was not displaying');
        this.fname.setValue(firstName);
    }

    /**
     * 
     * @param lastName 
     * Enter the registration user last name
     */
    public enterLasttName(lastName: string) {
        waitUntil(() => this.lname.isExisting(), Timeouts.FORTY_SECONDS, 'Last name text was not displaying');
        this.lname.setValue(lastName);
    }

    /**
     * 
     * @param number 
     * Enter the registration user mobile number
     */
    public enterMobileNumber(number: string) {
        waitUntil(() => this.mobile.isExisting(), Timeouts.FORTY_SECONDS, 'Mobile number text was not displaying');
        this.mobile.setValue(number);
    }

    /**
     * 
     * @param mailid 
     * Enter the registration user email id
     */
    public enterEmailId(mailid: string) {
        waitUntil(() => this.email.isExisting(), Timeouts.FORTY_SECONDS, 'Email id text was not displaying');
        this.email.setValue(mailid);
    }

    /**
     * checking weather my account button is active or not
     */
    public isMyAccountButtonActive(): boolean {
        return waitUntil(() => this.myAccount.isExisting(), Timeouts.FORTY_SECONDS, 'My account button was not displaying');
    }

    /**
     * clicking on I create my account button
     */
    public clickOnMyAccountButton() {
        waitUntil(() => this.myAccount.isExisting(), Timeouts.FORTY_SECONDS, 'My account button was not displaying');
        this.myAccount.click();
    }

    /**
     * returning the purchases title text
     */
    public getPurchasesTitleText(): string {
        waitUntil(() => this.purchasesTitle.isExisting(), Timeouts.FORTY_SECONDS, 'Purchases title was not displaying');
        return this.purchasesTitle.getText().trim();
    }

    /**
     * 
     * @param type 
     * retuning the purchase type text
     */
    public checkPuchasesType(type: string): boolean {
        waitUntil(() => this.purchaseType[0].isExisting(), Timeouts.FORTY_SECONDS, 'Purchases type was not displaying');
        const typeOfPurchase = this.purchaseType[0].getText().trim();
        if (typeOfPurchase === type) {
            return true;
        }
    }

    /**
     * click on puchase type button 
     */
    public clickOnPurchasesTypeButton() {
        waitUntil(() => this.purchaseSelectionButton[0].isExisting(), Timeouts.FORTY_SECONDS, 'Purchases type button was not displaying');
        this.purchaseSelectionButton[0].click()
    }

    /**
     * Unlock offers title text
     */
    public getUnlockOffersText(): string {
        waitUntil(() => this.unlockOfferTitle.isExisting(), Timeouts.FORTY_SECONDS, 'Unlock offers title was not displaying');
        return this.unlockOfferTitle.getText().trim();
    }

    /**
     * 
     * @param option 
     * Select the organization type from the dropdown list
     */
    public selectOrganizationType(option: string) {
        waitUntil(() => this.organizationButton.isExisting(), Timeouts.FORTY_SECONDS, 'Organization button was not displaying');
        this.organizationButton.click();
        const org = this.getOrganizationText(option);
        org.click();
    }

    public getOrganizationText(text) {
        const elements = this.organizationlist;
        const itemByText = elements.find((item) => {
            const itemByTexts = item.getText().trim();
            return itemByTexts === `${text}`;
        });
        if (itemByText === undefined) {
            throw new Error(`Can't find list item by name ${text}`);
        }
        return itemByText;
    }

    /**
     * 
     * @param option 
     * Checking organization text value is displaying or not
     */
    public isOrganizationTextValueExisting(option: string): boolean {
        waitUntil(() => this.organizationOptionText.isExisting(), Timeouts.FORTY_SECONDS, 'Organization text option was not selected');
        const access = this.organizationOptionText.getText().trim();
        if (access === option) {
            return true;
        }
    }

    /**
     * returning the compatible title text
     */
    public getCompatibleTitleText(): string {
        waitUntil(() => this.compatibleTitle.isExisting(), Timeouts.FORTY_SECONDS, 'Compatible title was not displaying');
        return this.compatibleTitle.getText().trim();
    }

    /**
     * 
     * @param option 
     * click on dropdown on Open API and select the option
     */
    public selectOpenApiType(option: string) {
        waitUntil(() => this.openApi.isExisting(), Timeouts.FORTY_SECONDS, 'Open API dropdown was not displaying');
        this.openApi.click();
        const org = this.getOrganizationText(option);
        org.click();
    }

    /**
     * 
     * @param option 
     * checking open api option value is displaying or not
     */
    public isOpenApiSelectOptionDisplaying(option: string): boolean {
        waitUntil(() => this.openApiText.isExisting(), Timeouts.FORTY_SECONDS, 'Open API option was not selected');
        const openApi = this.openApiText.getText().trim();
        if (openApi === option) {
            return true;
        }
    }

    /**
     * 
     * @param option 
     * click on dropdown on direct access and select the option
     */
    public selectDirectAccessType(option: string) {
        waitUntil(() => this.directAccess.isExisting(), Timeouts.FORTY_SECONDS, 'Direct access dropdown was not displaying');
        this.directAccess.click();
        const org = this.getOrganizationText(option);
        org.click();
    }

    /**
     * 
     * @param option 
     * checking weather direct access option value is displaying or not
     */
    public isDirectAccessOptionDisplaying(option: string): boolean {
        waitUntil(() => this.directAccessText.isExisting(), Timeouts.FORTY_SECONDS, 'Direct access option was not selected');
        const access = this.directAccessText.getText().trim();
        if (access === option) {
            return true;
        }
    }

    /**
     * 
     * @param loginId 
     * here entering the identification id in the text box
     */
    public enterIdentificationNumber(loginId: string) {
        waitUntil(() => this.login.isExisting(), Timeouts.FORTY_SECONDS, 'Login Id text box was not displaying');
        this.login.setValue(loginId);
    }

    /**
     * 
     * @param pwd 
     * here entering the password in the text box
     */
    public enterPassword(pwd: string) {
        waitUntil(() => this.password.isExisting(), Timeouts.FORTY_SECONDS, 'Password text box was not displaying');
        this.password.setValue(pwd);
    }

    /**
     * click on the authorise checkboxs
     */
    public clickOnCheckBoxForAuthorise() {
        waitUntil(() => this.authoriseCheckboxs[0].isExisting(), Timeouts.FORTY_SECONDS, 'Authorise check boxs was not displaying');
        this.authoriseCheckboxs[0].click();
        this.authoriseCheckboxs[1].click();
        this.authoriseCheckboxs[2].click();
    }

    /**
     * click on validate button 
     */
    public clickOnValidateButton() {
        waitUntil(() => this.validateButton.isExisting(), Timeouts.FORTY_SECONDS, 'Validate button was not displaying');
        this.validateButton.click();
    }

    /**
     * checking synchoronization process title is displaying or not
     */
    public isSynchronizationProcessTitleExisting(): boolean {
        return waitUntil(() => this.synochronizationTitle.isExisting(), Timeouts.FORTY_SECONDS, 'Synchronization processs was not displaying');
    }
}