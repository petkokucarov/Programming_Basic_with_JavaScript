function fishTank(input) {
    let lenght = parseInt(input[0]);
    let width = parseInt(input[1]);
    let height = parseInt(input[2]);
    let percent = parseFloat(input[3]);

    let volume = lenght * width * height;
    let volumeLitres = volume * 0.001;
    let occupiedSpace = percent / 100;
    let needLitres = volumeLitres * (1 - occupiedSpace);

    console.log(needLitres);
}

fishTank(["85", "75", "47", "17"]);