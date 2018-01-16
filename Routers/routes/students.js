const route = require('express').Router();

let students = [
    {name: "nimit", age: "15"},
    {name: "piyush", age: "17"},
    {name: "kushal", age: "18"},
    {name: "shubham", age: "20"}

];

route.get('/', (req, res) => {
    res.send(students);
});

route.get('/:id', (req, res) => {
    res.send(students[req.params.id - 1]);
});

route.post('/new',(req, res)=>{
    console.log(req.body);
    students.push({
        name: req.body.name,
        age : req.body.age
    });
    res.send({Success:"true"});
});

module.exports = route;