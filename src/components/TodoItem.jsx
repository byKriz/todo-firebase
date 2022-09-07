import React, { useState } from "react";
import { BiTrash } from "react-icons/bi";

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 mx-4 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 mx-4 capitalize`,
  row: `flex w-full`,
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`
};

export const TodoItem = ({ text }) => {
  const [completeTodo, setCompleteTodo] = useState(false);
  return (
    <li className={completeTodo ? style.liComplete : style.li}>
      <div className={style.row}>
        <input type="checkbox" />
        <p className={completeTodo ? style.textComplete : style.text}>{text}</p>
      </div>
      <button className={style.button}>
        <BiTrash />
      </button>
    </li>
  );
};
