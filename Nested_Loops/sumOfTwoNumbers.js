function sumOfTwoNumbers(input) {

    let startInterval = Number(input[0]);
    let endInterval = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinations = 0;
    let isFound = false;

    for (let x = startInterval; x <= endInterval; x++) {
        for (let y = startInterval; y <= endInterval; y++) {

            combinations++;

            if (x + y === magicNumber) {
                console.log(`Combination N:${combinations} (${x} + ${y} = ${magicNumber})`);
                isFound = true;
                break;
            }
        }

        if (isFound) { //isFound === true
            break;
        }
    }

    if (!isFound) { //isFound === false
        console.log(`${combinations} combinations - neither equals ${magicNumber}`);
    }
}

sumOfTwoNumbers(["88", "888", "1000"]);