import { isArray } from "./";

export const contains = (list: any[], value: any) => {
  if (isArray(list)) {
    return list.includes(value);
  } else {
    throw Error("list is not an array");
  }
};
