
const express = require('express');
const app = express();
const path = require('path');

todos = [];

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
    todos.push(req.query.task);
    res.send(todos);
});

app.listen(8000);