var fn;
function foo() {
    var a = 2;
    function baz() {
        console.log(a)
    }
    fn = baz;
}
function bar() {
    fn();
}
foo();
bar();

function wait(message) {
    setTimeout(function timer() {
        console.log(message);
    }, 1000);
}
wait("Hello, closure!");

/*
function setupBot(name, selector) {
    $( selector ).click( function activator() {
        console.log( "Activating: " + name );
    });
}

setupBot ( "Closure Bot 1", "#bot_1" );
setupBot ( "Closure Bot 2", "#bot_2" );

*/

for (let i = 1; i <= 5; i++) {
    let j = i;
    setTimeout( function timer(){
        console.log( j );
    }, j * 1000);
}

function CoolModule() {
    var something = "cool";
    var another = [1, 2, 3];

    function doSomething() {
        console.log( something );
    }

    function doAnother() {
        console.log( another.join( "!"));
    }
    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
}

var foo2 = CoolModule();
foo2.doSomething();
foo2.doAnother();

var myObject = {};
Object.defineProperty(
    myObject,
    "a",
    { enumerable: true, value: 2 }
);

Object.defineProperty(
    myObject,
    "b",
    { enumerable: false, value: 3 }
);

console.log( myObject.b );
console.log( ("b" in myObject) );
console.log( myObject.hasOwnProperty( "b" ) );
for ( var k in myObject) {
    console.log( k, myObject[k] );
}

console.log( myObject.propertyIsEnumerable( "a" ) );
console.log( myObject.propertyIsEnumerable( "b" ) );
console.log( Object.keys(myObject) );
console.log( Object.getOwnPropertyNames(myObject) );

var myArray = [1, 2, 3];
for (var v of myArray) {
    console.log( v );
}

var it = myArray[ Symbol.iterator ] ();
console.log( it.next() );
console.log( it.next() );
console.log( it.next() );
console.log( it.next() );