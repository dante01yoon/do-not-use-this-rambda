import filter from "./filter";

describe("filter", () => {
  it("[3,4] should be returned", () => {
    filter([1, 2, 3, 4], function (val) {
      return val > 2;
    });
  });

  it("[3,4] should be returend", () => {
    var obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
    };

    expect(
      filter(obj, function (val) {
        return val > 2;
      })
    ).toMatchObject([3, 4]);
  });
});
