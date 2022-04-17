let Divided = function (number) {
    if (number == null || number == "" || isNaN(number)) {
        console.log("incorrect input");
        for (let i = 1; i <= number; i++) {
            if (number % i == 0) {
                console.log(i);
            }
        }
    }
}
Divided();