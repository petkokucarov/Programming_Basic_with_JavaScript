function requiredReeding(input) {
    let numberOfPages = Number(input[0]);
    let pagesForHower = Number(input[1]);
    let days = Number(input[2]);

    let allReding = numberOfPages / pagesForHower;
    let howers = allReding / days;

    console.log(howers);

}

requiredReeding(["212", "20", "2"]);