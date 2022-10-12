export class Resources {
    url = '/resource-library';
    title = "Promethium | Resource Library | Business Intelligence";

    solutionsForDbtDownloadButton = () => cy.get("div#comp-khxrjo87__item-l4epj00h > a")

    clickOnSolutionsForDbtDownloadButton() {
        this.solutionsForDbtDownloadButton().click()
    }
    
    downloadSolutionsForDbtFile() {
        this.solutionsForDbtDownloadButton()
            .should('have.attr', 'href')
            .then((href) => {
                cy.downloadFile(href, "cypress/downloads/", 'dbtSolutions.pdf')
            })
    }
  
  }
  
  export const ResourcesPage = new Resources();