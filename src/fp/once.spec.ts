import once from "./once";

describe("once", () => {
  // @ts-ignore
  console.log = jest.fn();
  it("second call shouldn't be console.log A", () => {
    var a = once(function () {
      console.log("A");
      return "B";
    });
    expect(a()).toBe("B");
    expect(a()).toBe("B");
    expect(console.log).toHaveBeenCalledTimes(1);
  });
});
