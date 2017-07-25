
const path = require('path');
const fs = require('fs');


console.log('Directory Name');
console.log(__dirname);

console.log(path.join(__dirname,'..'));

fs.readdir(__dirname, function(err, files){
    if(err) throw err ;
    console.log(files);
});

console.log();