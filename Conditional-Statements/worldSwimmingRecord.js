function worldSwimmingRecord (input) {
    let record = Number(input[0]);
    let distant = Number(input[1]);
    let time = Number(input[2]);

    let mustToSwim = distant * time;
    let late = Math.floor(distant / 15) * 12.5;
    let allTime = mustToSwim + late;

    if (allTime < record) {
        console.log(`Yes, he succeeded! The new world record is ${allTime.toFixed(2)} seconds.`);   
    } else {
        console.log(`No, he failed! He was ${(allTime - record).toFixed(2)} seconds slower.`);
    }
}

worldSwimmingRecord(["55555.67",

"3017","5.03"]);