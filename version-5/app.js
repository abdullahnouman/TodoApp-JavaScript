var todoList = {
todos:[],

//Display Todos
displayTodos:function(){
console.log('My Todos:');
//If there isn't any todo
if(this.todos.length===0){
console.log("Your todo list is empty...");
} else{

for(var i=0; i<this.todos.length;i++){
console.log(this.todos[i].todoText);
}
}	},

//Add Todos
addTodo:function(todoText){
this.todos.push({
todoText:todoText,
completed:false
});
this.displayTodos();
},

//Change Todos
changeTodo:function(position,todoText){
this.todos[position].todoText = todoText;
this.displayTodos();
},

//Delete Todos
deleteTodo:function(position){
this.todos.splice(position,1);
this.displayTodos();
},

//Toggle completed
toggleCompleted:function(position){
var todo = this.todos[position];
todo.completed = !todo.completed;
this.displayTodos();
}
};
