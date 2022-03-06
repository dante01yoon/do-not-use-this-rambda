export const isArray = (list: any) => {
  return typeof Array.isArray !== "undefined"
    ? Array.isArray(list)
    : Object.prototype.toString.call(list) === "[object Array]";
};
