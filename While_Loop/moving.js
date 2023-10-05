function moving(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let hight = Number(input[2]);
    let index = 3;
    let room = width * length * hight;
    let cartonNumber = 0;

    while (room >= cartonNumber) {
        let command = input[index];
        if (command === "Done") {
            console.log(`${room - cartonNumber} Cubic meters left.`);
        }
        command = Number(input[index]);
        index++;
        cartonNumber += command;

        if (cartonNumber >= room) {
            console.log(`No more free space! You need ${cartonNumber - room} Cubic meters more.`);
        }
    }
}

moving(["10",

"10",

"2","20", "20", "20", "20", "122"]);