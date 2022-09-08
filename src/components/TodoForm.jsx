import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { v4 as uuid } from "uuid";

export const TodoForm = () => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleTaskInputTodo = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // evita que el navegador se refresque
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid.v4() });
      // reiniciando estado del todo
      setTodo({ ...todo, task: "" });
    }
  };

  return (
    <form className="flex justify-between mx-4" onSubmit={handleSubmit}>
      <input
        name="task"
        className="border p-2 w-full text-xl"
        type="text"
        placeholder="creat a todo.."
        value={todo.task}
        onChange={handleTaskInputTodo}
      />
      <button
        className="border p-4 ml-2 bg-purple-500 text-slate-100"
        onClick={handleTaskInputTodo}
      >
        <AiOutlinePlus size={30} />
      </button>
    </form>
  );
};
