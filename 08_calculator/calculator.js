const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  if(arr.length < 1){
    return 0;
  }
  else
	return arr.reduce((total, currentItem) => {
    return total + currentItem;
  });
};

const multiply = function(arr) {
  return arr.reduce((total, currentItem) => {
    return total * currentItem;
  });
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  let total = a;
  if(a == 0){
    return 1;
  }
	while(a > 0){
    if(a == 1){
      return total
    }
    total = total * (a - 1);
    a--
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
