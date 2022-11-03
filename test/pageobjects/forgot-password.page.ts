import Page from './page';

class ForgotPasswordPage extends Page {
    public get email() {
        return $('[data-qa = "email-input"] input'); 
    }

    public get resetPasswordBtn() {
        return $('[data-qa = "reset-password-submit-button"] button');
    }
    
    public get errorForInvalidEmail() {
        return $('[data-qa="danger"]')
    }

    public async resetPassword(emailId : string) {
        await this.email.setValue(emailId);
        await this.resetPasswordBtn.click()
    }
}

export default new ForgotPasswordPage();