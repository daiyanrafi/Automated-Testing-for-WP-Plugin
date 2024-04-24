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
        customization: '#text-base leading-6 wp-dark-mode-white',
        switchSettings: '#:nth-child(2) > .wp-dark-mode-admin-sidebar-nav-container > .justify-between > .flex > .text-base',
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
        cy.on('fail', (err) => {
            if (err.message.includes('expected to find element')) {
                cy.log('Plugin is not activated');
            } else {
                cy.log('Error:', err.message);
            }
        });
    
        cy.get(this.weblocators.activePlugin).should('exist');
    
        cy.log('Plugin Activated');
    }
    
    validatePluginInactive() {
        cy.on('fail', (err) => {
            if (err.message.includes('expected to find element')) {
                cy.log('Plugin is activated');
            } else {
                cy.log('Error:', err.message);
            }
        });
    
        cy.get(this.weblocators.deactivateButton).should('not.exist');
    
        cy.log('Plugin is not activated');
    }
    
    wpDarkModeClick(){
        cy.get(this.weblocators.wpDarkMode).click();
    }
    
}
