function maxNumber(input) {

    let data = input[0];
    let index = 1;
    let maxNumber = Number.MIN_SAFE_INTEGER;

    while (data !== "Stop") {
        let n = Number(data);

        if(n > maxNumber) {
            maxNumber = n;
            
        }
        data = input[index];
        index++;
    }

    console.log(maxNumber);
}

maxNumber(["-1", "-2", "Stop"]);