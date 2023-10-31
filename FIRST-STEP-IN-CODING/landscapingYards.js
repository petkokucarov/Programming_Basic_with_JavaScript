function landscapingYards(input) {
    let area = Number(input[0]);
    let finalPrice = area * 7.61;
    let discount = finalPrice * 0.18;

    console.log(`The final price is: ${finalPrice - discount} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

landscapingYards(["550"]);