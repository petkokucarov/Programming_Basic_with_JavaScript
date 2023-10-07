function vacation(input) {
    let needMoney = Number(input[0]);
    let realMoney = Number(input[1]);
    let index = 2;

    let spendDays = 0;
    let allDays = 0;

    while (realMoney < needMoney) {

        let action = input[index];
        index++;
        let sum = Number(input[index]);
        index++;

        if (action === "spend") {
            realMoney = realMoney - sum;
            spendDays++;
            allDays++;

            if (realMoney < 0) {
                realMoney = 0;
            }

        } else if (action === "save") {
            realMoney = realMoney + sum;
            spendDays = 0;
            allDays++;
        }

        if (spendDays >= 5) {
            console.log(`You can't save the money.`);
            console.log(allDays);
            break;
        }
    }

    if (needMoney <= realMoney) {
        console.log(`You saved the money for ${allDays} days.`);
    }
}

vacation(["110",

"60",

"spend",

"10",

"spend",

"10",

"spend",

"10",

"spend",

"10","spend", "10"]);