
import Page from './page';
import { Locale } from './types';

class LoginPage extends Page {
    public get inputUsername () {
        return $('[data-qa="username-input-email"] input');
    }

    public get inputPassword () {
        return $('[data-qa="password-input"] input');
    }

    public get submitBtn () {
        return $('[data-qa="login-submit-button"] button');
    }

    public get errorMessageForEmail() {
        return $('[data-qa="username-input-email"] [data-qa="div-error"]');
    }
    public get errorMessageForPassword() {
        return $('[data-qa="password-input"] [data-qa="div-error"]');
    }  
    
    public get forgotPasswordLink() {
        return $('a[data-qa="forgot-password?-"]');
    }
   
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.submitBtn.click();
    }

    public async navigateToForgotPassword() {
        await this.forgotPasswordLink.click();
    }

    public open (locale: Locale) {
        return super.open('login', locale);
    }
}

export default new LoginPage();
