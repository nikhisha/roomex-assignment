import LoginPage from  '../pageobjects/login.page';
import ForgotPasswordPage from '../pageobjects/forgot-password.page';
import { translations} from '../assets/i18n';
import { Locale } from '../pageobjects/types';
import { data } from '../assets/data';

const locales: Locale[] = ["en-GB"]

describe('Roomex Login application', () => {
    locales.forEach(locale => {
        const translation = translations[locale];
        it(`should show error login without credentials - ${locale}`, async () => {
            await LoginPage.open(locale);
            await LoginPage.login("","");   
            await expect(LoginPage.errorMessageForEmail).toBeExisting();
            await expect(LoginPage.errorMessageForPassword).toBeExisting();
            await expect(LoginPage.errorMessageForEmail).toHaveTextContaining(translation["login.email.error_message"]);
            await expect(LoginPage.errorMessageForPassword).toHaveTextContaining(translation["login.password.error_message"]);
        });
        it(`should show error on reset password with invalid email - ${locale}`, async () => {
            await LoginPage.open(locale);
            await LoginPage.navigateToForgotPassword();
            await ForgotPasswordPage.resetPassword(data.invalidEmail);
            await expect(ForgotPasswordPage.errorForInvalidEmail).toBeExisting();
            await expect(ForgotPasswordPage.errorForInvalidEmail).toHaveTextContaining(translation["resetPassword.email.error_message"]);
        });
    })
});


