export type MapIteratee<T> = (
  item: T,
  index: number | string,
  list: T[]
) => any;

const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

const getLength = (list) => {
  return list === null ? void 0 : list.length;
};

export const isArrayLike = (list) => {
  const length = getLength(list);
  return typeof length === "number" && length >= 0 && length <= MAX_ARRAY_INDEX;
};

export const map = (data, iteratee: MapIteratee<typeof data[0]>) => {
  const new_list = [];

  if (isArrayLike(data)) {
    for (var i = 0, len = data.length; i < len; i++) {
      new_list.push(iteratee(data[i], i, data));
    }
  } else {
    for (var key in data) {
      if (data.hasOwnProperty(key))
        // prototype에 있는 값을 제외함
        new_list.push(iteratee(data[key], key, data));
    }
  }
  return new_list;
};
