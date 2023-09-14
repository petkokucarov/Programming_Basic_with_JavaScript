function repainting(input) {
    let nylon = parseInt(input[0]);
    let paint = parseInt(input[1]);
    let thinner = parseInt(input[2]);
    let hours = parseInt(input[3]);

    let nylonSum = (nylon + 2) * 1.50;
    let paintSum = (paint + (paint * 0.10)) * 14.50;
    let thinnerSum = thinner * 5.00;
    let bags = 0.40;
    let allMaterials = nylonSum + paintSum + thinnerSum + bags;
    let masters = (allMaterials * 0.30) * hours;
    
    console.log(allMaterials + masters);
}

repainting(["5", "10", "10", "1"]);