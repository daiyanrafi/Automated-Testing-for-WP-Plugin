import { wordPress } from '../pages/wordPress';
import login from '../fixtures/login';

const wordPressObj = new wordPress();

describe('Login', () => {
    beforeEach(() => {
        // Set viewport to 1280x720
        cy.viewport(1280, 720);
    });

    //plugin install to dark mode check 
    it('Plugin install', () => {
        wordPressObj.openURL();
        wordPressObj.enterUserName(login.userName);
        wordPressObj.enterPassword(login.password);
        wordPressObj.clickOnContinue();
        wordPressObj.pluginClick();
        wordPressObj.addNewPlugin();
        wordPressObj.searchPlugin();
        wordPressObj.installPlugIns();
        wordPressObj.pluginPage();
        wordPressObj.activePlugin();
        wordPressObj.wpDarkModeClick()
        wordPressObj.wpDarkModeClick()
        wordPressObj.customization()
        wordPressObj.switchSetting()
        wordPressObj.floatStyle()
        wordPressObj.saveButton()
        wordPressObj.pullBar()
        wordPressObj.saveButton()
        wordPressObj.switchPosition()
        wordPressObj.saveButton()
        wordPressObj.accessibility()
        wordPressObj.siteAnimation()
        wordPressObj.pageAnimationEnable()
        wordPressObj.animationSelect()
        wordPressObj.saveButton()
        wordPressObj.frontend()
        wordPressObj.darkMode()
    });

    //plugin install beforehand
    it('Plugin already installed', () => {
        wordPressObj.openURL();
        wordPressObj.enterUserName(login.userName);
        wordPressObj.enterPassword(login.password);
        wordPressObj.clickOnContinue();
        wordPressObj.pluginClick();

        wordPressObj.validatePluginActive()
        wordPressObj.wpDarkModeClick()
        wordPressObj.customization()
        wordPressObj.switchSetting()
        wordPressObj.floatStyle()
        wordPressObj.saveButton()
        wordPressObj.pullBar()
        wordPressObj.saveButton()
        wordPressObj.switchPosition()
        wordPressObj.saveButton()
        wordPressObj.accessibility()
        wordPressObj.siteAnimation()
        wordPressObj.animationSelect()
        wordPressObj.saveButton()
        wordPressObj.frontend()
        wordPressObj.darkMode()

    });
});
