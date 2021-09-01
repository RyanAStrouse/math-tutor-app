describe('random math app', () => {
    it('can make calculations', () => {
        cy.visit('/')
        cy.get('.mat-card-content > div').children().eq(0).then(($firstnum) => {
			const firstvalue = $firstnum.text()
			cy.log(firstvalue)
		})
		//cy.log(firstnum)
        cy.get('.mat-card-content > div').children().eq(1).then(($secondnum) => {
			const secondvalue = $secondnum.text()
			cy.log(secondvalue)
		})
		cy.get('.mat-card-content > div').children().eq(2).then(($answer) => {
			const sum = $firstvalue + $secondvalue
			this.type(sum)
		})
		//cy.log(sum)
		//cy.get('@answer').type(sum)
        cy.get('.mat-button-wrapper').as('btn')
        cy.get('@btn').click()
        .findByTestId('total')
    })
  })
