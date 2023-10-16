function everest(input) {

    let index = 0;
    let text = input[index];
    let meters = Number(input[1]);
    let clumbedMeters = 5364;
    let days = 1;
    let isClumbed = false;

    while (text !== "END") {

        text = input[index];
        index++;
        meters = Number(input[index]);
        index++;
        if (text === "Yes") {
            days++;
            if (days > 5) {
                isClumbed = false;
                break;
            }
            clumbedMeters += meters;
            i = clumbedMeters;
        } else if (text === "No") {
            clumbedMeters += meters;
            i = clumbedMeters;
        }

        if (clumbedMeters >= 8848) {
            isClumbed = true;
            break;
        }
    }
    if (isClumbed) {
        console.log(`Goal reached for ${days} days!`);
    } else {
        console.log("Failed!");
        console.log(`${clumbedMeters}`);
    }
}

everest(["Yes",
    "1000",
    "Yes",
    "945",
    "No",
    "1200",
    "END"])
    ;