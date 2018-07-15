import React from "react";
import ListItem from "./listItem";

describe("ListItem component renders correctly", () => {
  it("when no props", () => {
    expect(<ListItem />).toMatchSnapshot();
  });

  it("when props with default values", () => {
    const props = {
      Title: 'Title',
      Year: 1,
      Type: 'type',
      imdbID: 'id1'
    };

    expect(<ListItem {...props} />).toMatchSnapshot();
  });
});
