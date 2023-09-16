function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let dress = Number(input[2]);

    let decor = budget * 0.10;
    let sumDress = statists * dress;

    if (statists > 150) {
        let discount = sumDress * 0.10;
        sumDress = sumDress - discount;
    }

    if ((decor + sumDress) > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${((decor + sumDress) - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - (decor + sumDress)).toFixed(2)} leva left.`);
    }
}

godzillaVsKong(["9587.88",

"222",

"55.68"]);