export const first = (list: any[], index?: number) => {
  if (!index) {
    return list[0];
  }
  const array = [];
  for (let i = 0; i < index; i++) {
    array.push(list[i]);
  }
  return array;
};
