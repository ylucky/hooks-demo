import React, { useContext, useState } from "react";
const themtColor = React.createContext("#000");

const Child = (props) => {
  const { name } = props;
  return <div>{name}</div>;
};
const Parent = (props) => {
  const { ...pre } = props;
  console.log("Parent children", pre);
  return (
    <div>
      <Child name={pre.name} />
    </div>
  );
};

const Child1 = () => {
  //方法case1:
  // const color  = useContext(themtColor);
  //return <div>Child1{color}</div>;

  //方法case2:
  return (
    <themtColor.Consumer>
      {(value) => <div>Child1{value}</div>}
    </themtColor.Consumer>
  );
};
const Parent1 = () => {
  return (
    <div>
      <Child1 />
    </div>
  );
};

//useReducer 多个操作，复杂的状态处理
export default function ContextCom() {
  const [bgcolor, setcolor] = useState("#000");
  const [bgcolor1, setcolor1] = useState("#000");
  return (
    <>
      <h2>ContextCom</h2>
      1。版本1 一个一个props传递
      <button onClick={() => setcolor("#f30")}>变色</button>
      <Parent name={bgcolor} />
      2.context
      <input type="color" onChange={(e) => setcolor1(e.target.value)} />
      <themtColor.Provider value={bgcolor1}>
        <Parent1 />
      </themtColor.Provider>
    </>
  );
}
