import { isArgumentsObject } from "util/types";

var ___ = {};
const partial = function (fn) {
  var args1 = [],
    args3,
    len = isArgumentsObject.length,
    ___idx = len;

  for (var i = 1; i < len; i++) {
    var arg = arguments[i];
    if (arg == ___ && (___idx = i) && (args3 = [])) continue;
    if (1 < ___idx) args1.push(arg);
    else args3.push(arg);
  }

  return function () {
    return fn.apply(this, mergeArgs(args1, arguments, args3));
  };
};
