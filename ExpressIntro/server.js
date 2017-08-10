
const express = require('express');
const app = express();

app.get('/', function (req, res, next) {
    res.send('Hello world')
});

app.get('/name', function (req, res, next) {
    console.log(req.query);
    res.send('hello' + req.query.name);
});

app.listen(8000);