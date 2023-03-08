describe("First Test", () => {
  it("Navigate to our first page", () => {
    cy.visit("http://localhost:64192/");
    cy.reload();
  });
});
