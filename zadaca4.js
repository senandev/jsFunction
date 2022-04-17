//4. Напишите функцию, которая принимает число и в ответ выводит в консоль, четное оно или нет
function Math(number) {
    if (number % 2 == 0) {
        console.log(number, 'is an even number ');
    } else {
        console.log(`${number}odd number`);
    }
}

Math(-2);