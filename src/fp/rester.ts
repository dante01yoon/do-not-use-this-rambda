import rest from "./rest";

const rester = (func, num?: number) => {
  return function () {
    return func.apply(null, rest(arguments, num));
  };
};

export default rester;
