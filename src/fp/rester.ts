import rest from "./rest";

const rester = (func, num) => {
  return function () {
    return func.apply(null, rest(arguments, num));
  };
};

export default rester;
