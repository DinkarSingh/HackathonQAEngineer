import { Timeouts } from '../../../infra/enum/timeouts';
import { waitUntil } from '../../../infra/waiter/wait';
import { BasePage } from '../base-Page';

export class HomePage extends BasePage {

    private get loginButton() { return $('[data-cy="landing_page_connect_btn"]') }

    private get withoutAccount() { return $('[data-cy="connection_inscription_link"]') }

    /**
     * checking home is loeaded or not
     */
    public isHomePageLoaded(): boolean {
        return waitUntil(() => this.loginButton.isExisting(), Timeouts.FORTY_SECONDS, 'Home page was not loaded');
    }

    /**
     * here click on login button and then I do not have account button accssing
     */
    public clickOnLoginInButton() {
        waitUntil(() => this.loginButton.isExisting(), Timeouts.FORTY_SECONDS, 'Login in button was not displaying');
        browser.pause(3000);
        this.loginButton.click();
        waitUntil(() => this.withoutAccount.isExisting(), Timeouts.FORTY_SECONDS, 'Do not have account button was not displaying');
        this.withoutAccount.click();
    }

}