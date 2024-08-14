import React from "react";
import renderer from "react-test-renderer";
import AlphabetOverview from "./AlphabetOverview";

describe("AlphabetOverview", () => {
  it("matches DOM Snapshot for Latin alphabet", () => {
    const domTree = renderer.create(<AlphabetOverview script="isv-Latn" />).toJSON();
    expect(domTree).toMatchSnapshot();
  });

  it("matches DOM Snapshot for Cyrillic alphabet", () => {
    const domTree = renderer.create(<AlphabetOverview script="isv-Cyrl" />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});
