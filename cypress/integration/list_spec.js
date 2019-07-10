describe('Website works', () => {
    it('Page loads', () => {
        cy.visit('/');
    })
})
describe('add item to input', () => {
    it('Should be able to type into the input field', () => {
        cy.get('.new-item')
        .type('Learn cypress')
        .should('have.value', 'Learn cypress')
    })
    it('Should add `Learn cypress` to page when you click the button', () => {
        cy.get('.add-button')
        .click();

        cy.contains('Learn cypress')
    })
})
describe('Check Function', () => {
    it('Should be able to click the button', () => {
        cy.get("button[name='learn-cypress-check']")
        .click();
    })
    it('Should have strike through class', () => {
        cy.get("span[class='checked learn-cypress']")
        .should();
    })
})