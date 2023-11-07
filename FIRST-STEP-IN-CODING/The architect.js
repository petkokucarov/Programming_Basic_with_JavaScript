function theArchitect(input) {
    let name = input[0];
    let projects = Number(input[1]);
    let needHouers = projects * 3;

    console.log(`The architect ${name} will need ${needHouers} hours to complete ${projects} project/s.`);

}

theArchitect(["Sanya", "9"]);