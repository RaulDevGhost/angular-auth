describe("Saving Elements", () => {
  it("Repetition", () => {
    cy.visit("http://localhost:49297/");
    cy.get("[data-test-id='login-form'] input[formControlName='email']");
    cy.get("[data-test-id='login-form'] input[formControlName='password']");

    // como se haria en selenium o puppeteer
    // const form = cy.get('input[placeholder="First Name"]').parents('form')
    // form.find('input')
    // form.find('div')
    // form.find('label')
  });

  // it('como se hace en cypress', () => {
  // 	cy.visit('/automation-practice-form')
  // 	cy.get('input[placeholder="First Name"]')
  // 		.parents('form')
  // 		.then((form) => {
  // 			const inputs = form.find('input')
  // 			const divs = form.find('div')
  // 			const labels = form.find('label')

  // 			//Las asersiones se explicaran a detalle en la proxima clase
  // 			expect(inputs.length).to.eq(15)
  // 			expect(divs.length).to.eq(70)
  // 			expect(labels.length).to.eq(16)
  // 			// Si queremos que este elemento de Jquery se vuelva un elemento de cypress debemos de usar wrap
  // 			cy.wrap(inputs).should('have.length', 15)
  // 		})

  // 	// como se haria en selenium o puppeteer
  // 	// const form = cy.get('input[placeholder="First Name"]').parents('form')
  // 	// form.find('input')
  // 	// form.find('div')
  // 	// form.find('label')
  // })

  it("como se hace en cypress", () => {
    cy.visit("http://localhost:49297/");
    cy.get("form").then((form) => {
      const inputs = form.find("input");
      expect(inputs.length).to.equal(2);

      // Si queremos que este elemento de Jquery se vuelva un elemento de cypress debemos de usar wrap
      //cy.wrap(inputs).should("have.length", 15);
    });

    // como se haria en selenium o puppeteer
    // const form = cy.get('input[placeholder="First Name"]').parents('form')
    // form.find('input')
    // form.find('div')
    // form.find('label')
  });
});
