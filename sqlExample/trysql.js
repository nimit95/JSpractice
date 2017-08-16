const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'nimit',
    database: 'nimitdb',
    password:'123456'
});


/*
connection.query(
    'SELECT * FROM courses', (err, results, fields) => {
        if(err) throw err;
        console.log(results);
        console.log(fields);
    }
);*/

connection.query(
    `INSERT INTO courses(name) VALUES('crux');`,
    function (err, results, fields) {
        if(err) throw err;
        console.log(results);
        console.log(fields);
    }
);