function cleverLily(input) {

    let lilysAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let toyCounter = 0;
    let stolenMoney = 0;
    let savedMoney = 0;
    let savedMoneyCounter = 0;

    for (let currentBday = 1; currentBday <= lilysAge; currentBday++) {
        if (currentBday % 2 === 0) {
            savedMoney += 10 + savedMoneyCounter;
            stolenMoney++;
            savedMoneyCounter += 10;
        } else {
            toyCounter++;
        }
    }
    let totalMoneyFromToys = toyCounter * toyPrice;
    let totalSavedMoney = totalMoneyFromToys + savedMoney - stolenMoney;

    if (totalSavedMoney >= washingMachinePrice) {
        console.log(`Yes! ${(totalSavedMoney - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - totalSavedMoney).toFixed(2)}`);
    }
}

cleverLily(["21",

    "1570.98",

    "3"]);