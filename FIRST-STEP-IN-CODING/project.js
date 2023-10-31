function projects(input) {
    let name = input[0];
    let numberProject = Number(input[1]);
    let hours = numberProject * 3;

    console.log(`The architect ${name} will need ${hours} hours to complete ${numberProject} project/s.`);

}

projects(["Sanya", "9"]);