function vowelsSum(input) {
    let word = input[0];

    let value = 0;

    for(let i = 1;i <= word.length;i++) {
        let index = String(word[i]);
        if(index == "a") {
            value += 1;
        } 
        
        if(index == "e") {
            value += 2;
        }
        
        if (index == "i") {
            value += 3;
        }
        
        if(index == "o") {
            value += 4;
        }
        
        if(index == "u") {
            value += 5;
        }
    }

    console.log(value);
}

vowelsSum();