class RegisterPage {
    
    get textHeader() {return $('.text-header')};
    get inputEmail() { return $('#email')};
    get inputPassword() {return $('#password')};
    get inputConfirmPassword() {return $('#confirm-password')};
    get inputFirstName() {return $('#first-name')};
    get inputLastName() {return $('#last-name')}
    get inputPhone() {return $('#mobile-phone')}
    get inputCity() {return $('#residence-city')};
    get buttonRegister() {return $('.btn btn-full btn-submit btn-track')}

    async open(baseURL, Path){
        await browser.url(baseURL+Path);
        await browser.maximizeWindow();
        await expect(await this.textHeader).toHaveTextContaining('Daftar ke Cermati.com');
    }

    async fillEmail(email){
        await (await this.inputEmail).setValue(email);          
        //this.buttonRegister.click();
    }

    async fillPassword(password, confirmPassword)
    {
        await (await this.inputPassword).setValue(password);
        await (await this.inputConfirmPassword).setValue(confirmPassword);
    }

    async fillName(firstName, lastName){
        await (await this.inputFirstName).setValue(firstName);
        await (await this.inputLastName).setValue(lastName);
    }

    async fillNoPhone(noPhone){
        await (await this.inputPhone).setValue(noPhone);
    }

    async chooseCity(city, cityName){
        await (await this.inputCity).scrollIntoView();
        await (await this.inputCity).setValue(city);
        await (await $(`.autocomplete-list-item=${cityName}`)).click();
    }

    async clikRegister(){
        await (await this.buttonRegister).click();
    }

}

module.exports = new RegisterPage();