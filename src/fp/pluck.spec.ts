import _ from "..";

const users = [
  { id: 1, name: "ID", age: 32 },
  { id: 2, name: "HA", age: 25 },
  { id: 3, name: "BJ", age: 32 },
  { id: 4, name: "PJ", age: 28 },
  { id: 5, name: "JE", age: 27 },
  { id: 6, name: "JM", age: 32 },
  { id: 7, name: "HI", age: 24 },
];

describe("pluck", () => {
  it("return value should be ['ID', 'HA', 'BJ', 'PJ', 'JE', 'JM', 'HI']", () => {
    expect(_.pluck(users, "name")).toMatchObject([
      "ID",
      "HA",
      "BJ",
      "PJ",
      "JE",
      "JM",
      "HI",
    ]);
  });
});
