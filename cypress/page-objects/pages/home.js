export class Home {
    url = '/';
    title = "Promethium | Data Analytics Automation";
  
    navigate() {
      cy.visit(this.url);
    };

    contains(text) {
      return cy.contains(text)
    };

  }
  
  export const HomePage = new Home();