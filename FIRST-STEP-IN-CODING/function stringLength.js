function stringLength(input) {
    let firstArr = input[0];
    let secondArr = input[1];
    let threeArr = input[2];
    let sum = firstArr + secondArr + threeArr;
    let avr = Math.round(sum.length / 3);
    
    console.log(sum.length);
    console.log(avr);
} 

stringLength(['chocolate', 'ice cream', 'cake']);