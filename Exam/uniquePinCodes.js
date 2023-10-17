function uniquePinCodes(input) {

    let endIntN1 = Number(input[0]);
    let endIntN2 = Number(input[1]);
    let endIntN3 = Number(input[2]);

    for (let n1 = 1; n1 <= endIntN1; n1++) {
        for (let n2 = 1; n2 <= endIntN2; n2++) {
            for (let n3 = 1; n3 <= endIntN3; n3++) {
                if (n1 % 2 === 0 && n3 % 2 === 0) {
                    if (n2 >= 2 && n2 <= 7 && n2 % 4 !== 0) {
                        console.log(`${n1} ${n2} ${n3}`);
                    }
                }
            }
        }
    }

}

uniquePinCodes(["8",
    "2",
    "8"]);