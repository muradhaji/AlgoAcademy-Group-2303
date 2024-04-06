function addnewtodo() {
  let newtodo = {
    id: 763,
    content: 'Qwerty',
    completed: false,
  };

  let oldTodos = JSON.parse(localStorage.getItem('todolist'));
  oldTodos.push(newtodo);
  localStorage.setItem('todolist', JSON.stringify(oldTodos));
}

function generateHTML() {
  let todos = JSON.parse(localStorage.getItem('todolist'));
  let x = '';
  for (let i = 0; i < todos.length; i++) {
    x += `
    <div class="todo">
      <span class="status">${todos[i].completed ? '✅' : '❌'}</span>
      <span class="content">${todos[i].content}</span>
      <div class="buttons">
        <div class="edit">Edit</div>
        <div class="delete">Delete</div>
      </div>
    </div>
    `;
  }
  document.getElementById('todoContainer').innerHTML = x;
}

generateHTML();
