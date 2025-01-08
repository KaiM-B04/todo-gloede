// document.getElementById('add').addEventListener('click', function () {
//   let inputValue = document.getElementById('to-do').value.trim();
//   if (inputValue) {
//     addTodo(inputValue);
//     saveTodoToLocalStorage(inputValue, false);
//     document.getElementById('to-do').value = ' ';
//   }
// });

// function addTodo(item, isCompleted = false) {
//   let todoList = document.getElementById('list');
//   const li = document.createElement('li');
//   li.textContent = item;

//   if (isCompleted) {
//     li.classList.add("completed");
//   }

//   let removeButton = document.createElement('button');
//   removeButton.textContent = 'Fjern';
//   removeButton.onclick = function () {
//     todoList.removeChild(li);
//   };

//   li.appendChild(removeButton);
//   li.addEventListener('click', function () {
//     li.classList.toggle('completed');
//   });

//   todoList.appendChild(li);
// };

// // local storage:

// document.addEventListener("DOMContentLoaded", function() {
//   let savedItems = JSON.parse(localStorage.getItem("items")) || [];
//   savedItems.forEach(item => addItem(item.text, item.completed));
// });

// function saveTodoToLocalStorage(item, isCompleted) {
//   const todos = JSON.parse(localStorage.getItem('todos')) || [];
//   todos.push({ text: item, completed: isCompleted});
//   localStorage.setItem('todos', JSON.stringify(todos));
// }

// ^^^^ Denne koden virker ikke fordi Kai har rotet seg bort og skrevet alt for mange forskjellige keys i en funksjon. Dette er det som skjer når læreren har 3 forskjellige notater og ikke sammenligner dem før timen begynner :D Kai er veldig lei seg for at det ble rot i systemet.


// Original kode med Local Storage som virker

document.addEventListener('DOMContentLoaded', function () {
  const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  savedTodos.forEach(item => addTodo(item.text, item.completed));
});

document.getElementById('add').addEventListener('click', function () {
  const inputValue = document.getElementById('to-do').value();
  if (inputValue) {
    addTodo(inputValue);
    saveTodoToLocalStorage(inputValue, false);
    document.getElementById('to-do').value = ''; 
  }
});

function addTodo(item, isCompleted = false) {
  const todoList = document.getElementById('list');
  const li = document.createElement('li');
  li.textContent = item;


  if (isCompleted) {
    li.classList.add('completed');
  }

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Fjern';
  removeButton.onclick = function () {
    todoList.removeChild(li);
    removeTodoFromLocalStorage(item);
  };


  li.addEventListener('click', function () {
    li.classList.toggle('completed');
    toggleTodoCompletedInLocalStorage(item);
  });

  li.appendChild(removeButton);
  todoList.appendChild(li);
}


function saveTodoToLocalStorage(item, isCompleted) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.push({ text: item, completed: isCompleted });
  localStorage.setItem('todos', JSON.stringify(todos));
}


function removeTodoFromLocalStorage(item) {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos = todos.filter(todo => todo.text !== item);
  localStorage.setItem('todos', JSON.stringify(todos));
}


function toggleTodoCompletedInLocalStorage(item) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const todo = todos.find(todo => todo.text === item);
  if (todo) {
    todo.completed = !todo.completed;
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}

// ALL CREDITS GO TO CHATGPT FOR BEING A DUMBASS