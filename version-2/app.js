//Display Todos

var todos = ['item 1','item 2','item 3']
function displayTodos() {
	console.log('My Todos list: ',todos);
}
displayTodos();

//Add Todos
function addTodo(todo){
	todos.push(todo);
	displayTodos();
}

//Change Todos
function changeTodo(position,newValue){
todos[position] = newValue;
displayTodos();
}

//Delete Todos
function deleteTodo(position){
todos.splice(position,1);
displayTodos();
}
