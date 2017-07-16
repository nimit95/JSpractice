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
function addItem(list, index, todoText) {
    var text = todoText;
    var todoItem = document.createElement("li");
    todoItem.innerHTML = text;
    todoItem.setAttribute("data-id",index);
    list.appendChild(todoItem);
    todoItem.addEventListener('click',deleteAndSave);
}
function deleteAndSave(event) {
    var index = event.target.getAttribute("data-id");
    console.log('delete-' + index);
    itemArr.splice(index,1);
    localStorage.setItem('todolist', itemArr.join(','));
    refreshtodo();
}
function retrieveArr() {
    var str = localStorage.getItem('todolist');
    if(str)
        itemArr = str.split(',');
}
function setArrToList(list,itemArray) {
    list.innerHTML = "";
    for(var index in itemArray)
        addItem(list, index,itemArray[index]);
}
function addAndSave(todoText) {
    itemArr.push(todoText);
    localStorage.setItem('todolist', itemArr.join(','))
}