/**
 * find cheapest price from objects
 */

const phones = [
    { name: 'samsung', price: 20000, camera: '45px', color: 'black' },
    { name: 'xaomi', price: 18000, camera: '45px', color: 'black' },
    { name: 'Oppo', price: 30000, camera: '45px', color: 'black' },
    { name: 'iphone', price: 100000, camera: '45px', color: 'black' },
    { name: 'walton', price: 31000, camera: '45px', color: 'black' },
    { name: 'htc', price: 27000, camera: '45px', color: 'black' },
]

function getCheapestPhone(phones) {
    let cheap = phones[0];
    for (const phone of phones) {
        if (phone.price < cheap.price) {
            cheap = phone;
        }
    }
    return cheap;
}


const cheapPrice = getCheapestPhone(phones);
console.log(cheapPrice);