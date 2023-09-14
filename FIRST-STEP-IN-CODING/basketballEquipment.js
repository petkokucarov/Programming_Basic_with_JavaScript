function basketballEquipment(input) {

    let yearTax = parseInt(input[0]);

    let sneakers = yearTax - (yearTax * 0.4);
    let team = sneakers - (sneakers * 0.2);
    let ball = team / 4;
    let accessories = ball / 5;
    let price = yearTax + sneakers + team + ball + accessories;

    console.log(price);
}

basketballEquipment(["550"]);