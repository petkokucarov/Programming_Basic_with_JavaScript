function oscars(input) {

    let actorName = input[0];
    let academyPoints = Number(input[1]);
    let evaluative = Number(input[2]);


    for (let i = 3; i < input.length; i++) {
        let evaluativeName = input[i];
        i++
        let evaluativePoints = input[i];
        let currentPoint = evaluativeName.length * evaluativePoints / 2;
        academyPoints += currentPoint;

        if (academyPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            break;
        }
    }

    if (academyPoints <= 1250.5) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - academyPoints).toFixed(1)} more!`);
    }
}

oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"]);