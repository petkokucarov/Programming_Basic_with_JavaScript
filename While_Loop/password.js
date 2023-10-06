function password(input) {

    let index = 0;
    let username = input[index];
    let myPassword = input[index];
    let data = input[index];

    let counter = 3;

    while(data !== myPassword) {
        counter++;

    }

    console.log(`Welcome ${data}!`);

}

password(["Nakov",
    "1234",
    "pass",
    "1324",
    "1234"]);