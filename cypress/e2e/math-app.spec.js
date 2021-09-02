
describe('random math app', () => {
    it('can make calculations', () => {
		var firstnum = 0
		var secondnum = 0
        cy.visit('/')
        cy.get('.mat-card-content span').eq(0).as('firstnum').then(($firstvalue) => {
			firstnum = $firstvalue.text()
			cy.log(firstnum)
			cy.get('.mat-card-content span').eq(1).as('secondnum').then(($secondvalue) => {
				secondnum = $secondvalue.text()
				cy.log(secondnum)
				var sum = parseInt(firstnum) + parseInt(secondnum)
				cy.log(sum)
				cy.get('.mat-card-content input').type(sum)
				cy.get('.mat-button-wrapper').as('btn')
				cy.get('@btn').click()
			})
		})
    })
	it('can verify success messaging', () => {
		var firstnum = 0
		var secondnum = 0
        cy.visit('/')
        cy.get('.mat-card-content span').eq(0).as('firstnum').then(($firstvalue) => {
			firstnum = $firstvalue.text()
			cy.log(firstnum)
			cy.get('.mat-card-content span').eq(1).as('secondnum').then(($secondvalue) => {
				secondnum = $secondvalue.text()
				cy.log(secondnum)
				var sum = parseInt(firstnum) + parseInt(secondnum)
				cy.log(sum)
				cy.get('.mat-card-content input').type(sum)
				cy.get('.mat-button-wrapper').as('btn')
				cy.get('@btn').click()
			})
		})
		cy.get('#toast-container').should('contain', 'That\'s right! Try another one.')
    })
	it('can verify failure messaging', () => {
		var firstnum = 0
		var secondnum = 0
        cy.visit('/')
        cy.get('.mat-card-content span').eq(0).as('firstnum').then(($firstvalue) => {
			firstnum = $firstvalue.text()
			cy.log(firstnum)
			cy.get('.mat-card-content span').eq(1).as('secondnum').then(($secondvalue) => {
				secondnum = $secondvalue.text()
				cy.log(secondnum)
				var sum = parseInt(firstnum) + parseInt(secondnum) + 1
				cy.log(sum)
				cy.get('.mat-card-content input').type(sum)
				cy.get('.mat-button-wrapper').as('btn')
				cy.get('@btn').click()
			})
		})
		cy.get('#toast-container').should('contain', ' Sorry, that is not correct. Please try again.')
    })
  })
