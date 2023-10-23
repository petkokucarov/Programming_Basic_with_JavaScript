function aquarium(input) {

    let depth = Number(input[0]);
    let width = Number(input[1]);
    let hight = Number(input[2]);
    let percentage = Number(input[3]);

    let volume = depth * width * hight;
    let allLitres = volume * 0.001;
    let allPercentage = percentage * 0.01;
    let totalLiters = allLitres * (1 - allPercentage);

    console.log(totalLiters);
}

aquarium(["105", "77", "89", "18.5"]);