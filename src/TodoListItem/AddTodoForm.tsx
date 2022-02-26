import React, { useState } from "react";
import { AddTodo } from "../types";
interface Props {
  addTodo: AddTodo;
}
export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState<string>("");
  return (
    <>
      <form>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            addTodo(text);
            setText("");
          }}
        >
          Add Todo
        </button>
      </form>
    </>
  );
};
