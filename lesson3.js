const matrix = function (letter, number) {
  if (number > 0) {

    let b = "";
    for (let i = 0; i < number; i++) {
      for (let g = 0; g < number; g++) {
        b += `${letter} `;
        if (g == number - 1) {
          b += "\n";
        }
      }
    }
    console.log(b);
  } else {
    console.log('Incorrect input');
  }
};
matrix("Cavid", 3);