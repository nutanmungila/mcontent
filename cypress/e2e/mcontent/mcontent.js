const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");

Given('I navigate to the page', ()=>{
    cy.visit('https://mcontent.net/mbrowse');
})


When('I click a video',()=>{
    cy.log('HEREEEEE')
    cy.get('.video-card-image')
    .each((item)=>{

        const link = item.find('a').first();
        cy.visit(link.attr('href'));
        cy.log('ITEM',item);
        cy.get('.single-video-title').should('not.be.empty');
        cy.go('back');

    })
})
Then('It should contain the titles',()=>{
    //cy.get('.single-video-title').should('not.be.empty');
})



When(/^I search for a text "(.*)"$/, (searchText) => {
    cy.get('#search_text').type(searchText).type('{enter}');
})
Then(/^Search results should show the searchtext "(.*)" related videos$/,(searchTxt)=>{
    cy.get('.video-title').contains(searchTxt);
} )

