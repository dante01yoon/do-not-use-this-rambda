export const last = (list: any[], index?: number) => {
  const lastIndex = list.length ? list.length - 1 : 0;
  if (!index) {
    return list[lastIndex];
  }

  const array = [];

  for (let i = 0; i < index; i++) {
    array.unshift(list[lastIndex - i]);
  }
  return array;
};
