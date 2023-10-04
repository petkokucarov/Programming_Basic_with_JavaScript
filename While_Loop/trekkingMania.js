function trekkingMania(input) {
    let group = Number(input[0]);

    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i <= group; i++) {
        let peopleInGroup = Number(input[i]);

        if (peopleInGroup <= 5) {
            musala += peopleInGroup;
        } else if (peopleInGroup <= 12) {
            monblan += peopleInGroup;
        } else if (peopleInGroup <= 25) {
            kilimandjaro += peopleInGroup;
        } else if (peopleInGroup <= 40) {
            k2 += peopleInGroup;
        } else {
            everest += peopleInGroup;
        }
    }

    let all = musala + monblan + kilimandjaro + k2 + everest;

    console.log(`${(musala / all * 100).toFixed(2)}%`);
    console.log(`${(monblan / all * 100).toFixed(2)}%`);
    console.log(`${(kilimandjaro / all * 100).toFixed(2)}%`);
    console.log(`${(k2 / all * 100).toFixed(2)}%`);
    console.log(`${(everest / all * 100).toFixed(2)}%`);
    
}

trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"]);