import { render, screen } from "@testing-library/react";
import React from "react";

import FeatureFlipping from ".";

const features = ["enabledFeature"];

describe("react-feature-flipping", () => {
  beforeEach(() => {
    render(
      <FeatureFlipping.Provider features={features}>
        <main>
          <h1>Main Title</h1>
          <FeatureFlipping.Toggle feature="enabledFeature">
            <h2>Enabled Feature</h2>
          </FeatureFlipping.Toggle>
          <FeatureFlipping.Toggle feature="disabledFeature">
            <h2>Disabled Feature</h2>
          </FeatureFlipping.Toggle>
        </main>
      </FeatureFlipping.Provider>
    );
  });

  it("displays main title", () => {
    expect(
      screen.getByRole("heading", { level: 1, name: "Main Title" })
    ).toBeInTheDocument();
  });

  it("displays enabled feature", () => {
    expect(
      screen.getByRole("heading", { level: 2, name: "Enabled Feature" })
    ).toBeInTheDocument();
  });

  it("does not display disabled feature", () => {
    expect(
      screen.queryByRole("heading", { level: 2, name: "Disabled Feature" })
    ).not.toBeInTheDocument();
  });
});
