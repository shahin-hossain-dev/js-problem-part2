/* 
------------> Find Tallest <--------------
*/

function getMax(numbers) {
    let result = numbers[0];
    for (const element of numbers) {
        if (element > result) {
            result = element;
        }
    }
    return result;
}

const heights = [50, 80, 60, 62, 68, 65, 70];

const result = getMax(heights);

console.log(result)