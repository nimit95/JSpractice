


const express = require('express');

const app = express();

app.use((req, res, next)=>{
    console.log("global middleware");
    next();
});

app.use('/info', (req, res, next)=>{
   console.log("info path middleware"); next();
});

app.get('/info/1' ,(req, res, next)=>{
    res.send('/info/1');
});

app.get('/', (req, res)=>{
    console.log("get request");
   res.send("Hello");
});
app.get('/info', (req, res)=>{
    res.send("information");
});


app.use((req,res)=>{
    res.send("404 found"); // this for not found,mcalled when nothing found
});
app.listen(2345, function(){
    console.log("server start at port http://localhost:"+2345);
});