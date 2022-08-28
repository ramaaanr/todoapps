const todos = [];
const RENDER_EVENT = "render-todo";

function generateId() {
  return +new Date();
}

function generateTodoObject(id, task, timeStamp, isCompleted) {
  return {
    id,
    task,
    timeStamp,
    isCompleted,
  };
}

function addToDo() {
  const textTodo = document.getElementById("title").value;
  const timeStamp = document.getElementById("date").value;

  const generateID = generateId();
  const todoObject = generateTodoObject(generateID, textTodo, timeStamp, false);
  todos.push(todoObject);
  //   Costum event yaitu RENDER_EVENT akan diaktifkan menggunakan method dispatchEvent()
  document.dispatchEvent(new Event(RENDER_EVENT));
}

document.addEventListener("DOMContentLoaded", () => {
  console.log(todos);
  // 'DOMContentLoaded merupakan event yang aktif ketika semau elemen HTML dimuat dengan baik
  const submitForm = document.getElementById("form");
  submitForm.addEventListener("submit", (event) => {
    // preventDefault() digunakan untuk mencegah berhasilnya suatu form pada submit yang membuat file HTML keluar
    event.preventDefault();
    addToDo();
  });
});
