import keys from "./keys";

const _ = { keys };

describe("keys", () => {
  it("should be return [0, 1, 2]", () => {
    expect(_.keys([3, 2, 1])).toMatchObject([0, 1, 2]);
  });

  it("should be return ['id', 'name', 'age']", () => {
    expect(_.keys({ id: 5, name: "JE", age: 27 })).toMatchObject([
      "id",
      "name",
      "age",
    ]);
  });
});
