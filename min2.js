/**
 * 
 * Lowest price phone 
 * 
 */

const prices = [16000, 19900, 21000, 12000, 28000, 30000, 100000, 35000];

function getMin(numbers) {
    let cheapPrice = numbers[0];
    for (const price of numbers) {
        if (price < cheapPrice) {
            cheapPrice = price;
        }
    }
    return cheapPrice;
}


const cheap = getMin(prices);

console.log('cheapest one is', cheap)