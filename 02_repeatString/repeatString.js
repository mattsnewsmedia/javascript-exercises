const repeatString = function(string, number) {
    let repeat = string;
    let repeat2 = "";
    if(number < 0){
        return "ERROR";
    }
    else{
for(let i = 0; i < number; i++){
    repeat2 = repeat2.concat(repeat);
}
    }
    return repeat2;
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
