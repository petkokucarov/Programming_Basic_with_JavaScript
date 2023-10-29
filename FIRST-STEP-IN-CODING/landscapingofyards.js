function landscaping(input) {
    let meters = Number(input[0]);
    let price = meters * 7.61;
    let dicount = price * 0.18;
    let endPrice = price - dicount;

    console.log(`The final price is: ${endPrice} lv.`);
    console.log(`The discount is: ${dicount} lv.`);

}

landscaping([150]);