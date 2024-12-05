const removeFromArray = function() {
    let newStore = [];
   for( let value of arguments[0]){
        if (arguments.length === 2 ) if(value !== arguments[1]) newStore.push(value);
        if (arguments.length===3) if (value !== arguments[1] && value !== arguments[2]) newStore.push(value);
        if (arguments.length===5) if (value !== arguments[1] && value !== arguments[3] && value !== arguments[4] && value !== arguments[2]) newStore.push(value);
   }

   return newStore;

};



// Do not edit below this line
module.exports = removeFromArray;
