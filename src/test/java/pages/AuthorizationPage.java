package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import pages.tools.BrowserActions;

public class AuthorizationPage extends Page {

    @FindBy(how = How.ID, using = "loginAuthId")
    private WebElement loginAuthInput;
    @FindBy(how = How.ID, using = "passwordAuthId")
    private WebElement passwordAuthInput;
    @FindBy(how = How.ID, using = "btnLoginAuthId")
    private WebElement buttonLoginAuthInput;
    BrowserActions browserActions;

    public AuthorizationPage(WebDriver webDriver) {
        super(webDriver);
        browserActions = new BrowserActions(webDriver);
    }

    public void enterEmail(String email) {
        browserActions.sendKeysToElement(loginAuthInput, email);
    }

    public void enterPassword(String password) {
        browserActions.sendKeysToElement(passwordAuthInput, password);
    }
    public void clickOnAuthButton() {
        browserActions.clickOnElement(buttonLoginAuthInput);
    }

    public void clickOnAlert(){
        browserActions.clickOnAlert();
    }
}
