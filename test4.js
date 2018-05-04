const forEach = ( array, fn ) => {
    for (let i = 0; i < array.length; i++ ) {
        fn( array[ i ] )
    }
}

const unless = ( predicate, fn ) => {
    if ( !predicate )
        fn()
} 
forEach( [ 1, 2, 3, 4, 5, 6, 7 ], ( number ) => {
    unless( (number % 2), () => {
        console.log( number, " is even " )
    })
})

const times = ( times, fn) => {
    for ( let i = 0; i < times; i++ )
        fn( i );
}
times( 3, function ( n ) {
    unless( n % 2, function() {
        console.log( n, " is even " );
    } );
} );

const every = ( arr, fn ) => {
    let result = true;
    for ( const value of arr )
        result = result && fn( value )
    return result
};
console.log( every( [ NaN, NaN, 4, NaN ], isNaN ) );

const some = ( arr, fn ) => {
    let result = true;
    for ( const value of arr )
        result = result || fn( value )
    return result
};
console.log( some( [ NaN, NaN, 4, NaN ], isNaN ) );

var fruit = [ "Banana", "Apple", "Cherry" ];
console.log( fruit.sort() );

const sortBy = ( property ) => {
    return ( a, b ) => {
        var result = ( a[ property ] < b[ property ] ) ? -1 : ( a[ property ] > b[ property ] ) ? 1 : 0;
        return result;
    }
}
var people = [
    { firstName: "Jeephy", lastName: "Ji" },
    { firstName: "Tom", lastName: "Jonson" },
    { firstName: "Bob", lastName: "Scott" }
];
people.sort( sortBy( "lastName" ) );

const forEachObject = (obj, fn) => {
    for ( var property in obj) {
        if ( obj.hasOwnProperty(property) ) {
            fn( property, obj[ property ])
        }
    } 
}

for ( let i = 0; i < people.length; i++ )
    forEachObject( people[ i ], ( k, v )  => console.log( k + ":" + v ) );