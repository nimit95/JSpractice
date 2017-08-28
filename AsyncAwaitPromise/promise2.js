let s = new Promise(
    function (resolve, reject) {
        setTimeout(resolve,1000);
    }
);


    setTimeout(function () {
        s.then(function () {
        console.log("Task completed");
    })
}, 2000);

