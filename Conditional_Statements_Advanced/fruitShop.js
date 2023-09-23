function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let col = Number(input[2]);

    if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
        if (fruit == "banana") {
            console.log((col * 2.50).toFixed(2));
        } else if (fruit == "apple") {
            console.log((col * 1.20).toFixed(2));
        } else if (fruit == "orange") {
            console.log((col * 0.85).toFixed(2));
        } else if (fruit == "grapefruit") {
            console.log((col * 1.45).toFixed(2));
        } else if (fruit == "kiwi") {
            console.log((col * 2.70).toFixed(2));
        } else if (fruit == "pineapple") {
            console.log((col * 5.50).toFixed(2));
        } else if (fruit == "grapes") {
            console.log((col * 3.85).toFixed(2));
        } else {
            console.log("error");
        }
    } else if (day == "Saturday" || day == "Sunday") {
        if (fruit == "banana") {
            console.log((col * 2.70).toFixed(2));
        } else if (fruit == "apple") {
            console.log((col * 1.25).toFixed(2));
        } else if (fruit == "orange") {
            console.log((col * 0.90).toFixed(2));
        } else if (fruit == "grapefruit") {
            console.log((col * 1.60).toFixed(2));
        } else if (fruit == "kiwi") {
            console.log((col * 3.00).toFixed(2));
        } else if (fruit == "pineapple") {
            console.log((col * 5.60).toFixed(2));
        } else if (fruit == "grapes") {
            console.log((col * 4.20).toFixed(2));
        } else {
            console.log("error");
        }
    } else {
        console.log("error");
    }
}

    fruitShop(["tomato", "Monday", "0.5"]);