import values from "./values";

const _ = {
  values,
};

describe("values", () => {
  it("[5, 'JE', 27] should be return", () => {
    expect(_.values({ id: 5, name: "JE", age: 27 })).toMatchObject([
      5,
      "JE",
      27,
    ]);
  });
});
