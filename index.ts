function showMenu() {
    console.log("Меню");
    console.log("1. Ввести два числа");
    console.log("2. Выполнить сложение");
    console.log("3. Выполнить вычитание");
    console.log("4. Выполнить деление");
    console.log("5. Возвести число в степень");
}

let num1: number = 0;
let num2: number = 0;

showMenu();

function power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
}