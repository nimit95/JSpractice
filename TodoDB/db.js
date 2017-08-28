
const Sequelize = require('sequelize');

const db = new Sequelize({
    host:'localhost',
    username:'nimit',
    database:'nimitdb',
    password:'123456',
    dialect:'mysql'
});

const Todos = db.define('todos', {
    id:{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },

    task:Sequelize.DataTypes.STRING,
    done:Sequelize.DataTypes.BOOLEAN
});

db.sync({alter:true}).then(function () {
    console.log("Database is ready");
}).catch(function (err) {
    console.log(err);
});

function createTodo(todo) {
    return Todos.create(todo);
}

function readAll() {
    return Todos.findAll();
}

module.exports = {
    createTodo, readAll
};