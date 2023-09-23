import { useState } from "react";

export default function Form({ onAddTasks }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newTask = { description, finished: false, id: Date.now() };

    onAddTasks(newTask);
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className=" h-[60px] w-[530px] focus:ring-0 border-0 px-14 mt-1 text-2xl placeholder-gray-800 placeholder-opacity-20 font-task font-semibold opacity-70 placeholder:italic"
        placeholder="What needs to be done?"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
    </form>
  );
}
