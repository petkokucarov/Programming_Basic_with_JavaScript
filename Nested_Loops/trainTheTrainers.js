function trainTheTrainers(input) {

    let peopleInJudge = Number(input[0]);
    index = 1;
    let presentation = input[index];
    index++;
    let averageGrade = 0;
    let presentationCounter = 0;
    let averageGradeForPresentation = 0;
    let gradeCounter = 0;
    let allgrade = 0;

    while (presentation !== "Finish") {
        for (let i = 1; i <= peopleInJudge; i++) {

            let grade = Number(input[index]);
            index++;
            gradeCounter++;
            allgrade += grade;
            averageGrade += grade;
        }
        averageGradeForPresentation = averageGrade / peopleInJudge;
        console.log(`${presentation} - ${averageGradeForPresentation.toFixed(2)}.`);
        averageGrade = 0;

        presentation = input[index];
        presentationCounter++;
        index++;
        
    }

    console.log(`Student's final assessment is ${(allgrade / gradeCounter).toFixed(2)}.`);
}

trainTheTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"]);