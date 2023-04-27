describe("Assertions", () => {
  it("Assertion 1", () => {
    cy.visit("http://localhost:49297/");
    cy.url().should("include", "login");
    cy.get("header img")
      .should("be.visible")
      .should("have.attr", "alt", "logo");
  });

  it("Assertion 2", () => {
    cy.visit("http://localhost:49297/");
    cy.url().should("include", "login");
    cy.get("header").then((header) => {
      const img = header.find("img");
      expect(img.length).to.equal(1);
      //expect(img).to.be.visible;
      expect(img).to.exist;
      expect(img).to.have.attr("loading", "lazy");
      expect(img).to.have.css("width", "240px");
    });
  });
});
