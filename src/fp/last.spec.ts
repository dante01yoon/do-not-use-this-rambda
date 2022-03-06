import { last } from "./last";

describe("last", () => {
  it("should return 1", () => {
    const list = [1, 2, 3, 4, 5];
    expect(last(list)).toBe(5);
  });

  it("should return [3,4,5]", () => {
    const list = [1, 2, 3, 4, 5];
    expect(last(list, 3)).toMatchObject([3, 4, 5]);
  });
});
