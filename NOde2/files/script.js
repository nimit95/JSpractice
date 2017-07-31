
const fs = require('fs');
const path = require('path')
let folder = __dirname ;


fs.readdir(__dirname,function (err, files) {
    if(err) throw err;
    var dates = []
    for(var file of files){
        fs.stat(path.join(folder,file), function (err, data) {
            if(err) throw err;
           // console.log(data);
            dates.push(data.birthtime);
           
        });
    }
    console.log(dates);
});
// fs.stat(path,function(err, data){
//     if(err) throw err;
//     console.log(path);
//     console.log(data);
// });
