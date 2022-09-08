import React, { useState } from "react";
import { TodoItem } from "./components/TodoItem";
import { TodoForm } from "./components/TodoForm";

const style = {};

function App() {
  const [todos, setTodos] = useState(["Lear React", "Learn Firebase"]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  return (
    <div className="h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]">
      <div className="bg-slate-100 max-w-[700px] w-full m-auto rounded-md">
        <h1 className="text-4xl font-bold text-center text-gray-800 p-2">
          Todo App
        </h1>
        <TodoForm />
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo} text={todo} />
          ))}
        </ul>
        <p className="text-center p-2">You have {todos.length} todos</p>
      </div>
    </div>
  );
}

export default App;
