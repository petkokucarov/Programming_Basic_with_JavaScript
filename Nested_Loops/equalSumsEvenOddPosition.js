function equalSumsEvenOddPosition(input) {

    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let currentDigit = " ";

    for (let a = firstNumber; a <= secondNumber; a++) {
        let currentNumber = "" + a;
        let odd = 0;
        let even = 0;

        for (let b = 0; b <= currentNumber.length; b++) {
            let number = Number(currentNumber.charAt(b));
            if (b % 2 === 0) {
                even += number;
            } else {
                odd += number;
            }
        }
        if (even === odd) {
            currentDigit += `${a} `;
        }
    }
    console.log(currentDigit);
}

equalSumsEvenOddPosition(["100000", "100050"]);