const math = (number, string) => {
  if (string == 'factorial' && number % 1 == 0) {
    for (let i = number - 1; i > 0; i--) {
      number *= i;
    }
    console.log(number);
  } else if (string == 'square' && number % 1 == 0) {
    let square = number ** 2;
    console.log(square);
  } else if (string == 'abs' && number % 1 == 0) {
    if (number >= 0) {
      console.log(number);
    } else {
      console.log(number * -1);
    }
  } else {
    console.log('Incorrect input');
  }
};
math(4, 'square');