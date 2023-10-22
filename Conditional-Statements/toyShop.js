function toyShop(input) {
    let price = Number(input[0]);
    let puzzleNum = Number(input[1]);
    let dollNum = Number(input[2]);
    let bearNum = Number(input[3]);
    let minnionNum = Number(input[4]);
    let trackNum = Number(input[5]);

    let puzzlePrice = puzzleNum * 2.60;
    let dollPrice = dollNum * 3;
    let bearPrice = bearNum * 4.10;
    let minnionPrice = minnionNum * 8.20;
    let trackPrice = trackNum * 2;

    let sum = puzzlePrice + dollPrice + bearPrice + minnionPrice + trackPrice;

    if(puzzleNum + dollNum + bearNum + minnionNum + trackNum >= 50) {
        sum = sum * 0.75;
    }

    sum = sum * 0.9;

    if(sum >= price) {
        let diff = (sum - price).toFixed(2);
        console.log(`Yes! ${diff} lv left.`);
    } else {
        let diff = (Math.abs(sum - price)).toFixed(2);
        console.log(`Not enough money! ${diff} lv needed.`);
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);