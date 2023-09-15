import { useState } from "react";

const initialItems = [
  {
    id: 1,
    description: "kali",
    finished: true,
  },
  {
    id: 2,
    description: "soundarya",
    finished: false,
  },
];

export default function App() {
  return (
    <div>
      <Header />
      <Form />
      <TodoList />
      <Stats />
    </div>
  );
}

function Header() {
  return <header>todos</header>;
}

function Form() {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, finished: false, id: Date.now() };
    console.log(newItem);

    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button>\/</button>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
    </form>
  );
}

function TodoList() {
  return (
    <ul>
      {initialItems.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  return (
    <>
      <li>
        <span style={item.finished ? { textDecoration: "line-through" } : {}}>
          {item.description}
        </span>
        <button>&times;</button>
      </li>
    </>
  );
}

function Stats() {
  return (
    <div>
      <p> X item left</p>
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  );
}
