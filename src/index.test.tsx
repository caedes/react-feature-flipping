import { render, screen } from "@testing-library/react";

import FeatureFlipping from ".";

const features = ["enabledFeature"];

describe("react-feature-flipping", () => {
  const setup = () => {
    render(
      <FeatureFlipping.Provider features={features}>
        <main>
          <h1>Main Title</h1>
          <FeatureFlipping.On feature="enabledFeature">
            <h2>Enabled Feature</h2>
          </FeatureFlipping.On>
          <FeatureFlipping.On feature="disabledFeature">
            <h2>Disabled Feature</h2>
          </FeatureFlipping.On>
          <FeatureFlipping.Off feature="unavailableFeature">
            <h2>Unavailable Feature</h2>
          </FeatureFlipping.Off>
        </main>
      </FeatureFlipping.Provider>
    );
  };

  it("displays main title", () => {
    setup();
    expect(
      screen.getByRole("heading", { level: 1, name: "Main Title" })
    ).toBeInTheDocument();
  });

  it("displays enabled feature", () => {
    setup();
    expect(
      screen.getByRole("heading", { level: 2, name: "Enabled Feature" })
    ).toBeInTheDocument();
  });

  it("does not display disabled feature", () => {
    setup();
    expect(
      screen.queryByRole("heading", { level: 2, name: "Disabled Feature" })
    ).not.toBeInTheDocument();
  });

  it("displays disabled feature", () => {
    setup();
    expect(
      screen.getByRole("heading", { level: 2, name: "Unavailable Feature" })
    ).toBeInTheDocument();
  });
});
