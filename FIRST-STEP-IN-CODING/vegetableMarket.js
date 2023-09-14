function vegetableMarket(input) {

    let priceVegetables = parseFloat(input[0]);
    let priceFruit = parseFloat(input[1]);
    let vegetables = parseInt(input[2]);
    let fruit = parseInt(input[3]);

    let allVegetables = priceVegetables * vegetables;
    let allFruit = priceFruit * fruit;
    let sum = (allVegetables + allFruit) / 1.94;

    console.log(sum.toFixed(2));
}

vegetableMarket(["0.194", "19.4", "10", "10"]);