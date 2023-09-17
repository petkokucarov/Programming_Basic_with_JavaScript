function lunchBreak (input) {
    let serial = input[0];
    let episode = Number(input[1]);
    let rest = Number(input[2]);

    let timeToLaunch = rest / 8;
    let timeToRest = rest / 4;

    let diff = rest - (timeToLaunch + timeToRest);

    if (diff >= episode) {
        console.log(`You have enough time to watch ${serial} and left with ${Math.ceil(diff - episode)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${serial}, you need ${Math.ceil(episode - diff)} more minutes.`);
    }
}

lunchBreak(["Teen Wolf",

"48",

"60"]);