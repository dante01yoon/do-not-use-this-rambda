export const pluck = (list: any, key: string) => {
  const refined = [];

  for (let item of list) {
    if (item[key]) {
      refined.push(item[key]);
    }
  }

  return refined;
};
