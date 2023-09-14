function fishland(input) {
    let priceMackerel = parseFloat(input[0]);
    let priceTsatsa = parseFloat(input[1]);
    let palamud = parseFloat(input[2]);
    let safrid = parseFloat(input[3]);
    let mussels = parseInt(input[4]);

    let pricePalamud = priceMackerel + priceMackerel * 0.60;
    let sumPalamud = palamud * pricePalamud;
    let priceSafrid = priceTsatsa + priceTsatsa * 0.80;
    let sumSafrid = safrid * priceSafrid;
    let sumMussels = mussels * 7.50;

    let bill = sumPalamud + sumSafrid + sumMussels;

    console.log(bill.toFixed(2));
}

fishland(["6.90", "4.20", "1.5", "2.5", "1"]);