
const fs = require('fs');
const path = require('path')
let folder = __dirname ;


fs.readdir(__dirname,function (err, files) {
    if(err) throw err;
    var dates = [];
   // var paddZero = Array(files.length).join('0');
    
    for(var file of files){
       // console.log(file);
        fs.stat(path.join(folder,file), function (err, data) {
            if(err) throw err;
            //console.log(data);
            var b = data.birthtimeMs;
            for(var temp of files) {

            }
            console.log(dates);
        });
    }


});
// fs.stat(path,function(err, data){
//     if(err) throw err;
//     console.log(path);
//     console.log(data);
// });
