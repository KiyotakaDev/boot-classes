import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', completed: false });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask({ title: '', description: '', completed: false });
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <input
        type="text"
        name="title"
        placeholder="Título"
        value={newTask.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Descripción"
        value={newTask.description}
        onChange={handleInputChange}
      />
      <button onClick={addTask}>Agregar Tarea</button>
      {tasks.map((task, index) => (
        <div key={index}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(index)}
          />
          <button onClick={() => deleteTask(index)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;