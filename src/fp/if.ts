const _: Record<string, any> = {};

_.if = function (validator, func, alter) {
  return function () {
    return validator.apply(null, arguments)
      ? func.apply(null, arguments)
      : alter && alter.apply(null, arguments);
  };
};

export default _.if;
