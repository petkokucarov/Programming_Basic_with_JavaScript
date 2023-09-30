function examPreparation(input) {

    let poorGrades = Number(input[0]);
    let index = 1;
    let goodGrades = 0;
    let noGoodGrades = 0;
    let allGrades = goodGrades + noGoodGrades;
    let previousNameOfTask;

    while (noGoodGrades < poorGrades) {
        let nameOfTask = input[index];
        index++;

        if (nameOfTask === "Enough") {
            console.log(`Average score: ${(allGrades / (goodGrades + noGoodGrades)).toFixed(2)}`);
            console.log(`Number of problems: ${goodGrades + noGoodGrades}`);
            console.log(`Last problem: ${previousNameOfTask}`);
            break;
        }
        previousNameOfTask = nameOfTask;
        let grade = Number(input[index]);

        if (grade <= 4) {
            noGoodGrades++;
        } else {
            goodGrades++;
        }
        index++;
        allGrades += grade;
    }

    if (noGoodGrades === poorGrades) {
        console.log(`You need a break, ${noGoodGrades} poor grades.`);
    }
}

examPreparation(["2",

    "Income",

    "3",

    "Game Info",

    "6",

    "Best Player",

    "4"]);