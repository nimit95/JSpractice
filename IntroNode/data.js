var func = function () {
    console.log(this == global);
};
var func2 = () => {
    console.log(this == module.exports);
};


// func.call(global); actual func(), this take context from which it is called
console.log(module.exports === this);
func2.call(global);  //  arrow function has this as that of the place from which it is called
                    // also called lexical scope

