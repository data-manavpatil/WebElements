function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
  
    if (taskInput.value.trim() !== '') {
      var listItem = document.createElement('li');
      listItem.innerHTML = `
        <span>${taskInput.value}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
      `;
      taskList.appendChild(listItem);
      taskInput.value = '';
    }
  }
  
  function deleteTask(button) {
    var listItem = button.parentNode;
    listItem.parentNode.removeChild(listItem);
  }
  