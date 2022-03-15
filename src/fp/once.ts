const once = function (func) {
  var flag, result;
  return function () {
    if (flag) return result;
    flag = true;
    return (result = func.apply(this, arguments));
  };
};

const _ = {
  once,
};

export default _.once;
