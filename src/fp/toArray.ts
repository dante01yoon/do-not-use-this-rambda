import values from "./values";

const toArray = function (list) {
  return Array.isArray(list) ? list : values(list);
};

export default toArray;
