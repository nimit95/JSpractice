
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

var todos = [];

app.get('/', function (req, res, next) {
    res.send('Hello world')
});



app.get('/name', function (req, res, next) {
    console.log(req.query);
    res.send('hello' + req.query.name);
});

/*app.get('/public', function (req, res, next) {
   res.sendFile(__dirname + '/public_static/index.html');
});*/

app.use('/public', express.static(__dirname + '/public_static'));

app.get('/addTodo', function (req, res, next) {
    fs.appendFile(__dirname + '/data/data' ,req.query.task+'\n', function (err) {
        if (err) throw err;
        fs.readFile(__dirname + '/data/data',function (err,data) {
            if (err) throw err ;
             todos = data.toString().split('\n');
             todos.splice(-1, 1);
             console.log(todos);
             res.send(todos);
        });
    });


});

app.listen(8000);