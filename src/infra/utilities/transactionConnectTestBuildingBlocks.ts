import { Timeouts } from '../enum/timeouts';
import { waitUntil } from '../waiter/wait';
import { TestBuildingBlocks } from "./testBuildingBlock";
import { HomePage } from '../../pages/TransactionConnectPages/homePage/home.page';
import { IncriptionPage } from '../../pages/TransactionConnectPages/transactionConnect/incription.page';

export class TransactionConnectTestBuildingBlocks extends TestBuildingBlocks {

  /**
   * URL moving to home page
   */
  public navigateToHomePage(): HomePage {
    const homePage: HomePage = new HomePage();
    homePage.navigateToPage();
    waitUntil(() => homePage.isHomePageLoaded(), Timeouts.FIVE_SECONDS, 'Home page wasn\'t loaded');
    return new HomePage();
  }

  /**
   * URL moving to registration page
   */
  public navigateToRegistrationPage(): IncriptionPage {
    const incriptionPage: IncriptionPage = new IncriptionPage();
    incriptionPage.navigateToPage();
    waitUntil(() => incriptionPage.isPageTitleExistingDisplaying(), Timeouts.FIVE_SECONDS, 'RegistrationPage wasn\'t loaded');
    return new IncriptionPage();
  }

}