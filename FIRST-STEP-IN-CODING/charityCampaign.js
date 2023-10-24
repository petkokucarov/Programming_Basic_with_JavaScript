function charityCampaign(input) {

    let days = Number(input[0]);
    let confectioners = Number(input[1]);
    let cakes = Number(input[2]);
    let gofrets = Number(input[3]);
    let panCakes = Number(input[4]);

    let allCake = cakes * 45;
    let allGofrets = gofrets * 5.80;
    let allPancake = panCakes * 3.20;

    let allSumForDay = (allCake + allGofrets + allPancake) * confectioners;
    let allSum = allSumForDay * days;

    let totalSum = allSum - (allSum / 8); 

    console.log(totalSum);
}

charityCampaign(["131", "5", "9", "33", "46"]);