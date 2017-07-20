function sayHello(){
    console.log("Hello");
}

//var timeOutId = setTimeout(sayHello,5000);

function createSecondLooper(n) {
    return function() {
        for(var j=0;j<n;j++){
            console.log(j);
            setTimeout(function () {
                console.log(j);
            },0) /* this log statement doesn't run immediately bc we only have one thread so until while
                    run on main thread this does not execute even with time out= 0        */
        }
    }
}

var looper10 = createSecondLooper(10);
looper10();