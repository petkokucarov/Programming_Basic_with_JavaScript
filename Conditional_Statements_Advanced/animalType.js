function animalType (input) {
    let animal = input[0];

    switch (animal){
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile");
            break;
        case "dog":
            console.log("mammal");
            break;
        default:
            console.log("unknown");
            break;
    }
}

animalType(["cat"]);