import { VIEW } from "./App";

export default function Stats({ tasks, task, onClearTask, onViewChange }) {
  if (!tasks.length) return;

  const numTasks = tasks.length;
  const numFinished = tasks.filter((task) => task.finished).length;
  const updatedTasks = numTasks - numFinished;

  return (
    <div className="flex justify-start gap-2 text-sm text-stone-500 mt-3 ">
      <p className="px-4 mb-2">
        {tasks.length > 1
          ? `${updatedTasks} items left`
          : `${updatedTasks} item left`}
      </p>
      <div className="flex gap-6 px-12 mb-2 focus:outline-none">
        <button
          className="focus:ring-1 ring-offset-2 focus:ring-red-200 focus:outline-none"
          onClick={() => {
            onViewChange(VIEW.All);
          }}
        >
          All
        </button>
        <button
          className="focus:ring-1 ring-offset-2 focus:ring-red-200 focus:outline-none"
          onClick={() => {
            onViewChange(VIEW.Completed);
          }}
        >
          Completed
        </button>
        <button
          className="focus:ring-1 ring-offset-2 focus:ring-red-200  "
          onClick={() => {
            onViewChange(VIEW.Active);
          }}
        >
          Active
        </button>
      </div>

      <div className=" flex hover:underline mb-2">
        {!numFinished === false ? (
          <button onClick={() => onClearTask()}>Clear Completed</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
