const removeFromArray = function(passedArray, ...args) {
    const newArray = []
    passedArray.forEach(items => {
        if(!args.includes(items)) {
            newArray.push(items)
        }
    })
    return newArray;
};

console.log(removeFromArray([1,2,3,4],1,2))


// Do not edit below this line
module.exports = removeFromArray;
