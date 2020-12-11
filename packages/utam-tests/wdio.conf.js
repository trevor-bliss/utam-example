/* eslint no-unused-vars: 0 */
const path = require('path');
const { UtamWdioService } = require('wdio-utam-service');

const CHROMEDRIVER_VERSION = '87.0.4280.20';

exports.config = {
    runner: 'local',
    specs: ['./src/__tests__/*.spec.js'],
    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
        },
    ],
    logLevel: 'trace',
    bail: 0,
    waitforTimeout: 20000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 0,
    automationProtocol: 'webdriver',
    services: [
        // 'chromedriver',
        [
            'selenium-standalone',
            {
                // Temporarily force the download of a specific Chromedriver version to prevent the following error:
                // "session not created: This version of ChromeDriver only supports Chrome version 83"
                // Possibly related to https://github.com/webdriverio/webdriverio/issues/5747
                logPath: './wdio-results/selenium-logs',
                installArgs: {
                    ignoreExtraDrivers: true,
                    version: '3.141.5',
                    baseURL: 'https://selenium-release.storage.googleapis.com',
                    drivers: {
                        chrome: {
                            version: CHROMEDRIVER_VERSION,
                            arch: process.arch,
                            baseURL: 'https://chromedriver.storage.googleapis.com',
                        },
                    },
                },
                args: {
                    version: '3.141.5',
                    ignoreExtraDrivers: true,
                    drivers: {
                        chrome: {
                            version: CHROMEDRIVER_VERSION,
                            arch: process.arch,
                        },
                    },
                },
            },
        ],
        [UtamWdioService, {}]
    ],
    framework: 'jasmine',
    reporters: ['spec'],
    jasmineNodeOpts: {
        helpers: [path.join(__dirname, 'src/jasmine.js')], // transpiles(es6 modules)
        requires: ['ts-node/register'], // trasnpile ts
        // script execution timeout
        defaultTimeoutInterval: 1000 * 60 * 30, //30 min
        expectationResultHandler: function (passed, assertion) {
            // intercept assertion
        },
    },
    before: function () {
        require('ts-node').register({ files: true });
        require('./src/jasmine')();
    },
};
