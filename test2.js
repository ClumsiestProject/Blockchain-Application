function foo() {
    var arrArg = Array.from( arguments );
    arrArg.push( "bam" );
    console.log( arrArg );
    console.log( arrArg.length );
    var str = arrArg[2].toUpperCase();
    arrArg.push( str );
    console.log( arrArg, str );
    var strReverse = arrArg.join();
    console.log( strReverse );
    console.log( typeof strReverse );
    console.log( strReverse.indexOf( "," ));
    var c = arrArg.reverse();
    console.log( ["1",2,"3",4,5].reverse() );
    console.log( c )
}
foo( "bar", "baz" );

var n = 425.78
console.log( n.toFixed( 0 ) );
console.log( n.toFixed( 4 ) );

console.log( n.toPrecision( 1 ) );
console.log( n.toPrecision( 2 ) );
console.log( n.toPrecision( 20 ) );

console.log( n === 425.78 );        //居然为"true"！
console.log( 0.1 + 0.2 === 0.3 );   //这样肯定是"false"

var m = 420.7 + 5.08;
console.log( n === m );
console.log( "n = ", n, "    m = ", m);
