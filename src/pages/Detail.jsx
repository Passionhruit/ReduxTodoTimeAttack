import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Detail() {
  const parmas = useParams();
  const navigate = useNavigate();

  const todos = useSelector((state) => state.todos);

  const data = todos.find((value) => {
    return value.id === parmas.id;
  });

  return (
    <>
      <div>
        <h2>{data.title}</h2>
        <h2>{data.note}</h2>
        <button onClick={(e) => navigate("/")}>뒤로가기</button>
      </div>
    </>
  );
}

export default Detail;
