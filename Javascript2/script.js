/**
 * Created by nimit on 15/7/17.
 */
var mystring = "This is a string ";
console.log(mystring);
console.log(mystring.indexOf(" "));
console.log(mystring.indexOf("s"));
"use strict";
function findAll(str, char) {
    var a = [];
    var pos = str.indexOf(char);
    while(pos!==-1) {
        a = a + pos;
        pos = str.indexOf(char, pos+1);
    }
    return a;
}
console.log(findAll(mystring, "s"));
var arr = [2,3,4,56,1,5,6,9];
var min = arr.reduce(function(acc,item,index,arr){
    if(acc<item)
        return acc;
    else
        return item;
});
