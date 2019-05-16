var todoList = {
    todos: [],

    //Add Todos
    addTodo: function(todoText) {

        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },

    //Change Todos
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    },

    //Delete Todos
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    },

    //Toggle completed
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        //var todo = this.todos[i];
        for (var i = 0; i < this.todos.length; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }
        if (totalTodos === completedTodos) {
            for (var i = 0; i < this.todos.length; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (var i = 0; i < this.todos.length; i++) {
                this.todos[i].completed = true;
            }
        }
    }
};
//Get access to display Todos button.
/*-----------------------------------------------------------------------

var displayTodosButton = document.getElementById('displayTodosButton');
var toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventListener('click',function(){
    todoList.displayTodos();
});

toggleAllButton.addEventListener('click',function(){
    todoList.toggleAll();
});
----------------------------------------------------------------------------*/
//Using handlers objecct for events

var handlers = {
    toggleAll:function(){
    todoList.toggleAll();
    view.displayTodos();
    },
    addTodo:function(){
    var addTodoInput =  document.getElementById('addTodoInput');
    todoList.addTodo(addTodoInput.value);
    addTodoInput.value = '';
    view.displayTodos();
    },
    changeTodo:function(){
     var todoPosition = document.getElementById('todoPosition');
     var changeTodoText = document.getElementById('changeTodoText');
     todoList.changeTodo(todoPosition.valueAsNumber,changeTodoText.value)
    todoPosition.value ='';
    changeTodoText.value = '';
    view.displayTodos();
    },
    deleteTodo:function(){
    var deletePosition =  document.getElementById('deletePosition');
    todoList.deleteTodo(deletePosition.valueAsNumber);
    deletePosition.value = '';
    view.displayTodos();
    },
    toggleTodo:function(){
        var toggleTodoPosition = document.getElementById('toggleTodoPosition');
        todoList.toggleCompleted(toggleTodoPosition.valueAsNumber);
        toggleTodoPosition.value = '';
        view.displayTodos();
    }
};
var view = {
    displayTodos:function(){
        var todosUl=document.querySelector('ul');
            todosUl.innerHTML = '';
        for(var i=0; i<todoList.todos.length;i++){
        
        var todoLi= document.createElement('li');
        var todo =todoList.todos[i];
        var todoWithCompletion ='';

        if(todo.completed===true){
            todoWithCompletion='( x )'+' '+ todo.todoText;
        }else{
             todoWithCompletion='( - )'+' '+ todo.todoText;
        }
        
        todoLi.textContent = todoWithCompletion;
        todosUl.appendChild(todoLi);
        }
    }
};
