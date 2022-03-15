const mr = function () {
  arguments._mr = true;
  return arguments;
};

export default mr;
