function coins(input) {

    let change = Number(input[0]);
    let sant = Math.floor(change * 100);
    let monets = 0;

    while (sant > 0) {

        if (sant >= 200) {
            sant -= 200;
            monets++;
        } else if (sant >= 100) {
            sant -= 100;
            monets++;
        } else if (sant >= 50) {
            sant -= 50;
            monets++;
        } else if (sant >= 20) {
            sant -= 20;
            monets++;
        } else if (sant >= 10) {
            sant -= 10;
            monets++;
        } else if (sant >= 5) {
            sant -= 5;
            monets++;
        } else if (sant >= 2) {
            sant -= 2;
            monets++;
        } else if (sant >= 1) {
            sant -= 1;
            monets++;
        }
    }

    console.log(monets);

}

coins(["0.59"]);