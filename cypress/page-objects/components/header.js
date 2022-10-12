export class Header {
    logo =  () => cy.get("wix-image#img_comp-jixmod45");
    tryNowButton = () => cy.contains("Try Now");
    productSection = () => cy.get("li#comp-jwtopy710 > ul")
    dataConnectors = () => cy.contains("Data Connectors")
    resourcesSection = () => cy.get("li#comp-jwtopy712 > ul")
    collateralAndWaivers = () => cy.contains("Collateral & Webinars")

    clickOnTryNow() {
      this.tryNowButton().invoke('removeAttr', 'target').click()
    };

    hoverOverProduct() {
        this.productSection().invoke('show')
    }

    hoverOverResources() {
      this.resourcesSection().invoke('show')
  }

  
  }
  
  export const HeaderComponent = new Header();