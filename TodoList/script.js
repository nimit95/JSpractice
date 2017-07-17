/**
 * Created by nimit on 16/7/17.
 */
var itemArr = [];
// color change and line through in done and move to last
// color change on list hover
window.onload = function () {

    let todoText = document.getElementById("listItem");
    let addBtn = document.getElementById("add");
    let list = document.getElementById("list");
    let clear = document.getElementById('clear');
    refreshtodo();
    addBtn.onclick = function () {
        if (todoText.value === "") {
            window.alert('No text');
        }
        else {
            addAndSave(todoText.value);
            refreshtodo();
            todoText.value = "";
        }
    };
    clear.onclick = function () {
        console.log('sind');
        itemArr = itemArr.filter(function (item) {
            return !item.done
        });
        saveaTodo();
        refreshtodo();
    }
};
function refreshtodo() {
    retrieveArr();
    setArrToList(list, itemArr);
}
function addItem(list, index, todoObj) {
    let todoItem = document.createElement("li");
    let data = '<label class="custom-control custom-checkbox" >' +
        '<input type="checkbox" class="custom-control-input"  ' + (todoObj.done ? 'checked' : '') + '> ' +
        '<span class="custom-control-indicator"></span>' +
        '<span class="custom-control-description">' + todoObj.todoText + '</span>' +
        '</label>'
        + `<div class="btn-group" role="group" aria-label="Basic example" class="pull-right">
        <button type="button" id="moveUp" class="btn btn-secondary"><img src="ic_keyboard_arrow_up_black_18px.svg"></button>
        <button type="button" id="moveDown" class="btn btn-secondary"><img src="ic_keyboard_arrow_down_black_18px.svg"></button>
        <button type="button"  class="btn btn-secondary"><img src="ic_close_black_18px.svg"></button>
        </div>`;

    todoItem.innerHTML = data;
    todoItem.setAttribute("data-id", index);
    todoItem.setAttribute("class", 'list-group-item');
    if (todoObj.done) {
        todoItem.style.textDecoration = 'line-through';
    }

    list.appendChild(todoItem);
    todoItem.children[0].children[0].addEventListener('click', strikeAndSave);
  //  console.log(todoItem.children[1].children[0]);
    todoItem.children[1].children[0].addEventListener('click', moveUp);
   // console.log(todoItem.children[1].children[1]);
    todoItem.children[1].children[1].addEventListener('click', moveDown);
    todoItem.children[1].children[2].addEventListener('click', deleteAndSave);
}
function moveUp(event) {
    let index = event.target.parentElement.parentElement.parentElement.getAttribute("data-id");
   // console.log('up',event.target.parentElement.parentElement.parentElement.getAttribute("data-id"));
    if(index===null)
        index = event.target.parentElement.parentElement.getAttribute("data-id");
    let temp = itemArr[index];
    if(index-1<0)
        return;
    itemArr[index] = itemArr[index-1];
    itemArr[index-1] = temp;
    console.log(index);
    saveaTodo();
    refreshtodo();
}
function moveDown(event) {
    let index = event.target.parentElement.parentElement.parentElement.getAttribute("data-id");
    // console.log('up',event.target.parentElement.parentElement.parentElement.getAttribute("data-id"));
    if(index===null)
        index = event.target.parentElement.parentElement.getAttribute("data-id");
    if(+(index)+1>=itemArr.length)
        return;
    let temp = itemArr[index];

    itemArr[index] = itemArr[+(index)+1];
    itemArr[+(index)+1] = temp;
    console.log(index);
    saveaTodo();
    refreshtodo();
}
function strikeAndSave(event) {
    let index = event.target.parentElement.parentElement.getAttribute("data-id");
    console.log('delete-' + event.target.id);

    itemArr[index].done = !(itemArr[index].done);
    
    saveaTodo();
    refreshtodo();
}
function deleteAndSave(event) {
    let index = event.target.parentElement.parentElement.parentElement.getAttribute("data-id");
    if(index===null)
        index = event.target.parentElement.parentElement.getAttribute("data-id");
    console.log('delete-' + index);
    itemArr.splice(index, 1);
    saveaTodo();
    refreshtodo();
}
function saveaTodo() {
    localStorage.setItem('todolist', JSON.stringify(itemArr))
}
function retrieveArr() {
    let str = localStorage.getItem('todolist');
    if (str)
        itemArr = JSON.parse(str);
}
function setArrToList(list, itemArray) {
    list.innerHTML = "";
    for (let index in itemArray)
        addItem(list, index, itemArray[index]);
}
function addAndSave(todoText) {
    itemArr.push({
        todoText: todoText,
        done: false
    });
    saveaTodo();
}