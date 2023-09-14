function suppliesForSchool(input) {
    let pencil = parseInt(input[0]);
    let markers = parseInt(input[1]);
    let preparation = parseInt(input[2]);
    let discount = parseInt(input[3]);

    let pencilPrice = pencil * 5.80;
    let markerPrice = markers * 7.20;
    let preparationPrice = preparation * 1.20;
    let allMaterials = pencilPrice + markerPrice + preparationPrice;
    let discountPrice = allMaterials - (allMaterials * (discount / 100));

    console.log(discountPrice);
}

suppliesForSchool(["2", "3","4", "25"]);