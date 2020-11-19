import Login from '@utam/tmp-pageobjects';
import { createUtamLoader } from 'wdio-utam-service';

describe('login test example', () => {

    let utamLoader;

    beforeAll('utam loader setup', () => {
        // driver Objects is a BrowserObject created inside wdio by the runner
        // we pass it to utam loader to instantiate Page Objects
        driver.setTimeout({implicit: 50000}); //if created externally - set polling timeout
        utamLoader = createUtamLoader(driver);
    });
    
    it('login', async () => {
        await driver.url('/');
        const loginPage = await utamLoader.load(Login);
        await loginPage.login('test@kk.org', 'password123456');
    });

});   