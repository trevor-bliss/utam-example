import Login from 'tmp-pageobjects/pageObjects/login';
import { createUtamLoader } from 'wdio-utam-service';

describe('login, find app nav bar item by text and click', () => {
    beforeAll(() => {
        // temporary, should be set via service config
        browser.setTimeout({ implicit: 30000 });
    });

    it('custom setup example', async () => {
        await browser.url('/');
        const utam = createUtamLoader(browser);
        const loginPage = await utam.load(Login);
        // login
        await loginPage.login('test@kk.org', 'password123456');
    });

});   