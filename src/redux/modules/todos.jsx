import uuid from "react-uuid";

// action value

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const MOVE_TODO = "MOVE_TODO";

// action creator

export const addTodo = (title, note) => {
  return {
    type: ADD_TODO,
    payload: {
      id: uuid(),
      title,
      note,
      isDone: false,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const moveTodo = (id) => {
  return {
    type: MOVE_TODO,
    payload: id,
  };
};

// initialState

const initialState = [
  {
    id: uuid(),
    title: "리액트1",
    note: "리액트 공부하기1",
    isDone: false,
  },
  {
    id: uuid(),
    title: "리액트2",
    note: "리액트 공부하기2",
    isDone: true,
  },
  {
    id: uuid(),
    title: "리액트3",
    note: "리액트 공부하기3",
    isDone: false,
  },
  {
    id: uuid(),
    title: "리액트4",
    note: "리액트 공부하기4",
    isDone: true,
  },
];

// reducer

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case MOVE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export default todos;
