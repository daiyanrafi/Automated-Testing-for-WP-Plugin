export class LoginPage {
    weblocators = {
        userName: '#user_login',
        password: '#user_pass',
        continue: '#wp-submit',
        plugin: '#menu-plugins > .wp-has-submenu > .wp-menu-name',
        darkPlug: '#activate-wp-dark-mode',
        activePlugin: '#activate-wp-dark-mode',
        deactivateButton: '#deactivate-wp-dark-mode',
        wpDarkMode: '#toplevel_page_wp-dark-mode > .wp-has-submenu > .wp-menu-name',
        customization: ':nth-child(2) > .wp-dark-mode-admin-sidebar-nav-container > .justify-between > .flex > .text-base',
        switch: '[href="#/switch"]',
        floatStyle: '.rounded.gap-6 > .rounded > .flex-wrap > :nth-child(3)',
        rangeRover: '.range',
        switchPosition: ':nth-child(2) > .bg-gray-50 > .bg-gray-100',
        saveButton: '.bg-blue-500',        
        accessibility: '.rounded > :nth-child(3) > a'

    }

    openURL() {
        cy.visit(Cypress.env('URL'));
    }

    enterUserName(UName) {
        cy.get(this.weblocators.userName).type(UName);
    }

    enterPassword(password) {
        cy.get(this.weblocators.password).type(password);
    }

    clickOnContinue() {
        cy.get(this.weblocators.continue).click();
    }

    pluginClick() {
        cy.get(this.weblocators.plugin).click();
    }

    validatePluginActive() {
        cy.get(this.weblocators.deactivateButton, { timeout: 10000 }).should('exist').then(() => {
            cy.log('Plugin Activated');
        });
    }

    validatePluginInactive() {
        // Use cy.on() to handle assertion failures
        cy.on('fail', (err) => {
            // Check if the error is related to the assertion on the deactivateButton element
            if (err.message.includes('expected to find element')) {
                // Log a message indicating the plugin is activated
                cy.log('Plugin is activated');
            } else {
                // Log any other assertion failure errors
                cy.log('Error:', err.message);
            }
        });

        // Check if the deactivate button is not found, indicating the plugin is inactive
        cy.get(this.weblocators.deactivateButton).should('not.exist');

        // Log a message indicating the plugin is not activated
        cy.log('Plugin is not activated');
    }

    wpDarkModeClick() {
        cy.get(this.weblocators.wpDarkMode).click().then(() => {
            cy.log('Clicked on wpDarkMode');
        });
    }

    customization() {
        cy.get(this.weblocators.customization).click().then(() => {
            cy.log('Clicked on CUSTOMIZATION');
        });
    }
    switchSetting() {
        cy.get(this.weblocators.switch).click()
    }
    
    floatStyle() {
        cy.get(this.weblocators.floatStyle).click()
    }
    
    
    pullBar() {
        cy.get(this.weblocators.rangeRover).invoke('val', 220).trigger('input').then(() => {
            cy.log('pullbar triggered');
        });
    }
    
    switchPosition() {
        cy.get(this.weblocators.switchPosition).click()
    }

    saveButton() {
        cy.get(this.weblocators.saveButton).click()
    }

    accessibility(){
        cy.get(this.weblocators.accessibility).click()
    }

    accessibilityKeyboardShortcut() {
        // cy.get('w-auto h-6 flex items-center justify-center').click()
        cy.get('.bg-white.gap-5 > :nth-child(1) > .sm\:items-center > .w-auto > .relative').click()
    }
    
}
