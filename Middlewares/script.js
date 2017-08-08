


const express = require('express');

const app = express();

function m1(req, res, next) {
    console.log("Middleware 1");
    next();
}

function m2(req, res, next) {
    console.log("Middleware 2");
    next();
}

function m3(req, res, next) {
    console.log("Middleware 3");
   // next();
}

app.use(m1);
app.use(m2);

app.get('/', function (req, res, next) {
    res.send('Hello world');
    next();
});



app.listen(4444, function(){
    console.log("server start at port http://localhost:"+4444)
});