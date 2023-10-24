function birthDay(input) {
    let rentOfHall = Number(input[0]);

    let cake = rentOfHall * 0.2;
    let drinks = cake - (cake * 0.45);
    let animation = rentOfHall / 3;

    let totalSum = rentOfHall + cake + drinks + animation;

    console.log(totalSum);
}

birthDay(["3720"]);