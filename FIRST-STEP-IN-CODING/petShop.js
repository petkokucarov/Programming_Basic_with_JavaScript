function petShop(input) {
    let dogFood = parseInt(input[0]);
    let catFood = parseInt(input[1]);

    let sumDogFood = dogFood * 2.50;
    let sumCatFood = catFood * 4;

    let sum = sumDogFood + sumCatFood;

    console.log(sum);
}

petShop(["5", "4"]);