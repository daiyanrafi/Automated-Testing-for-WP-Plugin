import { LoginPage } from '../pages/loginPage';
import login from '../fixtures/login';

const loginObj = new LoginPage();

describe('Login', () => {
    beforeEach(() => {
        // Set viewport to 1280x720
        cy.viewport(1280, 720);
    });
    it.only('Log in and validate plugin activation', () => {
        loginObj.openURL();
        loginObj.enterUserName(login.userName);
        loginObj.enterPassword(login.password);
        loginObj.clickOnContinue();
        loginObj.pluginClick();
        
        // Validate if the plugin is active
        loginObj.validatePluginActive()
        loginObj.wpDarkModeClick()
        loginObj.customization()
        loginObj.switchSetting()
        loginObj.floatStyle()
        loginObj.pullBar()
        loginObj.switchPosition()
        loginObj.saveButton()
        loginObj.accessibility()
        loginObj.accessibilityKeyboardShortcut()
    });

    //code for DEACTIVATE 
    it.skip('Log in and validate plugin deactivation', () => {
        loginObj.openURL();
        loginObj.enterUserName(login.userName);
        loginObj.enterPassword(login.password);
        loginObj.clickOnContinue();
        loginObj.pluginClick();
        
        // Validate if the plugin is inactive
        loginObj.validatePluginInactive();
        // loginObj.wpDarkModeClick()
    });
});
