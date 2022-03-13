import { isArrayLike } from "./map";

const each = (data, iteratee) => {
  if (isArrayLike(data)) {
    for (var i = 0, len = data.length; i < len; i++) {
      iteratee(data[i], i, data);
    }
  } else {
    for (var key in data) {
      if (data.hasOwnProperty(key)) iteratee(data[key], key, data);
    }
  }
  return data;
};

export default each;
