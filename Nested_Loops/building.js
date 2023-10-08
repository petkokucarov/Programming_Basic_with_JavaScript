function building(input) {

    let floor = Number(input[0]);
    let room = Number(input[1]);


    for (let f = floor; f >= 1; f--) {
        let buff = "";
        for (let r = 0; r < room; r++) {
            if (f === floor) {
                buff += `L${f}${r} `;
            }else if (f % 2 === 0) {
                buff += `O${f}${r} `;
            } else {
                buff += `A${f}${r} `;
            }
        }
        console.log(buff);
    }
}

building(["9",

"5"]);