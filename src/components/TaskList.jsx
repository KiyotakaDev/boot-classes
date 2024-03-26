import React, { useState } from "react";

const TaskList = () => {
  const [isDeleted, setIsDeleted] = useState(false)
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    completed: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask({ title: "", description: "", completed: false });
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    setIsDeleted(true)
  };

  return (
    <div className="contain">
      <h2 className="contain-title">Task list</h2>
      <div className="w-[90%] mx-auto flex gap-x-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newTask.title}
          onChange={handleInputChange}
          className="task-inp w-2/5 input-animation"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newTask.description}
          onChange={handleInputChange}
          className="task-inp w-2/5 input-animation"
        />
        <button
          onClick={addTask}
          className="text-5xl flex justify-center input-animation w-1/5 bg-teal-900 hover:bg-teal-700"
        >
          <p>+</p>
        </button>
      </div>
      <div className="w-[90%] h-[70%] mb-10 p-4 grid grid-cols-3 mx-auto my-8 gap-8 overflow-y-scroll">
        {tasks.map((task, index) => (
          <div key={index} className="rounded-xl shadow-md shadow-teal-700 bg-slate-800" >
            <h3 className="text-2xl text-center py-2 text-teal-400">
              {task.title}
            </h3>
            <div className="mx-4 mb-4 mt-2 h-20 overflow-y-scroll flex justify-center items-center">
              <p className="text-xl">{task.description}</p>
            </div>
            <button
              onClick={() => deleteTask(index)}
              className="bg-teal-900 hover:bg-teal-700 transition-colors duration-300 w-full h-14 rounded-b-xl"
            >
              Completed
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
