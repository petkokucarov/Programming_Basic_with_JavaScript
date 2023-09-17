function shopping (input) {
    let budget = Number(input[0]);
    let gpu = Number(input[1]);
    let cpu = Number(input[2]);
    let ram = Number(input[3]);

    let gpuPrice = gpu * 250;
    let cpuPrice = cpu * (gpuPrice * 0.35);
    let ramPrice = ram * (gpuPrice * 0.10);

    let price = gpuPrice + cpuPrice + ramPrice;

    if (gpu > cpu) {
        price = price * 0.85;
    }

    if (budget >= price) {
        console.log(`You have ${(budget - price).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva more!`);
    }
}

shopping(["920.45",

"3",

"1",

"1"]);