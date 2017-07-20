/*
// protypt exist for only function, proto exist for everything

proto is the blueprint of the object

proto is to look upward in inheritance while prototype is for downwards


 */

var fun = function(){
    this.b = 4;
    console.log('yeh lo fun');
};
fun.a = 3;

var obj = new fun();

function Shape (edges, faces) {
    this.edges = edges
    this.faces = faces
    var a = 10;
}
function gefs () {
    return this.edges + this.faces;
}
Shape.prototype.getEdgeFaceSum = gefs
/*
    using such fun.prototype.func , creates a type of static function.
    Function created like this is not directly inherited to the object.
    The object body doesnt have those function
    But when the function are called, first they are looked in current object when not there,
    they are looked into proto, with has the prototype of the constructor. Hence that function is called.

    Eg when we define a string like var str = "nimit", new String("nimit")is called. so when we call
    function like, str.charAt(0). The function is not available in current str scope but it is in its
    __proto__ scope or String.prototype(str._proto__ is equal to String_prototype)

 */
var cube = new Shape(12,6);
var square = new Shape(4,1);

var triangle = Object.create(Shape.prototype)