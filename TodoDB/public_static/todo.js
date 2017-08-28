$(function () {

    let todoList = $('#todoList');
    let newTodo = $('#newTodo');
    refreshTodo();
    $('#addTodo').click(function (target) {
        console.log("click" + target);
        $.post('/todos', {
            task: newTodo.val(),
            done:false
        },function (data) {
            if(data.Success)
                refreshTodo();
        });
    });

    function refreshTodo() {
        todoList.empty();
        $.get('/todos', function (data) {
            for (todo of data) {
                todoList.append(`<li>${todo.task}</li>`);
            }
        });
    }
});

