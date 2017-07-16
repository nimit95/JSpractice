/**
 * Created by nimit on 16/7/17.
 */
var itemArr = [];
window.onload = function () {

    var todoText = document.getElementById("listItem");
    var addBtn = document.getElementById("add");
    var list = document.getElementById("list");
    refreshtodo();
    addBtn.onclick = function () {

      addAndSave(todoText.value);
      refreshtodo();
    };

};
function refreshtodo(){
    retrieveArr();
    setArrToList(list,itemArr);
}
function addItem(list, index, todoObj) {
    var todoItem = document.createElement("li");
    todoItem.innerHTML = todoObj.todoText;
    todoItem.setAttribute("data-id",index);
    if(todoObj.done) {
        todoItem.style.textDecoration = 'line-through';
    }
    list.appendChild(todoItem);
    todoItem.addEventListener('click',strikeAndSave );
}
function strikeAndSave(event) {
    var index = event.target.getAttribute("data-id");
    console.log('delete-' + index);
    itemArr[index].done = !itemArr[index].done ;
    saveaTodo();
    refreshtodo();
}
function deleteAndSave(event) {
    var index = event.target.getAttribute("data-id");
    console.log('delete-' + index);
    itemArr.splice(index,1);
    saveaTodo();
    refreshtodo();
}
function saveaTodo(){
    localStorage.setItem('todolist', JSON.stringify(itemArr))
}
function retrieveArr() {
    var str = localStorage.getItem('todolist');
    if(str)
        itemArr = JSON.parse(str);
}
function setArrToList(list,itemArray) {
    list.innerHTML = "";
    for(var index in itemArray)
        addItem(list, index,itemArray[index]);
}
function addAndSave(todoText) {
    itemArr.push({
        todoText:todoText,
        done:false
    });
    saveaTodo();
}