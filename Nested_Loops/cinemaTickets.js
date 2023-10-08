function cinemaTickets(input) {

    let index = 0;

    let command = input[index];
    index++;

    let studentTickets = 0;
    let standardTickets = 0;
    let kidsTicket = 0;
    let totalTicket = 0;

    while (command !== "Finish") {
        let movieName = command;

        let freeSeats = Number(input[index]);
        index++;

        let typeTicket = input[index];
        index++;

        let ticketCounter = 0;

        while (typeTicket !== "End") {
            ticketCounter++;

            if (typeTicket === "student") {
                studentTickets++;
            } else if (typeTicket === "standard") {
                standardTickets++;
            } else if (typeTicket === "kid") {
                kidsTicket++;
            }

            if (ticketCounter == freeSeats) {
                isFull = true;
                break;
            }

            typeTicket = input[index];
            index++;
        }

        totalTicket += ticketCounter;
        console.log(`${movieName} - ${((ticketCounter / freeSeats) * 100).toFixed(2)}% full.`);

        command = input[index];
        index++;
    }

    console.log(`Total tickets: ${totalTicket}`);
    console.log(`${((studentTickets / totalTicket) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTickets / totalTicket) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidsTicket / totalTicket) * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["The Matrix",

    "20",

    "student",

    "standard",

    "kid",

    "kid",

    "student",

    "student",

    "standard",

    "student",

    "End",

    "The Green Mile",

    "17",

    "student",

    "standard",

    "standard",

    "student",

    "standard",

    "student",

    "End",

    "Amadeus",

    "3",

    "standard",

    "standard",

    "standard",

    "Finish"]);