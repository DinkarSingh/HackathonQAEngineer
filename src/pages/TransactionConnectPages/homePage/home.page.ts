import { Timeouts } from '../../../infra/enum/timeouts';
import { waitUntil } from '../../../infra/waiter/wait';
import { BasePage } from '../base-Page';

export class HomePage extends BasePage {

    private get loginButton() { return $('[data-cy="landing_page_connect_btn"]') }

    private get joinProgram() { return $('[data-cy="landing_page_subscribe_btn"]') }

    /**
     * checking home is loeaded or not
     */
    public isHomePageLoaded(): boolean {
        return waitUntil(() => this.loginButton.isExisting(), Timeouts.FORTY_SECONDS, 'Home page was not loaded');
    }

    /**
     * here click on join the program buttton on home page
     */
    public clickOnJoinProgramButton() {
        waitUntil(() => this.joinProgram.isExisting(), Timeouts.FORTY_SECONDS, 'Join the program button was not displaying');
        browser.pause(3000);
        this.joinProgram.click();
    }

}