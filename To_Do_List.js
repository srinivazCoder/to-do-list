const inputTask = document.getElementById('TasksInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');


//console.log(addTaskBtn)
addTaskBtn.addEventListener('click', function () {

    if (inputTask.value === "") {
        return alert('Please Enter Task');
    }

    let task = document.createElement('div');
    task.classList.add('task');


    let li = document.createElement('li');
    li.classList.add('li_list');
    li.innerHTML = `${inputTask.value}`;
    task.appendChild(li);

    let checkBtn = document.createElement("div")
    checkBtn.innerText = "✔";
    checkBtn.classList.add('checkMark');
    task.appendChild(checkBtn);

    let deletBtn = document.createElement("div")
    deletBtn.innerText = "✘";
    deletBtn.classList.add('deleteMark');
    task.appendChild(deletBtn);

    let editBtn = document.createElement("div")
    editBtn.innerText = "✎";
    editBtn.classList.add('editMark');
    task.appendChild(editBtn);

    taskList.appendChild(task);
    inputTask.value = "";

    deletBtn.addEventListener('click', function (e) {
        let target = e.target;
        target.parentElement.remove();
    });

    checkBtn.addEventListener('click', function (e) {
        let target = e.target;
        target.previousSibling.style.textDecoration = 'line-through';
    });
// while editing tasks
    editBtn.addEventListener("click", function (e) {
        let target = e.target;
        let ToEdit = target.parentElement.firstElementChild;

        let CreateInput = document.createElement("input");
        CreateInput.classList.add("editInput")
        CreateInput.value = ToEdit.innerText;
        ToEdit.innerText = "";
        ToEdit.appendChild(CreateInput);

        // updating task
        let updateBtn = document.createElement("button");
        updateBtn.innerText = "↻";
        updateBtn.classList.add('update');
        ToEdit.appendChild(updateBtn);

        updateBtn.addEventListener("click",function(e){
            let temp = CreateInput.value;
            let  target = e.target;
            target.previousSibling.remove();
            target.remove();
            li.innerText = temp;
            li.style.textDecoration = 'none';
        });

    })
})