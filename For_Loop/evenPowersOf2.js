function evenPowersOf2(input) {
    let n = Number(input[0]);
    let a = 1;

    for (let i = 0; i <= n; i += 2) {
        console.log(a);
        a = a * 2 * 2;

    }
}

evenPowersOf2(["7"]);