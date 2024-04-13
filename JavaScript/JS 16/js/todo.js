function addnewtodo() {
  let input = document.getElementById('todoContent');

  let todos = JSON.parse(localStorage.getItem('todolist') || '[]');
  let maxId = 0;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id > maxId) {
      maxId = todos[i].id;
    }
  }

  let newtodo = {
    id: maxId + 1,
    content: input.value,
    completed: false,
  };

  todos.push(newtodo);

  localStorage.setItem('todolist', JSON.stringify(todos));
  input.value = '';
  renderHTML();
}

function renderHTML() {
  let todos = JSON.parse(localStorage.getItem('todolist') || '[]');
  let x = '';
  for (let i = 0; i < todos.length; i++) {
    x += `
    <div class="todo">
      <span class="status" onclick="toggleTodo(${todos[i].id})">${
      todos[i].completed ? '✅' : '❌'
    }</span>
      <span class="content" >
        <span id="content${todos[i].id}">${todos[i].content}</span>
        <input id="input${todos[i].id}" type="text" style="display: none;">
      </span>  
      <div class="buttons">
        <div class="edit" id="edit${todos[i].id}" onclick="editTodo(${
      todos[i].id
    })">Edit</div>
        <div class="save" id="save${todos[i].id}" onclick="saveTodo(${
      todos[i].id
    })">Save</div>
        <div class="delete" onclick="deleteTodo(${todos[i].id})">Delete</div>
      </div>
    </div>
    `;
  }
  document.getElementById('todoContainer').innerHTML = x;
}

function deleteTodo(deleteId) {
  let todos = JSON.parse(localStorage.getItem('todolist') || '[]');
  let newTodos = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id != deleteId) {
      newTodos.push(todos[i]);
    }
  }

  localStorage.setItem('todolist', JSON.stringify(newTodos));
  renderHTML();
}

function toggleTodo(toggleId) {
  let todos = JSON.parse(localStorage.getItem('todolist') || '[]');
  let newTodos = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == toggleId) {
      let editedTodo = {
        id: todos[i].id,
        content: todos[i].content,
        completed: !todos[i].completed,
      };
      newTodos.push(editedTodo);
    } else {
      newTodos.push(todos[i]);
    }
  }

  localStorage.setItem('todolist', JSON.stringify(newTodos));
  renderHTML();
}

function editTodo(editId) {
  let todos = JSON.parse(localStorage.getItem('todolist') || '[]');

  let content = document.getElementById(`content${editId}`);
  let input = document.getElementById(`input${editId}`);
  let edit = document.getElementById(`edit${editId}`);
  let save = document.getElementById(`save${editId}`);

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == editId) {
      input.value = todos[i].content;
    }
  }

  content.style.display = 'none';
  input.style.display = 'block';
  edit.style.display = 'none';
  save.style.display = 'block';
}

function saveTodo(saveId) {
  let input = document.getElementById(`input${saveId}`);

  let todos = JSON.parse(localStorage.getItem('todolist') || '[]');
  let newTodos = [];

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id == saveId) {
      let editedTodo = {
        id: todos[i].id,
        content: input.value,
        completed: todos[i].completed,
      };
      newTodos.push(editedTodo);
    } else {
      newTodos.push(todos[i]);
    }
  }

  localStorage.setItem('todolist', JSON.stringify(newTodos));
  renderHTML();
}

renderHTML();
