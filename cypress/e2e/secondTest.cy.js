// npm install eslint-plugin-cypress -D
describe("First Test", () => {
  // beforeEach(() => {
  //   cy.visit("http://localhost:56021/");
  // });
  it("Frontend page can be opened / Smoke testing", () => {
    cy.visit("http://localhost:49297/");
    cy.reload(true);
    cy.contains("Log in to Trello");
  });

  it("Make the login", () => {
    cy.visit("http://localhost:49297/");
    cy.get("[data-test-id='login-form']").parents().find("h1");
    cy.get("[data-test-id='login-form'] input[formControlName='email']")
      .type("nicolas@mail.com")
      .should("have.value", "nicolas@mail.com");
    cy.get("[data-test-id='login-form'] input[formControlName='password']")
      .type("changeme")
      .should("have.value", "changeme");
    cy.get("#login-button-form").click();
    cy.wait(5000);
    cy.contains("Recently viewed");
    cy.visit("http://localhost:49297/app/users");
    cy.get(":nth-child(2) > .cdk-column-name");
  });

  // it("Go to users page", () => {
  //   cy.wait(5000);
  //   cy.contains("Recently viewed");
  //   cy.visit("http://localhost:56021/app/users");
  // });
});
