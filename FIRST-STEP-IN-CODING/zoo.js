function zoo(input) {
    let dog = Number(input[0]);
    let enimals = Number(input[1]);
    let result = dog * 2.50 + enimals * 4;
    
    console.log(`${result} lv.`);
}

zoo(["13", "9"]);