const reverseString = function(name) {
    let rename = name.split("");
    let reversedName="";
    for(let i = rename.length - 1;i >=0; i--){
        reversedName+= rename[i];
    }
    return reversedName;
};

// Do not edit below this line
module.exports = reverseString;
