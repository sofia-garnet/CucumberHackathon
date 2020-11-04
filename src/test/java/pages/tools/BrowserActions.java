package pages.tools;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.Objects;

public class BrowserActions {
    private WebDriver driver;

    WebDriverWait waitForElement;
    WebDriverWait waitForClickable;
    WebDriverWait waitForEditable;

    public BrowserActions(WebDriver driver) {
        this.driver = driver;

        waitForElement = new WebDriverWait(driver, 10);
        waitForClickable = new WebDriverWait(driver, 10);
        waitForEditable = new WebDriverWait(driver, 10);

        waitForElement.ignoring(NoSuchElementException.class);

        waitForClickable.ignoring(org.openqa.selenium.StaleElementReferenceException.class)
                .ignoring(org.openqa.selenium.NoSuchElementException.class)
                .ignoring(org.openqa.selenium.ElementNotInteractableException.class);

        waitForEditable.ignoring(org.openqa.selenium.StaleElementReferenceException.class)
                .ignoring(org.openqa.selenium.NoSuchElementException.class)
                .ignoring(org.openqa.selenium.ElementNotInteractableException.class);
    }

    public void waitForUrl(String url){
        waitForElement.until(webDriver ->{
            String currentUrl=webDriver.getCurrentUrl();
            return (Objects.equals(url, currentUrl));
        });
    }

    public void clickOnElement(WebElement currentElement) {
        waitForClickable.until(webDriver ->
        {
            new Actions(driver).moveToElement(currentElement).perform();
            currentElement.click();

            return currentElement;
        });
    }

    public void sendKeysToElement(WebElement currentElement, String text) {

        waitForEditable.until(x ->
        {
            new Actions(driver).moveToElement(currentElement).perform();
            currentElement.click();
            currentElement.sendKeys(text);

            return currentElement;
        });
    }

    public void clickOnAlert(){
        waitForClickable.until(webDriver ->
        {
            driver.switchTo().alert().accept();
            return 0;
        });
    }

}
