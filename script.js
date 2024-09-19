const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];

        const { name, dueDate } = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button onclick="
                deleteTodo(${i});
            " class="delete-todo-button">Delete</button> 
        `;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value.trim();

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;

    if (name === '' || dueDate === '') {
        alert('Please enter both task name and due date.');
        return;
    }

    todoList.push({
        name,
        dueDate
    });

    inputElement.value = '';

    saveToLocalStorage();
    renderTodoList();
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    saveToLocalStorage();
    renderTodoList();
}

function saveToLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}
