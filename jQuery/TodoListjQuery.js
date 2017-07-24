var todos = [];
var todoList;

function Todo(task, done) {
    this.task = task;
    this.done = !!done;
}


$(function () {
    let todoInput = $('#listItem');
    let btnAdd = $('#add');
    let btnClear = $('#clear');
    todoList = $('#list');
    retrieveArr();
    showTodo();
    btnAdd.click(function () {

        addTodo(todoInput.val());
        saveaTodo();
        retrieveArr();
        showTodo();
        todoInput.val('');
    });
});

function addTodo(todoText) {
    // console.log(todoText);
    todos.push(new Todo(todoText, false));

}

function showTodo() {
    if(todos.length===0)
        return;
        todoList.empty();
    for (var i in todos) {
        let todoItem = createTodoListItem(i, todos[i]);
        todoList.append(todoItem);
    }

}

function moveUp(ev) {
    let idx = $(ev.target).parent().parent().attr('data-id');
    let temp = todos[idx];
    todos[idx] = todos[idx-1];
    todos[idx-1] = temp;
    saveaTodo();
    retrieveArr();
    showTodo();
}
function moveDown(ev) {
    let idx = $(ev.target).parent().parent().attr('data-id');
    let temp = todos[idx];
    todos[idx] = todos[+(idx)+1];
    todos[+(idx)+1] = temp;
    saveaTodo();
    retrieveArr();
    showTodo();
}
function deleteTodo(ev) {
    let idx = $(ev.target).parent().parent().attr('data-id');
    todos.splice(idx,1);
    saveaTodo();
    retrieveArr();
    showTodo();
}
function createTodoListItem(index, todo) {
    //  console.log(todo.task);
    let todoItem = $('<li>').attr('data-id', index).attr("class", 'list-group-item');
    todoItem.append(
        $('<label>').attr('class', 'custom-control custom-checkbox').append(
            $('<input>').attr('type', 'checkbox').attr('class', 'custom-control-input').attr('checked', todo.done)
        ).append(
            $(`<span class="custom-control-indicator"></span>`)
        ).append(
            $(`<span class="custom-control-description">${todo.task}</span>`)
        )
    );
    todoItem.append($(`<div class="btn-group">`).attr('role', 'group').attr('aria-label', 'Todo text'
        ).append(
        ($(`<button id="moveUp" class="btn btn-secondary"><img src="img/ic_keyboard_arrow_up_black_18px.svg" class="img">`
        ).click(moveUp))).append($(
        `<button id="moveDown" class="btn btn-secondary"><img src="img/ic_keyboard_arrow_down_black_18px.svg" class="img">`
        ).click(moveDown)).append(($(
        `<button class="btn btn-secondary" id="delete"><img src="img/ic_close_black_18px.svg" class="img">`
        ).click(deleteTodo)))
    );
    return todoItem;
}

function saveaTodo() {
    localStorage.setItem('todolist', JSON.stringify(todos))
}
function retrieveArr() {

    let str = localStorage.getItem('todolist');
    if (str)
        todos = JSON.parse(str);
    console.log(str);
}