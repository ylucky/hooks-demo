import React, { useReducer } from "react";

//useReducer 多个操作，复杂的状态处理
export default function ReducerCom() {
  const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>reducer{state.count}</h2>
      <button onClick={() => dispatch({ type: "add" })}>jia</button>
      <button onClick={() => dispatch({ type: "decrement" })}>jian</button>
    </>
  );
}
