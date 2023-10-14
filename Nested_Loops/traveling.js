function traveling(input) {

        let index = 2;
        let destination = input[0];
        let budget = Number(input[1]);
    
        let saveMoney = input[index];
        let sum = 0;
    
        while (destination !== "End") {
            saveMoney = Number(input[index]);
            index++;
            sum += saveMoney;
    
            if (sum >= budget) {
                console.log(`Going to ${destination}!`);
                destination = input[index];
                index++;
                budget = Number(input[index]);
                index++;
                sum = 0;
            }
        }
    }

traveling(["Greece",

"1000",

"200",

"200",

"300",

"100",

"150",

"240",

"Spain",

"1200",

"300",

"500",

"193",

"423",

"End"]);