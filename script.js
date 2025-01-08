document.getElementById('add').addEventListener('click', function () {
  let inputValue = document.getElementById('to-do').value;
  if (inputValue) {
    addTodo(inputValue);
    document.getElementById('to-do').value = ' ';
  }
});

function addTodo(task) {
  let todoList = document.getElementById('list');
  let li = document.createElement('li');
  li.textContent = task;

  let removeButton = document.createElement('button');
  removeButton.textContent = 'Fjern';
  removeButton.onClick = function () {
    todoList.removeChild(li);
  };

  li.appendChild(removeButton);
  li.addEventListener('click', function () {
    li.classList.toggle('completed');
  });

  todoList.appendChild(li);
}
