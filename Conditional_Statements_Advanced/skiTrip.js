function skiTrip(input) {
    let stayDay = Number(input[0]);
    let room = input[1];
    let assessment = input[2];

    let priceForRoom = 0;
    let stayNight = stayDay - 1;

    if (room === "room for one person") {
        priceForRoom = stayNight * 18.00;
    } else if (room === "apartment") {
        priceForRoom = stayNight * 25.00;
        if (stayNight < 10) {
            priceForRoom = priceForRoom - (priceForRoom * 0.30);
        } else if(stayNight >= 10 && stayNight <= 15) {
            priceForRoom = priceForRoom - (priceForRoom * 0.35);
        } else if(stayNight > 15) {
            priceForRoom = priceForRoom - (priceForRoom * 0.5);
        }
    } else if (room === "president apartment") {
        priceForRoom = stayNight * 35.00;
        if (stayNight < 10) {
            priceForRoom = priceForRoom - (priceForRoom * 0.10);
        } else if(stayNight >= 10 && stayNight <= 15) {
            priceForRoom = priceForRoom - (priceForRoom * 0.15);
        } else if(stayNight > 15) {
            priceForRoom = priceForRoom - (priceForRoom * 0.2);
        }
    }

    if(assessment === "positive") {
        priceForRoom = priceForRoom + (priceForRoom * 0.25);
    } else if(assessment === "negative") {
        priceForRoom = priceForRoom - (priceForRoom * 0.1);
    }

    console.log(priceForRoom.toFixed(2));
}

skiTrip(["14",

"apartment",

"positive"]);