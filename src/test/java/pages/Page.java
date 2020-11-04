package pages;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.openqa.selenium.WebDriver;

@Getter
@AllArgsConstructor
public abstract class Page {
    protected WebDriver webDriver;

    public String getCurrentUrl(){
        return webDriver.getCurrentUrl();
    }
}
