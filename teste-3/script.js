// 1

let abs = (x) => { // return the number in a positive integer
    if (x > 0) {
        return x
    } else {
        return - x
    }
}

abs(7); // == 7
abs(-7); // == 7



// 2

let fatoration = (number) => {
    var product = 1;
    while(number > 1) {
        product = product * number;
        number--
    }
}