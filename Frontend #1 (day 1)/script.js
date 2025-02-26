let todos = [] // array, menampung banyak data

function addTodo() {
    const input = document.getElementById('todoInput')
    const text = input.value.trim()

    if (text !== '') {
        const todo = {
            id: Date.now(), // menentukan tanggal hari ini..
            text: text,
            completed: false
        }

        todos.push(todo)

        renderTodos()

        input.value = ''
    }
}

function renderTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${todo.completed ? 'completed' : ''}" 
                  onclick="toggleComplete(${todo.id})">
                ${todo.text}
            </span>
        `;
        todoList.appendChild(li);
    });
}


// Push nilai Array
// todos.push("taufik")
// todos.push(123)

// = ["taufik", 123]
// array[] => ['taufik',20,'sinau koding']