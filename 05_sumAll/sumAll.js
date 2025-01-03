const sumAll = function(number1, number2) {
    if(number1 < 0 || number2 < 0 || typeof(number1) !== "number" || typeof(number2) !== "number" || 
        Number.isInteger(number1) == false || Number.isInteger(number2) == false){
        return "ERROR";
    }
    else if(number1 > number2){
        let originalOne = number1;
        let originalTwo = number2;
        number1 = originalTwo;
        number2 = originalOne; 
    }
    
    newArray = []    
    let sumFinish = 0;
    let i = 0;
    
    while(i <= (number2 - number1)){
        newArray.push(number1 + i);
        i++;
    }
    i = 0;
    while(i <= (number2 - number1)){
        sumStart = newArray.pop(i)
        sumFinish = sumStart + sumFinish;
        i++;
    }
    return sumFinish;
};

console.log(sumAll(10, 4));

// Do not edit below this line
module.exports = sumAll;
