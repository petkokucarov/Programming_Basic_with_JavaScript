function onTimeForTheExam(input) {

    let hourOfExam = Number(input[0]);
    let minutesOfExam = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMinutes = Number(input[3]);

    let exam = (hourOfExam * 60) + minutesOfExam;
    let arrive = (arriveHour * 60) + arriveMinutes;
    let diff = Math.abs(exam - arrive);

    let h = Math.floor(diff / 60);
    let min = diff % 60;

    if (arrive < exam && (exam - arrive) > 30) {
        console.log("Early");

        if (h > 0) {
            if (min < 10) {
                console.log(`${(h)}:0${min} hours before the start`);
            } else {
                console.log(`${(h)}:${min} hours before the start`);
            }
        } else {
            console.log(`${min} minutes before the start`);
        }
    } else if (arrive <= exam) {
        console.log("On time");
        let min = diff % 60;
        if (min > 0) {
            console.log(`${min} minutes before the start`);
        }
    } else if (arrive > exam) {
        console.log("Late");

        if (h > 0) {
            if (min < 10) {
                console.log(`${(h)}:0${min} hours after the start`);
            } else {
                console.log(`${(h)}:${min} hours after the start`);
            }
        } else {
            console.log(`${min} minutes after the start`);
        }
    }
}

onTimeForTheExam(["10", "00", "10", "00"]);