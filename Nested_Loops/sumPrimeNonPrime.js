function sumPrimeNonPrime(input) {

    let index = 0;
    let command = input[index];
    index++;
    let sumPrimeNumber = 0;
    let sumNonPrimeNumber = 0;

    while (command !== "stop") {
        let num = Number(command);
        let isPrime = true;

        if (num < 0) {
            console.log("Number is negative.");
            command = input[index];
            index++;
            continue;
        }

        if (num === 1) {
            sumPrimeNumber += num;
            command = input[index];
            index++;
            continue;
        }

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            sumPrimeNumber += num;
        } else {
            sumNonPrimeNumber += num;
        }

        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumPrimeNumber}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeNumber}`);
}

sumPrimeNonPrime(["30",

"83",

"33",

"-1",

"20",

"stop"]);