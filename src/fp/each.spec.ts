import _ from "..";

describe("each", () => {
  it("Should return first argument -> first argument: Array.isArray, second argument: typeof function", () => {
    const list = [1,2,3];
    const fn = (list) => console.log(list);
    const returned = _.each(list, fn);
    expect(returned).toBe(list);
  })

  it("Should return first argument => first argument: Record<string,any>, second argument: typeof function", () => {
    const records = {
      one: 1,
      two: 2,
      three: 3,
    }; 
    const fn = (list) => console.log(list);
    const returned = _.each(records,fn);
    expect(returned).toBe(records);
  });
})