function depositCalc(input) {
    let depositSum = Number(input[0]);
    let depositTerm = Number(input[1]);
    let interesRate = Number(input[2]);

    let term = depositSum * (interesRate / 100);
    let termForMonth = term / 12;
    let totalSum = depositSum + depositTerm * termForMonth;

    console.log(totalSum.toFixed(2));

}

depositCalc(["2350", "6", "7"]);