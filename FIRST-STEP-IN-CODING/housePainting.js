function housePainting(input) {

    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let sideWall = x * y;
    let window = 1.5 * 1.5;
    let twoWall = (2 * sideWall) - (2 * window);
    let backWall = x * x;
    let door = 1.2 * 2;
    let frontBachWall = (2 * backWall) - door;
    let allWall = twoWall + frontBachWall;
    let greenPaint = allWall / 3.4;

    let twoReactangle = 2 * (x * y);
    let twoTriangle = x * h;
    let roof = twoReactangle + twoTriangle;
    let redPaint = roof / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}

housePainting(["6", "10", "5.2"]);