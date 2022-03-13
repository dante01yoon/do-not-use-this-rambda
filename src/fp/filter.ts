import array from "./array";
import bloop from "./bloop";
import each from "./each";
const _: Record<string, any> = { each };

_.oldFilter = function (data, predicate) {
  var result = [];
  for (let i = 0, length = data.length; i < length; i++) {
    if (predicate(data[i], i, data)) result.push(data[i]);
  }
  return result;
};

_.filter = bloop(array, function (bool, result, val) {
  if (bool) result.push(val);
});

export default _.filter;
