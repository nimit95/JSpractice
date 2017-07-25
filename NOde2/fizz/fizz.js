

const fs = require('fs');

fs.readFile(__dirname+'/num.txt',function(err,data){
    if(err) throw err;
    let input = data.toString().split('\n');
    var ans = "";
    for(var i of input) {
        if(+i%3===0)
            ans += 'fizz';
        if(+i%5===0)
            ans+= 'buzz';
        if(+i%5!==0 && +i%3!==0)
            ans+= i;
        ans+= '\n';
    }
    console.log(ans);
});