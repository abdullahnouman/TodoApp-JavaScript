var todoList = {
    todos: [],

    //Display Todos
    displayTodos: function() {
        console.log('My Todos:');
        if (this.todos.length === 0) {
            console.log("Your todo list is empty...");
        } else {

            for (var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === false) {
                    console.log('( ) ', this.todos[i].todoText);
                } else {
                    console.log('(x) ', this.todos[i].todoText);
                }
            }
        }
    },

    //Add Todos
    addTodo: function(todoText) {

        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodos();
    },

    //Change Todos
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },

    //Delete Todos
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },

    //Toggle completed
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
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
        this.displayTodos();
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
//Using handlers object for events

var handlers = {
    displayTodos:function(){
    todoList.displayTodos();
    },
    toggleAll:function(){
    todoList.toggleAll();
    },
    addTodo:function(){
    var addTodoInput =  document.getElementById('addTodoInput');
    todoList.addTodo(addTodoInput.value);
    addTodoInput.value = '';
    },
    changeTodo:function(){
     var todoPosition = document.getElementById('todoPosition');
     var changeTodoText = document.getElementById('changeTodoText');
     todoList.changeTodo(todoPosition.valueAsNumber,changeTodoText.value)
    todoPosition.value ='';
    changeTodoText.value = '';
    },
    deleteTodo:function(){
    var deletePosition =  document.getElementById('deletePosition');
    todoList.deleteTodo(deletePosition.valueAsNumber);
    deletePosition.value = '';
    },
    toggleTodo:function(){
        var toggleTodoPosition = document.getElementById('toggleTodoPosition');
        todoList.toggleCompleted(toggleTodoPosition.valueAsNumber);
        toggleTodoPosition.value = '';
    }
}
