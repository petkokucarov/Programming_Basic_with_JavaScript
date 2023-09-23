function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let priceForApartment = 0;
    let priceForStudio = 0;

    switch (month) {
        case "May":
        case "October":
            priceForApartment = nights * 65;
            priceForStudio = nights * 50;
                if(nights > 7 && nights <= 14) {
                    priceForStudio = priceForStudio - (priceForStudio * 5 / 100);
                } else if(nights > 14) {
                    priceForStudio = priceForStudio - (priceForStudio * 30 / 100);
                }
            break;
        case "June":
        case "September":
            priceForApartment = nights * 68.70;
            priceForStudio = nights * 75.20;
                if(nights > 14) {
                    priceForStudio = priceForStudio - (priceForStudio * 20 / 100);
                }
            break;
        case "July":
        case "August":
            priceForApartment = nights * 77;
            priceForStudio = nights * 76;
            break;
    }

    if (nights > 14) {
        priceForApartment = priceForApartment - (priceForApartment * 10 / 100);
    }

    console.log(`Apartment: ${(priceForApartment).toFixed(2)} lv.`);
    console.log(`Studio: ${(priceForStudio).toFixed(2)} lv.`);

}

hotelRoom(["August", "20"]);