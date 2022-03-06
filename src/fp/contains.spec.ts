import { contains } from "./contains";

describe("contains", () => {
  it("Should return true", () => {
    const list = [1, 2, 3];
    const item = 1;

    expect(contains(list, item)).toBe(true);
  });

  it("Should return false", () => {
    const list = [1, 2, 3];
    const item = 4;

    expect(contains(list, item)).toBe(false);
  });
});
