function santasHoliday(input) {

    let days = Number(input[0]);
    let room = input[1];
    let assessment = input[2];

    let price = 0;
    let discount = 0;
    let nights = days - 1;
    let finalPrise = 0;

    switch (room) {
        case "room for one person":
            price = nights * 18.00;
            break;
        case "apartment":
            price = nights * 25.00;
            if (days < 10) {
                discount = price * 30 / 100;
            } else if (days >= 10 && days <= 15) {
                discount = price * 35 / 100;
            } else if (days > 15) {
                discount = price * 50 / 100;
            }
            break;
        case "president apartment":
            price = nights * 35.00;
            if (days < 10) {
                discount = price * 10 / 100;
            } else if (days >= 10 && days <= 15) {
                discount = price * 15 / 100;
            } else if (days > 15) {
                discount = price * 20 / 100;
            }
            break;
    }

    finalPrise = price - discount;

    if (assessment === "positive") {
        allPrise = finalPrise + (finalPrise * 25 / 100);
    } else {
        allPrise = finalPrise - (finalPrise * 10 / 100);
    }

    console.log(allPrise.toFixed(2));
}

santasHoliday(["12",
    "room for one person",
    "positive"])
    ;