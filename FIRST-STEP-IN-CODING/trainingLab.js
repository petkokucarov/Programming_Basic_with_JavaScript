function trainingLab(input) {

    let lenght = parseFloat(input[0]);
    let weight = parseFloat(input[1]);

    let hallLenght = lenght * 100;
    let hallWeight = (weight * 100) - 100;

    let desks = Math.floor(hallWeight / 70);
    let rows = Math.floor(hallLenght / 120);

    let places = desks * rows - 3;

    console.log(places);
}

trainingLab(["8.4", "5.2"]);