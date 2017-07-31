

const fs = require('fs');
var ans;
fs.readFile(__dirname+'/num.txt',function(err,data){
    if(err) throw err;
    let input = data.toString().split(/\r?\n/ );
    ans = "";
    for(var i of input) {
        if(+i%3===0)
            ans += 'fizz';
        if(+i%5===0)
            ans+= 'buzz';
        if(+i%5!==0 && +i%3!==0)
            ans+= i;
        ans+= '\n';
    }
    writeToFile();
});

function writeToFile() {
    fs.writeFile(__dirname+'/output.txt', ans, function (err) {
        if (err) throw err;

        console.log('All done!');
    });
}
