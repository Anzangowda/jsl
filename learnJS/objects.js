describe('Add the Employee', () => {
    it('Verify user can add the employe', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
        cy.contains('Dashboard').should('be.visible')
        cy.contains('PIM').click()
        cy.contains('PIM').should('be.visible')
        cy.contains('Add Employee').click()
        cy.get('input[name="firstName"]').type('gowda')
        cy.get('input[name="lastName"]').type('star')
        cy.get('button[type="submit"]').click()
        //cy.contains('Successfully saved').should('be.visible')

    })
})
