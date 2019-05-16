var todoList = {
todos:['item 1','item 2','item 3'],

//Display Todos
displayTodos:function(){
console.log('My Todos: ',this.todos);
	},

//Add Todos
addTodo:function(todo){
this.todos.push(todo);
this.displayTodos();
},

//Change Todos
changeTodo:function(position,todo){
this.todos[position]=todo;
this.displayTodos();
},

//Delete Todos
deleteTodo:function(position){
this.todos.splice(position,1);
this.displayTodos();
}
};
