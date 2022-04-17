let Extent = function (number1) {
  function func(number2) {
    if (number2 == 0) {
      console.log("1");
    } else if (number1 == null || number1 == "" || number2 == null || number2 == "" || isNaN(number1) || isNaN(number2)) {
      console.log("incorrect input");
    } else {
      console.log(number1, number1 ** number2);
    }
  }
  return func;
};
Extent(6)();