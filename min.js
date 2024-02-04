// Mini 


function getMin(numbers) {
    let min = numbers[0];
    for (const element of numbers) {
        if (element < min) {
            min = element;
        }
    }
    return min;
}

const heights = [50, 80, 60, 45, 62, 68, 65, 70];

const result = getMin(heights);

console.log(result)