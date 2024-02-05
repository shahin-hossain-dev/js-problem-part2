/* 
 Simple Calculator
*/

function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please give number';
    }
    else {
        return num1 + num2;
    }

}

function substract(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please give number';
    }
    return num1 - num2;
}

function multiply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please give number';
    }
    return num1 * num2;
}
function divide(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please give number';
    }
    return num1 / num2;
}

function calculator(num1, num2, operation) {
    if (operation === 'add') {
        return add(num1, num2);
    }
    else if (operation === 'substract') {
        return substract(num1, num2);
    }
    else if (operation === 'multiply') {
        return multiply(num1, num2);
    }
    else if (operation === 'divide') {
        return divide(num1, num2);
    }
    else {
        return "only allow 'add' 'substract', 'multiply' and 'divide' ";
    }
}

const result = calculator(5, 10, 'multiply');
console.log(result);