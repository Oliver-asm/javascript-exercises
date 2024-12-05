const repeatString = function(text, randomNumber ) {
    if( randomNumber<0){
        return "ERROR";
    }
    let finalText="";
    for(let i=0;i <  randomNumber;i++){
        finalText+=text;
    }
    return finalText;
};

// Do not edit below this line
module.exports = repeatString;
