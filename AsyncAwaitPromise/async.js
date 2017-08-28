async function sayHello() {
    console.log("Hello");
    return "Hello";
}


function sayHello2() {
    // async does this , calls the function and gives return type back in then function
    return new Promise(function (resolve, request) {
        resolve(sayHello());
    })
}


console.log(sayHello2().then(function (data) {
        console.log(data);
    })
);