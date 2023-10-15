function braceletStand(input) {

    let money = Number(input[0]);
    let moneyForDay = Number(input[1]);
    let expense = Number(input[2]);
    let giftPrise = Number(input[3]);

    let saveMoney = 5 * money;
    let winMoney = 5 * moneyForDay;
    let allMoney = saveMoney + winMoney;

    let needMoney = allMoney - expense;

    if (needMoney >= giftPrise) {
        console.log(`Profit: ${needMoney.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        console.log(`Insufficient money: ${(giftPrise - needMoney).toFixed(2)} BGN.`);
    }
}

braceletStand(["2.10",
    "17.50",
    "20.20",
    "148.50"]);