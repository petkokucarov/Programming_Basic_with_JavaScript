function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let col = Number(input[2]);

    if (town == "Sofia") {
        if (product == "coffee") {
            console.log(col * 0.50);
        } else if (product == "water") {
            console.log(col * 0.80);
        } else if (product == "beer") {
            console.log(col * 1.20);
        } else if (product == "sweets") {
            console.log(col * 1.45);
        } else {
            console.log(col * 1.60);
        }
    } else if (town == "Plovdiv") {
        if (product == "coffee") {
            console.log(col * 0.40);
        } else if (product == "water") {
            console.log(col * 0.70);
        } else if (product == "beer") {
            console.log(col * 1.15);
        } else if (product == "sweets") {
            console.log(col * 1.30);
        } else {
            console.log(col * 1.50);
        }
    } else {
        if (product == "coffee") {
            console.log(col * 0.45);
        } else if (product == "water") {
            console.log(col * 0.70);
        } else if (product == "beer") {
            console.log(col * 1.10);
        } else if (product == "sweets") {
            console.log(col * 1.35);
        } else {
            console.log(col * 1.55);
        }
    }
}

smallShop(["coffee",

"Varna",

"2"]);