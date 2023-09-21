function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishMan = Number(input[2]);

    let rent;

    if (season == "Spring") {
        rent = 3000;
    } else if (season == "Summer" || season == "Autumn") {
        rent = 4200;
    } else {
        rent = 2600;
    }

    
    if (fishMan <= 6) {
        rent = rent - (rent * 0.10);
    } else if (fishMan > 6 && fishMan <= 11) {
        rent = rent - (rent * 0.15);
    } else {
        rent = rent - (rent * 0.25);
    }


    if (fishMan % 2 == 0 && season !== "Autumn") {
        rent = rent - (rent * 0.05);
    }
    

    if (budget >= rent) {
        console.log(`Yes! You have ${(budget - rent).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(rent - budget).toFixed(2)} leva.`);
    }
}

fishingBoat(["3000",

"Summer",

"11"]);