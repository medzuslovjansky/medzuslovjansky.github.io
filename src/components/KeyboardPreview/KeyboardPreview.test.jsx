import React from "react";
import renderer from "react-test-renderer";

jest.mock("@theme/Tabs", () => ({ children }) => children);
jest.mock("@theme/TabItem", () => ({ children }) => children);
jest.mock("@docusaurus/Translate", () => ({
  __esModule: true,
  translate: ({ message }, values) => {
    if (!values) return message;
    return Object.entries(values).reduce(
      (acc, [k, v]) => acc.replaceAll(`{${k}}`, String(v)),
      message,
    );
  },
  default: ({ children }) => children,
}));

import KeyboardPreview from "./KeyboardPreview";

describe("KeyboardPreview", () => {
  it("matches snapshot for the isv-Latn layout (default layer)", () => {
    const tree = renderer
      .create(<KeyboardPreview layoutId="isv-Latn" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders an error for an unknown layoutId", () => {
    const tree = renderer
      .create(<KeyboardPreview layoutId="does-not-exist" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
