import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        monochrome = true,
        plugin = {"html:target/cucumber-html-report", "json:target/cucumber-reports/cucumber-json-report.json", "junit:target//cucumber-reports/cucumber.xml"},
        features = "src/test/features"


)


public class TestRunner {
}
