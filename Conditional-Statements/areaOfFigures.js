function areaOfFigures(input) {
    let figures = input[0];
    let result = 0;

    if (figures === "square") {
        let a = Number(input[1]);
        result = a * a;
        console.log(result.toFixed(3));
    } else if (figures === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        result = a * b;
        console.log(result.toFixed(3));
    } else if (figures === "circle") {
        let r = Number(input[1]);
        result = Math.PI * (Math.pow(r, 2));
        console.log(result.toFixed(3));
    } else {
        let a = Number(input[1]);
        let h = Number(input[2]);
        result = (a * h) / 2;
        console.log(result.toFixed(3));
    }
}

areaOfFigures(["triangle", "4.5", "20"]);