export const negate = (func) => {
  return function (args: any[]) {
    return !func.apply(this, args);
  };
};
