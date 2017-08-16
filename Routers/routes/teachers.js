const route = require('express').Router();

let teachers = [
    {name: "Rahul", age: "30"},
    {name: "Rajesh", age: "31"},
    {name: "Mohan", age: "32"},
    {name: "Mohit", age: "33"}
];

route.get('/', (req, res) => {
    res.send(teachers);
});

route.get('/:id', (req, res) => {
    res.send(teachers[req.params.id - 1])
});

module.exports = route;
