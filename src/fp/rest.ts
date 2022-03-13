import toArray from "./toArray";

const rest = function (list, num?: number) {
  return toArray(list).slice(num || 1);
};

export default rest;
