function oldBooks(input) {

    let index = 1;
    let book = input[0];
    let myBook = input[index];
    let counter = 0;
    let bookIsFound = false;

    while (myBook !== "No More Books") {

        if (myBook === book) {
            bookIsFound = true;
            break;
        }
        counter++;
        index++;
        myBook = input[index];
    } 
    
    if (bookIsFound === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${counter} books.`);
    } else {
        console.log(`You checked ${counter} books and found it.`);
    }
}

oldBooks(["The Spot",

    "Hunger Games",

    "Harry Potter",

    "Torronto",

    "Spotify",

    "No More Books"]);