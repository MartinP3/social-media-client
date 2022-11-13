describe("it creates a post after logging in", () => {
  it("opens up the site", () => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.get("#registerForm").within(() => {
      cy.wait(500);
      cy.get(".btn-close:visible").click();
      cy.wait(500);
    });
    cy.get("button[data-auth='login']:visible").click();
    cy.wait(2000);
  });

  // Logs in with a registered account's details, posts and deletes
  it("logs in with good credentials", () => {
    cy.get("#loginForm").within(() => {
      cy.wait(1000);
      cy.get("input[type='email']:visible").type(`thefool@noroff.no`);
      cy.wait(500);
      cy.get("input[type='password']:visible").type("password");
      cy.wait(500);
      cy.get("button[type='submit']:visible").click();
      cy.wait(2000);
    });
    // then clicks "new post"
    cy.get("a[href='./?view=post']").click();
    cy.wait(1500);

    // Checks that the url is correct
    // cy.url().should("include", "post");
    // Fills in post data
    cy.get("#postTitle").should("exist").type("the title");
    cy.get("#postTags").should("exist").type("cypress");
    // Post media tends to cover the screen so much that it can't even see submit button
    // I tried adding scrollTo actions but no dice with my attempts.

    // cy.get("#postMedia").should("exist").type("https://picsum.photos/200/200");

    cy.get("#postBody").should("exist").type("bottom text");
    cy.wait(500);
    cy.get("button[data-action='submit']").click();
    cy.wait(4000);
    cy.get("button[data-action='delete']:visible").click();
  });
});

// I have tried to keep this in seperate "it(s)" but it keeps taking
//away the token and profile so albeit ugly I will keep it this way for now
