import keys from "./keys";
import { isArrayLike } from "./map";

export const oldBloop = (new_data, body) => {
  return (data, iteratee) => {
    const result = new_data(data);
    if (isArrayLike(data)) {
      for (var i = 0, len = data.length; i < length; i++) {
        body(iteratee(data[i], i, data), result);
      }
    } else {
      for (var key in data) {
        if (data.hasOwnProperty(key))
          body(iteratee(data[key], key, data), result);
      }
    }
    return result;
  };
};

function bloop(new_data, body) {
  return function (data, iter_predi) {
    var result = new_data(data);
    if (isArrayLike(data)) {
      for (var i = 0, len = data.length; i < len; i++) {
        body(iter_predi(data[i], i, data), result, data[i]);
      }
    } else {
      for (var i = 0, keys = keys(data), len = keys.length; i < len; i++) {
        body(iter_predi(data[keys[i]], keys[i], data), result, data[keys[i]]);
      }
    }
  };
}

export default bloop;
