
## WP Plugin Test Automation

 - [Full Test Execution Video (Google Drive Link)](https://drive.google.com/file/d/1h8dwqtVosLOpZWNSdlt-FEtOMsjDYX50/view?usp=sharing)
 
This project automates the testing process for the "WP Dark Mode" plugin using Cypress, a JavaScript-based end-to-end testing framework. The automated tests cover various functionalities of the plugin to ensure its proper installation, activation, customization, and frontend display.

## Project Structure

The project is structured as follows:

- **Tests:** Located in the `e2e` folder, these contain test scripts written in JavaScrpt for different aspects of the WP Dark Mode plugin.
- **Pages:** The `pages` folder contains JavaScript files defining page objects for interacting with different pages of the WordPress admin interface.
- **Fixtures:** The `fixtures` folder contains JavaScript files defining test data, such as login credentials.

## Test Scenarios

The test scenarios cover key functionalities of the WP Dark Mode plugin:

1. **Plugin Installation:** Verifies the installation process of the WP Dark Mode plugin by navigating to the plugin page, searching for the plugin, and installing it.
2. **Plugin Activation:** Ensures that the plugin is activated successfully after installation.
3. **Customization:** Tests various customization options provided by the plugin, such as switching modes, adjusting styles, and saving settings.
4. **Accessibility:** Checks the accessibility features provided by the plugin to ensure compliance with accessibility standards.
5. **Animation Settings:** Verifies the functionality of animation settings, including enabling/disabling animations and selecting animation types.
6. **Frontend Display:** Validates that the dark mode is correctly displayed on the frontend of the WordPress site.

## Implementation Details

### Page Objects

Page objects are used to encapsulate the elements and actions on different pages of the WordPress admin interface. They promote code reusability and maintainability by centralizing element locators and interaction methods.

### Cypress Configuration

The Cypress configuration file (`cypress.config.js`) defines environment variables, such as the URL of the WordPress login page, and provides setup for node event listeners if required.

### Test Data

Login credentials are stored in a fixture file (`login.js`) within the `fixtures` folder. This separation of test data allows for easy management and reuse across tests.

## Test Video

A video demonstrating the execution of the test suite is available [here](https://github.com/daiyanrafi/Automation-plugin-cypress/assets/33730802/1c536ce9-e9e6-4725-9ae3-c0892a02d647) for download. 

## Execution

To execute the tests in your machine, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in the terminal.
3. Install project dependencies by running the command: `npm install`.
4. Launch Cypress by running the command: `npx cypress open`.
5. Select the desired test suite to execute from the Cypress dashboard.
6. Monitor the test execution process and review the results.

## CI/CD Integration

Continuous Integration/Continuous Deployment (CI/CD) is integrated into this project using GitHub Actions. The YAML file for CI/CD configuration can be found at .github\workflows - [build.yml]

## Conclusion

The WordPress automation project successfully automates the testing of the WP Dark Mode plugin, covering installation, activation, customization, accessibility, animation settings, and frontend display. By leveraging Cypress and best practices in test automation, the project aims to improve the efficiency and reliability of testing processes for WordPress plugins.
