import { isArrayLike } from "./map";

const bloop = (new_data, body) => {
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

export default bloop;
