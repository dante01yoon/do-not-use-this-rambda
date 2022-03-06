export const reject = (list: any[], predicate: (item: any) => boolean) => {
  if (!Array.isArray) {
    throw Error("list is not Array");
  }

  const new_list = [];

  try {
    for (let item of list) {
      if (!predicate(item)) {
        new_list.push(item);
      }
    }
    return new_list;
  } catch (e) {
    throw Error(e);
  }
};
