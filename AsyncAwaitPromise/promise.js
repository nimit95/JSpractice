
function longTask() {

}

let p = new Promise(
    function (resolve, reject) {


        try {
            longTask();
            resolve();
        }
        catch (e) {
            //if err
            reject();
        }

        // If err
    }
);


p.then(function () {
    console.log("long task completed");
});

p.catch(function () {
   console.log("Long task did not work"); 
});