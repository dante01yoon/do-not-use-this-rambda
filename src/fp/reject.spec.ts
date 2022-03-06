import _ from "..";

describe("reject", () => {
  it("should return odd numbers", () => {
    const list = [1, 2, 3, 4, 5, 6];
    const predicate = (number) => number % 2 === 0;
    expect(_.reject(list, predicate)).toMatchObject([1, 3, 5]);
  });

  it("return list shouldn't be same with original list", () => {
    const list = [1, 2, 3, 4, 5, 6];
    const predicate = (number) => number % 2 === 0;
    expect(_.reject(list, predicate)).not.toStrictEqual(list);
  });
});
