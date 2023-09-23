import { VIEW } from "./App";

export default function TodoList({ tasks, onDeleteTask, onToggleTask, view }) {
  return (
    <ul className="flex flex-col divide-y divide-gray-300 gap-1 mt-1 text-xl border-t-2 border-b-2 mb-5 border-gray-200  ">
      {tasks
        .filter((task) => {
          if (view === VIEW.Completed) {
            return task.finished;
          }

          if (view === VIEW.Active) {
            return !task.finished;
          }

          return true;
        })
        .map((task) => (
          <Task
            task={task}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
            key={task.id}
          />
        ))}
    </ul>
  );
}

function Task({ task, onDeleteTask, onToggleTask }) {
  return (
    <li className=" flex justify-between items-center  font-task font-semibold opacity-70  text-2xl tracking-wide group/item mb-2">
      <div className="flex px-3 mt-3 mb-2 ">
        <input
          type="checkbox"
          className=" h-8 w-8 mt-1 rounded-full border-gray-300 text-green-300  focus:ring-0"
          value={task.finished}
          onChange={() => onToggleTask(task.id)}
        />

        <div className="px-5 ">
          <span className={task.finished ? "line-through opacity-25 " : {}}>
            {task.description}
          </span>
        </div>
      </div>
      <div className="invisible group-hover/item:visible">
        <button
          onClick={() => onDeleteTask(task.id)}
          className="text-3xl text-red-400 px-6 mt-1 hover:text-red-700"
        >
          &times;
        </button>
      </div>
    </li>
  );
}
