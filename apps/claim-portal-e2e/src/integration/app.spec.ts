import { getGreeting } from '../support/app.po';

describe('claim-portal', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to claim-portal!');
  });
});
