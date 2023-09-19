function timePlusFifteenMinutes (input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    

    if (minutes <= 45) {
        minutes += 15;
    } else if (minutes > 45) {
        hours += 1;
        minutes = (minutes + 15) % 60;
    }

    if (minutes >= 60) {
        minutes = 0;
        hours += 1; 
    }

    if (hours > 23) {
        hours = 0;
    }

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`);
    } else {
        console.log(`${hours}:${minutes}`);
    }
    
}

timePlusFifteenMinutes(["0",

"45"])