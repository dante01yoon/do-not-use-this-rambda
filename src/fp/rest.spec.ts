import rest from "./rest";

describe("rest", () => {
  it("[2,3] should be returned", () => {
    expect(rest([1, 2, 3])).toMatchObject([2, 3]);
  });

  it("[100, 1000] should be returned", () => {
    expect(rest({ 0: 1, 1: 10, 2: 100, 3: 1000, length: 4 }, 2)).toMatchObject([
      100, 1000,
    ]);
  });
});
