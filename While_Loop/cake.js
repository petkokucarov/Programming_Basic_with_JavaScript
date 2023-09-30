function cake(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);

    let index = 2;
    let command = input[index];
    let piecesOfCake = width * length;
    let piecesLeft = 0;

    while (command !== "STOP") {
        let pieces = Number(command);
        piecesLeft += pieces;

        if (piecesLeft > piecesOfCake) {
            console.log(`No more cake left! You need ${piecesLeft - piecesOfCake} pieces more.`);
            break;
        }
        index++;
        command = input[index];
    }

    if (piecesLeft <= piecesOfCake) {
        console.log(`${piecesOfCake - piecesLeft} pieces are left.`);
    }
}

cake(["10",

"2",

"2",

"4",

"6",

"STOP"]);