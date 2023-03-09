describe("First Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:64192/");
  });
  it("Frontend page can be opened / Smoke testing", () => {
    cy.reload(true);
    cy.contains("Log in to Trello");
  });

  it("Make the login", () => {
    cy.get("[formControlName='email']")
      .type("test@test.com")
      .should("have.value", "test@test.com");
    cy.get("[formControlName='password']")
      .type("12345678")
      .should("have.value", "12345678");
    cy.get("#login-button-form").click();
  });
});
