function toyShop (input) {

    let priceExcursion = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let tracks = Number(input[5]);

    let price = puzzles * 2.60 + dolls * 3 + bears * 4.10 + minions * 8.20 + tracks * 2;
    let toys = puzzles + dolls + bears + minions + tracks;

    if (toys >= 50) {
        price = price - (price * 0.25);
    }

    let rent = price * 0.10;
    let win = price - rent;

    if (win >= priceExcursion) {
        console.log(`Yes! ${(win - priceExcursion).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(priceExcursion - win).toFixed(2)} lv needed.`);
    }
    
}

toyShop(["320", "8", "2", "5", "5", "1"]);