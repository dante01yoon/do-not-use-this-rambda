import _ from "..";

describe("isArray", () => {
  it("should be passed if Array.isArray is exist", () => {
    expect(_.isArray([])).toBeTruthy();
  });
  it("should be passed if Array.isArray is not exist", () => {
    Array.isArray = undefined;
    expect(_.isArray([])).toBeTruthy();
  });
});
