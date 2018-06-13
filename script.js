let todoList = {
    //Empty array
    todos: [],
    //It should have a function to add todos.
    addTodo: function(todoText) {
        //push todo with two parameters - todoText and completed.
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },
    //It should have a function to change todos.
    changeTodo: function(position, todoText) {
        //Position - which todo we want to change, todoText - new text.
        this.todos[position].todoText = todoText;
    },
    //It should have a function to delete todos.
    deleteTodo: function(position) {
        //1 - because we want to change 1 todo.
        this.todos.splice(position, 1);
    },
    //Mark todo as completed
    toggleCompleted: function(position) {
        let todo = this.todos[position];
        todo.completed = !todo.completed;
    },

    // Mark all todos as completed/uncompleted.
    toggleAll: function () {
        let totalTodos = this.todos.length;
        let completedTodos = 0;

        // Get number of comppleted todos.
        for (let i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }

        // Case 1: If everything's true, make everything false.
        if (completedTodos === totalTodos) {
            // make everything false.
            for (let i=0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        } 
        //Case 2: Otherwise, make everything true.
        else {
            // make everything true.
            for (let i=0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }
    }
};



let handlers = {
    addTodo: function() {
        //find text input
        let addTodoTextInput = document.getElementById("addTodoTextInput");
        //add todoList method to add todo input
        todoList.addTodo(addTodoTextInput.value);
        //delete input value
        addTodoTextInput.value = "";
        //display todos
        view.displayTodos();
    },
    changeTodo: function() {
        let changeTodoPositionInput = document.getElementById("changeTodoPositionInput");
        let changeTodoTextInput = document.getElementById("changeTodoTextInput");
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = "";
        changeTodoTextInput.value = "";
        view.displayTodos();
    },
    deleteTodo: function() {
        let deleteTodoPositionInput = document.getElementById("deleteTodoPositionInput");
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = "";
        view.displayTodos();
    },
    toggleCompleted: function() {
        let toggleCompletedPositionInput = document.getElementById("toggleCompletedPositionInput");
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = "";
        view.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    }
}

//display todos function
let view = {
    displayTodos: function() {
        let todosUl = document.querySelector("ul");
        todosUl.innerHTML = "";
        for (let i = 0; i < todoList.todos.length; i++) {
            let todoLi = document.createElement("li");
            let todo = todoList.todos[i];
            let todoTextWithCompletion = "";

            if (todo.completed === true) {
                todoTextWithCompletion = "(x) " + todo.todoText;
            } else {
                todoTextWithCompletion = "( ) " + todo.todoText;
            }

            todoLi.textContent = todoTextWithCompletion;
            todosUl.appendChild(todoLi);
        }
    }
}