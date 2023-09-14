function yardGreening(input) {
    let squareMeters = parseFloat(input[0]);

    let price = squareMeters * 7.61;
    let dicount = price * 0.18;

    console.log(`The final price is: ${price - dicount} lv.`);
    console.log(`The discount is: ${dicount} lv.`);
}

yardGreening(["150"]);