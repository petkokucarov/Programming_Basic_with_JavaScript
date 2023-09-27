function numbersDivisibleBy9(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);

    let sum = 0;
    let num = "";

    for (let i = n1; i <= n2; i++) {

        if (i % 9 === 0) {
            sum += i;
            num += i + "\n";
        }
    }
    console.log("The sum: " + sum);
    console.log(num);
}

numbersDivisibleBy9(["100","200"]);