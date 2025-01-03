const reverseString = function(string) {
    let reverse = string;
    let arrayReverse = Array.from(reverse);
    arrayReverse.reverse();
    reverse = arrayReverse.join("");
    return reverse;
}
reverseString('hello there');

// Do not edit below this line
module.exports = reverseString;
