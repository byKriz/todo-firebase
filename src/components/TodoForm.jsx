import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { todoList } from "../hooks/useTodos";

export const TodoForm = () => {
  const [todo, setTodo] = useState("");

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     if (todo !== "") {
  //       await addDoc(collection(db, "todos"), {
  //         todo,
  //         completed: false,
  //       });
  //       console.log("subiendo a la bases de datos el todo");
  //       setTodo("");
  //     }
  //   };

  const handleAddTodo = () => {
    const todos = todoList;
    console.log(todos);
    // todos.push({
    //   todo,
    //   completed: false,
    // });
  };

  return (
    <form className="flex justify-between mx-4">
      <input
        className="border p-2 w-full text-xl"
        type="text"
        placeholder="creat a todo.."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="border p-4 ml-2 bg-purple-500 text-slate-100"
        onClick={handleAddTodo}
      >
        <AiOutlinePlus size={30} />
      </button>
    </form>
  );
};
