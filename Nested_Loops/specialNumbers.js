function specialNumbers(input) {

    let n = Number(input[0]);

    let specialNumbers = " ";

    for(let i = 1111; i <= 9999; i++) {
        let currentNumber = "" + i;

        for(let a = 0; a <= currentNumber.length; a++) {
            let newNumber = Number(currentNumber.charAt(a));
            
            if(n % newNumber === 0){
                specialNumbers += newNumber;
            } else {
                break;
                
            }
        }
        console.log(specialNumbers + " ");
        specialNumbers = " ";
    }
}

specialNumbers(["3"]);