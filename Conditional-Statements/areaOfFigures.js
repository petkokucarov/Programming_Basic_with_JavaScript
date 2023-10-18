function areaOfFigures(input){
    let type = input[0];
    let area = 0;

    if(type == "square") {
        let a = Number(input[1]);
        area = a * a;
    } else if(type == "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        area = a * b;
    } else if(type == "circle") {
        let a = Number(input[1]);
        area = Math.PI * a * a;
    } else if(type == "triangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        area = (a * b) / 2;
    }

    console.log(area.toFixed(3));
}

areaOfFigures(["rectangle", "7", "2.5"]);