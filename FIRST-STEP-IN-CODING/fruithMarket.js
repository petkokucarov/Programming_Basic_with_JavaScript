function fruithMarket(input) {
    
    let priceBerries = Number(input[0]);
    let quantityBananas = Number(input[1]);
    let quantityOrange = Number(input[2]);
    let quantityRaspberries = Number(input[3]);
    let quantityBerries = Number(input[4]);

    let priceRaspberry = priceBerries / 2;
    let priceOrange = priceRaspberry - (priceRaspberry * 0.4);
    let priceBananas = priceRaspberry - (priceRaspberry * 0.8);

    let sumRaspberry = quantityRaspberries * priceRaspberry;
    let sumOrange = quantityOrange * priceOrange;
    let sumBananas = quantityBananas * priceBananas;
    let sumBerries = quantityBerries * priceBerries;

    let totalSum = sumRaspberry + sumOrange + sumBananas + sumBerries;

    console.log(totalSum);
}

fruithMarket(["63.5", "3.57", "6.35", "8.15", "2.5"]);