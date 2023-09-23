function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let where;
    let allMoney;
    let kindOfVacation;

    if (budget <= 100) {
        where = "Bulgaria";
        if (season == "summer") {
            allMoney = budget * 0.30;
        } else {
            allMoney = budget * 0.70;
        }
    } else if (budget > 100 && budget <= 1000) {
        where = "Balkans";
        if (season == "summer") {
            allMoney = budget * 0.40;
        } else {
            allMoney = budget * 0.80;
        }
    } else {
        where = "Europe";
        allMoney = budget * 0.90;
    }


    if (season == "winter" || where == "Europe") {
        kindOfVacation = "Hotel";
    } else if (season == "summer") {
        kindOfVacation = "Camp";
    }

    console.log(`Somewhere in ${where}`);
    console.log(`${kindOfVacation} - ${(allMoney).toFixed(2)}`);
}

journey(["1500", "summer"]);