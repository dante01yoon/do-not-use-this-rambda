const skip = function (body) {
  var yes;
  return function () {
    return yes || (yes = body.apply(null, arguments));
  };
};

export default skip;
