function foodDelivery(input) {
    let chickens = parseInt(input[0]);
    let fish = parseInt(input[1]);
    let vegetarian = parseInt(input[2]);

    let chickensPrice = chickens * 10.35;
    let fishPrice = fish * 12.40;
    let vegetarianPrice = vegetarian * 8.15;
    let sumMenue = chickensPrice + fishPrice + vegetarianPrice;
    let desertPrice = sumMenue * (20 / 100);
    let delivery = 2.50;
    let sum = sumMenue + desertPrice + delivery;

    console.log(sum);
}

foodDelivery(["2", "4", "3"]);