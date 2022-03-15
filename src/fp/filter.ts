import array from "./array";
import bloop from "./bloop";
import each from "./each";
import identity from "./identity";
import iff from "./if";
import push from "./push";
import rester from "./rester";
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

_.filterNew = bloop(array, iff(identity, rester(push)));

export default _.filter;
