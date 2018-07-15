import React from "react";
import SearchList from "./searchList";

describe("SearchList component renders correctly", () => {
  it("when no props", () => {
    expect(<SearchList />).toMatchSnapshot();
  });

  it("when props with 1 item", () => {
    const props = {
      results: {
        Search: [{ imdbID: "1" }]
      }
    };

    expect(<SearchList {...props} />).toMatchSnapshot();
  });

  it("when props with 2 items", () => {
    const props = {
      results: {
        Search: [{ imdbID: "1" }, { imdbID: "2" }]
      }
    };

    expect(<SearchList {...props} />).toMatchSnapshot();
  });

  it("when error", () => {
    const props = {
      results: {
        Error: "An error occured"
      }
    };

    expect(<SearchList {...props} />).toMatchSnapshot();
  });
});
