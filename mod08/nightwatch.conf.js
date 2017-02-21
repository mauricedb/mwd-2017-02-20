module.exports = {
    "src_folders": [
        "tests"
    ],
    "selenium": {
        "start_process": true,
        "server_path": "./bin/selenium.jar",
        "cli_args": {
            "webdriver.chrome.driver": "./bin/chromedriver"
        }
    },
    "test_settings": {
        "default": {
            "desiredCapabilities": {
                "browserName": "chrome"
            }
        }
    }
};