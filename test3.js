function foo(wrapper, x) {
    wrapper.a =42;
    x = x + 1;
    console.log( "x = ", x)
}
var obj = {
    a: 2
};
var y = 0;
foo( obj, y );
console.log( obj.a, y );
console.log( void obj.a );

var func = () => console.log("Simply Function !");
func();

var identity = (v) => v;
console.log(identity([1,2,3]));

var tellType = (arg) => {
    if ( typeof arg === "function" ) {
        console.log( "The passed data is function !" );
        arg()
    }
    else
        console.log( "The passed data is: " + arg )
}
let data =1;
tellType( data );

let fn = () => {};
tellType( fn );
tellType( 'Hello World! ' );
tellType( true );
tellType( NaN );
tellType( undefined );
tellType( 34839.99 );
tellType( data === 1 );

// Function => String
let crazy = () => { return String };
console.log( crazy()( "HOC" ) );

const forEachObject = (obj, fn) => {
    for ( var property in obj) {
        if ( obj.hasOwnProperty(property) ) {
            fn( property, obj[ property ])
        }
    } 
}
let object = { a:1, b:2 };
forEachObject( object, ( k, v )  => console.log( k + ":" + v ) );
// let fn2 = ( k, v )  => console.log( k + ":" + v );
// forEachObject( object, fn2 );