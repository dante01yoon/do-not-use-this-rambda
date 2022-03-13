import array from "./array";
import bloop from "./bloop";
import identity from "./identity";
import { noop } from "./noop";

const _: Record<string, any> = {
  args0: identity,
  args1: function (a, b) {
    console.log("typeof a:", typeof a);
    return b;
  },
};

_.map = bloop(array, pushTo);

const keys = (list) => {
  return _.map(list, _.args1);
};

export default keys;
