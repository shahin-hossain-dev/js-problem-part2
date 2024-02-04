/* 
-> Use Add And Multiplication To Calculate Wood Requirements

-> chair 10 cft;
-> table  10cft;
-> bed 50cft;
*/

function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood

    return totalWood;

}

const totalWood = woodQuantity(3, 1, 1);

console.log(totalWood);


/**
 * shirt -> 500
 * pant -> 700
 * shoe -> 900 
 */

function shoppingQuantity(shirtQuantity, pantQuantity, shoeQuantity) {
    const perShirt = 500;
    const perPant = 700;
    const perShoe = 900;

    const shirtTotalPrice = shirtQuantity * perShirt;
    const pantTotalPrice = pantQuantity * perPant;
    const shoeTotalPrice = shoeQuantity * perShoe;

    const totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;

    return totalPrice;
}

console.log(shoppingQuantity(1, 1, 1))