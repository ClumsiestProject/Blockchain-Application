/*
'use strict';

var greet = require('./forEach_1');
var s = 'Jeephy Ji'
greet( s );
*/

var forEach = require('./forEach_1');
var array = [1,2,3];
forEach(array,(data) => console.log(data * 2.5 ));
