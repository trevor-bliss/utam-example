import Login from '@utam/tmp-pageobjects';
import { createUtamLoader } from 'wdio-utam-service';

describe('login test example', () => {
    
    it('utam loader setup example', async () => {
        // driver Objects is a BrowserObject created inside wdio by the runner
        // we pass it to utam loader to instantiate Page Objects
        const utam = createUtamLoader(driver);
        await driver.url('/');
        const loginPage = await utam.load(Login);
        // login
        await loginPage.login('test@kk.org', 'password123456');
    });

});   