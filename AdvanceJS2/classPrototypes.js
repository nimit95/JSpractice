/*
// protypt exist for only function, proto exist for everything

proto is the blueprint of the object

proto is to look upward in inheritance while protype is for downwards
 */

var fun = function(){
    console.log('yeh lo fun');
};
fun.a = 3;

var obj = Object.create(fun);

function Shape (edges, faces) {
    this.edges = edges
    this.faces = faces
    var a = 10;
}
function gefs () {
    return this.edges + this.faces;
}
Shape.prototype.getEdgeFaceSum = gefs

var cube = new Shape(12,6);
var square = new Shape(4,1);

var triangle = Object.create(Shape.prototype)