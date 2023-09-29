function tennisRanklist(input) {

    let tournirs = Number(input[0]);
    let startPoints = Number(input[1]);

    let win = 0;
    let points = startPoints;

    for (let index = 2; index <= tournirs + 1; index++) {


        let rank = input[index];

        if (rank == "W") {
            points += 2000;
            win++;
        } else if (rank == "F") {
            points += 1200;
        } else if (rank == "SF") {
            points += 720;
        }
    }

    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor((points - startPoints) / tournirs)}`);
    console.log(`${(win / tournirs * 100).toFixed(2)}%`);
}

tennisRanklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"]);