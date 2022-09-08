import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { todoList } from "../hooks/useTodos";

export const TodoForm = () => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleTaskInputTodo = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  return (
    <form className="flex justify-between mx-4">
      <input
        name="task"
        className="border p-2 w-full text-xl"
        type="text"
        placeholder="creat a todo.."
        value={todo}
        onChange={(e) => handleTaskInputTodo(e)}
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
