describe('Registracia a zmazanie uctu', () => {
  it('uspesne prejdenie procesom a nasledne zmazanie uctu', () => {
    cy.visit('https://automationexercise.com');

    cy.get('.logo img').should('be.visible')  // overenie ci sme sa dostali na stranku pomocou loga

    cy.get('a[href="/login"]').click()

    cy.get('.signup-form h2').should('be.visible').and('contain', 'New User Signup!')

    const username = 'Miro'
    const email = `test.miro${Date.now()}@gmail.com`  // pomocou date ziskavame unikatne meno
    cy.get('[data-qa="signup-name"]').type(username)
    cy.get('[data-qa="signup-email"]').type(email)

    cy.get('[data-qa="signup-button"]').click()

    cy.get('.login-form h2').first().should('be.visible').and('contain', 'Enter Account Information')

    cy.get('#id_gender1').click()
    cy.get('[data-qa="password"]').type('heslo123')
    cy.get('[data-qa="days"]').select('1')
    cy.get('[data-qa="months"]').select('January')
    cy.get('[data-qa="years"]').select('2000')

    // 10. Zaškrtnutie 'Sign up for our newsletter!'
    cy.get('#newsletter').check()

    // 11. Zaškrtnutie 'Receive special offers from our partners!'
    cy.get('#optin').check()

    // 12. Vyplnenie osobných údajov
    cy.get('[data-qa="first_name"]').type('Miro')
    cy.get('[data-qa="last_name"]').type('Hfhcb')
    cy.get('[data-qa="company"]').type('Iteria')
    cy.get('[data-qa="address"]').type('Bratislava 1')
    cy.get('[data-qa="address2"]').type('Byt 2')
    cy.get('[data-qa="country"]').select('United States')
    cy.get('[data-qa="state"]').type('California')
    cy.get('[data-qa="city"]').type('Los Angeles')
    cy.get('[data-qa="zipcode"]').type('90001')
    cy.get('[data-qa="mobile_number"]').type('0900111222')

    // 13. Kliknutie na 'Create Account' tlačidlo
    cy.get('[data-qa="create-account"]').click()

    // 14. Overenie, že 'ACCOUNT CREATED!' je viditeľné
    cy.get('[data-qa="account-created"]').should('be.visible')

    // 15. Kliknutie na 'Continue' tlačidlo
    cy.get('[data-qa="continue-button"]').click()

    // 16. Overenie, že 'Logged in as username' je viditeľné
    cy.get('li').should('contain', `Logged in as ${username}`)  // todo nechyba tu visible ?

    // 17. Kliknutie na 'Delete Account' tlačidlo
    cy.get('a[href="/delete_account"]').click()

    // 18. Overenie, že 'ACCOUNT DELETED!' je viditeľné a kliknutie na 'Continue'
    cy.get('[data-qa="account-deleted"]').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
  });
});