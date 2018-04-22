var fn = ( arg ) => {
    let outer = "Visible";
    let innerFn = () => {
        console.log( outer );
        console.log( arg );
    }
    return innerFn
}
var closureFn = fn( 5 );
closureFn();

const tap = (value) => 
    (fn) => (
        typeof( fn ) === "function" && fn( value ),
        console.log( value )
    ) ;

tap( "fun" )( ( it ) => console.log( "Value is ", it ) );

const forEach = ( array, fn ) => {
    for (let i = 0; i < array.length; i++ ) {
        fn( array[ i ] )
    }
}
forEach( [ 1, 2, 3 ], (a) =>
    tap(a) ( () => {
        console.log(a)
    }
    )    
)

const unary = ( fn ) =>
    fn.length === 1
        ? fn
        : ( arg ) => fn( arg )
console.log( [ 1, 2, 3 ].map( (a) => { return a * a }));
console.log( [ "1", "2", "3" ].map( parseInt));
console.log( [ "1", "2", "3" ].map( unary(parseInt) ));

const once = ( fn ) => {
    let done = false;
    return function () {
        return done ? undefined : ( ( done = true ), fn.apply( this, arguments ) )
    }
}

var doPayment = once( () => {
    console.log( "Payment is done !" )
} )
doPayment();
doPayment();

var factorial = ( n ) => {
    if ( n === 0 ) {
        return 1;
    }
    return n * factorial( n-1 );
}
const memoized = ( fn ) => {
    const lookupTable = {};
    return ( arg ) => lookupTable[ arg ] || ( lookupTable[ arg ] = fn( arg ))

}
let fastFactorial = memoized( ( n ) => {
    if ( n === 0 ) {
        return 1;
    }
    return n * fastFactorial( n - 1 );
})
console.log( factorial( 5 ) );
console.log( fastFactorial( 5 ) );