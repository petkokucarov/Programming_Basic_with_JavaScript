function readText(input) {
    
    let index = 0;
    let loop = input[index];

    while (loop !== "Stop") {
        console.log(loop);
        index++;
        loop = input[index];
    }

}

readText(["a",
    "b",
    "c",
    "Stop",
    "AfterStop",
    "AfterAfterStop"]);