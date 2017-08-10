

$(function () {


    $('#add').click(function (target) {

        let newTodo =  $('#newTodo').val();
        console.log(newTodo);
        todoList = $('#todolist');
        
        $.get('/addTodo?task=' + newTodo, function (data) { // Ajax request
            todoList.empty();
            for(todo of data ) {
                todoList.append(`<li>${todo}</li>`);
            }
        });
    });
});