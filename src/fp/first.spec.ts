import { first } from "./first";

describe("first", () => {
  it("should return first item", () => {
    const list = [1, 2, 3, 4, 5];
    expect(first(list)).toBe(1);
  });

  it("should return [1,2,3]", () => {
    const list = [1, 2, 3, 4, 5];
    expect(first(list, 3)).toMatchObject([1, 2, 3]);
  });
});
