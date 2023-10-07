function walking(input) {

    let index = 0;
    let steps = input[index];
    let allSteps = 0;

    while (steps !== "Going home") {

        steps = Number(input[index]);
        allSteps += steps;
        index++;
        steps = input[index];

        if (allSteps >= 10000) {
            console.log(`Goal reached! Good job!`);
            console.log(`${allSteps - 10000} steps over the goal!`);
            break;
        }
    }

    if (steps === "Going home") {
        index++;
        steps = Number(input[index]);
        allSteps += steps;
        if (allSteps >= 10000) {
            console.log(`Goal reached! Good job!`);
            console.log(`${allSteps - 10000} steps over the goal!`);
        } else {
            console.log(`${10000 - allSteps} more steps to reach goal.`);
        }

    }
}

walking(["1000",

"1500",

"2000",

"6500"]);