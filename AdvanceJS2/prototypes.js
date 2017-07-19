
/*
__proto__ refers to the blueprint of the object from which given object is made.
 */
var obj = {
    key:'value'
};

var otherObj = Object.create(obj);
otherObj.otherKey = 12345;

var anotherObj = Object.create(otherObj);
anotherObj.someBool = false;

/*
obj
Object {key: "value"}
anotherObj
Object {someBool: false}
otherObj
Object {otherKey: 12345}
otherObj.key
"value"
delete otherObj.key
true
otherObj.key
"value"
delete otherObj.__proto__.key
true
otherObj.key
undefined
otherObj
Object {otherKey: 12345}
Object
function Object() { [native code] }
obj
Object {}
obj['key'] = 'lol'
"lol"
anotherObj.key
"lol"
 */