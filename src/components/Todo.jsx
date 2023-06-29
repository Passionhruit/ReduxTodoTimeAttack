import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteTodo } from "../redux/modules/todos";
import { moveTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const StDiv = styled.div`
  border: 1px solid black;
  margin: 0 auto 20px auto;
  border-radius: 10px;
  background-color: #d4f2fc;
  width: 300px;
`;

function Todo() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <div>
      {" "}
      <div>
        <h2>🔥 workingList 🔥</h2>
        {todos
          .filter((todo) => !todo.isDone)
          .map((todo) => {
            return (
              <StDiv>
                <h2>{todo.title}</h2>
                <p>{todo.note}</p>
                <button onClick={(e) => dispatch(deleteTodo(todo.id))}>
                  삭제
                </button>
                <button onClick={(e) => dispatch(moveTodo(todo.id))}>
                  완료
                </button>
                <Link to={`/details/${todo.id}`}>상세페이지</Link>
              </StDiv>
            );
          })}
      </div>
      <div>
        <h2>🎉 doneList 🎉</h2>
        {todos
          .filter((todo) => todo.isDone)
          .map((todo) => {
            return (
              <StDiv>
                <h2>{todo.title}</h2>
                <p>{todo.note}</p>
                <button onClick={(e) => dispatch(deleteTodo(todo.id))}>
                  삭제
                </button>
                <button onClick={(e) => dispatch(moveTodo(todo.id))}>
                  취소
                </button>
                <Link to={`/details/${todo.id}`}>상세페이지</Link>
              </StDiv>
            );
          })}
      </div>
    </div>
  );
}

export default Todo;
