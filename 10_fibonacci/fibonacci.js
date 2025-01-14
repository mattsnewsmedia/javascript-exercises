const fibonacci = function(num) {
    let firstNumber = 1;
    let secondNumber = 0;
    let thirdNumber = 0

    let count
    if (typeof num !== 'number') {
        count = parseInt(num)
    } else {
        count = num
    }

    if (count < 0) return "OOPS";
    if (count == 0) return 0;

    for(let i = 2; i<=count; i++){
        thirdNumber = firstNumber + secondNumber;
        secondNumber = firstNumber;
        firstNumber = thirdNumber; 
        
    }
    return firstNumber;
};

fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
