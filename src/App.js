import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import TodoList from "./TodoList";
import Stats from "./Stats";

export const VIEW = {
  All: "ALL",
  Completed: "COMPLETED",
  Active: "ACTIVE",
};

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [view, setView] = useState(VIEW.All);

  function handleAddTasks(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  function handleClearTasks() {
    setTasks((tasks) => tasks.filter((task) => task.finished !== true));
  }

  function handleToggleTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, finished: !task.finished } : task
      )
    );
  }

  return (
    <div className="flex min-h-screen justify-center pt-20 bg-stone-100">
      <div className="flex-col justify-center gap-8">
        <Logo />
        <div className="flex-col bg-white  mt-5 shadow-gray-400 shadow-lg ">
          <Form onAddTasks={handleAddTasks} />
          <TodoList
            tasks={tasks}
            view={view}
            onDeleteTask={handleDeleteTask}
            onToggleTask={handleToggleTask}
          />
          <Stats
            tasks={tasks}
            onClearTask={handleClearTasks}
            onViewChange={setView}
          />
        </div>
      </div>
    </div>
  );
}
