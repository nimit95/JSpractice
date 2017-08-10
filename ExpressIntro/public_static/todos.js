

$(function () {


    $('#add').click(function (target) {

        let newTodo =  $('#newTodo').val();
        console.log(newTodo);
        let todoList = $('#todolist');
        AddTodo(newTodo, todoList);

    });
});

function AddTodo(newTodo,todoList) {
    $.get('/addTodo?task=' + newTodo, function (data) { // Ajax request
        todoList.empty();
        console.log(data);
        for(todo of data ) {
            todoList.append(`<li>${todo}</li>`);
        }
    });
}