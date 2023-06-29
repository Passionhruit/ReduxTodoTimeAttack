import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";

function Form() {
  const [title, setTitie] = useState("");
  const [note, setNote] = useState("");

  const dispatch = useDispatch();
  return (
    <form>
      제목 :{" "}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitie(e.target.value)}
      />
      내용 :{" "}
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button
        onClick={(e) => {
          dispatch(addTodo(title, note));
          e.preventDefault();
        }}
      >
        등록
      </button>
    </form>
  );
}

export default Form;
