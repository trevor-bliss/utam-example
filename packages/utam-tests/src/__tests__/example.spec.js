const Login = require('../../pageObjects/login').default;
const createUtamLoader = require('wdio-utam-service').createUtamLoader;

describe('login test example', () => {

    let utamLoader;

    beforeAll(() => {
        // driver Objects is a BrowserObject created inside wdio by the runner
        // we pass it to utam loader to instantiate Page Objects
        utamLoader = createUtamLoader(browser);
    });
    
    it('login', async () => {
        await browser.url('https://utam-dev-ed.lightning.stmpa.stm.force.com/lightning');
        
        const loginPage = await utamLoader.load(Login);
        await loginPage.login('demo1@utam.com', '123456');
        await browser.pause(5000);

    });

});   