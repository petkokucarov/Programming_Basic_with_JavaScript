function multiplicationTable(input) {

    for(let first = 1; first <= 10; first++) {
        for(let second = 1; second <= 10; second++) {
            let result = first * second;
            console.log(`${first} * ${second} = ${result}`);
        }
    }
}

multiplicationTable();