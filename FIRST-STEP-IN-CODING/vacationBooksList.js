function vacationBooksList(input) {
    let numberOfPages = parseInt(input[0]);
    let pagesForHour = parseInt(input[1]);
    let days = parseInt(input[2]);

    let timeForReading = numberOfPages / pagesForHour;
    let hoursForDay = timeForReading / days;

    console.log(hoursForDay);
}

vacationBooksList(["212", "20", "2"]);