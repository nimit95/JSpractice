
// 206, 137


const fs = require('fs');

fs.readFile(__dirname+'/quesDone.txt',function(err,data){
    if(err) throw err;
    let quesDone = JSON.parse(data);
    chooseRandom();

    writeToFile();
});
function chooseRandom(){
    for(let i=0;i<3;i++) {

    }
}
function writeToFile() {
    fs.writeFile(__dirname+'/quesDone.txt', ans, function (err) {
        if (err) throw err;

        console.log('All done!');
    });
}
