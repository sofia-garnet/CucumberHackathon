package pages;

import lombok.AllArgsConstructor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import pages.tools.BrowserActions;

public class RegistrationPage extends Page {
    @FindBy(how = How.ID, using = "loginRegId")
    private WebElement loginRegInput;
    @FindBy(how = How.ID, using = "passwordRegId")
    private WebElement passwordRegInput;
    @FindBy(how = How.ID, using = "passwordConfirmRegId")
    private WebElement passwordConfirmRegInput;
    @FindBy(how = How.ID, using = "emailRegId")
    private WebElement emailRegInput;
    @FindBy(how = How.ID, using = "btnRegId")
    private WebElement buttonRegInput;
    BrowserActions browserActions;

    public RegistrationPage(WebDriver webDriver) {
        super(webDriver);
        browserActions= new BrowserActions(webDriver);
    }
    public void enterLogin(String name) {
        browserActions.sendKeysToElement(loginRegInput, name);
    }
    public void enterPassword(String password) {
        browserActions.sendKeysToElement(passwordRegInput, password);
    }

    public void enterConfirmPassword(String password) {
        browserActions.sendKeysToElement(passwordConfirmRegInput, password);
    }

    public void enterEmail(String email) {
        browserActions.sendKeysToElement(emailRegInput, email);
    }

    public void clickOnRegButton() {
        browserActions.clickOnElement(buttonRegInput);
    }
}
