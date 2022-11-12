// describe("Login authentication", () => {
//   beforeEach(() => {
//     cy.visit("http://127.0.0.1:8080/");
//     cy.clearLocalStorage();
//     cy.get("#registerForm").within(() => {
//       cy.get(".btn-close:visible").click();
//       cy.wait(500);
//     });
//     cy.get("button[data-auth='login']:visible").click();
//   });

//   // Tries to log in with bad account details
//   it("CAN'T login with bad credentials", () => {
//     cy.get("#loginForm").within(() => {
//       cy.wait(2000);
//       cy.get("input[type='email']:visible")
//         .should("exist")
//         .type(`bad@email.com`);
//       cy.wait(500);
//       cy.get("input[type='password']:visible").should("exist").type("wrngPwd");
//       cy.wait(1000);
//       cy.get("button[type='submit']:visible").click({force: true});
//       cy.wait(3000);
//       cy.then(() => expect(localStorage.getItem("token")).to.be.null);
//       cy.then(() => expect(localStorage.getItem("profile")).to.be.null);
//       cy.wait(500);
//     });
//   });

//   // Logs in with a registered account's details
//   it("CAN login with good credentials", () => {
//     cy.get("#loginForm").within(() => {
//       cy.wait(2000);
//       cy.get("input[type='email']:visible")
//         .should("exist")
//         .type(`thefool@noroff.no`);
//       cy.wait(500);
//       cy.get("input[type='password']:visible").should("exist").type("password");
//       cy.wait(500);
//       cy.get("button[type='submit']:visible").click({force: true});
//     });
//   });
// });
