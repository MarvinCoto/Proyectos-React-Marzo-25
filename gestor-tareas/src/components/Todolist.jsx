import React, { useState } from "react";
import "./Todolist.css";

// Todo.jsx

const Todo = () => {
    // Estado para manejar la lista de tareas
    const [todos, setTodos] = useState([]);
    // Estado para manejar el valor del input
    const [task, setTask] = useState("");

    // Función para agregar una nueva tarea
    const addTodo = () => {
        if (task.trim() === "") return; // Evitar agregar tareas vacías
        setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
        setTask(""); // Limpiar el input
    };

    // Función para eliminar una tarea
    const deleteTodo = (id) => {
        // Filtrar las tareas y eliminar la tarea con el id específico
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };



    return (
        <div className="todo-container">
            <h1>Tareas</h1>
            <div className="todo-input">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Agregar nueva tarea..."
                />
                <button onClick={addTodo}>Add</button>
            </div>
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className={todo.completed ? "completed" : ""}>
                        <span onClick={() => toggleComplete(todo.id)}>{todo.text} <button onClick={() => deleteTodo(todo.id)} >Eliminar</button></span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;