const express = require('express');
const bp = require('body-parser');

const app = express();

const routes = {
    student: require('./routes/students'),
    teacher: require('./routes/teachers')
};

app.use(bp.json());
app.use(bp.urlencoded({extended:true}));


app.use('/new', (req, res, next)=>{
    console.log(req);
    next();
});
app.use('/students',routes.student);
app.use('/teachers', routes.teacher);

app.listen(3432, function () {
    console.log("server start at port http://localhost:" + 3432)
});
