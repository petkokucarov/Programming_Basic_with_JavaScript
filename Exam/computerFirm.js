function computerFirm(input) {

    let comp = Number(input[0]);
    let index = 1;
    let reit = 0;
    let percent = 0;
    let possibleSales = 0;
    let realSales = 0;
    let sales = 0;
    let allComp = 0;
    let allReit = 0;


    for (let i = 1; i <= comp; i++) {
        let num = input[index];
        reit = num[2];
        allReit += Number(reit);
        if (reit === "2") {
            percent = 0;
        } else if (reit === "3") {
            percent = 50;
        } else if (reit === "4") {
            percent = 70;
        } else if (reit === "5") {
            percent = 85;
        } else if (reit === "6") {
            percent = 100;
        }
        possibleSales = num[0] + num[1];
        realSales = possibleSales * (percent / 100);
        sales += realSales;
        index++;
    }
    allComp = allReit / comp;
    console.log(sales.toFixed(2));
    console.log(allComp.toFixed(2));
}

computerFirm(["2",
    "204",
    "206"]);