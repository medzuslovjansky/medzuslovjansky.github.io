import React from "react";
import renderer, { act } from "react-test-renderer";
import { Table } from "./index";

function renderToJSON(element) {
  let root;
  act(() => {
    root = renderer.create(element);
  });
  return root.toJSON();
}

describe("AlphabetOverview", () => {
  it("matches DOM Snapshot for Latin alphabet", () => {
    expect(renderToJSON(<Table script="isv-Latn" />)).toMatchSnapshot();
  });

  it("matches DOM Snapshot for Cyrillic alphabet", () => {
    expect(renderToJSON(<Table script="isv-Cyrl" />)).toMatchSnapshot();
  });
});
