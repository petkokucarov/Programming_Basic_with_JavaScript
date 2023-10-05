function minNumber(input) {
    let data = input[0];
    let index = 1;
    let minNumber = Number.MAX_SAFE_INTEGER;

    while (data !== "Stop") {
        let n = Number(data);

        if(n < minNumber) {
            minNumber = n;
        }
        data = input[index];
        index++;
    }

    console.log(minNumber);
}

minNumber(["-1", "-2", "Stop"]);