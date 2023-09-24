function newHouse(input) {
    let flowers = input[0];
    let numberOfFlowers = Number(input[1]);
    let budget = Number(input[2]);

    let sumForFlowers;

    if (flowers == "Roses") {
        sumForFlowers = numberOfFlowers * 5;
            if (numberOfFlowers > 80) {
                sumForFlowers = sumForFlowers - (sumForFlowers * 0.10);
            }
    } else if (flowers == "Dahlias") {
        sumForFlowers = numberOfFlowers * 3.8;
            if (numberOfFlowers > 90) {
                sumForFlowers = sumForFlowers - (sumForFlowers * 0.15);
            }
    } else if (flowers == "Tulips") {
        sumForFlowers = numberOfFlowers * 2.8;
            if (numberOfFlowers > 80) {
                sumForFlowers = sumForFlowers - (sumForFlowers * 0.15);
            }
    } else if (flowers == "Narcissus") {
        sumForFlowers = numberOfFlowers * 3;
            if (numberOfFlowers < 120) {
                sumForFlowers = sumForFlowers + (sumForFlowers * 0.15);
            }
    } else if (flowers == "Gladiolus") {
        sumForFlowers = numberOfFlowers * 2.5;
            if (numberOfFlowers < 80) {
                sumForFlowers = sumForFlowers + (sumForFlowers * 0.20);
    }
}

    if (budget >= sumForFlowers) {
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowers} and ${(budget - sumForFlowers).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(sumForFlowers - budget).toFixed(2)} leva more.`);
    }
}

newHouse(["Narcissus", "119", "360"]);