describe('Login successfully', () => {
	beforeEach(() => {
		cy.exec('npm run start');
	});

	it('Visit Localhost:3000', () => {
		cy.visit('http://localhost:3000');
	});

	it('Check if there is a form on screen', () => {
		cy.contains('Faça login para continuar');
	});

	it('Submit login form', () => {
		cy.get(':nth-child(1) > [data-testid="input-field"]').type(
			'teste@lojaintegrada.com.br',
		);
		cy.get(':nth-child(2) > [data-testid="input-field"]').type('teste123');
		cy.get('[data-testid="button"]').click();
	});

	it('Check message of successfully', () => {
		cy.get('.Toastify__toast-body > :nth-child(2)').contains(
			'Login Realizado com sucesso! Aguarde',
		);
	});
});
