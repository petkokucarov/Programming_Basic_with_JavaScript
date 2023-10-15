function catDiet(input) {

    let mas = Number(input[0]);
    let prot = Number(input[1]);
    let vagl = Number(input[2]);
    let allCalories = Number(input[3]);
    let watter = Number(input[4]);

    let gramMas = (allCalories * (mas / 100)) / 9;
    let gramProt = (allCalories * (prot / 100)) / 4;
    let gramVagl = (allCalories * (vagl / 100)) / 4;

    let allFood = gramMas + gramProt + gramVagl;
    let caloriesForGram = allCalories / allFood;

    let oneGram = caloriesForGram * ((100 - watter) / 100);

    console.log(oneGram.toFixed(4));
}

catDiet(["40",
"40",
"20",
"3000",
"40"])

;