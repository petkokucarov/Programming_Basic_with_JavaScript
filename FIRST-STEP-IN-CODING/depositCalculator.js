function depositCalculator(input) {
    let depositSum = parseFloat(input[0]);
    let depositTerm = parseInt(input[1]);
    let yearInterestRate = parseFloat(input[2]);

    let term = depositSum * (yearInterestRate / 100);
    let monthTerm = term / 12;

    let sum = depositSum + depositTerm * monthTerm;

    console.log(sum);
}

depositCalculator(["2350", "6", "7"]);