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