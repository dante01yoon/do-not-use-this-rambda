import _if from "./if";

function sub(a, b) {
  return a - b;
}

const diff = _if(
  function (a, b) {
    return a >= b;
  },
  sub,
  function (a, b) {
    return sub(b, a);
  }
);

export default diff;
