function doSomething(done){
    console.log("doing");
    done(function(reallyAfterDone){
        console.log("after done");
        reallyAfterDone(function () {
            console.log("are you sure" );
        });
    });
}
doSomething(function (afterDone) {
    console.log("done");
    afterDone(function (areYouSure) {
        console.log("really after done");
        areYouSure();
    });
});