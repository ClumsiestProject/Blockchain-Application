/*
'use strict';
var s = 'Hello';
function greet( name ) {
    console.log( s + ', ' + name + '!' );
}

module.exports = greet;
*/

const forEach = (array,fn) => {
    let i;
    for (i = 0 ; i < array.length; i++)
        fn(array[i])
};

module.exports = forEach;