const sumAll = function(firstValue, secondValue) {
    let suma=0;
    if(typeof firstValue !== typeof secondValue || firstValue < 0
        || firstValue % 1 !== 0
    ) return "ERROR";
    else if(firstValue < secondValue) {
        for(; firstValue <= secondValue; firstValue++){
            suma+=firstValue;
        }
        return suma;
    } else if(firstValue > secondValue) {
        for(; secondValue <= firstValue; secondValue++){
            suma+=secondValue;
        }
        return suma;
    }
};

// Do not edit below this line
module.exports = sumAll;
