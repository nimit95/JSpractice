const express = require('express');
const bp = require('body-parser');
const Todos = require('./db');

const app = express();

app.use('/', express.static(__dirname + '/public_static'));
app.use(bp.urlencoded({extended: true}));
app.use(bp.json());

app.get('/todos', (req, res, next) => {
    Todos.readAll().then(function (todos) {
        res.send(todos);
    }).catch(function (err) {
        console.log("Error");
    })
});

app.post('/todos', (req, res, next) => {
    console.log(req.body);
    Todos.createTodo({
        task: req.body.task
    }).then(function () {
        res.send({Success: true});
    }).catch(function (err) {
        console.log(err);
    });
});

app.listen(5324, function () {
    console.log("server start at port http://localhost:" + 5324)
});

