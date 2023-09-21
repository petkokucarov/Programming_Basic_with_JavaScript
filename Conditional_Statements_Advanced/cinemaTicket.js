function cinemaTicket (input) {
    let day = input[0];

    switch (day) {
        case "Wednesday":
        case "Thursday":
            console.log("14");
            break;
        case "Monday":
        case "Tuesday":
        case "Friday":
            console.log("12");
            break;
        case "Saturday":
        case "Sunday":
            console.log("16");
            break;

    }
}

cinemaTicket(["Monday"]);