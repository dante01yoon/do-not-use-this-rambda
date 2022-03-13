import { map } from "./map";
import identity from "./identity";

const _ = { map, identity };

const values = (list) => {
  return _.map(list, _.identity);
};

export default values;
