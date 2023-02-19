describe("Navigation", () => {
  it("should navigate to learn and shop pages", () => {
    cy.visit("/");

    cy.get('a[href*="/learn/xc90-recharge"]').eq(0).click();

    cy.url().should("include", "/learn");

    cy.visit("/");

    cy.get('a[href*="shop/xc90-recharge"]').eq(0).click();

    cy.url().should("include", "/shop");
  });
});
export {};
