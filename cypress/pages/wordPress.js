export class wordPress {
    weblocators = {
        userName: '#user_login',
        password: '#user_pass',
        continue: '#wp-submit',
        plugin: '#menu-plugins > .wp-has-submenu > .wp-menu-name',

        addNewPlugin: '.page-title-action',
        searchPlugin: '#search-plugins',
        installPlugin: '.plugin-card-wp-dark-mode > .plugin-card-top > .action-links > .plugin-action-buttons > :nth-child(1) > .install-now',
        pluginPage: '#menu-plugins > .wp-submenu > li.wp-first-item > .wp-first-item',
        activePlugin: '#activate-wp-dark-mode',

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
        accessibility: '.rounded > :nth-child(3) > a',
        siteAnimation: '[href="#/animation"]',
        pageAnimationEnable: '.w-auto > .relative',
        animationSelect: ':nth-child(5) > .flex',
        goToFrontend: '#wp-admin-bar-site-name > [aria-expanded="false"]',
        darkMode: '._thumb.wp-dark-mode-ignore'
    }

    openURL() {
        cy.visit(Cypress.env('URL'));
    }
    

    enterUserName(UName) {
        cy.wait(3000);
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

    addNewPlugin(){
        cy.get(this.weblocators.addNewPlugin).click();
    }

    searchPlugin(){
        cy.get(this.weblocators.searchPlugin).type('WP Dark Mode');
    }

    installPlugIns(){
        cy.get(this.weblocators.installPlugin).click();
        
        cy.wait(20000);
    }
    

    pluginPage(){
        cy.get(this.weblocators.pluginPage).click()
    }

    activePlugin(){
        cy.get(this.weblocators.activePlugin).click()
    }

    validatePluginActive() {
        cy.get(this.weblocators.deactivateButton, { timeout: 1000 }).should('exist').then(() => {
            cy.log('Plugin Activated');
        });
    }

    wpDarkModeClick() {
        cy.get(this.weblocators.wpDarkMode, { timeout: 1000 }).click().then(() => {
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

    accessibility() {
        cy.get(this.weblocators.accessibility).click()
    }

    siteAnimation (){
        cy.get(this.weblocators.siteAnimation).click()
    }

    pageAnimationEnable(){
        cy.get(this.weblocators.pageAnimationEnable).click()
    }

    animationSelect(){
        cy.get(this.weblocators.animationSelect).click()
    }

    frontend(){
        cy.get(this.weblocators.goToFrontend).click()
    }

    darkMode() {
        cy.get(this.weblocators.darkMode).should('be.visible')
            .then(() => cy.log("Dark mode on"));
    
        cy.on('exception', (err) => {
            if (err.message.includes('cy.get() failed because it could not find a matching element')) {
                cy.log("No dark mode");
            }
        });
    }

}
