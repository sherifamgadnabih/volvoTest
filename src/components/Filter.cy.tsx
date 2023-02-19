import React from "react";
import Filter from "./Filter";
import { ConfigProvider, StyleProvider, ThemePicker } from "vcc-ui";

describe("<Filter />", () => {
  it("renders the correct options", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <ConfigProvider config={{}}>
        <StyleProvider>
          <ThemePicker variant="light">
            <Filter
              carTypes={["sedan", "suv"]}
              onValueChange={(value: string) => {}}
            />
          </ThemePicker>
        </StyleProvider>
      </ConfigProvider>
    );
    cy.get("option").eq(2).contains("sedan");
    cy.get("option").eq(3).contains("suv");
  });
});
export {};
