const registerPage = require('../pageobjects/register.page');

describe('Register Cermati', () => {
    const baseUrl = 'https://www.cermati.com/';
    const path = '/gabung';

    it('Succesfully register on cermati',async () => {
        await registerPage.open(baseUrl,path);
        await registerPage.fillEmail('test123@nercatu.ml');
        await registerPage.fillPassword('P@ssw0rd','P@ssw0rd');
        await registerPage.fillName('TestNamaPertama','TestNamaKedua');
        await registerPage.fillNoPhone('081200000812')
        await registerPage.chooseCity('jakarta','KOTA JAKARTA SELATAN');
        await registerPage.clikRegister();
    });
});