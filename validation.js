/**
 * Validation
 */

function multiply(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please Provide a number'
    }
    const mult = num1 * num2;
    return mult;
}

const result = multiply(2, 'seven');
// console.log(result);


function fullName(first, last) {
    if (typeof first !== 'string' || typeof last !== 'string') {
        return 'name should be a String'
    }
    const name = first + ' ' + last;
    return name;
}

const name = fullName('Shahin', 12);

// console.log(name)

function getPrice(product) {
    if (typeof product !== 'object') {
        return 'product should be a object'
    }
    return product.price;
}

const productPrice = getPrice({ name: 'Bottle', price: 100, color: 'light green' })

// console.log(getPrice(2))
// console.log(productPrice)

function getSecond(numbers) {
    if (Array.isArray(numbers) === false) {
        return 'Please Provide an array'
    }
    return numbers[1];
}

const second = getSecond('[1, 2, 3]');
console.log(second);