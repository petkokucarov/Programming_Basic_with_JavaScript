function celsiusToFahrenheit(input) {

    let celsius = parseFloat(input[0]);
    let farenhait = celsius * 1.8 +32;

    console.log(farenhait.toFixed(2));
}

celsiusToFahrenheit(["32.3"]);