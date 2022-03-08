import { map } from "./map";

const _ = { map };
describe("map", () => {
  it("[5,10,15] should be return", () => {
    const iteratee = (data) => {
      return data * 5;
    };
    expect(_.map([1, 2, 3], iteratee)).toMatchObject([5, 10, 15]);
  });

  it("[5,10,15] should be return when using bind", () => {
    const iteratee = function (data) {
      return data * this;
    };
    expect(_.map([1, 2, 3], iteratee.bind(5))).toMatchObject([5, 10, 15]);
  });
});
