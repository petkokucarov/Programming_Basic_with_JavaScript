function cinema(input) {
    let projection = input[0];
    let row = Number(input[1]);
    let col = Number(input[2]);

    let income = 0;

    if (projection == "Premiere") {
        income = ((row * col) * 12.00)
    } else if (projection == "Normal") {
        income = ((row * col) * 7.50);
    } else {
        income = ((row * col) * 5.00);
    }

    console.log(`${income.toFixed(2)} leva.`);
}

cinema(["Normal", "21", "13"]);