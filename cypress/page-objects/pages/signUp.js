export class signUp {
    url = 'https://onboarding.pm61data.cloud/user/register';
    title = "Promethium | Data Analytics Automation";

    signUpButton = 'button[class*=submit_button_wrapper___2rZNT]'
    signUpButtonLoadingIcon = 'span[class=ant-btn-loading-icon]'
    getFieldRequiredErrors = 'div[class*=ant-form-item-explain-error] > div';
    emailField = 'input[id*=root_user]'
    firstName = 'input[id*=first_name]'
    lastName = 'input[id*=last_name]'
    companyName = 'input[id*=company_name]'
    jobFunction = 'input[id*=job_function]'
    signUpConfirmation = 'Thank you for signing up'
    signUpConfirmationUrl = '/user/confirmation?email='

    
  
    navigate() {
      cy.visit(this.url);
    };


    clickOnSignUp() {
      cy.get(this.signUpButton).click();
    };

  
  }
  
  export const SignUpPage = new signUp();