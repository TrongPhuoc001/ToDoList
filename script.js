const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".submit-btn");
const todoList = document.querySelector(".todo-list");
const filterOptions = document.querySelector(".filter-todo");

todoButton.addEventListener("click",addTodo);
todoList.addEventListener('click',deletecheck);
filterOptions.addEventListener("click",filterTodo);

function addTodo(event){
    event.preventDefault();
    
    if(todoInput.value!=''){
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const newTodo = document.createElement('li');
        newTodo.innerText=todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        const checkedButton = document.createElement('button');
        checkedButton.innerHTML='<i class="far fa-check-circle"></i>';
        checkedButton.classList.add('checked-btn');
        todoDiv.appendChild(checkedButton);

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML='<i class="fas fa-trash"></i>';
        deleteButton.classList.add('delete-btn');
        todoDiv.appendChild(deleteButton);

        todoList.appendChild(todoDiv);
        todoInput.value='';
    }
}

function deletecheck(e){
    const item = e.target;
    console.log(item);
    if(item.classList[0]==='delete-btn'){
        item.parentElement.classList.add("disapear");
        item.parentElement.addEventListener('transitionend',function(){
            item.parentElement.remove();
        });
    }

    if(item.classList[0]==='checked-btn'){
        item.parentElement.classList.add('checked');
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "have done":
                if(todo.classList.contains("checked")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
            case "not done yet":
                if(!todo.classList.contains("checked")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
                break;
        }
    });
}