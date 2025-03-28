import React, { useState } from "react";
import "./Estudiantes.css";

const Todo = () => {
    // Estado para manejar la lista de estudiantes
    const [todos, setTodos] = useState([]);
    
    // Estados para manejar los valores de los inputs
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [carnet, setCarnet] = useState("");

    // Función para agregar un nuevo estudiante
    const addTodo = () => {
        if (name.trim() === "" || age.trim() === "" || carnet.trim() === "") return; // Evitar agregar si hay campos vacíos

        // Agregar el nuevo estudiante al estado
        setTodos([...todos, 
            { 
                id: Date.now(), 
                name: name, 
                age: age, 
                carnet: carnet 
            }
        ]);

        // Limpiar los inputs
        setName("");
        setAge("");
        setCarnet("");
    };

    // Función para eliminar un estudiante
    const deleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <div className="todo-container">
            <h1>Registro de estudiantes</h1>
            <div className="todo-input">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nombre"
                /> <br />
                <input
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Edad"
                /> <br />
                <input
                    type="text"
                    value={carnet}
                    onChange={(e) => setCarnet(e.target.value)}
                    placeholder="Carnet"
                /> <br />
                <button onClick={addTodo}>Agregar</button>
            </div>
            
            <ul className="todo-list">
                <h2>Listado de estudiantes:</h2>
                {todos.map((todo) => (
                    <li key={todo.id} className="todo-item">
                        <span>Nombre: {todo.name} | Edad: {todo.age} | Carnet: {todo.carnet} <button onClick={() => deleteTodo(todo.id)} >Eliminar</button>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
