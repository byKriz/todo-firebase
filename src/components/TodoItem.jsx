import React from "react";
import { BiTrash } from "react-icons/bi";

export const TodoItem = ({ text }) => {
  return (
    <li>
      <div>
        <input type="checkbox" />
        <p className="">{text}</p>
        <button>
          <BiTrash />
        </button>
      </div>
    </li>
  );
};
