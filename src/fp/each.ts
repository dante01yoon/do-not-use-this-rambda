export const each = (
  arrayLike: any,
  fn: (val, idx: number, list: any) => void
) => {
  if (typeof fn !== "function") {
    throw Error("typeof fn is not a function");
  }

  let index = 0;

  try {
    if (arrayLike.constructor === Object) {
      for (let [key] of Object.entries(arrayLike)) {
        fn(key, index++, arrayLike);
      }
    } else {
      for (let value of arrayLike) {
        fn(value, index++, arrayLike);
      }
    }
    return arrayLike;
  } catch (e) {
    // Uncaught TypeError: f is not iterable
    throw Error(e);
  }
};
