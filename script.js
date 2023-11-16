let todos = [
  {id: 1, text: 'Faire les courses'},
  {id: 2, text: 'Faire à manger'},
  {id: 3, text: 'Manger'}
];

function makeHTML(){
    html = '';
    todos.forEach(todo => {
        divClasses = todo.done ? 'todo done' : 'todo';
        html += `
        <div class="${divClasses}" onclick="todoDone(${todo.id})">
            <span>
              ${todo.text}
            </span>
            <span 
              class="material-icons"
              onclick="deleteTodo(${todo.id})"
            >
              &#xe92b;
            </span>
        </div>
        `;
    });

    document.querySelector('#todos').innerHTML = html
}

makeHTML()

function addTodo(){
  const text = document.querySelector("#newTodo").value
  if(text.length > 0){
    let id = 1;
    todos.forEach(todo => {
      id = Math.max(todo.id, id);
    });
    id++;
    todos.push({id: id, text: text, done: false});
    document.querySelector("#newTodo").value = '';
    makeHTML();
  }
}

function deleteTodo(id){
    todos = todos.filter(t => t.id != id);
    makeHTML();
}

function todoDone(id) {
  const todo = todos.find(t => t.id == id);
  todo.done = !todo.done;
  makeHTML();
}

document.addEventListener('keydown', function(event){
  console.log(event.keyCode);
  if(event.keyCode == 13){
    addTodo();
  }
});