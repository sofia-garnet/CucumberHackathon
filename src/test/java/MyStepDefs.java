import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.apache.commons.lang3.RandomStringUtils;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import pages.AuthorizationPage;
import pages.RegistrationPage;
import pages.tools.BrowserActions;

import java.util.Objects;
import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertEquals;

public class MyStepDefs {

    public static RegistrationPage regInPage;
    public static AuthorizationPage authPage;
    BrowserActions browserActions;
    WebDriver driver;
    private String savedPassword;
    private String savedEmail;

    @Before
    public void beforeScenario() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
        driver.get("http://35.206.89.225/reg.html");
        regInPage = PageFactory.initElements(driver, RegistrationPage.class);
        authPage = PageFactory.initElements(driver, AuthorizationPage.class);
    }

    @After
    public void afterScenario() {
        driver.quit();
    }


    @Given("^Registration page is open$")
    public void registrationPageIsOpen() {

    }

    @When("^I enter valid login \"([^\"]*)\"$")
    public void iEnterValidLogin(String arg0) throws Throwable {
        if (Objects.equals(arg0, "random")) {
            arg0 = "user" + RandomStringUtils.randomAlphabetic(4);
        }
        regInPage.enterLogin(arg0);
    }

    @And("^I enter valid password \"([^\"]*)\"$")
    public void iEnterValidPassword(String arg0) throws Throwable {
        savedPassword=arg0;
        regInPage.enterPassword(arg0);
    }

    @And("^I enter valid confirm password \"([^\"]*)\"$")
    public void iEnterValidConfirmPassword(String arg0) throws Throwable {
        regInPage.enterConfirmPassword(arg0);
    }

    @And("^I enter valid email \"([^\"]*)\"$")
    public void iEnterValidEmail(String arg0) throws Throwable {
        if (Objects.equals(arg0, "random")) {
            arg0 = "aaaaa"+RandomStringUtils.randomNumeric(3) + "@test.com";
        }
        savedEmail=arg0;
        regInPage.enterEmail(arg0);
    }

    @And("^I press submit button$")
    public void iPressSubmitButton() {
        regInPage.clickOnRegButton();
    }

    @Then("^I enter the main platform page$")
    public void iEnterTheMainPlatformPage() {
        browserActions = new BrowserActions(driver);
        browserActions.waitForUrl("http://35.206.89.225/auth.html");
        assertEquals("http://35.206.89.225/auth.html", authPage.getCurrentUrl());
    }

    @When("^I enter invalid min login \"([^\"]*)\"$")
    public void iEnterInvalidLogin(String arg0) throws Throwable {
        if (Objects.equals(arg0, "random")) {
            arg0 = RandomStringUtils.randomAlphabetic(4);
        }
        regInPage.enterLogin(arg0);
    }

    @Then("^I stay on the same page$")
    public void iStayOnTheSamePage() {
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        assertEquals("http://35.206.89.225/reg.html", authPage.getCurrentUrl());
    }

    @When("^I enter invalid max login \"([^\"]*)\"$")
    public void iEnterInvalidMaxLogin(String arg0) throws Throwable {
        if (Objects.equals(arg0, "random")) {
            arg0 = RandomStringUtils.randomAlphabetic(41);
        }
        regInPage.enterLogin(arg0);
    }

    @When("^I enter empty login \"([^\"]*)\"$")
    public void iEnterEmptyLogin(String arg0) throws Throwable {
        if (Objects.equals(arg0, "random")) {
            arg0 = RandomStringUtils.randomAlphabetic(8);
        }
        regInPage.enterLogin(arg0);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String arg0) throws Throwable {
        regInPage.enterPassword(arg0);
    }

    @And("^I enter confirm password \"([^\"]*)\"$")
    public void iEnterConfirmPassword(String arg0) throws Throwable {
        regInPage.enterConfirmPassword(arg0);
    }
    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String arg0) throws Throwable {
        if (Objects.equals(arg0, "random")) {
            arg0 = "aaaaa"+RandomStringUtils.randomNumeric(3) + "@test.com";
        }
        regInPage.enterEmail(arg0);
    }


    @And("^I enter invalid min email \"([^\"]*)\"$")
    public void iEnterInvalidMinEmail(String arg0) throws Throwable {
        if (Objects.equals(arg0, "random")) {
            arg0 = RandomStringUtils.randomAlphabetic(1) + "@" + RandomStringUtils.randomAlphabetic(1);
        }
        regInPage.enterEmail(arg0);
    }

    @And("^I enter invalid max email \"([^\"]*)\"$")
    public void iEnterInvalidMaxEmail(String arg0) throws Throwable {
        if (Objects.equals(arg0, "random")) {
            arg0 = RandomStringUtils.randomAlphabetic(45) + "@test.com";
        }
        regInPage.enterEmail(arg0);
    }

    @And("^I enter valid auth email$")
    public void iEnterValidAuthEmail() {
        authPage.enterEmail(savedEmail);
    }

    @And("^I enter valid auth password$")
    public void iEnterValidAuthPassword() {
        authPage.enterPassword(savedPassword);
    }

    @And("^I press submit sign in button$")
    public void iPressSubmitSignInButton() {
        authPage.clickOnAuthButton();
    }

    @And("^I press alert button$")
    public void iPressAlertButton() {
        authPage.clickOnAlert();
    }


}


