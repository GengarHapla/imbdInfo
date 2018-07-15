import { SORT_ACTION, sort } from "./sortActions";

describe("sortActions", () => {
  it("should create an action to sort", () => {
    const payload = "Text to search";
    const expectedAction = {
      type: SORT_ACTION,
      payload
    };
    expect(sort(payload)).toEqual(expectedAction);
  });
});
