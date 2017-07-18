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
    todoItem.setAttribute("data-id", index);
    todoItem.className =  'list-group-item';

    let todoLabel = document.createElement("label");
    todoLabel.className = 'custom-control custom-checkbox';

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type','checkbox');
    checkbox.className = 'custom-control-input';
    checkbox.addEventListener('change', strikeAndSave);

    let span = document.createElement('span');
    span.className = 'custom-control-indicator';

    let todoText = document.createElement('span');
    todoText.className = 'custom-control-description';
    todoText.innerHTML = todoObj.todoText;

    let buttonGroup = document.createElement('div');
    buttonGroup.className = 'btn-group';
    buttonGroup.setAttribute('role','group');
    buttonGroup.setAttribute('aria-label','Todo text');

    let buttonUp = document.createElement('button');
    buttonUp.idName = 'moveUp';
    buttonUp.className = 'btn btn-secondary';
    buttonUp.addEventListener('click', moveUp);

    let buttonDown = document.createElement('button');
    buttonDown.idName = 'moveDown';
    buttonDown.className = 'btn btn-secondary';
    buttonDown.addEventListener('click', moveDown);


    let buttonDel = document.createElement('button');
    buttonDel.className = 'btn btn-secondary';
    buttonDel.addEventListener('click', deleteAndSave);

    let imageUp = createImageTag(document,'ic_keyboard_arrow_up_black_18px.svg');
    let imageDown = createImageTag(document,'ic_keyboard_arrow_down_black_18px.svg');
    let imageDel = createImageTag(document,'ic_close_black_18px.svg');

    if (todoObj.done) {
        todoItem.style.textDecoration = 'line-through';
        todoItem.style.color ='#999';
        checkbox.setAttribute('checked', 'true');
    }

    buttonUp.append(imageUp);
    buttonDown.append(imageDown);
    buttonDel.append(imageDel);

    todoLabel.appendChild(checkbox);
    todoLabel.appendChild(span);
    todoLabel.appendChild(todoText);

    buttonGroup.appendChild(buttonUp);
    buttonGroup.appendChild(buttonDown);
    buttonGroup.appendChild(buttonDel);

    todoItem.appendChild(todoLabel);
    todoItem.appendChild(buttonGroup);

    list.appendChild(todoItem);

  //  console.log(todoItem.children[1].children[0]);

   // console.log(todoItem.children[1].children[1]);


}
function createImageTag(document,link) {
    let image = document.createElement('img');
    image.setAttribute('src',link);
    return image;
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

    for (let index in itemArray) {
        console.log(itemArray);
        addItem(list, index, itemArray[index]);
    }
}
function addAndSave(todoText) {
    itemArr.push({
        todoText: todoText,
        done: false
    });
    saveaTodo();
}