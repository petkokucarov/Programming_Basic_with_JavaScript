function operationsBetweenNumbers(input) {
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operator = input[2];

    let result;

    if (N2 == 0 || N1 == 0) {
        console.log(`Cannot divide ${N1} by zero`);
    } else if (operator == "+") {
        result = N1 + N2;
        if (result % 2 === 0) {
            console.log(`${N1} ${operator} ${N2} = ${result} - even`);
        } else {
            console.log(`${N1} ${operator} ${N2} = ${result} - odd`);
        }
    } else if (operator == "-") {
        result = N1 - N2;
        if (result % 2 === 0) {
            console.log(`${N1} ${operator} ${N2} = ${result} - even`);
        } else {
            console.log(`${N1} ${operator} ${N2} = ${result} - odd`);
        }
    } else if (operator == "*") {
        result = N1 * N2;
        if (result % 2 === 0) {
            console.log(`${N1} ${operator} ${N2} = ${result} - even`);
        } else {
            console.log(`${N1} ${operator} ${N2} = ${result} - odd`);
        }
    } else if (operator == "/") {
        result = N1 / N2;
        console.log(`${N1} / ${N2} = ${(result).toFixed(2)}`);
    } else if (operator == "%") {
        result = N1 % N2;
        console.log(`${N1} % ${N2} = ${result}`);
    }
}

operationsBetweenNumbers(["10", "2", "/"]);