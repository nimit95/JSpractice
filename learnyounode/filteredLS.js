const fs = require('fs');

fs.readdir(process.argv[2], function (err, data) {
    if (err) throw err;
    //console.log(data);
    data.toString();
    var fil = data.filter(function (element) {

        if (element.split('.')[1] === process.argv[3])
            console.log(element);
    });
   
});
