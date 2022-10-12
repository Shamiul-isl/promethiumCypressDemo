export class Product {
    url = '/promethium-data-connectors';
    title = "Data Connectors | Promethium";

    databaseSection = () => cy.get("div[data-mesh-id=comp-ktbxs380inlineContent]")
    databasesUsedImages = () => this.databaseSection().find("div[class=xQ_iF]")
    databasesUsedText = () => this.databaseSection().find("div[data-testid=richTextElement] > p > span")
  
    navigate() {
      cy.visit(this.url);
    };
  
  }
  
  export const ProductPage = new Product();