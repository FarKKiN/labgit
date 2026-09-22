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

function setNumbers(a: number, b: number) {
    num1 = a;
    num2 = b;
    console.log(`Числа установлены: ${num1} и ${num2}`)
};

function add(a: number, b: number): number {
    return a + b;
};

function subtract(a: number, b: number): number {
    return a - b;
};


function divide(a: number, b: number): number {
    if (b === 0) {
        console.log("делить на ноль нельзя");
        return 0;
    }
    return a / b;
};


function power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
}
