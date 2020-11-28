import Login from '@utam/tmp-pageobjects';
import { createUtamLoader } from 'wdio-utam-service';

describe('login test example', () => {

    let utamLoader;

    beforeAll(() => {
        // driver Objects is a BrowserObject created inside wdio by the runner
        // we pass it to utam loader to instantiate Page Objects
        utamLoader = createUtamLoader(driver);
    });
    
    it('login', async () => {
        await driver.url('environment url here');
        const loginPage = await utamLoader.load(Login);
        await loginPage.login('username', 'password');
    });

});   