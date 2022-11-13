describe("Login authentication", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerForm").within(() => {
      cy.get(".btn-close:visible").click();
      cy.wait(500);
    });
    cy.get("button[data-auth='login']:visible").click();
  });

  // Logs in with a registered account's details
  it("CAN login with good credentials", () => {
    cy.get("#loginForm").within(() => {
      cy.wait(500);
      cy.get("input[type='email']:visible")
        .should("exist")
        .type(`thefool@noroff.no`);
      cy.wait(500);
      cy.get("input[type='password']:visible").should("exist").type("password");
      cy.get("button[type='submit']:visible").click();
      cy.wait(1000);
    });
  });

  // Tries to log in with bad account details
  it("CAN'T login with bad credentials", () => {
    cy.get("#loginForm").within(() => {
      cy.wait(500);
      cy.get("input[type='email']:visible")
        .should("exist")
        .type(`bad@email.com`);
      cy.get("input[type='password']:visible").should("exist").type("wrngPwd");
      cy.get("button[type='submit']:visible").click();
    });
  });
});
