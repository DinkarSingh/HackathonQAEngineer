import { Timeouts } from '../../../infra/enum/timeouts';
import { waitUntil } from '../../../infra/waiter/wait';
import { BasePage } from '../base-Page';

export class HomePage extends BasePage {

    private get loginButton() { return $('[data-cy="landing_page_connect_btn"]') }

    public isHomePageLoaded(): boolean {
        return waitUntil(() => this.loginButton.isExisting(), Timeouts.FORTY_SECONDS, 'Home page was not loaded');
    }

}