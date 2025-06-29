function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
  
    if (taskText === '') return;
  
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskText}</span>
      <div class="action-btns">
        <button onclick="toggleComplete(this)">✅</button>
        <button onclick="editTask(this)">✏️</button>
        <button onclick="deleteTask(this)">🗑️</button>
      </div>
    `;
  
    document.getElementById('taskList').appendChild(li);
    input.value = '';
  }
  
  function toggleComplete(button) {
    const li = button.closest('li');
    li.classList.toggle('completed');
  }
  
  function editTask(button) {
    const li = button.closest('li');
    const span = li.querySelector('span');
    const newText = prompt('Edit your task:', span.textContent);
    if (newText !== null) span.textContent = newText;
  }
  
  function deleteTask(button) {
    const li = button.closest('li');
    li.remove();
  }
  