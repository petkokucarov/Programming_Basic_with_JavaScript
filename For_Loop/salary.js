function salary (input) {
    
    let openTabs = Number(input[0]);
    let salaryForPerson = Number(input[1]);

    for (let i = 2;i <= openTabs + 1;i++) {

        let sait = input[i];

        if (sait === "Facebook") {
            salaryForPerson -= 150
        } else if (sait === "Instagram") {
            salaryForPerson -= 100;
        } else if (sait === "Reddit") {
            salaryForPerson -= 50;
        }
    }

    if(salaryForPerson <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(Math.round(salaryForPerson));
    }
}

salary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"]);