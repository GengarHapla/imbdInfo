import React from "react";
import SortBy from "./sortBy";

describe("SortBy component renders correctly", () => {
  it("when no props", () => {
    expect(<SortBy />).toMatchSnapshot();
  });

  it("when props with default option", () => {
    const props = {
        default: 'DATE'
    };

    expect(<SortBy {...props} />).toMatchSnapshot();
  });
});
