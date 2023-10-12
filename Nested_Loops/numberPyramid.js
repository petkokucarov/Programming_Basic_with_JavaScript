function numberPyramid(input) {

    let n = Number(input[0]);
    let diff = "";
    let currentNumber = 1;
    let isBigger = false;


    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row; col++) {
            if(currentNumber > n) {
                isBigger = true;
                break;
            }
            diff += currentNumber + " ";
            currentNumber++;
        }
        console.log(diff);
        diff = "";
        if(isBigger) {
            break;
        }
    }
}

numberPyramid(["17"]);